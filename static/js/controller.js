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
];

const controlMain = async function () {
	
	const match = routes.find(route => route.path === location.pathname);
	if (location.pathname === "/practice" || location.pathname === "/versus")
		controlGame();
	if (!match)
		return ;
	match.view.render(model.state.user);
};


const controlPaddle = function(e) {
	if (location.pathname !== "/practice" && location.pathname !== "/versus")
		return ;
	model.changePlayerPaddleDirections(e.type, e.code);
}

const controlGame = function() {

	let lastTime = 0;
	let delta;

	const updateGame = function(time) {
		if (location.pathname !== "/practice" && location.pathname !== "/versus")
			return ;
		if (lastTime)
		{
			delta = time - lastTime;
			model.updateGameBall(delta);
			model.updateGamePaddles(delta);
		}
		gameView.update(model.state.game);
		lastTime = time;
		requestAnimationFrame(updateGame);
	};

	model.resetGame();
	gameView.render(model.state.game);
	model.initGame(location.pathname);
	requestAnimationFrame(updateGame);
}


const init = function () {
	mainView.addHandlerView(controlMain);
	gameView.addHandlerView(controlPaddle);
};

init();