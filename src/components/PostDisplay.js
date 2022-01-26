import React from 'react';
import './PostDisplay.css';

const PostDisplay = ({ post, toggleEdit, deletePost }) => {
	console.debug('PostDisplay');

	const { title, description, body } = post;

	return (
		<div className="PostDisplay">
			<div>
				<h2>Post Display</h2>
				<h2>{title}</h2>
				<p>
					<em>{description}</em>
				</p>
				<div>{body}</div>
			</div>
			<div className="PostDisplay-right">
				<div className="PostDisplay-edit-area">
					<i className="fas fa-edit text-primary" onClick={toggleEdit} />
					<i className="fas fa-times text-danger" onClick={deletePost} />
				</div>
			</div>
		</div>
	);
};

export default PostDisplay;
