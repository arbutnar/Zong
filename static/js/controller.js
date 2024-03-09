import * as model from './model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';
import tournamentView from './views/TournamentView.js';
import practiceView from './views/PracticeView.js';
import versusView from './views/VersusView.js';

const routes = [
	{ path: "/", view: mainView },
	{ path: "/account", view: accountView },
	{ path: "/messages", view: messagesView },
	{ path: "/other-users", view: otherUsersView },
	{ path: "/dashboard", view: dashboardView },
	{ path: "/security", view: securityView },
	{ path: "/tournament", view: tournamentView },
	{ path: "/versus", view: versusView },
	{ path: "/practice", view: practiceView },
];

const controlMain = async function () {
	const match = routes.find(route => route.path === location.pathname);
	console.log(location.pathname);
	// const user = await model.loadUser();
	model.loadPage();
	match.view.render(model.state.user);
};

const init = function () {
	mainView.addHandlerView(controlMain);
};

init();