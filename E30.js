const container = document.querySelector('.container');
const list = container.querySelectorAll('p:nth-of-type(even)');

container.addEventListener('click', event => {
    if (event.target.textContent.includes('Toggle') && event.target.nextElementSibling.style.display === 'flex') {
        event.target.nextElementSibling.style.display = 'none';
    } else {
        event.target.nextElementSibling.style.display = 'flex';

    }
});
