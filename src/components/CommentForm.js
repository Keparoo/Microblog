import React, { useState } from 'react';

function CommentForm({ submitCommentForm }) {
	const [ comment, setComment ] = useState();

	function handleSubmit(evt) {
		evt.preventDefault();
		submitCommentForm(comment);
		setComment('');
	}

	function handleChange(evt) {
		setComment(evt.target.value);
	}

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
						value={comment}
					/>
				</div>
				<button className="btn btn-primary">Add</button>
			</form>
		</div>
	);
}

export default CommentForm;
