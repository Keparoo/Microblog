import { FETCH_TITLES } from '../actions/types';

export default function rootReducer(state = [], action) {
	switch (action.type) {
		case FETCH_TITLES:
			return [ ...action.titles ];
		default:
			return state;
	}
}
