/**
 * Vector module contains everything necessary to handle 2d or 3d vectors.
 * @module Vector
 */
import {Fraction} from "./fraction";
import {Nthroot} from "./nthroot";

export interface vectorK {
    numerator: Nthroot;
    denominator: number;
}

export declare class Vector {
    static scalarProduct: (v1: Vector, v2: Vector) => number;
    parse: (parseStr: String) => Vector;

    constructor(parseStr: String);

    private _x;

    get x(): Fraction;

    set x(value: Fraction);

    private _y;

    get y(): Fraction;

    set y(value: Fraction);

    private _z;

    get z(): Fraction;

    set z(value: Fraction);

    private _k;

    get k(): vectorK;
    set k(value: vectorK);

    get valueOfK(): number;
}
