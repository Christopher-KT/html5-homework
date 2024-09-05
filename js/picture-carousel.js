// HW 10 Carousel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let counter = 0;
const size = carouselItems[0].clientWidth;

function updateCarousel() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function nextSlide() {
    counter = (counter + 1) % carouselItems.length;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    updateCarousel();
}

function prevSlide() {
    counter = (counter - 1 + carouselItems.length) % carouselItems.length;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); // Rotate every 5 seconds
// End HW 10 Carousel