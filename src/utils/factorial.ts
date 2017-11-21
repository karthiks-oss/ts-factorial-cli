export class Factorial {
    private num: number;

    constructor(num: number) {
        this.num = num;
    }
    getFactorial(): number {
        return this.doFact(this.num);
    }

    private doFact(num: number ): number {
        return num <= 1 ? 1 : num * this.doFact(num - 1);
    }
}
