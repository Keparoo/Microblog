import React, { useState } from 'react';

/* Comment Form

    Inline form for adding a comment
    This could be used for editing as well

    Called by Post
*/

const CommentForm = ({ submitCommentForm }) => {
	const [ text, setText ] = useState('');

	const handleSubmit = (evt) => {
		evt.preventDefault();
		submitCommentForm(text);
		setText('');
	};

	const handleChange = (evt) => {
		setText(evt.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						onChange={handleChange}
						id="commentform-text"
						name="text"
						size="50"
						placeholder="New Comment"
						className="form-control"
						value={text}
					/>
				</div>
				<button className="btn btn-primary">Add</button>
			</form>
		</div>
	);
};

export default CommentForm;
