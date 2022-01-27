import React, { useState } from 'react';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import { useParams, useHistory } from 'react-router-dom';

const Post = () => {
	console.debug('Post');

	const [ isEditing, setIsEditing ] = useState(false);
	const history = useHistory();
	const post = {
		title: 'Test',
		description: 'This is a test',
		body:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	};

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
