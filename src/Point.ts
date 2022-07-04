export class Point {
    private x: number
    private y: number

    constructor()
    constructor(x: number, y: number)

    constructor(...point: any[]) {
        if (point.length === 0) {
            this.x = 0
            this.y = 0
        } else {
            this.x = point[0]
            this.y = point[1]
        }
    }

    toString(): string {
        return `(${this.x}, ${this.y})`
    }

    distance(): number;

    distance(x: number, y: number): number;

    distance(point: Point): number;

    distance(...args: any[]) {
        if (args.length === 0) {
            return this._getDistance(this, new Point())
        }
        if (args.length === 1) {
            const point = new Point(args[0].x, args[0].y)
            return this._getDistance(this, point)
        }
        if (args.length === 2) {
            const point = new Point(args[0], args[1])
            return this._getDistance(this, point)
        }
        return 0
    }

    private _getDistance(point1: Point, point2: Point): number {
        return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2)
    }

}
