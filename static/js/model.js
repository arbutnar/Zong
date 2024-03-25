export const state = {
	user: undefined,
};

const userObj = function(data) {
	return {
		username: data.username,
		firstName: data.firstName ?? '',
		lastName: data.lastName ?? '',
		email: data.email ?? '',
		coalition: data.coalition ?? '',
		campus: data.campus ?? '',
	};
};

export const logUser = async function(data) {
	state.user = userObj(data);
	// data.session && localStorage.setItem('user', JSON.stringify(state.user));
};

export const removeUser = async function() {
	state.user = undefined;
	// localStorage.removeItem('user');
}

const init = function() {
	// state.user ??= JSON.parse(localStorage.getItem('user'));
}

init();