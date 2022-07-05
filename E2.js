String.prototype.reverse = function reverse() {
    const self = this;
    let reversedStr = '';

    for (let character of self) {
        reversedStr = character + reversedStr;
    }

    return reversedStr;
}

String.prototype.reverseWords = function reverseWords() {
    const self = this;
    let splitWords = self.split(" ");

    splitWords = splitWords.map(element => {
        return element.reverse();
    });

    return splitWords.join(' ');;
}



let word = 'Hello world'
console.log(word.reverseWords());