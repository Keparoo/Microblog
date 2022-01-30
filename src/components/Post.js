import React, { useEffect, useState } from 'react';
import './Post.css';

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

/* Render a blog post

    If post not rendered yet, get post data from the API
    Handle edit state for post (toggleEdit handles the state)
    Handle submission of edit form
    Handle add comment form submission
    Handle delete comment icon clicked
    Handle deletion of post
*/

const Post = () => {
	console.debug('Post');

	const [ isEditing, setIsEditing ] = useState(false);
	const postId = Number(useParams().postId);
	const history = useHistory();
	const post = useSelector((state) => state.posts[postId]);
	const dispatch = useDispatch();

	// If post not loaded, request data from API
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

	// Toggle the edit state
	const toggleEdit = () => {
		setIsEditing((edit) => !edit);
	};

	// Handle deletion of post: Delete from API backend, redirect to '/'
	const deletePost = () => {
		dispatch(deletePostFromAPI(postId));
		history.push('/');
	};

	// Handle editing of post: Update API backend
	const edit = ({ title, description, body }) => {
		dispatch(updatePostInAPI(postId, title, description, body));
		toggleEdit();
	};

	// Handle adding a comment: Update API backend
	function addComment(text) {
		console.debug('addComment', text);
		dispatch(addCommentToAPI(postId, text));
	}

	// Handle deleting a comment: Update API backend
	function deleteComment(commentId) {
		dispatch(deleteCommentFromAPI(postId, commentId));
	}

	// Handle voting up or down of post: Update API backend
	function vote(direction) {
		dispatch(sendVoteToAPI(postId, direction));
	}

	/* If Post is not rendered yet, show loading message
      If isEditing is true, render the edit form and comments
      If isEditing is false, render the post and comments
  */

	if (!post) return <p>Loading...</p>;

	return (
		<div className="Post">
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
