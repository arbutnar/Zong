import View from "./View.js";
import { INITIAL_BALL_VELOCITY } from "../config.js";

class Ball {
	constructor(DomElement) {
		this.DomElement = DomElement;
		this.reset();
	}

	get x() {
		return parseFloat(getComputedStyle(this.DomElement).getPropertyValue("--x"));
	}

	set x(value) {
		this.DomElement.style.setProperty("--x", value);
	}

	get y() {
		return parseFloat(getComputedStyle(this.DomElement).getPropertyValue("--y"));
	}

	set y(value) {
		this.DomElement.style.setProperty("--y", value);
	}

	reset() {
		this.x = 50;
		this.y = 50;
		const heading = Math.random() * (2 * Math.PI);
		this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
		this.velocity = INITIAL_BALL_VELOCITY;
	}

	update(delta) {
		this.x += this.direction.x * this.velocity * delta;
		this.y += this.direction.y * this.velocity * delta;
		const rect = this.DomElement.getBoundingClientRect();

		if (rect.bottom >= document.body.innerHeight || rect.top <= 0)
			this.direction.y *= -1;
		if (rect.right >= document.body.innerWidth || rect.left <= 0)
			this.direction.x *= -1;
	}

}

class GameView extends View {

	constructor() {
		super();
	}

	init() {
		this.ball = new Ball(document.querySelector("#ball"));
	}

	update(delta) {
		this.ball.update(delta);
	}

	addHandlerView(handler) {
		// document.addEventListener("DOMContentLoaded", e => {
		// 	window.requestAnimationFrame(handler);
		// });
		// window.addEventListener("popstate", e => {
		// 	window.requestAnimationFrame(handler);
		// });
		document.body.addEventListener("click", e => {
			const link = e.target.closest("[data-practice]");
			if (!link)
				return;
			handler();
		});
	}

	_generateMarkup(data) {
		return `
			<style>
				*, *::after, *::before {
					box-sizing: border-box;
				}

				:root {
					--hue: 200;
					--saturation: 50%;
					--foreground-color: hsl(var(--hue), var(--saturation), 75%);
					--background-color: hsl(var(--hue), var(--saturation), 20%);
				}

				body {
					margin: 0;
					background-color: var(--background-color);
					overflow: hidden;
				}

				.paddle {
					--position: 50;
				
					position: absolute;
					background-color: var(--foreground-color);
					top: calc(var(--position) * 1vh);
					transform: translateY(-50%);
					width: 1vh;
					height: 10vh;
				}

				.paddle.left {
					left: 1vw;
				}

				.paddle.right {
					right: 1vw;
				}

				.ball {
					--x: 50;
					--y: 50;
				
					position: absolute;
					background-color: var(--foreground-color);
					left: calc(var(--x) * 1vw);
					top: calc(var(--y) * 1vh);
					border-radius: 50%;
					transform: translate(-50%, -50%);
					width: 2.5vh;
					height: 2.5vh;
				}

				.score {
					display: flex;
					justify-content: center;
					font-weight: bold;
					font-size: 7vh;
					color: var(--foreground-color);
				}

				.score > * {
					flex-grow: 1;
					flex-basis: 0;
					padding: 0 2vh;
					margin: 1vh 0;
					opacity: .5;
				}

				.score > :first-child {
					text-align: right;
					border-right: .5vh solid var(--foreground-color);
				}
			</style>
			<div class="container">
				<div class="score">
					<div id="player-score">0</div>
					<div id="computer-score">0</div>
				</div>
				<div class="ball" id="ball"></div>
				<div class="paddle left" id="player-paddle"></div>
				<div class="paddle right" id="computer-paddle"></div>
			</div>
		`;
	}
};

export default new GameView();