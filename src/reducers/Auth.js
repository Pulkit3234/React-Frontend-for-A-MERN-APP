const authReducer = (state = { authData: null }, actions) => {
	switch (actions.type) {
		case 'AUTH':
			localStorage.setItem('profile', JSON.stringify({ ...actions.data }));
			return { ...state, authData: actions.data };
		case 'LOGOUT':
			localStorage.clear();
			return { ...state, authData: null };
		default:
			return state;
	}
};

export default authReducer;
