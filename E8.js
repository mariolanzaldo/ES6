function moveZeros(array) {
    array.sort(function (a, b) {
        if (a == 0 && b != 0)
            return 1;
        else if (b == 0 && a != 0)
            return -1;
        else
            return 0;
    });
    return array;
}

const array = [0, 0, 3, 9, 0, 3, 0];
const output = moveZeros(array);
console.log(output);
