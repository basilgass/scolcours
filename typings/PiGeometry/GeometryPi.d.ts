import {Svg} from "@svgdotjs/svg.js";
import "@svgdotjs/svg.draggable.js";
import {Grid} from "./Grid";
import {Figure} from "./figures/Figure";
import {Point} from "./figures/Point";

export interface IPoint {
    name?: string;
    x: number;
    y: number;
}

export interface IGeomDefaults {
    font: {
        size: string;
        family: string;
    };
}

export declare class GeometryPi {
    private _container;
    private _svgWrapper;
    private _points;
    private _origin;
    private _checkPointName;
    private _getNextPointName;
    private _getNextPointNameIndex;

    constructor(containerID: string | HTMLElement, width: number, height: number);

    private _draw;

    get draw(): Svg;

    private _width;

    get width(): number;

    private _height;

    get height(): number;

    private _grids;

    get grids(): Grid[];

    private _figures;

    get figures(): Figure[];

    private _defaults;

    get defaults(): IGeomDefaults;

    get mainGrid(): Grid;

    get secondaryGrid(): Grid;

    set defaultFontSize(value: string);

    set defaultFontFamily(value: string);

    dev(): GeometryPi;

    update(): GeometryPi;

    touchDisable(all?: Boolean): GeometryPi;

    touchEnable(): GeometryPi;

    showGridOrtho(x: number, y?: number): GeometryPi;

    showGridOrthoN(x: number, y?: number): GeometryPi;

    showGridTri(triangleWidth: number): GeometryPi;

    showGridHex(hexWidth: number): GeometryPi;

    setLabelSize(value: string): GeometryPi;

    setLabelFamily(value: string): GeometryPi;

    showPointsLabel(show?: Boolean): GeometryPi;

    showLabels(show?: Boolean): GeometryPi;

    showPointsShape(show?: Boolean): GeometryPi;

    addPoint(x?: number | string, y?: number, name?: string): Point;

    addSPoint(name: string, x: number, y: number): Point;

    addCPoint(name: string): Point;

    /**
     * Add a figure using shortcuts
     * Can be chained
     * @param constructionString
     */
    /**
     * Get a point by it's name
     * @param name
     */
    getPoint(name: string | Point): Point;

    getFigure(name: string): Figure;

    segment(A: string | Point, B: string | Point): Figure;

    vector(A: string | Point, B: string | Point): Figure;

    perpendicular(A: string | Point, B: string | Point, through?: string | Point): Figure;

    circle(center: string, radius: string[] | Point[] | number, name?: string): Figure;

    arc(center: string, radius: string[] | Point[] | number, angles: string[] | Point[] | number[], name?: string): Figure;

    triangle(name: string): Figure;

    polygon(...points: string[] | Point[]): Figure;

    get(): Figure;
}
