import {Figure} from "./Figure";
import {GeometryPi} from "../GeometryPi";
import {Point} from "./Point";

export declare class Polygon extends Figure {
    private _rectangleMark;
    private _angleMark;
    private _angleArcs;
    private _getPath;

    constructor(geom: GeometryPi, name: string);

    private _points;

    get points(): Point[];

    setPoints(...points: Point[]): Polygon;

    addPoints(...points: Point[]): Polygon;

    update(): Polygon;

    angleMark(value: Boolean): Polygon;

    updateAngleMark(): Polygon;

    rectangleMark(value: Boolean): Polygon;

    logAngles(): void;
}
