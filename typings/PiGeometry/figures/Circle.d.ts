import {Figure} from "./Figure";
import {GeometryPi} from "../GeometryPi";
import {Point} from "./Point";

export declare class Circle extends Figure {
    private _center;
    private _radius;

    constructor(geom: GeometryPi, name: string);

    get getRadius(): number;

    get diameter(): number;

    center(center: Point): Circle;

    radius(radius: Point[] | number): Circle;

    update(): Circle;
}
