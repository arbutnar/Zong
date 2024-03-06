class DashboardView {
	getMarkup() {
		return `
			<h1 class="border-bottom border-secondary text-primary-emphasis py-2 mb-0">Dashboard</h1>
			<div class="row">
				<div class="col-md-3 d-none d-md-flex fw-bold text-primary-emphasis">
					<nav class="navbar flex-column justify-content-start w-100 border-end">
						<a href="./account.html" class="nav-link w-100 p-2">
							<div class="d-flex align-items-center ps-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"./>
								</svg>
								<span class="ms-2">Account</span>
							</div>
						</a>
						<a href="./dashboard.html" class="nav-link w-100 p-2 bg-body-tertiary border-start border-primary border-4 text-primary">
							<div class="d-flex align-items-center ps-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
									<path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"./>
								</svg>
								<span class="ms-2">Dashboard</span>
							</div>
						</a>
						<hr class="w-100 border">
						<a href="./other_users.html" class="nav-link w-100 p-2">
							<div class="d-flex align-items-center ps-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"./>
								</svg>
								<span class="ms-2">Other Users</span>
							</div>
						</a>
							<a href="./messages.html" class="nav-link w-100 p-2">
							<div class="d-flex align-items-center ps-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"./>
								</svg>
								<span class="ms-2">Messages</span>
							</div>
						</a>
						<hr class="w-100 border">
						<a href="./security.html" class="nav-link w-100 p-2">
							<div class="d-flex align-items-center ps-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
									<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"./>
								</svg>
								<span class="ms-2">Security</span>
							</div>
						</a>
					</nav>
				</div>
				<div class="col-12 col-md-9 mt-3">
					<h2 class="pt-2 text-primary-emphasis">User summary</h2>
					<p class="fst-italic">User Game stats and Dashboards.</p>
					<section class="d-flex flex-column align-items-center w-100 mt-5 border-bottom pb-4">
						<div class="container row align-items-baseline">
							<h3 class="col-4 text-end text-uppercase mb-0">level :</h3>
							<span class="col-1"></span>
							<span id="level" class="col-1 text-center fs-3 border border-3 border-primary rounded-pill">42</span>
							<h6 class="col-3 text-end text-uppercase mb-0"> with a with rate of</h6>
							<span id="win-rate" class="col-1 fs-3 border border-3 border-primary rounded-pill">24%</span>
						</div>
					</section>
					<h5 class="pt-2 text-primary-emphasis pt-3 text-center">Overview</h5>
					<p class="fst-italic text-center">subscription date: <span>02/11/2024</span>.</p>
					
				</div>
			</div>
		`;
	}
};

export default new DashboardView();