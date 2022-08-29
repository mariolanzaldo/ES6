const container = document.querySelector('.container');
const p = document.querySelectorAll('p');

for (let i = 1; i < p.length; i = i + 2) {
    p[i].setAttribute('active', 'false');
}

container.addEventListener('click', event => {
    if (event.target.textContent.includes('Toggle') && event.target.nextElementSibling.getAttribute('active') === 'false') {
        event.target.nextElementSibling.setAttribute('active', 'true');
        event.target.nextElementSibling.style.visibility = 'visible';
    }
    for (let index = 1; index < p.length; index = index + 2) {
        const element = p[index];
        if (element.getAttribute('active') === 'false') {
            element.style.visibility = 'hidden';
        }
    }
    event.target.nextElementSibling.setAttribute('active', 'false');
});
