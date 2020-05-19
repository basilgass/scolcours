export declare class Numeric {
    static round(value: number, decimals?: number): number;

    /**
     * Get the list of the nth first prime numbers.
     * @param nb : number of primes to choose from
     */
    static prime(nb?: number): number[];
    /**
     * Get the list of all dividers of a number.
     * @param value
     */
    static dividers(value: number): number[];
    /**
     * Great Common Divisor
     * @param values : number values
     */
    static gcd(...values: number[]): number;
    /**
     * Least Common Multiple
     * @param values: list of numbers
     */
    static lcm(...values: number[]): number;
    /**
     * Random boolean with a percent ratio
     * @param percent
     */
    static randomBool(percent?: number): boolean;
    /**
     * Random integer between two values.
     * @param a (number) : From this value to the second value. If the second is ommited, this value is the max value.
     * @param b (number) : To this value. If this is ommited.
     */
    static randomInt(a: number, b?: number): number;
    /**
     * Random integer between -max and max value.
     * @param max (number) : determine the limits.
     * @param zero (bool) : determine if zero is allowed or not.
     */
    static randomIntSym(max: number, zero?: boolean): number;
}
