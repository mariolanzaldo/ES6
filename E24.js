function removeElements(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        const index = array.indexOf(elements[i]);
        if (index > -1) {
            array.splice(index, 1);
        } else {
            console.error(`The element: ${elements[i]} is not present in the array`);
        }
    }
    return array;
}

const output = removeElements([1, true, 5, 3, 4, 9], 5, true);
console.log(output);
