
export class Shape {
    constructor(private _x: number, private _y:number) {
    }

    private get x(): number {
        return this._x;
    }

    private get y(): number {
        return this._y;
    }

    private set x(value: number) {
        this._x = value;
    }

    private set y(value: number) {
        this._y = value;
    }
}