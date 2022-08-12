function check(str, pattern) {
    let success = [];
    let failure = [];
    let splitStr = [...str];
    let splitPattern = [...pattern];

    for (let letter = 0; letter < splitStr.length; letter++) {
        for (let element = 0; element < splitPattern.length; element++) {
            if (splitPattern[element] === '*' && letter === element) {
                success.push(splitPattern[element]);
            } else {
                if (splitPattern[element] === splitStr[letter]) {
                    success.push(splitPattern[element]);
                } else if (splitPattern[element] != splitStr[letter] && letter === element) {
                    failure.push(splitPattern[element]);
                }
            }
        }
    }
    success = success.join('');
    return { success, failure };
}

function test(str = 'Hello', pattern = 'Hello') {
    let output;
    if (typeof str !== 'string' || typeof pattern !== 'string') {
        throw new Error(`Invalid input. Inputs must be a string`);
    } else {
        const { success, failure } = check(str, pattern);

        if (success && success.length === str.length && success.length === pattern.length) {
            output = `The string: ${str} matches with the pattern ${pattern}`;
            return output;
        } else if (failure.length !== 0) {
            output = `The string: ${str} and the pattern ${pattern} don't match since the following characters does not match: ${failure}`;
            return output
        } else if (failure.length === 0) {
            output = `The pattern's length is not big enough. Thus, the string does not match`;
            return output;
        }
    }
}

const output = test('Hex T', '*e* T');
console.log(output);
