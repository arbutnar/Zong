export default class {
	
	_parentElement = document.querySelector('main');
	_data = undefined;

	constructor() {

	}

	_generateMarkup(data) {
		return ``;
	}

	render(data) {
		this._data = data;
		const markup = this._generateMarkup(data);
		this._parentElement.innerHTML = '';
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
};