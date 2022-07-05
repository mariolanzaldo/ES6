const isObject = val => typeof val === 'object' && val;

function getDifference(obj1 = {}, obj2 = {}) {
    const output = {};

    for (const key in obj1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (isObject(value1) && Array.isArray(obj1)) {
            output[key] = getDifference(value1, value2);
        }
        else if (value1 !== value2) {
            output[key] = value1;
        }
    }

    return output;
}

let obj1 = {
    a: 'po',
    b: 82,
    c: [{ key: [null, 9] }]
};

let obj2 = {
    a: 'p',
    b: 82,
    c: [{ key: [true, 9] }]
};

const output = getDifference(obj1, obj2);
console.log(`The difference between: ${JSON.stringify(obj1)}
and ${JSON.stringify(obj1)} is...`, output);