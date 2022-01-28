import {
	FETCH_POST,
	REMOVE_POST,
	ADD_POST,
	UPDATE_POST
} from '../actions/types';

export default function rootReducer(state = {}, action) {
	let post = state[action.postId];

	switch (action.type) {
		case FETCH_POST:
			console.log('in Fetch');
			return { ...state, [action.post.id]: action.post };
		default:
			return state;
	}
}
