const menuBtn = document.querySelector('.header__btn');
const headerNav = document.querySelector('.header__nav');
const background = document.querySelector('.mobile-menu-background');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
    headerNav.classList.add('header__nav--active')
    background.classList.add('header__nav--active')
    body.style.overflow = 'hidden'
    body.scrollTop = document.documentElement.scrollTop = 0;
})

background.addEventListener('click', function() {
    headerNav.classList.remove('header__nav--active')
    background.classList.remove('header__nav--active')
    body.style.overflow = 'scroll'
})
