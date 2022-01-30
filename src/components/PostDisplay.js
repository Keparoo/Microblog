import React from 'react';
import './PostDisplay.css';

const PostDisplay = ({ post, toggleEdit, deletePost, castVote }) => {
	console.debug('PostDisplay');

	const { title, description, body, votes } = post;

	return (
		<div className="PostDisplay">
			<div>
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

				<div className="PostDisplay-votes">
					<b>{votes} votes:</b>

					<i
						className="fas fa-thumbs-up text-success"
						onClick={(evt) => castVote('up')}
					/>
					<i
						className="fas fa-thumbs-down text-danger"
						onClick={(evt) => castVote('down')}
					/>
				</div>
			</div>
		</div>
	);
};

export default PostDisplay;
