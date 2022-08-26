const isObject = val => typeof val === 'object';

const arrayComparison = (value1, value2, key) => {
    if (value1.length === value2.length) {
        for (let i = 0; i < value1.length; i++) {
            if (value1[i] !== value2[i]) return key;
        }
    } else {
        return key;
    }
};

function getDifference(obj1 = {}, obj2 = {}) {
    let output = [];

    for (const key in obj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (key in obj2) {
            if (isObject(value1) && Array.isArray(value1)) {
                output.push(arrayComparison(value1, value2, key));
            }
            else if (isObject(value1) && !Array.isArray(obj1)) {
                if (Object.keys(value1).length > 0) {
                    const temp = getDifference(value1, value2);
                    console.log(temp);
                    if (temp[0]) output.push(key);
                } else if (Object.keys(value1).length === 0 && value2 !== value1) {
                    output.push(key);
                }
            }
            else if (value1 !== value2) {
                output.push(key);
            }
        } else if (!(key in obj2)) {
            output.push(key);
        }
    }

    for (const key in obj2) {
        if (!(key in obj1)) {
            output.push(key);
        }
    }

    output = output.filter(element => element != undefined);
    return output;
}

let obj1 = {
    a: {},
    // b: true,
    c: { key: 'Jack' },
    // d: [1, 4]
};

let obj2 = {
    a: null,
    // b: true,
    // c: { key: 'Jack' },
    // d: [4]
};

const output = getDifference(obj1, obj2);
console.log(`The different properties between: ${JSON.stringify(obj1)}
and ${JSON.stringify(obj2)} are...`, output);
