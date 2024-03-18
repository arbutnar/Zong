// import { API_URL } from './config.js';
// import { AJAX } from './helpers.js';

// The application state essentially stores all the data about the application.
// Should store any data fetched from API, data that the user inputs or the page the user is currently viewing --> "single source of truth".
// UI should be kept in sync with the state.

import { INITIAL_BALL_VELOCITY, INCREMENT_BALL_VELOCITY } from "./config.js";
import { PADDLE_SPEED, PADDLE_X, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT } from "./config.js"
// import { isCollision } from "./helpers.js";

export const state = {
	user: {},
	board: {
		domElement: undefined,
		context: undefined,
		width: 0,
		height: 0,
		ball: {
			x: 0,
			y: 0,
			size: 15,
			velocity : INITIAL_BALL_VELOCITY,
			direction: {
				x : 0,
				y : 0,
			},
		},
		player1: {
			score: 0,
			paddle: {
				x: PADDLE_X,
				y: PADDLE_Y,
				width: PADDLE_WIDTH,
				height: PADDLE_HEIGHT,
				direction: 0,
			},
		},
		player2: {
			ai: false,
			score: 0,
			paddle: {
				x: PADDLE_X,
				y: PADDLE_Y,
				width: PADDLE_WIDTH,
				height: PADDLE_HEIGHT,
				direction: 0,
			},
		}
	}
};

export const initGame = function(gameMode) {
	state.board.domElement = document.querySelector('#board');
	state.board.context = state.board.domElement.getContext('2d');
	state.board.width = state.board.domElement.getBoundingClientRect().width;
	state.board.height = state.board.domElement.getBoundingClientRect().height;
	resetGame();
	state.board.context.fillStyle = "skyblue";
	state.board.context.fillRect(state.board.player1.paddle.x, state.board.player1.paddle.y, state.board.player1.paddle.width, state.board.player1.paddle.height);
	state.board.context.fillRect(state.board.player2.paddle.x, state.board.player2.paddle.y, state.board.player2.paddle.width, state.board.player2.paddle.height);
	state.board.context.beginPath();
	state.board.context.arc(state.board.ball.x, state.board.ball.y, state.board.ball.size / 2, 0, Math.PI * 2);
	state.board.context.fill();
	state.board.player2.ai = false;
	if (gameMode === '/practice')
		state.board.player2.ai = true;
}

export const resetGame = function() {
	state.board.player1.paddle.y = state.board.height / 2 - state.board.player1.paddle.height / 2;
	state.board.player2.paddle.x = state.board.width - state.board.player2.paddle.width - PADDLE_X;
	state.board.player2.paddle.y = state.board.height / 2 - state.board.player2.paddle.height / 2;
	state.board.ball.x = state.board.width / 2;
	state.board.ball.y = state.board.height / 2;
	state.board.ball.velocity = INITIAL_BALL_VELOCITY;
	let heading;
	while (Math.abs(state.board.ball.direction.x) <= 0.2 || Math.abs(state.board.ball.direction.x) >= 0.9)
	{
		heading = Math.random() * (2 * Math.PI);
		state.board.ball.direction = { x: Math.cos(heading), y: Math.sin(heading) };
	}
	state.board.player1.score = 0;
	state.board.player2.score = 0;
	state.board.player1.direction = 0;
	state.board.player2.direction = 0;
}

export const updateGameBall = function(delta) {
	if (state.board.ball.y <= 0 || (state.board.ball.y + state.board.ball.size >= state.board.height))
		state.board.ball.direction.y *= -1;
	// else if (isCollision(state.board.ball, state.board.player1.paddle))
	// {
	// 	// left side of the ball touches right side of paddle1
	// 	if (state.board.ball.x <= state.board.player1.paddle.x + state.board.player1.paddle.width)
	// 		state.board.ball.direction.x *= -1;
	// }
	// else if (isCollision(state.board.ball, state.board.player2.paddle))
	// {
	// 	// right side of the ball touches left side of paddle2
	// 	if (state.board.ball.x + state.board.ball.size >= state.board.player2.paddle.x)
	// 		state.board.ball.direction.x *= -1;
	// }
	state.board.ball.x += state.board.ball.direction.x * state.board.ball.velocity * delta;
	state.board.ball.y += state.board.ball.direction.y * state.board.ball.velocity * delta;
	state.board.context.beginPath();
	state.board.context.arc(state.board.ball.x, state.board.ball.y, state.board.ball.size / 2, 0, Math.PI * 2);
	state.board.context.fill();
}

const isCollision = function(a, b) {
	return (
		a.x < b.x + b.width &&
		a.x + a.width > b.x &&
		a.y < b.y + b.height &&
		a.y + a.height > b.y
	);
}

export const updateGamePaddles = function(delta) {
	if (state.board.player2.ai)
		changePlayer2PaddleDirectionAi();
	let nextYposition = state.board.player1.paddle.y + (PADDLE_SPEED * delta * state.board.player1.paddle.direction);
	if (nextYposition > 0 && nextYposition + state.board.player1.paddle.height < state.board.height) {
		state.board.player1.paddle.y = nextYposition;
	}
	state.board.context.fillRect(state.board.player1.paddle.x, state.board.player1.paddle.y, state.board.player1.paddle.width, state.board.player1.paddle.height);
	nextYposition = state.board.player2.paddle.y + (PADDLE_SPEED * delta * state.board.player2.paddle.direction);
	if (nextYposition > 0 && nextYposition + state.board.player2.paddle.height < state.board.height) {
		state.board.player2.paddle.y = nextYposition;
	}
	state.board.context.fillRect(state.board.player2.paddle.x, state.board.player2.paddle.y, state.board.player2.paddle.width, state.board.player2.paddle.height);
}

export const changePlayer2PaddleDirectionAi = function() {
	const paddlePosition = state.board.player2.paddle.y
	state.board.player2.paddle.direction = Math.abs(state.board.ball.y - paddlePosition) < 1 ? 0 :
		state.board.ball.y < paddlePosition ? -1 : 1;
}

export const changePlayerPaddleDirections = function(type, code) {
	let direction = state.board.player1.paddle.direction;
	
	if(code === 'KeyW')
	{
		if (type === "keydown")
			state.board.player1.paddle.direction = -1;
		else if (type === "keyup" && direction === -1)
			state.board.player1.paddle.direction = 0
	}
	if(code === 'KeyS')
	{
		if (type === "keydown")
			state.board.player1.paddle.direction = 1;
		else if (type === "keyup" && direction === 1)
			state.board.player1.paddle.direction = 0
	}
	if(state.board.player2.ai)
		return ;
	direction = state.board.player2.paddle.direction;
	if(code === 'ArrowUp')
	{
		if (type === "keydown")
			state.board.player2.paddle.direction = -1;
		else if (type === "keyup" && direction === -1)
			state.board.player2.paddle.direction = 0
	}
	if(code === 'ArrowDown')
	{
		if (type === "keydown")
			state.board.player2.paddle.direction = 1;
		else if (type === "keyup" && direction === 1)
			state.board.player2.paddle.direction = 0
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

