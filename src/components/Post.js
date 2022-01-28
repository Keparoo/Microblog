import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
	getPostFromAPI,
	updatePostInAPI,
	removePostFromAPI
} from '../actions/posts';

const Post = () => {
	console.debug('Post');

	const [ isEditing, setIsEditing ] = useState(false);
	const postId = Number(useParams().postId);
	console.log('postId', postId);
	const history = useHistory();
	const post = useSelector((st) => st.posts[postId]);
	console.log('Post at top', post);
	const dispatch = useDispatch();

	// const post = {
	// 	title: 'Test',
	// 	description: 'This is a test',
	// 	body:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	// };

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

	const toggleEdit = () => {
		setIsEditing((edit) => !edit);
	};

	const deletePost = () => {
		//remove post from API
		history.push('/');
	};

	// Edit post
	const edit = () => {
		return;
	};

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
				/>
			)}
		</div>
	);
};

export default Post;
