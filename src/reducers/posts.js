import { action } from '../actions/posts';

const postReducers = (posts = [], actions) => {
	switch (actions.type) {
		case action.FETCH_ALL:
			return actions.payload;
		case action.CREATE:
			return [...posts, actions.payload];
		case action.UPDATE:
			return posts.map((post) => (post._id === actions.payload._id ? actions.payload : post));
		case action.DELETE:
			return posts.filter((post) => post._id !== actions.payload);
		case action.LIKE:
			return posts.map((post) => (post._id === actions.payload._id ? actions.payload : post));
		default:
			return posts;
	}
};

export default postReducers;
