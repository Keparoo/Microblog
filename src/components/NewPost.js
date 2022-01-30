import React from 'react';
import PostForm from './PostForm';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostToAPI } from '../actions/posts';

/* Renders the PostForm  and handles adding a new post

    Called by Routes
    Routed to /new
*/

const NewPost = () => {
	console.debug('NewPost');

	const history = useHistory();
	const dispatch = useDispatch();

	// Adds a new post and sends it to the API backend
	// Redirects to '/'
	const add = ({ title, description, body }) => {
		dispatch(addPostToAPI(title, description, body));
		history.push('/');
	};

	// Cancel NewPost and return to '/'
	const cancel = () => {
		history.push('/');
	};

	return (
		<div>
			<h1 className="display-5">New Post</h1>
			<PostForm save={add} cancel={cancel} />
		</div>
	);
};

export default NewPost;
