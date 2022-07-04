import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(pointA: Point, pointB: Point, pointC: Point)
    constructor(pointA: Point, pointB: Point, pointC: Point, color: string, filled: boolean)

    constructor(pointA: Point, pointB: Point, pointC: Point, ...args: any[]) {
        const points = [pointA, pointB, pointC]
        if (args.length === 2) {
            super(points, args[0], args[1])
        } else {
            super(points)
        }
    }

    toString(): string {
        return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`
    }

    getType(): string {
        const sides = this._getSides()
        
        if (this._isEqual(sides[0], sides[1]) && this._isEqual(sides[1], sides[2])) {
            return 'equilateral triangle'
        }
        if (this._isEqual(sides[0], sides[1]) || this._isEqual(sides[1], sides[2]) || this._isEqual(sides[0], sides[2])) {
            return 'isosceles triangle'
        }
        return 'scalene triangle'
    }

    private _isEqual(a: number, b: number) {
        const tolerence = 0.001
        return Math.abs(a - b) < tolerence
    }

}
