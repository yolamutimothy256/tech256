// Mobile nav toggle
const btn = document.getElementById('mobile-menu-btn');
const nav = document.getElementById('mobile-nav');
btn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav after click (for mobile)
      if (window.innerWidth < 768 && !nav.classList.contains('hidden')) {
        nav.classList.add('hidden');
      }
    }
  });
});

// Contact form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const message = contactForm.querySelector('#message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      e.preventDefault();
    }
  });
}