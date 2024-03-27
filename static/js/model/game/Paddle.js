import GameObj from "./GameObj.js";

export default class extends GameObj{

	constructor() {
		super();
		this._width = 0;
		this._height = 0;
		this._side = undefined;
		this._ai = false;
		this._score = {domElement: undefined, value: 0};
	}

	init(canvas, info) {
		super.init(info);
		this._score = {domElement: info.score.domElement,
			value: 0,
		};
		this._side = info.side;
		this.resize(canvas);
		this.reset(canvas);
	}

	resize(canvas) {
		super.resize(canvas);
		this._height = canvas.width * this._sizeRatio / 100;
		this._width = canvas.width / 100;
		const x = canvas.width * 2 / 100;
		this._x = this._side === "left" ? x : canvas.width - this._width - x;
		if (this._y + this._height > canvas.height)
			this._y = canvas.height - this._height;
	}

	reset(canvas) {
		this._y = canvas.height / 2 - this._height / 2;
		this._direction = { x: 0, y: 0 };
	}
	

	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	get position() {
		return this._position;
	}
	get ai() {
		return this._ai;
	}
	get score() {
		return this._score;
	}

	set width(value) {
		this._width = value;
	}
	set height(value) {
		this._height = value;
	}
	set score(value) {
		this._score = value;
	}
	set ai(value) {
		this._ai = value;
	}
	set position(value) {
		this._position = value;
	}
}