function duplicate() {
    const self = this;
    const duplicate = [...self, ...self];
    return duplicate;
}

Array.prototype.duplicate = duplicate;
const input = [1, 2, 3, 4];

let output = input.duplicate();
console.log(output);