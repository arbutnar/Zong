import View from "./View.js";

class MainView extends View {

	constructor() {
		super();
	}

	_generateMarkup() {
		return `
			<div class="d-flex flex-column align-items-center w-100">
				<h1 class="mt-sm-4 mt-sm-3 mt-3 mt-1 text-uppercase fw-normal">Game Mods</h1>
				<div class="banners-cont container-fluid row">
					<div class="col-12 col-sm-6 p-0 pb-2 pb-sm-0 pe-sm-2">
						<div class="banner position-relative ${this._data ? 'd-none' : ''}">
							<div class="tournament-overlay overlay img-fluid w-100 d-flex flex-column justify-content-center align-items-center text-white">
								<h3 id="tournament-title" class="d-flex flex-column align-items-center text-uppercase text-center m-0">
									Tournament
									<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="svg-locket bi bi-lock-fill" viewBox="0 0 16 16">
										<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
									</svg>
								</h3>
								<h4 class="mode-description d-none text-center">Compite against multiple players</h4>
								<h4 class="locked-description d-none text-center">Log in to unlock TOURNAMENT mode</h4>
							</div>
							<img src="static/images/tournament.png" class="img-fluid" alt="tournament">
						</div>
						<div class="unlocked banner position-relative ${this._data ? '' : 'd-none'}">
							<a href="/tournament" data-link>
								<div class="tournament-overlay overlay img-fluid w-100 d-flex flex-column justify-content-center align-items-center text-white">
									<h3 id="tournament-title" class="d-flex flex-column align-items-center text-uppercase text-center m-0">
										Tournament
										<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="svg-locket bi bi-lock-fill" viewBox="0 0 16 16">
											<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
										</svg>
									</h3>
									<h4 class="mode-description d-none text-center">Compite against multiple players</h4>
									<h4 class="locked-description d-none text-center">Log in to unlock TOURNAMENT mode</h4>
								</div>
								<img src="static/images/tournament.png" class="img-fluid" alt="tournament">
							</a>
						</div>
					</div>
					<div class="col-12 col-sm-6 p-0">
						<div class="col-12 pb-2">
							<div class="banner position-relative ${this._data ? 'd-none' : ''}">
								<div class="versus-overlay overlay img-fluid w-100 d-flex flex-column justify-content-center align-items-center text-white">
									<h3 id="versus-title" class="d-flex flex-column align-items-center text-uppercase text-center m-0">
										1 versus 1
										<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="svg-locket bi bi-lock-fill" viewBox="0 0 16 16">
											<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
										</svg>
									</h3>
									<h4 class="mode-description d-none text-center">Challenge another player</h4>
									<h4 class="locked-description d-none text-center">Log in to unlock 1 VERSUS 1 mode</h4>
								</div>
								<img src="static/images/1v1.png" class="img-fluid" alt="versus">
							</div>
							<div class="unlocked banner position-relative ${this._data ? '' : 'd-none'}">
								<a href="/versus" data-game-link>
									<div class="versus-overlay overlay img-fluid w-100 d-flex flex-column justify-content-center align-items-center text-white">
										<h3 id="versus-title" class="d-flex flex-column align-items-center text-uppercase text-center m-0">
											1 versus 1
											<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="svg-locket bi bi-lock-fill" viewBox="0 0 16 16">
												<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
											</svg>
										</h3>
										<h4 class="mode-description d-none text-center">Challenge another player</h4>
										<h4 class="locked-description d-none text-center">Log in to unlock 1 VERSUS 1 mode</h4>
									</div>
									<img src="static/images/1v1.png" class="img-fluid" alt="versus">
								</a>
							</div>
						</div>
						<div class="col-12">
							<a href="/practice" data-game-link>
								<div class="unlocked banner position-relative">
									<div class="practice-overlay overlay img-fluid d-flex flex-column justify-content-center align-items-center text-white">
										<h3 class="mode-title text-uppercase text-center">Practice</h3>
										<h4 class="mode-description d-none text-center">Train your skills</h4>
									</div>
									<img src="static/images/practice.png" class="img-fluid" alt="practice">
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	toggleContent() {
		document.querySelector('#auths-header').classList.toggle("d-none");
		document.querySelector('#auths-offcanvas').classList.toggle("d-none");
		document.querySelector('#navlist-views').classList.toggle("d-none");
	}

	addHandlerRouting(handler) {
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
	}

	addHandlerAuth(handlerLogIn, handlerLogOut) {
		const forms = document.querySelectorAll('.auth-form');
		forms.forEach(form => form.addEventListener("submit", e => {
			e.preventDefault();
			// if (e.target === forms[1])
			// 	document.querySelectorAll('#offcanvas-nav, .offcanvas-backdrop').forEach(el => {
			// 		el.classList.toggle('show');
			// 	});
			const formData = new FormData(form);
			const data = Object.fromEntries(formData);
			handlerLogIn(data);
		}));
		document.querySelector('#log-out').addEventListener("click", e => {
			e.preventDefault();
			// document.querySelectorAll('#offcanvas-nav, .offcanvas-backdrop').forEach(el => {
			// 	el.classList.toggle('show');
			// });
			handlerLogOut();
		});
	}
};

export default new MainView();