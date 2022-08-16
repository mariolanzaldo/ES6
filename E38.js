/*This program intends to find the difference between the square of the sum and the sum of the squares of the first N natural numbers

The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 3025.
The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385.

Hence the difference between the square of the sum of the first ten natural numbers and the sum of the squares of the first ten natural 
numbers is 3025 - 385 = 2640.
 */

class SumAll {
    constructor(number) {
        this.number = number;
    }

    sum() {
        const sum = this.number * (this.number + 1) / 2;
        /*Sum of 1 to N: 
        F(N) = 1 + 2 + ... + (N-1) + N 
        F(N+1) = 1 + 2 + ... + (N-1) + N + (N+1)
        
        Substracting individual members:
        F(N) - F(N+1) = - (N+1)
        F(N+1) = F(N) + (N+1)
        
        If the same equation F(N) is added in reverse: 
        
        F(N) = 1 + 2 + ... + (N-1) + N  +
        F(N) = N + (N-1) + ... + 2 + 1
        
        2F(N) = (N+1) + (N+1) + ... + (N+1) + (N+1)
        
        F(N) = N (N+1) / 2 */
        return sum
    }
}

class SumOfSquares extends SumAll {
    constructor(number) {
        super(number);
        this.number = number;
    }

    sumOfSquares() {
        const sumOfSquares = this.sum() * (2 * this.number + 1) / 3;
        /* F(N) = 1^2 + 2^2 + ... + N^2 
        From this it is possible to get an expression as follows: F(N)= an^3 + bn^2 + cn + d
        If the first four terms of the series are used F(N) = 0, F(N) = 1, F(N) = 5, F(N) = 14 and solving 
        the system of equations will lead to: n^3/3 + n^2/2 + n/6 
        Then: 
        N/6 (2N^2 + 3N + 1)
        N/6 (2N^2 + N + 2N + 1)
        N/6 (n(2N + 1) + 1(2N + 1))
        
        Factorizing:
        
        N (2N + 1)(N + 1)/6 
        
        However, the sum of N consecutive numbers is given by: N (N + 1) /2. Therefore:
        [N (N + 1) / 2] [(2N + 1) / 3] */
        return sumOfSquares;
    }
}

class SquareOfSum extends SumAll {
    constructor(number) {
        super(number);
        this.number = number;
    }

    squareOfSum() {
        const squareOfSum = this.sum() ** 2;
        return squareOfSum;
    }
}

class Difference {
    constructor(number) {
        this.number = number;
        this.sumOfSquares = new SumOfSquares(this.number);
        this.squareOfSum = new SquareOfSum(this.number);
    }

    difference() {
        const output = Math.abs(this.sumOfSquares.sumOfSquares() - this.squareOfSum.squareOfSum());
        return output;
    }
}

const output = new Difference(10);
console.log(output.difference());
