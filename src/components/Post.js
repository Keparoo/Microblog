import React, { useState } from 'react';
import PostForm from './PostForm';
import PostDisplay from './PostDisplay';
import { useParams, useHistory } from 'react-router-dom';

const Post = () => {
	console.debug('Post');

	const [ isEditing, setIsEditing ] = useState(false);
	const history = useHistory();
	const post = '';

	const toggleEdit = () => {
		setIsEditing((edit) => !edit);
	};

	// Edit post
	const edit = () => {
		return;
	};

	return (
		<div className="Post">
			{isEditing ? (
				<PostForm post={post} save={edit} cancel={toggleEdit} />
			) : (
				<PostDisplay />
			)}
		</div>
	);
};

export default Post;
