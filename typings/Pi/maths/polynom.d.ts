/**
 * Polynom module contains everythin necessary to handle polynoms.
 * @module Polynom
 */
import { Monom } from './monom';
import { Fraction } from './fraction';
/**
 * Polynom class can handle polynoms, reorder, resolve, ...
 */
export declare class Polynom {
    private _monoms;
    private _factors;
    private _texString;
    private _rawString;
    /**
     *
     * @param {string} polynomString (optional) Default polynom to parse on class creation
     */
    constructor(polynomString?: string);
    /**
     * Determine if this class is a Polynom.
     */
    isPolynom: () => boolean;
    /**
     * Parse a string to a polynom.
     * @param inputStr
     */
    parse: (inputStr: string) => Polynom;
    parseByCoefficient: (letter: String, ...values: Fraction[]) => Polynom;
    empty: () => Polynom;
    /**
     * Set the polynom to zero.
     * @returns {this}
     */
    zero: () => Polynom;
    clone: () => Polynom;
    rndSimple: (degree?: number, unit?: boolean, withFraction?: boolean, letters?: string, allowZero?: boolean, numberOfMonoms?: number) => Polynom;
    rndFactorable: (degree?: number, unit?: boolean, letters?: string) => Polynom;
    /**
     * This will genereate a not reduced tex string of the polynom.
     * @param complexity : Number of iteration to increase the complexity.
     */
    makeItComplicate: (complexity?: number) => Polynom;
    factorizePartial: (forceSign?: boolean) => Polynom;
    /**
     * Add one or more monoms to the polynoms.
     * @param M
     */
    addMonom: (...M: Monom[]) => Polynom;
    substractMonom: (...M: Monom[]) => Polynom;
    /**
     * Main parse using a shutting yard class
     * @param inputStr
     */
    shutingYardToReducedPolynom(inputStr: string): Polynom;
    reduce: () => Polynom;
    /**
     * reduce the coefficient value as if the polynom was equal to zero.
     */
    minify: () => Polynom;
    factorize: () => Polynom;
    reorder: (letter?: string) => Polynom;
    opposed: () => Polynom;
    add: (P: Polynom) => Polynom;
    substract: (P: Polynom) => Polynom;
    multiply: (P: Polynom) => Polynom;
    multiplyByFraction: (F: Fraction) => Polynom;
    multiplyByInteger: (nb: number) => Polynom;
    multiplyByMonom: (M: Monom) => Polynom;
    mutliplyByFraction: (F: Fraction) => Polynom;
    divideByInteger: (nb: number) => Polynom;
    divideByFraction: (F: Fraction) => Polynom;
    replaceBy: (letter: string, P: Polynom) => Polynom;
    /**
     * Divide the current polynom by two polynoms.
     * @param P
     */
    divide: (P: Polynom) => {
        quotient: Polynom;
        reminder: Polynom;
    };
    pow: (nb: number) => Polynom;
    degree: (letter?: string) => number;
    monomByDegree: (degree?: number, letter?: string) => Monom;
    monomByLetter: (letter: string) => Monom;
    evaluate: (values: {
        [key: string]: Fraction;
    }) => Fraction;
    /**
     * Determine if the current polynom isidivdable by P
     * TODO: should work with any polynom, not only first degree poylnoms and the letter should disapear
     * @param P
     * @param letter - default letter
     */
    canDivide: (P: Polynom, letter?: string) => boolean;
    getZeroes: () => (boolean | Fraction)[];
    getDenominators: () => number[];
    getNumerators: () => number[];
    lcmDenominator: () => number;
    gcdDenominator: () => number;
    lcmNumerator: () => number;
    gcdNumerator: () => number;
    /**
     * Compare this polynom with another one.
     * @param P
     */
    isSameAs: (P: Polynom) => boolean;
    isOpposedAt: (P: Polynom) => boolean;
    private _genDisplayAddPlus;
    private genDisplay;
    get length(): number;
    get monoms(): Monom[];
    set monoms(M: Monom[]);
    get display(): string;
    get raw(): string;
    get tex(): string;
    get texString(): string;
    get isTrivial(): boolean;
    get isMultiVariable(): boolean;
    get factors(): Polynom[];
    set factors(value: Polynom[]);
    get variables(): string[];
    get numberOfVars(): number;
}
