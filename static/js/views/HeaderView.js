import View from "./View.js";

class HeaderView extends View {

	constructor() {
		super();
		this._parentElement = document.querySelector('#header');
	}

	_generateMarkup() {
		return `
			<nav id="header-navbar" class="navbar py-3 px-4 fixed-top bg-white border-bottom">
				<a href="/" id="site-title" class="nav-item display-2 link-body-emphasis text-decoration-none" data-link>ZONG</a>
				<div class="nav-item navbar">
					<ul id="auths-header" class="nav align-items-center justify-content-lg-end me-5">
						<li class="nav-item d-flex">
							<form method="POST" action="" class="auth-form form-inline d-none d-lg-inline-flex align-items-center">
								<section class="form-group me-2">
									<div class="input-group me-sm-2 input-group-sm">
										<input type="text" name="username" placeholder="Username" tabindex="1" title="Insert your username" class="form-control username-input" autocomplete="off" required>
									</div>
								</section>
								<section class="form-group me-2">
									<div class="input-group me-sm-2 input-group-sm">
										<input type="password" name="password" placeholder="Password" tabindex="2" title="Insert your password" class="form-control password-input" required>
									</div>
								</section>
								<section class="form-group form-check">
									<input type="checkbox" name="session" value="true" tabindex="3" title="mantain Session" class="form-check-input">
								</section>
								<input type="submit" value="Auth" title="Auth" tabindex="4" class="auth-header btn btn-outline-primary btn-sm">
							</form>
						</li>
						<li class="nav-item">
							<button tabindex="5" class="auth-42 btn btn-primary sign-in-link btn-sm d-none d-lg-inline-flex ms-2">Auth.42</button>
						</li>
					</ul>
					<a id="offcanvas-toggler" class="link-body-emphasis text-decoration-none dropdown-toggle">
						<svg id="dropdown-toggle-svg" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
						</svg>
					</a>
					<div id="offcanvas-nav" class="offcanvas offcanvas-end fs-3 px-3 d-none" data-bs-backdrop="false" data-bs-scroll="true" data-bs-auto-close="outside">
						<div id="auths-offcanvas" class="d-lg-none">
							<form action="" class="auth-form mt-3 mb-2">
								<section class="form-group mb-3">
									<div class="input-group">
										<span class="input-group-text px-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
												<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
											</svg>
										</span>
										<input type="text" name="username" placeholder="Username" tabindex="1" title="Insert your Username" class="form-control username-input" autocomplete="off" required>
									</div>
								</section>
								<section class="form-group mb-3">
									<div class="input-group">
										<span class="input-group-text px-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
												<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
											</svg>
										</span>
										<input type="password" name="password" placeholder="Password" tabindex="2" title="Insert your Password" class="form-control password-input" required>
									</div>
								</section>
								<section class="form-check form-control-sm pb-2">
									<input id="check-session" type="checkbox" name="session" value="true" tabindex="3" title="mantain Session" class="form-check-input">
									<label for="check-session" class="form-check-label text-muted">mantain Session</label>
								</section>
								<input type="submit" value="Auth" title="Auth" tabindex="3" class="auth btn btn-outline-primary w-100">
							</form>
							<button tabindex="4" class="auth-42 btn btn-primary w-100">Auth.42</button>
							<hr>
						</div>
						<ul id="navlist-views" class="d-none navbar-nav navbar-list text-uppercase text-center">
							<li class="nav-item">
								<a href="./account" data-link class="nav-link fs-5">Account</a>
							</li>
							<li class="nav-item border-top">
								<a href="./other-users" data-link class="nav-link fs-5">Other Users</a>
							</li>
							<li class="nav-item border-top">
								<a href="./messages" data-link class="nav-link fs-5">Messages</a>
							</li>
							</li>
							<li class="nav-item border-top">
								<a href="/dashboard" data-link class="nav-link fs-5">Dashboard</a>
							</li>
							<li class="nav-item border-top border-bottom">
								<a href="/security" data-link class="nav-link fs-5">Security</a>
							</li>
							<li class="nav-item border-top border-bottom">
								<a id="log-out" href="/" class="nav-link fs-5">Log out</a>
							</li>
						</ul>
						<div class="dropdown text-center">
							<a href="#" data-bs-toggle="dropdown" role="button" class="nav-link dropdown-toggle text-nowrap text-uppercase fs-5">
								<img src="./static/images/united-kingdom.svg" alt="mdo" width="16" height="16" class="me-2">
								<span>English</span>
							</a>
							<ul class="dropdown-menu w-100 text-center">
								<li><h6 class="d-none d-lg-block dropdown-header dropdown-item">Choose a language</h6></li>
								<li>
									<a href="/de/Magic" title="Italiano" rel="nofollow" class="dropdown-item text-uppercase hvr-sweep-to-right">
										<img src="./static/images/italy.svg" alt="mdo" width="16" height="16" class="me-2">
										<span>Italiano</span>
									</a>
								</li>
								<li>
									<a href="/fr/Magic" title="Français" rel="nofollow" class="dropdown-item text-uppercase hvr-sweep-to-right">
										<img src="./static/images/france.svg" alt="mdo" width="16" height="16" class="me-2">
										<span>Français</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		`;
	}

	toggleForms() {
		document.querySelector('#auths-header').classList.toggle("d-none");
		document.querySelector('#auths-offcanvas').classList.toggle("d-none");
		document.querySelector('#navlist-views').classList.toggle("d-none");
	}

	toggleOffcanvas() {
		document.querySelector('#offcanvas-nav').classList.toggle('show');
		document.querySelector('#offcanvas-nav').classList.toggle('d-none');
		document.querySelector('.screen-overlay').classList.toggle('d-none');
	}

	addHandlerOffcanvas() {
		document.querySelector('#offcanvas-toggler').addEventListener('click', e => {
			e.preventDefault();
			this.toggleOffcanvas();
		});
		document.querySelector('.screen-overlay').addEventListener('click', () => this.toggleOffcanvas());
		document.querySelector('#offcanvas-nav').addEventListener("click", e => {
			const link = e.target.closest("[data-link]");
			if (!link)
				return ;
			this.toggleOffcanvas();
		});
	}
};

export default new HeaderView();