import React from 'react';

/* Display a single comment

    Comment can be deleted if icon is clicked
    Deletion is handled by parent

    Called by CommentList
*/

const Comment = ({ deleteComment, text, id }) => {
	console.debug('Comment', text);

	const handleDelete = (evt) => {
		deleteComment(id);
	};

	return (
		<div>
			<p>
				{deleteComment && (
					<i className="fa fa-times text-danger mr-2" onClick={handleDelete} />
				)}

				{text}
			</p>
		</div>
	);
};

export default Comment;
