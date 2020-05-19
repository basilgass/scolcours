import {Fraction} from "./maths/fraction";
import {Polynom} from "./maths/polynom";
import {Monom} from "./maths/monom";
import {Numeric} from "./maths/numeric";
import {Equation} from "./maths/equation";
import {Nthroot} from "./maths/nthroot";
import {LinearSystem} from "./maths/linearSystem";
import {Vector} from "./maths/vector";

export declare var Pi: {
    Numeric: typeof Numeric;
    Fraction: typeof Fraction;
    Root: typeof Nthroot;
    Monom: typeof Monom;
    Polynom: typeof Polynom;
    Equation: typeof Equation;
    LinearSystem: typeof LinearSystem;
    Vector: typeof Vector;
};
