import {
	FETCH_POST,
	REMOVE_POST,
	ADD_POST,
	UPDATE_POST
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
		default:
			return state;
	}
}
