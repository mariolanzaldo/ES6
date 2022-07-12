const div = document.querySelector('div');
const link = document.querySelector('#id1');

link.addEventListener('click', event => {
    if (div.style.display === 'flex') {
        div.style.display = 'none';
        event.target.textContent = 'Show';
    } else {
        div.style.display = 'flex';
        event.target.textContent = 'Hide';
    }
});