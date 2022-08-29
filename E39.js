const input = document.querySelector('input');
const result = document.querySelector('.test');

const qwerty = "1234567890qwertyuiopasdfghjklzxcvbnm";
const [...qwertyLevels] = [qwerty.slice(0, 10), qwerty.slice(10, 20), qwerty.slice(20, 29), qwerty.slice(29, 40)];

const reversedQwerty = qwerty.split('').reverse().join('');
const [...reverseQwertyLevels] = [reversedQwerty.slice(0, 10), reversedQwerty.slice(10, 20), reversedQwerty.slice(20, 29), reversedQwerty.slice(29, 40)];

input.addEventListener('blur', event => {
    const str = event.target.value.toLowerCase();
    const validation = inputValidation(str, qwertyLevels, reverseQwertyLevels)
    if (str.length < 4 || validation) {
        result.textContent = 'Valid input';
    } else if (!validation) {
        result.textContent = 'Invalid input';

    }
});

const inputValidation = (str, qwertyLevels, reversedQwertyLevels) => {
    const input = str.toLowerCase();
    const start = 3;
    let sequence = "_" + input.slice(0, start);
    for (let i = start; i < input.length; i++) {
        sequence = sequence.slice(1) + input.charAt(i);

        if (qwertyLevels[0].includes(sequence) || reversedQwertyLevels[0].includes(sequence) ||
            qwertyLevels[1].includes(sequence) || reversedQwertyLevels[1].includes(sequence) ||
            qwertyLevels[2].includes(sequence) || reversedQwertyLevels[2].includes(sequence) ||
            qwertyLevels[3].includes(sequence) || reversedQwertyLevels[3].includes(sequence)) {
            return false;
        }
    }

    return true;
}
