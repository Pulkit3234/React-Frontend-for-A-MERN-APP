import * as api from '../api';

export const action = {
	CREATE: 'CREATE',
	FETCH_ALL: 'FETCH_ALL',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	LIKE: 'LIKE',
};
export const getPosts = () => async (dispatch) => {
	try {
		console.log('clicked')
		const { data } = await api.fetchPosts();
		console.log(data);
		


		dispatch({ type: action.FETCH_ALL, payload: data.postMessages });
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		console.log(data);

		dispatch({ type: action.CREATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const getPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.getPost(post);
		dispatch({ type: 'GET_POST', payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		console.log(post);
		const { data } = await api.updatePost(id, post);
		dispatch({ type: action.UPDATE, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({ type: action.DELETE, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		dispatch({ type: action.LIKE, payload: data });
	} catch (error) {}
};
