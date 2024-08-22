function openInNewTab() {
    window.open("https://bg.battletech.com", "_blank").focus();
  }

document.getElementById('submitBtn').disabled = true;

    function displayMessage() {
        alert('The Cake is a Lie!');
    }

    function changeColor(element, color) {
        element.style.backgroundColor = color;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function cycleItems() {
            const item = items[currentIndex];
            item.classList.remove('active');

            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }
        setInterval(cycleItems, 3000);
    }
);

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