function maxNum(numbers) {
    const max = Math.max(...numbers);
    return max;
}

const arrayNum = [3, -48, 42, 8];
console.log(maxNum(arrayNum));