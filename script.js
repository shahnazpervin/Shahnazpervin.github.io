// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight - 200) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Formspree form handling (automatic)
document.addEventListener('submit', function(e) {
    if (e.target.classList.contains('contact-form')) {
        // Formspree will handle this automatically
        // Optional: Add success message
        setTimeout(() => {
            if (e.target.checkValidity()) {
                console.log('Form submitted to Formspree');
            }
        }, 100);
    }
});
