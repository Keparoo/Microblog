import React from 'react';
import PostForm from './PostForm';
import { useHistory } from 'react-router-dom';

const NewPost = () => {
	console.debug('NewPost');

	const history = useHistory();

	const cancel = () => {
		history.push('/');
	};

	return (
		<div>
			<PostForm cancel={cancel} />
		</div>
	);
};

export default NewPost;
