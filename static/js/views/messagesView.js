import View from "./View.js"

class MessagesView extends View {
	getMarkup() {
		return `
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