import * as model from './model/model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';
import gameView from './views/GameView.js';

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
};

const controlRouting = async function() {
	const match = routes.find(route => route.path === location.pathname);
	if (location.pathname === "/practice" || location.pathname === "/versus")
		startAnimation();
	if (!match)
		return ;
	match.view.render(model.state.user);
};

const controlGame = function(event) {
	model.state.game.canvas.resize();
};

const startAnimation = function() {
	let lastTime = 0;
	let delta;

	const animation = function(time) {
		if (location.pathname !== "/practice" && location.pathname !== "/versus")
			return ;
		if (lastTime)
		{
			gameView.draw(model.state.game);
			delta = time - lastTime;
			model.updateGame(delta);
		}
		lastTime = time;
		requestAnimationFrame(animation);
	};
	gameView.render();
	const game = {
		canvas: {
			domElement: document.querySelector("canvas"),
			color: "black",
			stroke: {
				color: "yellow",
			}
		},
		ball: {
			color: "green",
			speed: 0.05,
			size: 2,
		},	
		player1: {
			color: "blue",
			size: 20,
			velocity: 0.5,
			side: "left",
			score: {
				domContent: document.querySelector("#left-score"),
			},
		},
		player2: {
			color: "red",
			size: 20,
			velocity: 0.5,
			side: "right",
			score: {
				domContent: document.querySelector("#right-score"),
			},
		}
	};
	model.initGame(game);
	requestAnimationFrame(animation);
};

const init = function () {
	mainView.addHandlerRouting(controlRouting);
	mainView.addHandlerAuth(controlLogIn, controlLogOut);
	gameView.addHandlerView(controlGame);
};

init();