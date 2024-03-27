import NavView from "./NavView.js"

class AccountView extends NavView {
	
	constructor() {
		super();
	}

	_generateMarkup() {
		return `
			${super._generateMarkup(this.constructor.name)}
				<div class="col-12 col-md-9 mt-5 ps-3">
					<h2 class="py-2 text-primary-emphasis">${this._data?.username ?? ''}</h2>
					<div class="row">
						${this._data?.name ? `
							<div class="col-md-6 col-12 row">
								<div class="col mb-0 d-flex align-items-center text-secondary text-uppercase fs-6">
									Full Name:
								</div>
								<div class="col fs-5">
									<span>${this._data.name}</span>
								</div>
							</div>`
						: `
							<form method="POST" action="" class="col-md-6 col-12 form-inline py-2 row">
								<label for="acc-fname" class="col mb-md-0 d-flex align-items-center text-secondary text-uppercase fs-6">Full Name:</label>
								<input type="text" id="acc-fname" name="firstName" class="col text-secondary rounded-1 border" autocomplete="off" style="caret-color: transparent;">
							</form>`
						}
					</div>
					<div class="row">
						<div class="d-none">
							<div class="col-12 col-md-4 col-xl-3 mb-2 mb-md-0 d-flex align-items-center text-secondary text-uppercase fs-6">
								email
							</div>
							<div class="col-12 col-md-8 col-xl-9 text-primary-emphasis fs-5 fw-light text-truncate">
								<span>${this._data?.email ?? ''}</span>
							</div>
						</div>
						<form method="POST" action="" class="col-md-6 col-12 form-inline py-2 row">
							<label for="acc-email" class="col mb-md-0 d-flex align-items-center text-secondary text-uppercase" style="font-size: 90%">Email:</label>
							<input type="text" id="acc-email" name="Email" class="col text-center text-secondary rounded-1 border" autocomplete="off" style="caret-color: transparent;">
						</form>
						</div>
					<hr>
					<div class="row pt-2">
						<div class="col-12 col-md-4 col-xl-3 mb-2 mb-md-0 d-flex align-items-center text-secondary text-uppercase" style="font-size: 85%">
							profile picture
						</div>
						<div class="col-12 col-md-8 col-xl-9 text-primary-emphasis dd">
							<div class="d-flex align-items-center justify-content-between">
								<div>
									<img src=${this._data?.profileImage ?? ''} class="rounded-circle" style="width: 70px;" alt="Avatar" />
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
										<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"./>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div class="row py-2">
						<div class="col-12 col-md-4 col-xl-3 mb-2 mb-md-0 d-flex align-items-center text-secondary text-uppercase" style="font-size: 85%">
							Alias
						</div>
						<div class="col-12 col-md-8 col-xl-9 text-primary-emphasis fs-5 fw-light">
							<div class="d-flex align-items-center justify-content-between">
								<div class="text-truncate">
									<span>${this._data?.alias ?? ''}</span>
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
										<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"./>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	}
};

export default new AccountView();