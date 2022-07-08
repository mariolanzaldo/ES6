function check(str, pattern, output) {
    let chars = '';
    for (let i = 32; i <= 126; i++) {
        if (i !== 42) {
            chars += String.fromCharCode(i);
        }
    }
    if (pattern.includes('*')) {
        for (const element of chars) {
            let newPattern = pattern.replace('*', element);
            check(str, newPattern, output);
        }
    }
    let splitStr = [...str];
    let splitPattern = [...pattern];
    splitStr = splitStr.filter(word => {
        for (const element of splitPattern) {
            if (element === word) {
                return word
            }
        }
    });
    const compare = splitStr.join('');
    if (compare.includes(pattern) && str.includes(compare)) {
        output.push(true);
        return output;
    } else {
        output.push(false);
        return output;
    }
}

function test(str = 'Hello', pattern = 'Hello') {
    const array = [];
    let output = check(str, pattern, array);
    if (typeof str !== 'string' || typeof pattern !== 'string') {
        throw new Error(`Invalid input. Inputs must be a string`);
    } else {
        output = output.filter(element => {
            if (element) return element;
        });
        if (output[0]) {
            return output[0]
        } else if (!output[0]) {
            return false
        }
    }
}

const output = test('Hello', 'H*l*o');
console.log(output);