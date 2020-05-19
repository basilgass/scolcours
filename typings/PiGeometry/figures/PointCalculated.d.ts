import {GeometryPi} from "../GeometryPi";
import {Point} from "./Point";
import {Triangle} from "./Triangle";

export declare class PointCalculated extends Point {
    private _rule;
    private _triangle;

    constructor(geom: GeometryPi, name: string);

    update(): PointCalculated;

    fromFunction(fn: Function, options: any): PointCalculated;

    middle(p1: Point, p2: Point): PointCalculated;

    colinear(p1: Point, p2: Point, through: Point, k?: any): PointCalculated;

    perpendicular(p1: Point, p2: Point, through: Point, k?: any): PointCalculated;

    polar(origin: Point, angle: any, distance: any): PointCalculated;

    projection(p: Point, p1: Point, p2: Point): PointCalculated;

    fromTriangle(tri: Triangle, abc?: string): PointCalculated;

    projectionAxis(p: Point, axis: string): PointCalculated;

    projectionX(p: Point): PointCalculated;

    projectionY(p: Point): PointCalculated;

    rectangle(p1: Point, p2: Point, k?: number): this;
}
