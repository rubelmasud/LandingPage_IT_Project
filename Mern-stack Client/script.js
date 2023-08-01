// Smooth scrolling to anchor links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = contactForm.elements['name'];
    const emailInput = contactForm.elements['email'];
    const messageInput = contactForm.elements['message'];

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill out all fields before submitting.');
    } else {
        contactForm.reset();
    }
});
