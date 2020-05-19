import {Figure} from "./Figure";
import {GeometryPi, IPoint} from "../GeometryPi";

export declare class Point extends Figure {
    constructor(geom: GeometryPi, name: string);

    private _x;

    get x(): number;

    set x(value: number);

    private _y;

    get y(): number;

    set y(value: number);

    private _scale;

    get scale(): number;

    set scale(value: number);

    get coord(): IPoint;

    get xCoord(): number;

    get yCoord(): number;

    update(): Point;

    moveLabel(): Point;

    labelCoordinate(round?: number, scale?: number): Point;

    distanceTo(p: Point): number;
}
