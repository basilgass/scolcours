import { Fraction } from "./fraction";
export declare class Monom {
    private _coefficient;
    private _literal;
    constructor();
    /**
     * Determine if object is a monom.
     */
    isMonom(): boolean;
    /**
     * Parse a string to a monom. The string may include fraction.
     * @param inputStr
     */
    parse: (inputStr: string) => Monom;
    clean: () => Monom;
    /**
     * Cretate a zero value monom
     */
    zero: () => Monom;
    /**
     * Clone the current Monom.
     */
    clone: () => Monom;
    random: (letters?: string, degree?: number, withFraction?: boolean, allowZero?: boolean) => Monom;
    /**
     * Set the power of a particular letter
     * @param letter (string) Letter to change
     * @param pow (number) Power of the letter (must be positive integer.
     */
    letter: (letter: string, pow: number) => void;
    /**
     * Determine if two monoms are similar
     * @param M
     */
    isSameAs: (M: Monom) => boolean;
    /**
     * Determine if multiple monoms are similar
     * @param M
     */
    areSameAs: (...M: Monom[]) => boolean;
    /**
     * Determine if two monoms are equals
     * @param M
     */
    isEqual: (M: Monom) => boolean;
    /**
     * Determine if mutliple monoms are equals
     * @param M
     */
    areEquals: (...M: Monom[]) => boolean;
    /**
     * Get the degree of a monom. If no letter is given, the result will be the global degree.
     * @param letter (string) Letter to get to degree (power)
     */
    degree: (letter?: string) => number;
    hasLetter: (letter?: string) => boolean;
    static lcm: (...monoms: Monom[]) => Monom;
    /**
     * Get the opposed
     * Returns a monom.
     */
    opposed: () => Monom;
    /**
     * Add all similar monoms. If they aren't similar, they are simply skipped.
     * @param M (Monom[]) The monoms to add.
     */
    add: (...M: Monom[]) => Monom;
    /**
     * Substract multiple monoms
     * @param M (Monom[]) The monoms to substract
     */
    substract: (...M: Monom[]) => Monom;
    /**
     * Multiple multiple monoms to the current monom
     * @param M (Monom[]) The monoms to multiply to.
     */
    multiply: (...M: Monom[]) => Monom;
    static xmultiply: (M1: Monom, M2: Monom) => Monom;
    /**
     * Divide the current monoms by multiple monoms
     * @param M (Monom[])
     */
    divide: (...M: Monom[]) => Monom;
    /**
     * Get the pow of a monom.
     * @param nb (number) : Mathematical pow
     */
    pow: (nb: number) => Monom;
    evaluate: (values: {
        [key: string]: Fraction;
    }) => Fraction;
    set coefficient(F: Fraction);
    set literal(L: {
        [Key: string]: number;
    });
    set literalStr(inputStr: string);
    get coefficient(): Fraction;
    get literal(): {
        [Key: string]: number;
    };
    get isZero(): boolean;
    get isMultiVariable(): boolean;
    get variables(): string[];
    get numberOfVar(): number;
    /**
     * This display getter is to be used in the polynom display getter
     */
    get display(): string;
    get displayWithSign(): string;
    get tex(): string;
}
