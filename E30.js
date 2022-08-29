const container = document.querySelector('.container');

container.addEventListener('click', event => {
    if (event.target.textContent.includes('Toggle') && event.target.nextElementSibling.style.visibility === 'visible') {
        event.target.nextElementSibling.style.visibility = 'hidden';
    } else if (event.target.textContent.includes('Toggle')) {
        event.target.nextElementSibling.style.visibility = 'visible';

    }
});
