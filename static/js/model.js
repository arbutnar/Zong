// import { API_URL } from './config.js';
// import { AJAX } from './helpers.js';

// The application state essentially stores all the data about the application.
// Should store any data fetched from API, data that the user inputs or the page the user is currently viewing --> "single source of truth".
// UI should be kept in sync with the state.

import { INITIAL_BALL_VELOCITY, PADDLE_SPEED } from "./config.js";
import { isCollision } from "./helpers.js";

export const state = {
	user: {},
	game: {
		ball: {
			domElement: undefined,
			x: 50,
			y: 50,
			velocity : INITIAL_BALL_VELOCITY,
			direction: {
				x : 0,
				y : 0,
			},
		},
		player1: {
			score: 0,
			paddle: {
				domElement: undefined,
				position: 50,
				direction: 0,
			},
		},
		player2: {
			ai: false,
			score: 0,
			paddle: {
				domElement: undefined,
				position: 50,
				direction: 0,
			},
		}
	}
};

export const initGame = function(gameMode) {
	state.game.ball.domElement = document.querySelector('#ball');
	state.game.player1.paddle.domElement = document.querySelector('#player1-paddle');
	state.game.player2.paddle.domElement = document.querySelector('#player2-paddle');
	state.game.player1.score = 0;
	state.game.player2.score = 0;
	state.game.player1.direction = 0;
	state.game.player2.direction = 0;
	state.game.player2.ai = false;
	if (gameMode === '/practice')
		state.game.player2.ai = true;
}

export const resetGame = function() {
	state.game.ball.x = 50;
	state.game.ball.y = 50;
	state.game.ball.velocity = INITIAL_BALL_VELOCITY;
	state.game.ball.direction.x = 0;
	let heading;
	while (Math.abs(state.game.ball.direction.x) <= 0.2 || Math.abs(state.game.ball.direction.x) >= 0.9)
	{
		heading = Math.random() * (2 * Math.PI);
		state.game.ball.direction = { x: Math.cos(heading), y: Math.sin(heading) };
	}
	state.game.player1.direction = 0;
	state.game.player2.direction = 0;
	state.game.player1.paddle.position = 50;
	state.game.player2.paddle.position = 50;
}

export const updateGameBall = function(delta) {
	const ballRect = state.game.ball.domElement.getBoundingClientRect();
	const paddleRects = [ state.game.player1.paddle.domElement.getBoundingClientRect(),
		state.game.player2.paddle.domElement.getBoundingClientRect() ];
	if (ballRect.bottom >= document.querySelector("main").offsetHeight || ballRect.top <= 0)
		state.game.ball.direction.y *= -1;
	else if (paddleRects.some(paddleRect => isCollision(paddleRect, ballRect)))
		state.game.ball.direction.x *= -1;
	else if (ballRect.right >= window.innerWidth || ballRect.left <= 0)
	{
		if (ballRect.right >= window.innerWidth)
			state.game.player1.score += 1;
		else
			state.game.player2.score += 1;
		resetGame();
		return ;
	}
	state.game.ball.x += state.game.ball.direction.x * state.game.ball.velocity * delta;
	state.game.ball.y += state.game.ball.direction.y * state.game.ball.velocity * delta;

}

export const updateGamePaddles = function(delta) {
	if (state.game.player2.ai)
		changePlayer2PaddleDirectionAi();
	state.game.player1.paddle.position += PADDLE_SPEED * delta * state.game.player1.paddle.direction;
	state.game.player2.paddle.position += PADDLE_SPEED * delta * state.game.player2.paddle.direction;
}

export const changePlayer2PaddleDirectionAi = function() {
	const paddlePosition = state.game.player2.paddle.position
	state.game.player2.paddle.direction = Math.abs(state.game.ball.y - paddlePosition) < 1 ? 0 :
		state.game.ball.y < paddlePosition ? -1 : 1;
}

export const changePlayerPaddleDirections = function(type, code) {
	let direction = state.game.player1.paddle.direction;
	
	if(code === 'KeyW')
	{
		if (type === "keydown")
			state.game.player1.paddle.direction = -1;
		else if (type === "keyup" && direction === -1)
			state.game.player1.paddle.direction = 0
	}
	if(code === 'KeyS')
	{
		if (type === "keydown")
			state.game.player1.paddle.direction = 1;
		else if (type === "keyup" && direction === 1)
			state.game.player1.paddle.direction = 0
	}
	if(state.game.player2.ai)
		return ;
	direction = state.game.player2.paddle.direction;
	if(code === 'ArrowUp')
	{
		if (type === "keydown")
			state.game.player2.paddle.direction = -1;
		else if (type === "keyup" && direction === -1)
			state.game.player2.paddle.direction = 0
	}
	if(code === 'ArrowDown')
	{
		if (type === "keydown")
			state.game.player2.paddle.direction = 1;
		else if (type === "keyup" && direction === 1)
			state.game.player2.paddle.direction = 0
	}
}

const userObj = function () {
	// const { user } = data.data;
	return {
		id: 1,
		username: "arbutnar",
		firstName: "Arianna",
		lastName: "Butnaru",
		email: "arbutnar@student.42roma.it",
		profileImage: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
		campus: "Rome",
	};
};

export const loadPage = async function () {
	try {
		// create user from API call
		// const data = await AJAX(`${API_URL}`);
		// state.user = userObj(data);
		state.user = userObj();
	} catch (err) {
		// Temp error handling
		console.error(`${err} 💥💥💥💥`);
		throw err;
	}
};

export const loadUser = async function () {
	try {
		const data = await AJAX(`https://0.0.0.0/userManagement`);
		return data.data;
	} catch (err) {
		alert(err);
	}
};

