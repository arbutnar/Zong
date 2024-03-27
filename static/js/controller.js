import * as model from './model/model.js';
import mainView from './views/MainView.js';
import accountView from './views/AccountView.js';
import messagesView from './views/MessagesView.js';
import otherUsersView from './views/OtherUsersView.js';
import dashboardView from './views/DashboardView.js';
import securityView from './views/SecurityView.js';
import notFoundView from './views/NotFoundView.js';
import gameView from './views/GameView.js';

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
	if (location.pathname === "/practice" || location.pathname === "/versus")
	{
		startAnimation();
		return ;
	}
	if (!view)
		view = notFoundView;
	view.render(model.state.user);
};

const startAnimation = function() {
	let lastTime = 0;
	let delta;

	const controlGame = function(event) {
		console.log(event);
		event.type === "keydown" && model.redirectGamePaddle(event.code);
		event.type === "keyup" && model.stopGamePaddle(event.code);
		event.type === "resize" && model.resizeGame();
	}

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

	gameView.addHandlerView(controlGame);
	gameView.render(model.state.game);
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
			size: 1.5,
		},	
		player1: {
			color: "blue",
			size: 10,
			speed: 0.05,
			side: "left",
			score: {
				domContent: document.querySelector("#left-score"),
			},
		},
		player2: {
			color: "red",
			size: 10,
			speed: 0.05,
			side: "right",
			score: {
				domContent: document.querySelector("#right-score"),
			},
		}
	};
	model.initGame(game);
	requestAnimationFrame(animation);
}

const init = function () {
	mainView.addHandlerRouting(controlRouting);
	mainView.addHandlerAuth(controlLogIn, controlLogOut);
};

init();