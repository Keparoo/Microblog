import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	getPostFromAPI,
	updatePostInAPI,
	deletePostFromAPI,
	addCommentToAPI,
	deleteCommentFromAPI,
	sendVoteToAPI
} from '../actions/posts';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const Post = () => {
	console.debug('Post');

	const [ isEditing, setIsEditing ] = useState(false);
	const postId = Number(useParams().postId);
	const history = useHistory();
	const post = useSelector((st) => st.posts[postId]);
	const dispatch = useDispatch();

	useEffect(
		function loadPostWhenPostOrIdChanges() {
			console.debug('loadPostWhenPostOrIdChanges');

			async function getPost() {
				dispatch(getPostFromAPI(postId));
			}
			if (!post) {
				getPost();
			}
		},
		[ dispatch, postId, post ]
	);
	console.log(post);

	const toggleEdit = () => {
		setIsEditing((edit) => !edit);
	};

	const deletePost = () => {
		dispatch(deletePostFromAPI(postId));
		history.push('/');
	};

	// Edit post
	const edit = ({ title, description, body }) => {
		dispatch(updatePostInAPI(postId, title, description, body));
		toggleEdit();
	};

	function addComment(text) {
		console.debug('addComment', text);
		dispatch(addCommentToAPI(postId, text));
	}

	function deleteComment(commentId) {
		dispatch(deleteCommentFromAPI(postId, commentId));
	}

	function vote(direction) {
		dispatch(sendVoteToAPI(postId, direction));
	}

	if (!post) return <p>Loading</p>;

	return (
		<div className="Post">
			<h1>Post</h1>
			{isEditing ? (
				<PostForm post={post} save={edit} cancel={toggleEdit} />
			) : (
				<PostDisplay
					post={post}
					toggleEdit={toggleEdit}
					deletePost={deletePost}
					castVote={vote}
				/>
			)}
			<section className="Post-comments mb-4">
				<h4>Comments</h4>
				<CommentList comments={post.comments} deleteComment={deleteComment} />
				<CommentForm submitCommentForm={addComment} />
			</section>
		</div>
	);
};

export default Post;
