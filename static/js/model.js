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
		// user.id
		id: 1,
		// user.username
		username: "arbutnar",
		// user.firstName
		firstName: "Arianna",
		// user.lastName
		lastName: "Butnaru",
		// user.email
		email: "arbutnar@student.42roma.it",
		profileImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
		// user.campus
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
