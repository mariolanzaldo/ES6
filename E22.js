function random(number) {
    return Math.floor(Math.random() * number);
}

function randColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

const button = document.querySelector('.button');
const div = document.querySelector('.colored');

button.addEventListener('click', event => {
    console.log('clicked');
    div.style.background = randColor();
});
