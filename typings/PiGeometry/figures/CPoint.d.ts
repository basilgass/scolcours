import {Figure} from "./Figure";
import {GeometryPi} from "../GeometryPi";
import {Point} from "./Point";

export declare class CPoint extends Point {
    private _rule;

    constructor(geom: GeometryPi, name: string);

    update(): Figure;

    middle(p1: Point, p2: Point): CPoint;

    colinear(p1: Point, p2: Point, through: Point, k?: any): CPoint;

    projection(p: Point, p1: Point, p2: Point): CPoint;

    projectionAxis(p: Point, axis: string): CPoint;

    projectionX(p: Point): CPoint;

    projectionY(p: Point): CPoint;

    rectangle(p1: Point, p2: Point, k?: number): this;
}
