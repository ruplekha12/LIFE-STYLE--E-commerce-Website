// ======== Mobile Menu Toggle ========
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Close menu when link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// ======== ScrollReveal Animations ========
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true
});

// Header
sr.reveal('header', { delay: 100, origin: 'top' });

// Home Section
sr.reveal('.home-text', { delay: 200, origin: 'left' });
sr.reveal('.home-img', { delay: 400, origin: 'right' });

// Feature Section
sr.reveal('.feature-content .row', { interval: 200, origin: 'bottom' });

// Product Section
sr.reveal('.product-content .box', { interval: 200, origin: 'bottom' });

// CTA Section
sr.reveal('.cta-text', { delay: 200, origin: 'left' });
sr.reveal('.cta-img', { delay: 400, origin: 'right' });

// Contact Section
sr.reveal('.contact-content', { interval: 150, origin: 'bottom' });

// Footer
sr.reveal('.end-text', { delay: 200, origin: 'bottom' });
