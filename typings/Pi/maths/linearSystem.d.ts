import { Equation } from "./equation";
import { Fraction } from "./fraction";
export declare class LinearSystem {
    private _equations;
    private _solutions;
    private _resolutionSteps;
    constructor();
    create: (...equations: Equation[]) => LinearSystem;
    parse: (...equStrs: string[]) => LinearSystem;
    generate: (...solutions: number[] | Fraction[]) => LinearSystem;
    private _generateOneEquation;
    private _checkIfLinerCombination;
    log: () => string;
    clone: () => LinearSystem;
    reorder: () => LinearSystem;
    solve: () => LinearSystem;
    private _solveOneLetter;
    private static _linearReduction;
    get isSolvable(): boolean;
    get variables(): string[];
    get tex(): string;
    get texSolution(): string;
    set equations(value: Equation[]);
    get equations(): Equation[];
}
