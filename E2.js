String.prototype.reverse = function () {
    const self = this;
    let len = self.length, result = "";
    for (let i = 0; i <= len - 1; i++) {
        result = result + self[len - i - 1];
    }
    return result;
}

String.prototype.reverseWords = function () {
    const self = this;
    let splitWords = self.split(" ");

    splitWords = splitWords.map(element => {
        return element.reverse();
    });

    return splitWords.join(' ');;
}



let word = 'Hello world'
console.log(word.reverseWords());
