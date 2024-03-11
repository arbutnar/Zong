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
						<a href="/tournament" data-link>
							<div class="banner position-relative">
								<div class="tornament_banner overlay img-fluid w-100 d-flex flex-column justify-content-center align-items-center text-white">
									<h3 class="text-uppercase text-center">Tournament</h3>
									<h4 class="mode-description">Compite against multiple players</h4>
								</div>
								<img src="static/images/tournament.png" class="img-fluid" alt="tournament">
							</div>
						</a>
					</div>
					<div class="col-12 col-sm-6 p-0">
						<div class="col-12 pb-2">
							<a href="/versus" data-link>
								<div class="banner position-relative">
									<div class="versus_banner overlay img-fluid w-100 d-flex flex-column justify-content-center align-items-center text-white">
										<h3 class="text-uppercase text-center">1 versus 1</h3>
										<h4 class="mode-description">Challenge another player</h4>
									</div>
									<img src="static/images/1vs1.png" class="img-fluid" alt="versus">
								</div>
							</a>
						</div>
						<div class="col-12">
							<a href="/practice" data-link>
								<div class="banner position-relative">
									<div class="practice_banner overlay img-fluid d-flex flex-column justify-content-center align-items-center text-white">
										<h3 class="text-uppercase text-center">Practice</h3>
										<h4 class="mode-description">Train your skills</h4>
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
	};
};

export default new MainView();