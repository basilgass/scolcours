import {Text} from "@svgdotjs/svg.js";
import {GeometryPi} from "./GeometryPi";
import {Point} from "./figures/Point";

export declare class Label {
    private _geometryPi;
    private _textPoint;
    private _textDistance;
    private _textFunction;
    private _textFunctionArgs;
    private _textRounding;
    private _textScale;
    private _position;
    private _offset;
    private _distance;
    private _x;
    private _y;

    constructor(gPi: GeometryPi, text: string);

    private _text;

    get text(): string;

    set text(value: string);

    private _shape;

    get shape(): Text;

    get w(): number;

    get h(): number;

    update(): void;

    updateText(): void;

    greekLetter(letter: string): string;

    appendCoordinates(): void;

    appendDistance(): void;

    move(x: number, y: number): Label;

    show(): Label;

    hide(): Label;

    top(): Label;

    bottom(): Label;

    center(): Label;

    left(): Label;

    right(): Label;

    middle(): Label;

    resetPos(): Label;

    distance(value: number): Label;

    font(fontName: string): Label;

    fontSize(fontSize: string): Label;

    offset(x: number, y: number): Label;

    polar(radius: number, angle: number): Label;

    showCoordinates(p: Point, round?: number, scale?: number): Label;

    showDistance(p1: Point, p2: Point, round?: number, scale?: number): Label;

    showTextFunction(fn: Function, fnArgs: {}): this;
}
