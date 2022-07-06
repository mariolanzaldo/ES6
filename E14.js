function someFn(...args) {
    const proof = checkParameters(...args);
    if (proof.includes(true)) {
        return `The parameters contain at least one 2 as input`;
    } else if (!proof.includes(true)) {
        return `The parameteres do not contain 2 as input`;
    }
}

function checkParameters(...args) {
    let list = [];
    for (let element of [...args]) {
        if (element == 2) {
            list.push(true);
        } else {
            list.push(false);
        }
    }
    return list;
}

const proof = someFn('a', 9, true, '2');
console.log(proof);
