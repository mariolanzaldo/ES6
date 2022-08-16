function combinationGenerator(array) {
    let output = [];
    let newArray = [...new Set(array)];

    for (let i = 0; i < newArray.length - 1; i++) {
        const set = new Set();

        for (let j = i + 1; j < newArray.length; j++) {
            let sumNeg = (newArray[i] + newArray[j]) * -1;

            if (set.has(sumNeg)) {
                newArray[i] === -0 ? newArray[i] = 0 : newArray[i];
                newArray[i] === -0 ? newArray[i] = 0 : newArray[i];
                sumNeg === -0 ? sumNeg = 0 : sumNeg;
                output.push([newArray[i], newArray[j], sumNeg].sort((a, b) => b - a));
            } else {
                set.add(newArray[j]);
            }
        }
    }
    return output;

}


function findCombination(input) {
    let output = '';
    const combinations = combinationGenerator(input);
    for (const element of combinations) {
        output += ` (${element.toString()})`
    }
    return output;
}

const input = [3, 2, 1, 0, -3, 2, 2, -2];
const output = findCombination(input);
console.log(`The combinations possible combinations are: ${output}`);
