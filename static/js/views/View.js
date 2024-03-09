export default class {

	constructor() {

	}

	_parentElement = document.querySelector('main');

	_generateMarkup(data) {
		return ``;
	}

	render(data) {
		const markup = this._generateMarkup(data);
		this._parentElement.innerHTML = '';
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
};