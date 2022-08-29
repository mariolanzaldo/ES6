class CustomRandom {
    constructor(min, max) {
        this.limit = max - min + 1;
        this.max = max;
        this.min = min;
        this.a = 5;
        this.c = 1;
        this.m = 2 ** Math.ceil((Math.log(this.limit) / Math.log(2)));
        this.seed = Math.floor(Math.random() * this.m);
    }

    *generator() {
        for (let i = 0; i < this.limit - 2; i++) {
            this.seed = (this.seed * this.a + this.c) % this.m;

            if (this.seed < this.limit) {
                this.seed = this.seed + this.min;
                yield this.seed;
            }
        }

    }
}

const randomNum = new CustomRandom(1, 20);
const output = randomNum.generator();
let done = false;
while (!done) {
    console.log(output.next().value);
    done = output.next().done;
}
