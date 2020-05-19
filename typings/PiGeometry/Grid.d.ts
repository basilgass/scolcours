import {GeometryPi, IPoint} from "./GeometryPi";
import {G} from "@svgdotjs/svg.js";

export declare class Grid {
    /**
     * Grid styles
     */
    triangle: (triangleWidth: number) => Grid;
    hexagonal: (hexWidth: number) => Grid;
    orthographic: (x: number, y?: number) => Grid;
    /**
     * Coordinate functions
     */
    getOrigin: () => IPoint;
    setOrigin: (x: number, y: number) => Grid;
    getPoint: (direction: IPoint, origin?: IPoint) => IPoint;
    getPointCoordinate: (xPixels: number, yPixels: number) => IPoint;
    /**
     * Intersection points functions
     */
    nearestPoint: (pt: IPoint) => IPoint;
    private _geometryPi;
    private _group;
    private _intersectionsPoints;
    private _gridData;
    private _origin;
    private _axis;
    private _getPointTriangle;
    private _getPointOrtho;
    private _getPointHex;

    constructor(gPi: GeometryPi);

    private _intersections;

    /**
     * Getters and setters
     */
    get intersections(): IPoint[];

    get grid(): G;

    set stroke(value: string);

    get maxX(): number;

    get minX(): number;

    get maxY(): number;

    get minY(): number;

    showIntersections(): Grid;

    hideIntersections(): Grid;

    /**
     * Axis
     */
    showAxis(): Grid;

    /**
     * Grid style options
     */
    color(value: string): Grid;

    width(value: number): Grid;

    dash(value: number | string): Grid;
}
