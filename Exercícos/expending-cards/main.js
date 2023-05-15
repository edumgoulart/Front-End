const imageDivs = document.querySelectorAll('.imageDiv');

imageDivs.forEach(imageDiv => {
    imageDiv.addEventListener('click', () => {
        removeActive();
        imageDiv.classList.add('active');
    })
})

function removeActive() {
    imageDivs.forEach(imageDiv => {
        imageDiv.classList.remove('active');
    })
}