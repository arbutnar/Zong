import View from "./View.js"

class GameModView extends View {
	getMarkup() {
		return `
			<h1 class="border-bottom border-secondary text-primary-emphasis py-2 mb-4">Game Mode</h1>
			<div class="row">
				<div class="col-12 col-sm-6">
					<a href="/tournament">
						<div>
							<img src="static/images/tournament.png" class="img-fluid" alt="tournament">
						</div>
					</a>
				</div>
				<div class="col-12 col-sm-6">
					<div class="row">
						<div class="col-12">
							<a href="/versus">
								<div>
									<img src="static/images/1vs1.png" class="img-fluid" alt="versus">
								</div>
							</a>
						</div>
						<div class="col-12"></div>
							<a href="/practice">
								<div>
									<img src="static/images/practice.png" class="img-fluid" alt="versus">
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		`;
	}
};

export default new GameModView();