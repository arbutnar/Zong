import Canvas from "./game/Canvas.js";
import Ball from "./game/Ball.js";
import Paddle from "./game/Paddle.js";

export const state = {
	user: undefined,
	game: {
		canvas: new Canvas(),
		ball: new Ball(),
		player1: new Paddle(),
		player2: new Paddle(),
	},
};

export const initGame = function(info) {
	state.game.canvas.init(info.canvas);
	state.game.ball.init(state.game.canvas, info.ball);
	state.game.player1.init(state.game.canvas, info.player1);
	state.game.player2.init(state.game.canvas, info.player2);
}

const _resetGame = function() {
	state.game.ball.reset();
	state.game.player1.reset();
	state.game.player2.reset();
}

export const updateGame = function(delta) {
	const canvas = state.game.canvas;
	const ball = state.game.ball;

	if ((ball.y - ball.radius) <= 0 || (ball.y + ball.radius) >= canvas.height)
		state.game.ball.direction.y *= -1;
	if ((ball.x - ball.radius) <= 0 || (ball.x + ball.radius) >= canvas.width)
		state.game.ball.direction.x *= -1;
	state.game.ball.move(delta);
}

const userObj = function(data) {
	return {
		username: data.username,
		firstName: data.firstName ?? '',
		lastName: data.lastName ?? '',
		email: data.email ?? '',
		coalition: data.coalition ?? '',
		campus: data.campus ?? '',
	};
};

export const logUser = async function(data) {
	state.user = userObj(data);
	// data.session && localStorage.setItem('user', JSON.stringify(state.user));
};

export const removeUser = async function() {
	state.user = undefined;
	// localStorage.removeItem('user');
}

const init = function() {
	// state.user ??= JSON.parse(localStorage.getItem('user'));
}

init();