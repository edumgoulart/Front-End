const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const progressBar = document.querySelector('.progressBar')
const progressSteps = document.querySelectorAll('.step')
let whichStep = 1;
let progessBarLevel = 0;


//the function that the prev button calls
function prev() {
    progressSteps[whichStep - 1].classList.remove('enabled')
    whichStep--;
    if (whichStep <= 1) {
        prevButton.disabled = true;
        prevButton.classList.add('disabled')
    } 
    nextButton.removeAttribute('disabled')
    nextButton.classList.remove('disabled')

    progessBarLevel -= 33.3;
    progressBar.style.background = `linear-gradient(to right, blue 0%, blue ${progessBarLevel}%, #d4d4d4 ${progessBarLevel}%, #d4d4d4 100%)`

}

//the function that the next button calls
function next() {
    whichStep++;
    progressSteps[whichStep - 1].classList.add('enabled')
    if (whichStep >= 4) {
        nextButton.disabled = true;
        nextButton.classList.add('disabled')
    }
    prevButton.removeAttribute('disabled')
    prevButton.classList.remove('disabled')

    progessBarLevel += 33.3;
    progressBar.style.background = `linear-gradient(to right, blue 0%, blue ${progessBarLevel}%, #d4d4d4 ${progessBarLevel}%, #d4d4d4 100%)`

}