import {
	FETCH_POST,
	DELETE_POST,
	ADD_POST,
	UPDATE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	VOTE
} from '../actions/types';
// import TitleList from '../components/TitleList';

export default function rootReducer(state = {}, action) {
	let post = state[action.postId];

	switch (action.type) {
		case FETCH_POST:
			return { ...state, [action.post.id]: action.post };
		case ADD_POST:
			return { ...state, [action.post.id]: { ...action.post } };
		case UPDATE_POST:
			return { ...state, [action.post.id]: { ...action.post } };
		case DELETE_POST:
			let posts = { ...state };
			delete posts[action.postId];
			return posts;
		case ADD_COMMENT:
			return {
				...state,
				[action.postId]: {
					...post,
					comments: [ ...post.comments, action.comment ]
				}
			};
		case DELETE_COMMENT:
			return {
				...state,
				[action.postId]: {
					...post,
					comments: post.comments.filter((c) => c.id !== action.commentId)
				}
			};
		case VOTE:
			return {
				...state,
				[action.postId]: { ...post, votes: action.votes }
			};
		default:
			return state;
	}
}
