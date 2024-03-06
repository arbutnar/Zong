import { API_URL } from './config.js';
import { AJAX } from './helpers.js';

// The application state essentially stores all the data about the application.
// Should store any data fetched from API, data that the user inputs or the page the user is currently viewing --> "single source of truth".
// UI should be kept in sync with the state.

export const state = {
	user: {},
};
  
const userObj = function (data) {
	const { user } = data.data;
	return {
		id: user.id,
		first_name: user.firstName,
		last_name: user.lastName,
		username: user.username,
		email: user.email,
		campus: user.campus,
	};
};

export const loadPage = async function () {
	try {
		// create user from API call
		const data = await AJAX(`${API_URL}`);
		state.user = userObj(data);
	} catch (err) {
		// Temp error handling
		console.error(`${err} 💥💥💥💥`);
		throw err;
	}
};
