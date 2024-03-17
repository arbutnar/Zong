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
			<div class="d-flex flex-column align-items-center w-100">
				<h1 class="mt-sm-4 mt-sm-3 mt-3 mt-1 text-uppercase fw-normal">Game mod</h1>
				<div class="container-md px-0 d-flex w-100 justify-content-center">
					<canvas  id="board" height="400px" width="600px" class="bg-dark"></canvas>
				</div>
			</div>
		`;
	}
};

export default new GameView();