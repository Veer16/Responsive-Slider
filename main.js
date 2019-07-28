const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;

const intervalTime = 5000;
let slideInterval;

const nextSlider = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class f
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibbling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current class to the start
        slides[0].classList.add('current');
    }
    setTimeout((intervalTime) => current.classList.remove('current'));
}

// Previous button

const prevSlider = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class f
    current.classList.remove('current');
    // Check for next slide
    if (current.previousElementSibling) {
        // Add current to next sibbling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current class to the last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

// Button event

next.addEventListener('click', e => {
    nextSlider();
    if (auto) {
        // Clear the interval
        clearInterval(slideInterval);
        // Run next slide at interval time
        slideInterval = setInterval(nextSlider, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlider();
    if (auto) {
        // Clear the interval
        clearInterval(slideInterval);
        // Run next slide at interval time
        slideInterval = setInterval(nextSlider, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlider, intervalTime);

}