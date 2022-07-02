const moveLeft = () => {
    let id = null;
    let elem = document.querySelector('.box');
    let position = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (position == 1450) {
            clearInterval(id);
        } else {
            console.log(position);
            position += 2;
            elem.style.right = `${position}px`;
        }
    }
}

moveLeft();