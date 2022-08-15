const link = document.querySelector('#id1');

link.addEventListener('click', event => {
    if (event.target.previousElementSibling.style.visibility === 'visible') {
        event.target.previousElementSibling.style.visibility = 'hidden';
        event.target.textContent = 'Show';
    } else {
        event.target.previousElementSibling.style.visibility = 'visible';
        event.target.textContent = 'Hide';
    }
});
