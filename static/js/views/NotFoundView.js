import View from "./View.js"

class NotFoundView extends View {
	
	constructor() {
		super();
	}

	_generateMarkup() {
		return `
			<div class="d-flex flex-column justify-content-center align-items-center py-3 w-100 h-100">
				<div>
					<h1>404 Not Found</h1>
					<hr class="m-0">
					<p class="m-0 text-center">Zong/1.1</p>
				</div>
			</div>
		`;
	}
};

export default new NotFoundView();
