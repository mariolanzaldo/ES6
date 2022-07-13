const container = document.querySelector('.container');

container.addEventListener('click', event => {
    console.log(event.target.textContent.includes('Toggle'))
    if (event.target.textContent.includes('Toggle') && event.target.nextElementSibling.style.display === 'flex') {
        console.log('a')
        event.target.nextElementSibling.style.display = 'none';
    } else {
        event.target.nextElementSibling.style.display = 'flex';
    }
});