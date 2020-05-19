import {Figure} from "./Figure";
import {GeometryPi, IPoint} from "../GeometryPi";
import {Point} from "./Point";
import {Arc} from "./Arc";
import {Line} from "./Line";

export interface ITriangle {
    [key: string]: number;
}

export declare class Triangle extends Figure {
    private _A;
    private _B;
    private _C;
    private _refA;
    private _refB;
    private _scale;
    private _calculated;
    private _a;
    private _b;
    private _c;
    private _alpha;
    private _beta;
    private _gamma;
    private _solution;
    private _rectangleMark;
    private _rectangleMarkOnly;
    private _arcBAC;
    private _arcCBA;
    private _arcACB;
    private _AB;
    private _BC;
    private _CA;
    private _internalFigures;
    private _numberOfKnownAngles;
    private _numberOfKnownSides;
    private _sidesAreAdjacent;
    private _calculateTriangle3Sides;
    private _calculateTriangleOneSideTwoAngles;
    private _calculateThmSine;
    private _calculateTriangle;
    private _updateInternalPoints;
    private _createAngleMark;
    private _updateAngleMark;

    constructor(geom: GeometryPi, name: string);

    _resetData(): Triangle;

    base(A: Point, B?: Point): Triangle;

    define(data: any): Triangle;

    solution(id: number, doUpdate?: boolean): Triangle;

    update(): Triangle;

    rectangleMark(value: Boolean): Triangle;

    rectangleMarkOnly(value: Boolean): Triangle;

    log(): Triangle;

    hideAll(): Triangle;

    hideAllLabel(exceptPoints?: Boolean): Triangle;

    showAnglesMarks(): Triangle;

    A(): Point;

    B(): Point;

    C(): Point;

    BAC(): Arc;

    ACB(): Arc;

    CBA(): Arc;

    AB(): Line;

    BC(): Line;

    CA(): Line;

    showLabelData(onlyUserData?: Boolean): Triangle;

    showCalculated(fix?: number, fixAngle?: number): Triangle;

    getDimensions(): ITriangle;

    coordinateA(A?: Point, angleBase?: number): IPoint;

    coordinateB(A?: Point, angleBase?: number): IPoint;

    coordinateC(A?: Point, angleBase?: number): IPoint;
}
