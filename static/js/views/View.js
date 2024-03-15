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

	update(data) {
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
};