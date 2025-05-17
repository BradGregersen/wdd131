
document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});
