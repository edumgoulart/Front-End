const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', centralizarBoxes);

centralizarBoxes();

function centralizarBoxes() {
    const alturaJanela = window.innerHeight;

    boxes.forEach((box) => {
        const boxHigh = box.getBoundingClientRect().top;
        if ((boxHigh + 150 )< alturaJanela) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }

    })
}

