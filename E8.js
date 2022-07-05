function moveZeros(array) {
    array = array.sort((a, b) => (a === 0) - (b === 0));
    return array;
}

const array = [2, 0, 4, 5, 0, 2, 0, 0, 3, 9, 0, 3];
const output = moveZeros(array);
console.log(output);