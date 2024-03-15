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
];

const controlMain = async function () {
	
	const match = routes.find(route => route.path === location.pathname);
	if (!match)
		return ;
	console.log(location.pathname);
	match.view.render(model.state.user);
};

let direction = 0;

const paddleHandler = function(e) {
	if (e.type === "keydown") {
		if (e.code === 'KeyW')
			direction = -1;
		else if (e.code === 'KeyS')
			direction = 1;
	}
	else if (e.type === "keyup" && (e.code === 'KeyW'|| e.code === 'KeyS'))
		direction = 0;
}

const controlGame = function() {

	let lastTime = 0;
	let delta;

	const updateGame = function(time) {
		if (location.pathname !== "/practice")
			return ;
		if (lastTime)
		{
			delta = time - lastTime;
			model.updateGameBall(delta);
			model.updateGamePlayer1Paddle(delta, direction);
			model.updateGamePlayer2Paddle(delta);
		}
		gameView.update(model.state.game);
		lastTime = time;
		requestAnimationFrame(updateGame);
	};

	model.resetGame();
	gameView.render(model.state.game);
	model.initGame();
	requestAnimationFrame(updateGame);
}


const init = function () {
	mainView.addHandlerView(controlMain);
	gameView.addHandlerView(controlGame, paddleHandler);
};

init();