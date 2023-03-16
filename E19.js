function check(str, pattern) {
    let success = [];
    let failure = [];
    let splitStr = [...str];
    let splitPattern = [...pattern];

    for (let letter = 0; letter < splitStr.length; letter++) {
        for (let element = 0; element < splitPattern.length; element++) {
            if (splitPattern[element] === '*' && letter === element) {
                success.push(splitStr[element]);
            } else {
                if (splitPattern[element].charAt() === splitStr[letter].charAt() && letter === element) {
                    success.push(splitStr[element]);
                } else if (splitPattern[element].charAt() !== splitStr[letter].charAt() && letter === element) {
                    failure.push(splitStr[element]);
                }
            }
        }
    }
    success = success.join('');
    return { success, failure };
}

function test(str, pattern) {
    if (typeof str !== 'string' || typeof pattern !== 'string') {
        throw new Error(`Invalid input. Inputs must be a string`);
    } else if (str === null || str.trim() === "" || pattern.length > str.length) {
        return null;
    } else {
        const { success, failure } = check(str, pattern);

        if (success && failure.length === 0 && str.length >= pattern.length) {
            return success;
        } else if (failure.length !== 0 || failure.length === 0) {
            return null;
        }
    }
}

const output = test('Hex', 'Hext');
console.log(output);
