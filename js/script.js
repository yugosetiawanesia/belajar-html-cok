// toggle active navbar
const navbarNav = document.querySelector('.navbar-nav');

// onClick
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// onClik diluar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
}
});