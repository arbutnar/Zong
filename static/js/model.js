// import { API_URL } from './config.js';
// import { AJAX } from './helpers.js';

// The application state essentially stores all the data about the application.
// Should store any data fetched from API, data that the user inputs or the page the user is currently viewing --> "single source of truth".
// UI should be kept in sync with the state.

export const state = {
	user: {},
};
  
const userObj = function () {
	// const { user } = data.data;
	return {
		id: 1,
		username: "arbutnar",
		firstName: "Arianna",
		lastName: "Butnaru",
		email: "arbutnar@student.42roma.it",
		profileImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
		campus: "Rome",
	};
};

export const loadPage = async function () {
	try {
		// create user from API call
		// const data = await AJAX(`${API_URL}`);
		// state.user = userObj(data);
		state.user = userObj();
	} catch (err) {
		// Temp error handling
		console.error(`${err} 💥💥💥💥`);
		throw err;
	}
};

export const loadUser = async function () {
	try {
		const data = await AJAX(`https://0.0.0.0/userManagement`);
		return data.data;
	} catch (err) {
		alert(err);
	}
};

