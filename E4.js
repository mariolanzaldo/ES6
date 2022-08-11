function flat (input) {
    let  result = [];
    for (let i = 0, length = input.length; i < length; i++) {
      const value = input[i];
      if (Array.isArray(value)) {
        flat(value);
      } else {
        result.push(value);
      }
    }
    return result;
  };

const arr = [1, 2, 3, [4, 5, [6, [7, [8]]]], 8, 9];
const output = flat(arr);
console.log(output);
