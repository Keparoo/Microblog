import React from 'react';
import Comment from './Comment';

/* Renders a list of Comments passed in as props

    Comments can be deleted by clicking on the icon
    This is handled by the parent

    Called by Post
*/

const CommentList = ({ comments = [], deleteComment }) => {
	console.debug('CommentList', comments);

	return comments.map((c) => (
		<Comment key={c.id} id={c.id} text={c.text} deleteComment={deleteComment} />
	));
};

export default CommentList;
