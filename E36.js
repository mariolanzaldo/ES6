function myPowerFn(base) {
    return function (exponent) {
        const pow = base ** exponent
        return pow;
    }
}

const n = myPowerFn(3);
console.log(n(2));