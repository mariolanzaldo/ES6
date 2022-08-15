const container = document.querySelector('.container');
const p = document.querySelectorAll('p');

for (let i = 1; i < p.length; i = i + 2) {
    p[i].setAttribute('active', false);
}

container.addEventListener('click', event => {
    if (event.target.textContent.includes('Toggle') && event.target.nextElementSibling.getAttribute) {
        event.target.nextElementSibling.setAttribute('active', true);

        for (let index = 1; index < p.length; index = index + 2) {
            const element = p[index];
            if (element.getAttribute('active') === 'true') {
                element.style.visibility = 'visible';
            } else if (element.getAttribute('active') === 'false') {
                element.style.visibility = 'hidden';
            }
        }
        event.target.nextElementSibling.setAttribute('active', false);
    }
});
