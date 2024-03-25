import * as model from './model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';

const routes = [
	{ path: "/", view: mainView },
	{ path: "/account", view: accountView },
	{ path: "/messages", view: messagesView },
	{ path: "/other-users", view: otherUsersView },
	{ path: "/dashboard", view: dashboardView },
	{ path: "/security", view: securityView },
];

const controlLogIn = async function(data) {
	model.logUser(data);
	mainView.toggleContent();
	mainView.render(model.state.user);
};

const controlLogOut = async function() {
	model.removeUser();
	mainView.toggleContent();
	mainView.render(model.state.user);
}

const controlRouting = async function() {
	const match = routes.find(route => route.path === location.pathname);
	if (!match)
		return ;
	match.view.render(model.state.user);
};

const init = function () {
	mainView.addHandlerRouting(controlRouting);
	mainView.addHandlerAuth(controlLogIn, controlLogOut);
};

init();