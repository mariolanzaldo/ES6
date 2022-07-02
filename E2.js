function reverse() {
    const self = this;
    let reversedStr = '';

    for (let character of self) {
        reversedStr = character + reversedStr;
    }

    return reversedStr;
}

function reverseWords() {
    const self = this;
    let splitWords = self.split(" ");

    splitWords = splitWords.map(element => {
        return element.reverse();
    });

    return splitWords.join(' ');;
}

String.prototype.reverse = reverse;
String.prototype.reverseWords = reverseWords;

let word = 'Hello world'
console.log(word.reverseWords());