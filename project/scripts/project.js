
document.getElementById('currentyear').textContent = `${new Date().getFullYear()}`;
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;


const slideshows = {
    'slide': [
        "images/spot-climbs-stairs-min.jpg",
        "images/Atlas_during_testing.jpg",
        "images/Eagle_prime.jpg"
    ],
    'slide2': [
        "images/automata_Antikythera-resized.jpg",
        "images/automata_cleveland_fountain_EDIT.jpg",
        "images/automata_franklin_twitter.jpg",
        "images/automata-JacquemartCollegialeSaintPierreLouvain.jpg"
    ],
    'slide3': [
        "images/Future-Robot-1.jpg",
        "images/Future-Robot-2.jpg",
        "images/Future-Robot-3.jpg"
    ]
};


let slideImg, slides, currentSlideKey;
for (const key in slideshows) {
    const img = document.getElementById(key);
    if (img) {
        slideImg = img;
        slides = slideshows[key];
        currentSlideKey = key;
        break;
    }
}

let currentSlide = 0;
if (slideImg && slides) {

    const storageKey = `currentSlide_${currentSlideKey}`;
    const savedSlide = localStorage.getItem(storageKey);
    if (savedSlide !== null && !isNaN(savedSlide)) {
        currentSlide = Number(savedSlide);
    }

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        slideImg.src = slides[currentSlide];
        localStorage.setItem(storageKey, currentSlide);
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    showSlide(currentSlide);


    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
}


const form = document.getElementById('offlineForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    if (!name || !feedback) {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "#d32f2f";
        return;
    }
    const entry = { name, feedback, date: new Date().toISOString() };
    let feedbacks = [];
    try {
        feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    } catch {
        feedbacks = [];
    }
    feedbacks.push(entry);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    formStatus.textContent = `Thank you, ${name}, for your feedback!`;
    formStatus.style.color = "#388e3c";
    form.reset();
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
});