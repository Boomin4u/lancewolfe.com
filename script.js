// Hide the loading spinner after the page loads
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show the button when the page is scrolled more than 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Animations
const fadeElements = document.querySelectorAll('.fade-in');

function handleScrollAnimation() {
    fadeElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);