import * as model from './model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';
import gameView from './views/GameView.js';
import tournamentView from './views/TournamentView.js';
// import practiceView from './views/PracticeView.js';
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
	// { path: "/practice", view: practiceView },
	{ path: "/practice", view: gameView },
];

const controlMain = async function () {
	
	const match = routes.find(route => route.path === location.pathname);
	console.log(location.pathname);
	// const user = await model.loadUser();
	model.loadPage();
	match.view.render(model.state.user);
};

let lastTime;
let delta;

const controlGame = function(time) {
	console.log(time);
	if (location.pathname !== "/practice")
		return ;
	if (lastTime) {
		delta = time - lastTime;
		gameView.update(delta);
	}
	lastTime = time;
	requestAnimationFrame(controlGame);
};

const init = function () {
	mainView.addHandlerView(controlMain);
	gameView.addHandlerView(controlGame);
};

init();