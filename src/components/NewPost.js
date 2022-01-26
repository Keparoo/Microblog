import React from 'react';
import PostForm from './PostForm';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
	console.debug('NewPost');

	const history = useHistory();

	const save = () => {
		history.push('/');
	};

	const cancel = () => {
		history.push('/');
	};

	return (
		<div>
			<PostForm save={save} cancel={cancel} />
		</div>
	);
};

export default NewPost;
