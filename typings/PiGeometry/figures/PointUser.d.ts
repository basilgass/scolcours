import {GeometryPi} from "../GeometryPi";
import {Circle} from "@svgdotjs/svg.js";
import {Grid} from "../Grid";
import {Point} from "./Point";

export declare class PointUser extends Point {
    private _draggable;
    private _dragTick;
    private _afterDrag;

    constructor(geom: GeometryPi, name: string, x: number, y: number);

    private _dragShape;

    get dragShape(): Circle;

    set dragShape(value: Circle);

    private _dragGrid;

    get dragGrid(): Grid;

    private _dragCenter;

    get dragCenter(): PointUser;

    private _dragDistance;

    get dragDistance(): number;

    makeDraggable(options?: {
        [key: string]: any;
    }): Point;

    afterDrag(afterDragFunction: Function): PointUser;

    setDragGrid(grid: Grid): PointUser;

    setDistanceTo(center: PointUser, distance?: number, tick?: number): PointUser;
}
