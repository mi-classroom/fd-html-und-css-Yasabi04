const burgerIcon = document.querySelector('[data-js-burger]');
console.log(burgerIcon)
        burgerIcon.addEventListener('click', function() {
            // Toggle the 'rotated' class to rotate the images
            // Funktion wird innerhalb des EventListeners ausgeführt und gecodet
            this.classList.toggle('rotated');
        });