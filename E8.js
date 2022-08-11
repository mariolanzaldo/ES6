function moveZeros(array) {
    let prevZeroIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] && array[i - 1] == 0) {
            prevZeroIndex++;
            array[prevZeroIndex] = array[i];
            array[i] = 0;
        }
    }
    return array;
}

const array = [2, 0, 4, 5, 0, 2, 0, 0, 3, 9, 0, 3];
const output = moveZeros(array);
console.log(output);
