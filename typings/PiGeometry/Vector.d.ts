import {IPoint} from "./GeometryPi";
import {Point} from "./figures/Point";

export declare class Vector {
    constructor(x?: number, y?: number);

    private _x;

    get x(): number;

    set x(value: number);

    private _y;

    get y(): number;

    set y(value: number);

    static distance(p1: IPoint, p2: IPoint): number;

    static midPoint(p1: IPoint, p2: IPoint): IPoint;

    from(A: Point, B: Point): Vector;

    clone(): Vector;

    perpendicular(): Vector;

    norme(): number;

    unit(): Vector;

    isNull(): Boolean;

    add(v: Vector): Vector;

    sub(v: Vector): Vector;

    multiply(k: number): Vector;

    opposed(): Vector;
}
