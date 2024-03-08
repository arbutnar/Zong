import * as model from './model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';

const controlMain = function () {
	const routes = [
		{ path: "/", view: "root"},
		{ path: "/account", view: accountView },
		{ path: "/messages", view: messagesView },
		{ path: "/other-users", view: otherUsersView },
		{ path: "/dashboard", view: dashboardView },
		{ path: "/security", view: securityView },
	];

	const match = routes.find(route => route.path === location.pathname);
	mainView.render(match.view, model.state.user);
};

const init = function () {
	model.loadPage();
	mainView.addHandlerView(controlMain);
};

init();