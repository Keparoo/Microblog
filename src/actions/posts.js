import axios from 'axios';

import {
	DELETE_POST,
	ADD_POST,
	UPDATE_POST,
	FETCH_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	VOTE
} from './types';

const API_URL =
	process.env.REACT_APP_API_URL || 'http://localhost:5000/api/posts';

/* Handle async API calls for all post related functions
  */

// Get a post from from the API by id and Redux store
export function getPostFromAPI(id) {
	return async function(dispatch) {
		const response = await axios.get(`${API_URL}/${id}`);
		return dispatch(getPost(response.data));
	};
}

function getPost(post) {
	return {
		type: FETCH_POST,
		post
	};
}

// Add a new post to the API and Redux store
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

// Update a current post in the API by id and Redux store
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

// Delete a post from the API by id and Redux store
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

// Add a comment to a post in the API and Redux store
export function addCommentToAPI(postId, text) {
	console.debug('addCommentToAPI', postId, text);
	return async function(dispatch) {
		const response = await axios.post(`${API_URL}/${postId}/comments/`, {
			text
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

// Delete a comment from a post in the API and Redux store
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

// Send an up/down vote for a post to the API and Redux store
export function sendVoteToAPI(postId, direction) {
	return async function(dispatch) {
		const response = await axios.post(`${API_URL}/${postId}/vote/${direction}`);
		return dispatch(vote(postId, response.data.votes));
	};
}

function vote(postId, votes) {
	return {
		type: VOTE,
		postId,
		votes
	};
}
