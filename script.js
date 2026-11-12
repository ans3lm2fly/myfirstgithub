const mobileMenu = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.navlinks');
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});