import {Figure} from "./Figure";
import {GeometryPi} from "../GeometryPi";
import {Point} from "./Point";

export declare class Line extends Figure {
    private _conditionRule;
    private _getCoordinates;
    private _getLinePosAtX;
    private _calculateSlope;
    private _calculateSlopePerpendicular;

    constructor(geom: GeometryPi, name: string, p1: Point, p2: Point, conditionRule?: {
        rule: string;
        through: Point;
        k?: string;
    });

    private _p1;

    get p1(): Point;

    set p1(value: Point);

    private _p2;

    get p2(): Point;

    set p2(value: Point);

    private _stopP1;

    get stopP1(): Boolean;

    set stopP1(value: Boolean);

    private _stopP2;

    get stopP2(): Boolean;

    set stopP2(value: Boolean);

    private _arrowStart;

    get arrowStart(): Boolean;

    set arrowStart(value: Boolean);

    private _arrowEnd;

    get arrowEnd(): Boolean;

    set arrowEnd(value: Boolean);

    private _slope;

    get slope(): number;

    get slopePerendicular(): number;

    get size(): number;

    get direction(): number;

    update(): Line;

    segment(): Line;

    vector(): Line;

    halfRule(): Line;

    line(): Line;

    perpendicular(through?: Point): Line;

    moveLabel(): Line;

    labelDistance(round?: number, scale?: number): Line;

    isColinar(L: Line): boolean;

    isSame(L: Line): boolean;

    isOpposed(L: Line): boolean;

    isPerpendicular(L: Line): Boolean;
}
