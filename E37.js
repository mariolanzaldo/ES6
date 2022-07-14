String.prototype.exclamation = function () {
    return `${this}!`;
}

const add = (...arguments) => {
    if (arguments.length === 0) return 0;
    const sum = arguments.reduce((acc, next) => acc + next);
    return sum;
}

const output = "hello".exclamation();
const output2 = "hello world".exclamation();
const output3 = add(2, 7);
const output4 = add(12, 8, 5, 6);

console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);