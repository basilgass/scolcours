import {Figure} from "./Figure";
import {GeometryPi, IPoint} from "../GeometryPi";
import {Point} from "./Point";

export declare class Arc extends Figure {
    private _center;
    private _radius;
    private _angleCoordinates;
    private _startPoint;
    private _endPoint;
    private _startAngle;
    private _endAngle;
    private _theRadius;
    private _markAngle;
    private _square;
    private _sector;
    private _labelDistanceToCenter;
    private _describeSquare;
    private _describeArc;

    constructor(geom: GeometryPi, name?: string);

    private _angle;

    get angle(): number;

    get getRadius(): number;

    get isSquare(): Boolean;

    center(center: Point): Arc;

    radius(radius: Point[] | number): Arc;

    angleABC(angles: Point[]): Arc;

    angleStartStop(start: number, stop: number): Arc;

    markAngle(): Arc;

    marker(pos?: string, enable?: Boolean): Arc;

    square(enable?: Boolean): Arc;

    sector(enable?: Boolean): Arc;

    moveLabel(): Arc;

    /**
     * Get coordinate by radius / angle
     * Reference: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
     * @param centerX
     * @param centerY
     * @param radius
     * @param angleInDegrees
     */
    polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): IPoint;

    cartesianToAngle(origin: Point, handle: Point): number;

    getAngles(): {
        startAngle: number;
        endAngle: number;
    };

    getPath(): string;

    update(): Arc;
}
