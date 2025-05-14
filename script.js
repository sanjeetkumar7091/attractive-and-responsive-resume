// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Keyboard accessibility: Show popups on focus and hide on blur
const interactiveItems = document.querySelectorAll('.experience-item, .skill-item');

interactiveItems.forEach(item => {
  item.addEventListener('focus', () => {
    const popup = item.querySelector('.popup');
    if (popup) {
      popup.style.display = 'block';
    }
  });
  item.addEventListener('blur', () => {
    const popup = item.querySelector('.popup');
    if (popup) {
      popup.style.display = 'none';
    }
  });
});

// Animate section headers on scroll
const sections = document.querySelectorAll('.section h2');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-header');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
