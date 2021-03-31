import * as api from './api';

export const sigin = (authData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);

		history.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const signup = async (formData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData);

		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
