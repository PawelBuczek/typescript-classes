import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this._length}`;
    }

    calculateArea(): number {
        return this._width * this._length;
    }
}