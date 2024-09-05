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