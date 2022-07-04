import { Point } from './Point';

export abstract class Shape {
    protected points: Point[]
    protected color: string
    protected filled: boolean

    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)

    constructor(points: Point[], ...args: any[]) {
        if (points.length < 3) throw new Error('The minimum amount of points is three.')
        this.points = points
        if (args.length === 2) {
            this.color = args[0]
            this.filled = args[1]
        } else {
            this.color = 'green'
            this.filled = true
        }
    }

    toString() {
        const pointsString = this.points.map((point) => point.toString()).join(', ')
        const isFilledString = this.filled ? 'filled' : 'not filled'
        return `A Shape with color of ${this.color} and ${isFilledString}. Points: ${pointsString}.`
    }

    getPerimeter() {
        const sides = this._getSides()
        return sides.reduce((acc, current)=> acc + current)
    }

    protected _getSides() {;
        const res: number[] = []
        for (let i = 0; i < this.points.length; i++) {
            res.push(this.points[i].distance(this.points[(i + 1) % this.points.length]))
        }
        
        return res
    }

    abstract getType(): string;
}
