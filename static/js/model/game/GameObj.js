export default class {
	constructor() {
		this._x = 0;
		this._y = 0;
		this._size = 0;
		this._speed = 0;
		this._direction = { x: 0, y: 0 };
		this._color = undefined;
		this._canvas = undefined;
	}

	init(canvas, info) {
		this._canvas = canvas;
		this._speed = this.canvas.width * info.speed / 100;
		this._color = info.color;
		this._size = info.size;
	}

	move(delta) {
		this._x += this._direction.x * this._speed * delta;
		this._y += this._direction.y * this._speed * delta;
	}

	get x() {
		return this._x;
	}
	get y() {
		return this._y;
	}
	get size() {
		return this._size;
	}
	get speed() {
		return this._speed;
	}
	get direction() {
		return this._direction;
	}
	get color() {
		return this._color;
	}
	get canvas() {
		return this._canvas;
	}

	set x(value) {
		this._x = value;
	}
	set y(value) {
		this._y = value;
	}
	set size(value) {
		this._size = value;
	}
	set speed(value) {
		this._speed = value;
	}
	set direction(value) {
		this._direction = value;
	}
	set color(value) {
		this._color = value;
	}
	set canvas(value) {
		this._canvas = value;
	}	
}