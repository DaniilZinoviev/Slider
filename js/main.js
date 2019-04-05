const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const autoSliding = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get element with class 'current'
    const currentSlide = document.querySelector('.current');
    // Remove 'current' class
    currentSlide.classList.remove('current');
    // Check for next slide
    if (currentSlide.nextElementSibling) {
        // Add current to next sibling
        currentSlide.nextElementSibling.classList.add('current');
    } else {
        // Add 'current' to start
        slides[0].classList.add('current');
    }
}

const prevSlide = () => {
    // Get element with class 'current'
    const currentSlide = document.querySelector('.current');
    // Remove 'current' class
    currentSlide.classList.remove('current');
    // Check for previous slide
    if (currentSlide.previousElementSibling) {
        // Add current to previous sibling
        currentSlide.previousElementSibling.classList.add('current');
    } else {
        // Add 'current' to last
        slides[slides.length - 1].classList.add('current');
    }
}

// Button events
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);