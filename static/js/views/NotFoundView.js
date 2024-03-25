import View from "./View.js"

class NotFoundView extends View {
	
	constructor() {
		super();
		_parentElement = document.querySelector('body');
	}

	_generateMarkup() {
		return `

		`;
	}
};

export default new NotFoundView();
