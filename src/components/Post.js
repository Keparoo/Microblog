import React from 'react';
import './Post.css';

const Post = (post) => {
	console.debug('Post');

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

export default Post;
