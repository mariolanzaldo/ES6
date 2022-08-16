const input = document.querySelector('input');
const result = document.querySelector('.test');

input.addEventListener('blur', event => {
    const str = event.target.value.toLowerCase();
    if (str.length < 4 || inputValidation(str)) {
        result.textContent = 'Valid input';
    } else if (!inputValidation(str)) {
        result.textContent = 'Invalid input';

    }
});

const inputValidation = (str) => {
    const input = str.toLowerCase();
    const qwerty = "1234567890qwertyuiopasdfghjklzxcvbnm";

    const reversedQwerty = qwerty.split('').reverse().join('');

    const start = 3;
    let sequence = "_" + input.slice(0, start);
    for (let i = start; i < input.length; i++) {
        sequence = sequence.slice(1) + input.charAt(i);

        if (qwerty.slice(0, 10).includes(sequence) || reversedQwerty.slice(0, 10).includes(sequence) ||
            qwerty.slice(10, 20).includes(sequence) || reversedQwerty.slice(10, 20).includes(sequence) ||
            qwerty.slice(20, 29).includes(sequence) || reversedQwerty.slice(20, 29).includes(sequence) ||
            qwerty.slice(29, 40).includes(sequence) || reversedQwerty.slice(29, 40).includes(sequence)) {
            return false;
        }
    }

    return true;
}
