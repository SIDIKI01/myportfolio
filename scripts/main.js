// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initNavigation();
  initSkillBars();
  initProjectModals();
  initThemeToggle();
  initFormValidation();
  initScrollAnimations();
  initTypingEffect();
  
  // Show the page with fade-in effect
  document.body.classList.add('page-transition');
});

// Initialize scroll animations for elements
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.timeline-item, .project-card, .cert-item, .skill-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Add scrolled class to header on scroll
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Terminal typing effect
function initTypingEffect() {
  const commandElement = document.querySelector('.typing');
  const text = commandElement.textContent;
  
  commandElement.textContent = '';
  
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      commandElement.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 100);
}