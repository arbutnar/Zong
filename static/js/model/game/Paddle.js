import GameObj from "./GameObj.js";

export default class extends GameObj{

	constructor() {
		super();
		this._width = 0;
		this._height = 0;
		this._size = 0;
		this._side = undefined;
		this._ai = false;
		this._score = {domElement: undefined, value: 0};
	}

	init(canvas, info) {
		super.init(canvas, info);
		this._score = {domElement: info.score.domElement,
			value: 0,
		};
		this._side = info.side;
		this._size = info.size;
		this._height = this._canvas.height * this._size / 100;
		this._width = this._canvas.width / 100;
		const x = this._canvas.width * 2 / 100;
		this._x = this._side === "left" ? x : this._canvas.width - this._width - x;
		this.reset(this._canvas);
	}

	reset() {
		this._y = this._canvas.height / 2 - this._height / 2;
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