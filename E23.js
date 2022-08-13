class CustomRandom {
    constructor() {
        this.seed = 3;
        this.a = 1;
        this.c = 10;
        this.m = 11;
    }

    primeFactor(n) {
        const factors = [];
        let div = 2;

        while (n >= 2) {
            if (n % div !== 0) {
                div++;
            } else {
                n = n / div;
                factors.push(div);
            }
        }
        const unique = [...new Set(factors)];
        return unique;
    }

    areCoprimes(num1, num2) {
        const smaller = num1 > num2 ? num1 : num2;
        for (let ind = 2; ind < smaller; ind++) {
            const condition1 = num1 % ind === 0;
            const condition2 = num2 % ind === 0;
            if (!condition1 && !condition2 && num1 !== 1) {
                // if( this.m > num1){
                return num1;
                // }
            };
        };
    }

    checkElement(element) {
        if (element[2]) {
            return element[2];
        } else {
            return element[0];
        }
    }

    checkAElements(array, factors) {
        let valuesAlreadySeen = [];
        const counts = array.reduce((acc, value) => ({
            ...acc,
            [value]: (acc[value] || 0) + 1
        }), {});

        for (const key in counts) {
            if (counts[key] === factors.length) {
                valuesAlreadySeen.push(parseInt(key));
            }
        }
        return valuesAlreadySeen;
    }

    generator(min, max) {
        this.m = max - min;
        // this.m = max;
        let output = [];
        let coPrimes = [];
        const factors = this.primeFactor(max);
        let a = [];
        for (let i = 0; i < max; i++) {
            factors.forEach(factor => {
                if (max % 4 === 0 && (i - 1) % 4 === 0 && (i - 1) % factor === 0) {
                    a.push(i);
                } else if (max % 4 !== 0 && (i - 1) % factor === 0) {
                    a.push(i);
                }
            });

            this.c = this.areCoprimes(i, max);
        }

        if (factors.length > 1) {
            const checkedElements = this.checkAElements(a, factors);
            this.a = this.checkElement(checkedElements);
        } else if (factors.length === 1) {
            this.a = this.checkElement(a);
        }

        for (let i = 0; i < max - min; i++) {
            output.push(this.rand() + 1 + min);
        }

        return output;

    }

    rand() {
        this.seed = (this.seed * this.a + this.c) % this.m;
        return this.seed;
    }
}

const randomNum = new CustomRandom();
const output = randomNum.generator(2, 12);
console.log(output); 
