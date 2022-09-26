const container = document.querySelector('.container');
const p = document.querySelectorAll('p');

container.addEventListener('click', event => {
    if (event.target.textContent.includes('Toggle')) {
        if (event.target.nextElementSibling.style.visibility === "visible") {
            event.target.nextElementSibling.style.visibility = "hidden";
        } else {
            for (let index = 1; index < p.length; index = index + 2) {
                p[index].style.visibility = "hidden";
            }
            event.target.nextElementSibling.style.visibility = "visible";
        }
    }
});
