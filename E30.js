const container = document.querySelector('.container');
const list = container.querySelectorAll('p:nth-of-type(even)');

container.addEventListener('click', event => {
    if (event.target.textContent.includes('Toggle') && event.target.nextElementSibling.style.display === 'flex') {
        for (const element of list) {
            element.style.display = 'none';
        }
    } else {
        for (const element of list) {
            element.style.display = 'flex';
        }
    }
});