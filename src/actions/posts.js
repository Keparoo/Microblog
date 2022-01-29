import axios from 'axios';

import {
	DELETE_POST,
	ADD_POST,
	UPDATE_POST,
	FETCH_POST,
	ADD_COMMENT,
	DELETE_COMMENT
} from './types';

const API_URL =
	process.env.REACT_APP_API_URL || 'http://localhost:5000/api/posts';

export function getPostFromAPI(id) {
	return async function(dispatch) {
		const response = await axios.get(`${API_URL}/${id}`);
		console.log('resp', response.data);
		return dispatch(getPost(response.data));
	};
}

function getPost(post) {
	return {
		type: FETCH_POST,
		post
	};
}

export function addPostToAPI(title, description, body) {
	return async function(dispatch) {
		const response = await axios.post(`${API_URL}`, {
			title,
			description,
			body
		});
		return dispatch(addPost(response.data));
	};
}

function addPost(post) {
	return {
		type: ADD_POST,
		post
	};
}

export function updatePostInAPI(id, title, description, body) {
	return async function(dispatch) {
		const response = await axios.put(`${API_URL}/${id}`, {
			title,
			description,
			body
		});
		return dispatch(updatePost(response.data));
	};
}

function updatePost(post) {
	return {
		type: UPDATE_POST,
		post
	};
}

export function deletePostFromAPI(id) {
	return async function(dispatch) {
		await axios.delete(`${API_URL}/${id}`);
		return dispatch(deletePost(id));
	};
}

function deletePost(id) {
	return {
		type: DELETE_POST,
		id
	};
}

export function addCommentToAPI(postId, comment) {
	return async function(dispatch) {
		const response = await axios.post(`${API_URL}/${postId}/comments/`, {
			comment
		});
		return dispatch(addComment(postId, response.data));
	};
}

function addComment(postId, comment) {
	return {
		type: ADD_COMMENT,
		postId,
		comment
	};
}

export function deleteCommentFromAPI(postId, commentId) {
	return async function(dispatch) {
		await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
		return dispatch(deleteComment(postId, commentId));
	};
}

function deleteComment(postId, commentId) {
	return {
		type: DELETE_COMMENT,
		postId,
		commentId
	};
}
