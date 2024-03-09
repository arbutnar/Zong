import NavView from "./NavView.js"

class MessagesView extends NavView {

	constructor() {
		super();
	}

	_generateMarkup() {
		return `
			${super._generateMarkup(this.constructor.name)}
			<div class="col-12 col-md-9 mt-5 ps-3">
				<form method="POST">
					<div class="row">
						<label for="username" class="col-sm-2 col-form-label text-primary-emphasis">message</label>
						<div class="input-group col-sm-10">
							<input class="form-control" type="text" id="username" placeholder="Username..." required>
							<input type="submit" value="CONTACT" id="" class="btn btn-primary">
						</div>
						
					</div>
				</form>
				<form method="POST">
					<div class="row">
						<label for="username" class="col-sm-2 col-form-label text-primary-emphasis">message</label>
						<div class="input-group col-sm-10">
							<input class="form-control" type="text" id="username" placeholder="Username..." required>
							<input type="submit" value="CONTACT" id="" class="btn btn-primary">
						</div>
						
					</div>
				</form>
				<form method="POST">
					<div class="row">
						<label for="username" class="col-sm-2 col-form-label text-primary-emphasis">message</label>
						<div class="input-group col-sm-10">
							<input class="form-control" type="text" id="username" placeholder="Username..." required>
							<input type="submit" value="CONTACT" id="" class="btn btn-primary">
						</div>
						
					</div>
				</form>
				<form method="POST">
					<div class="row">
						<label for="username" class="col-sm-2 col-form-label text-primary-emphasis">message</label>
						<div class="input-group col-sm-10">
							<input class="form-control" type="text" id="username" placeholder="Username..." required>
							<input type="submit" value="CONTACT" id="" class="btn btn-primary">
						</div>
						
					</div>
				</form>
			</div>
		</div>`;
	}
};

export default new MessagesView();