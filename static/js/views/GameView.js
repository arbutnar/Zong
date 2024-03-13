import View from "./View.js";

class GameView extends View {

	constructor() {
		super();
		this.ball = {
			this.ballElem = document.getElementById("ball"),
		};
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
				return ;
			requestAnimationFrame(handler);
		});
	}

	_generateMarkup(data) {
		return `
			<style>
			main {
				margin: 0;
				background-color: #264653;
				overflow: hidden;
			  }
			  
			  .paddle {
				--position: 50;
			  
				position: absolute;
				background-color: #e63946;
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
				background-color: #fff;
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
				color: #fff;
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
				border-right: .5vh solid #fff;
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