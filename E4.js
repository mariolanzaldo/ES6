function* flat(input, ...leng) {
    if (Array.isArray(input)) {
        yield* flat(...input);
    } else {
        yield input;
    }
    if (leng.length) {
        yield* flat(...leng);
    }
}

const arr = [1, 2, 3, [4, 5, [6, [7, [8]]]], 8, 9];
const output = [...flat(arr)];
console.log(output);
