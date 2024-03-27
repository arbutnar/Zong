import GameObj from "./GameObj.js";

export default class extends GameObj {
	constructor() {
		super();
		this._radius = 0;
	}

	init(canvas, info) {
		super.init(canvas, info);
		this._radius = this._canvas.width * this._size / 100;
		this.reset(canvas);
	}

	reset(canvas) {
		this._x = canvas.width / 2;
		this._y = canvas.height / 2;
		let heading = 0;
		this._direction.x = 0;
		while (Math.abs(this._direction.x) < 0.3)
		{
			heading = Math.random() * (2 * Math.PI);
			this._direction = {x: Math.cos(heading), y: Math.sin(heading)};
		}
	}
	

	get radius() {
		return this._radius;
	}

	set radius(value) {
		this._radius = value;
	}
}