import View from "./View.js";

class GameView extends View {

	constructor() {
		super();
	}

	addHandlerView(handler) {
		["keydown", "keyup", "resize"].forEach(event => window.addEventListener(event, handler));
	}

	removeHandlerView(handler) {
		
	}

	_generateMarkup() {
		return `
			<div>
				<div class="row text-center">
					<h1 id="left-score" class="col-6">0</h1>
					<h1 id="right-score" class="col-6">0</h1>
				</div>
				<canvas class="w-100 h-100"></canvas>
			</div>
		`;
	}

	_drawScene(canvas) {
		const context = canvas.domElement.getContext("2d");
		context.fillStyle = canvas.color;
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.strokeStyle = canvas.stroke.color;
		context.lineWidth = canvas.stroke.size;
		context.beginPath();
		context.moveTo(canvas.width / 2, 0);
		context.lineTo(canvas.width / 2, canvas.height);
		context.stroke();
		context.beginPath();
		context.arc(canvas.width / 2, canvas.height / 2, canvas.stroke.radius, 0, Math.PI * 2);
		context.stroke();
	}

	draw(data) {
		const canvas = data.canvas;
		const context = canvas.domElement.getContext("2d");
		const ball = data.ball;
		const p1Paddle = data.player1;
		const p2Paddle = data.player2;
	
		context.clearRect(0, 0, canvas.width, canvas.height);
		this._drawScene(canvas);
		context.beginPath();
		context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
		context.fillStyle = ball.color;
		context.fill();
		context.fillStyle = p1Paddle.color;
		context.fillRect(p1Paddle.x, p1Paddle.y, p1Paddle.width, p1Paddle.height);
		context.fillStyle = p2Paddle.color;
		context.fillRect(p2Paddle.x, p2Paddle.y, p2Paddle.width, p2Paddle.height);
	}
};

export default new GameView();