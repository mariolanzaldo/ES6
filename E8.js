function moveZeros(array) {
    let nonzeroElem = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[nonzeroElem] = array[i];
            nonzeroElem++;
        }
    }
    while (nonzeroElem < array.length) {
        array[nonzeroElem] = 0
        nonzeroElem++;
    }
    return array;
}

const array = [0, 0, 3, 9, 0, 3, 0];
const output = moveZeros(array);
console.log(output);
