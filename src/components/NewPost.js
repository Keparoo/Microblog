import React from 'react';
import PostForm from './PostForm';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPostToAPI } from '../actions/posts';

const NewPost = () => {
	console.debug('NewPost');

	const history = useHistory();
	const dispatch = useDispatch();

	const add = ({ title, description, body }) => {
		dispatch(addPostToAPI(title, description, body));
		history.push('/');
	};

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
