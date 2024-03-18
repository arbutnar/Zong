import View from "./View.js";

class GameView extends View {

	constructor() {
		super();
	}

	addHandlerView(paddleHandler) {
		["keydown", "keyup"].forEach(event => document.addEventListener(event, paddleHandler));
	}

	_generateMarkup() {
		return `
			<div class="w-100 d-flex justify-content-center">
				<canvas id="board" height="400px" width="600px" class="bg-dark text-center"></canvas>
			</div>
		`;
	}
};

export default new GameView();