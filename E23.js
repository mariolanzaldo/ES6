function* randomNumbers(min, max) {
    let range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    let i = range.length;
    while (i--) {
        yield range.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    }
}

let output = randomNumbers(2, 10);

console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);
console.log(output.next().value);