class MainView {
	_parentElement = document.querySelector('main');

	addHandlerView(handler) {
		document.addEventListener("DOMContentLoaded", handler);
		window.addEventListener("popstate", handler);
		document.body.addEventListener("click", e => {
			const link = e.target.closest("[data-link]");
			if (!link)
				return ;
			e.preventDefault();
			history.pushState(null, null, link.href);
			handler();
		});
		window.addEventListener("popstate", handler);
	};

	render(view, data) {
		const markup = view.generateMarkup(data);
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}
};

export default new MainView();