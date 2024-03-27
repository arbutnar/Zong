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

export const resizeGame = function() {
	state.game.canvas.resize();
	state.game.ball.resize(state.game.canvas);
	state.game.player1.resize(state.game.canvas);
	state.game.player2.resize(state.game.canvas);
}

const resetGame = function() {
	state.game.ball.reset(state.game.canvas);
	state.game.player1.reset(state.game.canvas.height);
	state.game.player2.reset(state.game.canvas.height);
}

export const updateGame = function(delta) {
	const canvas = state.game.canvas;
	const ball = state.game.ball;
	const paddle1 = state.game.player1;
	const paddle2 = state.game.player2;
	
	if ((ball.y - ball.radius) <= 0 || (ball.y + ball.radius) >= canvas.height)
		state.game.ball.direction.y *= -1;
	if ((ball.x - ball.radius) <= 0 || (ball.x + ball.radius) >= canvas.width)
		state.game.ball.direction.x *= -1;

	if (paddle1.y <= 0 && paddle1.direction.y === -1)
		state.game.player1.direction.y = 0;
	if (paddle1.y + paddle1.height >= canvas.height && paddle1.direction.y === 1)
		state.game.player1.direction.y = 0;
	if (paddle2.y <= 0 && paddle2.direction.y === -1)
		state.game.player2.direction.y = 0;
	if (paddle2.y + paddle2.height >= canvas.height && paddle2.direction.y === 1)
		state.game.player2.direction.y = 0;

	state.game.ball.move(delta);
	state.game.player1.move(delta);
	state.game.player2.move(delta);
}

export const redirectGamePaddle = function(code) {
	if (code === "KeyW")
		state.game.player1.direction.y = -1;
	else if (code === "KeyS")
		state.game.player1.direction.y = 1;
	else if (code === "ArrowUp")
		state.game.player2.direction.y = -1;
	else if (code === "ArrowDown")
		state.game.player2.direction.y = 1;
}

export const stopGamePaddle = function(code) {
	const p1direction = state.game.player1.direction.y
	const p2direction = state.game.player2.direction.y

	if (code === "KeyW" && p1direction === -1)
		state.game.player1.direction.y = 0;
	else if (code === "KeyS" && p1direction === 1)
		state.game.player1.direction.y = 0;
	else if (code === "ArrowUp" && p2direction === -1)
		state.game.player2.direction.y = 0;
	else if (code === "ArrowDown" && p2direction === 1)
		state.game.player2.direction.y = 0;
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