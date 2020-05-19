import {Marker} from "@svgdotjs/svg.js";
import {GeometryPi} from "../GeometryPi";
import {Point} from "./Point";
import {Label} from "../Label";

export declare class Figure {
    private _marker;
    private _labelText;
    private _createMarker;

    constructor(geom: GeometryPi, name: string);

    private _name;

    get name(): string;

    set name(value: string);

    private _shape;

    get shape(): any;

    set shape(value: any);

    private _geometryPi;

    /**
     * Getter and setter
     */
    get geometryPi(): GeometryPi;

    private _label;

    get label(): Label;

    private _isPoint;

    get isPoint(): Boolean;

    set isPoint(value: Boolean);

    private _isVirtual;

    get isVirtual(): Boolean;

    set isVirtual(value: Boolean);

    get markerEnd(): Marker;

    get markerStart(): Marker;

    draggable(): Figure;

    update(): Figure;

    distance(p1: Point, p2: Point): number;

    makeDraggable(): Figure;

    moveLabel(): Figure;

    show(): Figure;

    hide(): Figure;

    showLabel(show?: Boolean): Figure;

    hideLabel(): Figure;

    showShape(show?: Boolean): Figure;

    hideShape(): Figure;

    labelText(value: string, show?: Boolean): Figure;

    labelFont(fontName: string): Figure;

    labelFontSize(fontSize: string): Figure;

    labelPos(pos: string): Figure;

    labelTop(): Figure;

    labelBottom(): Figure;

    labelCenter(): Figure;

    labelLeft(): Figure;

    labelRight(): Figure;

    labelMiddle(): Figure;

    labelDistance(value: number): Figure;

    labelReset(): Figure;

    labelOffset(dx: number, dy: number): Figure;

    labelPolar(radius: number, angle: number): Figure;

    labelFunction(fn: Function, fnArgs: {}): Figure;

    setVirtual(value?: Boolean): Figure;

    /**
     * Visual style options
     */
    color(value: string): Figure;

    width(value: number): Figure;

    dash(value: number | string): Figure;

    nofill(): Figure;

    fill(value: string): Figure;
}
