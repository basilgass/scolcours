export declare class Shutingyard {
    private _rpn;
    /**
     * Determin if the token is a defined operation
     * Defined operations: + - * / ^ sin cos tan
     * @param token
     */
    isOperation(token: string): boolean;
    /**
     * Get the next token to analyse.
     * @param expr (string) Expression to analyse
     * @param start (number) CUrrent position in the expr string.
     */
    NextToken(expr: string, start: number): [string, number, string];
    /**
     * Sanitize an expression by adding missing common operation (multiplication between parentheseses)
     * @param expr
     * @constructor
     */
    Uniformizer(expr: string): string;
    /**
     * Parse an expression using the shutting yard tree algorithms
     * @param expr (string) Expression to analyse
     * Returns a RPN list of items.
     */
    parse(expr: string): Shutingyard;
    get rpn(): string[];
}
