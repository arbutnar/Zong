import * as model from './model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';
import notFoundView from './views/NotFoundView.js';

let routes = [
	{ path: 404, view: notFoundView },
	{ path: "/", view: mainView },
	{ path: "/account", view: accountView },
	{ path: "/messages", view: messagesView },
	{ path: "/other-users", view: otherUsersView },
	{ path: "/dashboard", view: dashboardView },
	{ path: "/security", view: securityView },
];

const controlLogIn = async function(data) {
	model.logUser(data);
	mainView.toggleForms();
	mainView.render(model.state.user);
	// routes.push(
	// 	{ path: "/account", view: accountView },
	// 	{ path: "/messages", view: messagesView },
	// 	{ path: "/other-users", view: otherUsersView },
	// 	{ path: "/dashboard", view: dashboardView },
	// 	{ path: "/security", view: securityView },
	// )
};

const controlLogOut = async function() {
	model.removeUser();
	mainView.toggleForms();
	mainView.render(model.state.user);
	routes = [
		{ path: 404, view: notFoundView },
		{ path: "/", view: mainView },
	];
}

const controlRouting = async function() {
	let view = routes.find(route => route.path === location.pathname)?.view;
	if (!view)
		view = notFoundView;
	view.render(model.state.user);
};

const init = function () {
	mainView.addHandlerRouting(controlRouting);
	mainView.addHandlerAuth(controlLogIn, controlLogOut);
};

init();