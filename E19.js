function check(str, pattern) {
    let success = [];
    let splitStr = [...str];
    let splitPattern = [...pattern];

    for (let letter = 0; letter < splitStr.length; letter++) {
        let match = true;
        for (let element = 0; element < splitPattern.length; element++) {

            match = match && (splitPattern[element] === '*' || splitPattern[element] === splitStr[letter + element]);
            if (!match) break;

            if (match) {
                success.push(splitStr[letter + element]);
            }
        }

        if (match) {
            return (pattern[0] === "*" && pattern.length < str.length) ? success.slice(letter, pattern.length + letter).join('') : success.join('');
        }
    }

    return null;
}

function test(str, pattern) {
    if (typeof str !== 'string' || typeof pattern !== 'string') {
        throw new Error(`Invalid input. Inputs must be a string`);
    } else if (str === null || str.trim() === "" || pattern.length > str.length) {
        return null;
    } else {
        return check(str, pattern);
    }
}

const output = test("Hexxa", "*a"); //xa
// const output = test("Hex", "x");  //x
// const output = test("Hex", "e*"); //ex
// const output = test("Hex", "ex"); //ex
// const output = test("Hex", "H*x"); //Hex
// const output = test("Hex", "**x"); //Hex
// const output = test("Hex", "****");

console.log(output);
