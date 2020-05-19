import {GeometryPi} from "./GeometryPi";

export declare class Axis {
    private _geometryPi;
    private _grid;
    private _xAxis;
    private _yAxis;
    private _origin;

    constructor(gPi: GeometryPi);

    show(): Axis;
}
