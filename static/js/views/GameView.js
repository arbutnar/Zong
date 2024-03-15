import View from "./View.js";

class GameView extends View {

	constructor() {
		super();
	}

	update(data) {
		//data.ball.domElement.style.setProperty("--x", data.ball.x);
		//data.ball.domElement.style.setProperty("--y", data.ball.y);
		this._data = data;
		const newMarkup = this._generateMarkup();
		const newDom = document.createRange().createContextualFragment(newMarkup);
		const newElements = Array.from(newDom.querySelectorAll('*'));
		const currElements = Array.from(this._parentElement.querySelectorAll('*'));

		newElements.forEach((newEl, i ) => {
			const currEl = currElements[i];
			if (!newEl.isEqualNode(currEl) && !newEl.firstElementChild)
			currEl.innerHTML = newEl.innerHTML;
	});
}

addHandlerView(handler, paddleHandler) {
	
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
		
	document.addEventListener("keydown", paddleHandler);
	document.addEventListener("keyup", paddleHandler);
}

	_generateMarkup() {
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

				main {
					margin: 0;
					background-color: var(--background-color);
					overflow: hidden;
				}

				.paddle {
					position: absolute;
					background-color: var(--foreground-color);
					top: calc(var(--position) * 1vh);
					transform: translateY(-50%);
					width: 1vh;
					height: 10vh;
				}
				
				.paddle.left {
					--position: ${this._data.player1.paddle.position};
					left: 1vw;
				}
				
				.paddle.right {
					--position: ${this._data.player2.paddle.position};
					right: 1vw;
				}

				.ball {
					--x: ${this._data.ball.x};
					--y: ${this._data.ball.y};
				
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
					<div id="player1-score">${this._data.player1.score}</div>
					<div id="player2-score">${this._data.player2.score}</div>
				</div>
				<div class="ball" id="ball"></div>
				<div class="paddle left" id="player1-paddle"></div>
				<div class="paddle right" id="player2-paddle"></div>
			</div>
		`;
	}
};

export default new GameView();