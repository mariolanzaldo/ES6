const input = document.querySelector('input');
const result = document.querySelector('.test');

input.addEventListener('blur', event => {
    const str = event.target.value.toLowerCase();
    if (str < 4 || inputValidation(str)) {
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
        if (qwerty.includes(sequence) || reversedQwerty.includes(sequence)) {
            return false;
        }
    }

    return true;
}