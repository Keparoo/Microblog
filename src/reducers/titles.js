import {
	FETCH_TITLES,
	DELETE_POST,
	ADD_POST,
	UPDATE_POST,
	VOTE
} from '../actions/types';

// Sort posts from high to low by number of votes
const sortByVote = (posts) => {
	return posts.sort((a, b) => b.votes - a.votes);
};

export default function rootReducer(state = [], action) {
	switch (action.type) {
		case FETCH_TITLES:
			return sortByVote([ ...action.titles ]);
		case ADD_POST:
			return sortByVote([
				...state,
				{
					id: action.post.id,
					title: action.post.title,
					description: action.post.description
				}
			]);
		case DELETE_POST:
			return state.filter((t) => t.id !== action.id);
		case UPDATE_POST:
			return state.map(
				(title) =>
					title.id === action.id
						? {
								id: action.post.id,
								title: action.post.title,
								description: action.post.description
							}
						: title
			);
		case VOTE:
			return sortByVote(
				state.map(
					(title) =>
						title.id === action.postId
							? { ...title, votes: action.votes }
							: title
				)
			);
		default:
			return state;
	}
}
