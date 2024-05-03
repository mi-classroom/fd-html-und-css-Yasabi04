const burgerIcon = document.querySelector('[data-js-burger]');
const popUp = document.querySelector('[data-js-main-menu]');

burgerIcon.addEventListener('click', function() {
    this.classList.toggle('rotated');

    popUp.classList.toggle('is-active');
});

popUp.addEventListener('click', function() {
    if (burgerIcon.classList.contains('rotated')) {
        this.classList.remove('is-active');
        
        burgerIcon.classList.remove('rotated');
    }
});
