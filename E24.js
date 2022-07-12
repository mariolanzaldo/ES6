function removeElements(array, ...elements) {
    let filteredElements = array.filter(element => {
        return !elements.includes(element);
    })
    return filteredElements;
}

const output = removeElements([1, true, 5, 3, 4, 9], 5, true);
console.log(output);