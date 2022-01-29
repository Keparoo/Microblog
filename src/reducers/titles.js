import {
	FETCH_TITLES,
	DELETE_POST,
	ADD_POST,
	UPDATE_POST
} from '../actions/types';

export default function rootReducer(state = [], action) {
	switch (action.type) {
		case FETCH_TITLES:
			return [ ...action.titles ];
		default:
			return state;
	}
}
