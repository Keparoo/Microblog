import React from 'react';
import './PostDisplay.css';

const PostDisplay = (post) => {
	console.debug('PostDisplay');

	const { title, description, body } = post;

	return (
		<div className="Post">
			<div>
				<h2>{title}</h2>
				<p>
					<em>{description}</em>
				</p>
				<div>{body}</div>
			</div>
		</div>
	);
};

export default PostDisplay;
