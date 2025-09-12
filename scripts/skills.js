// Skills functionality

function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  // Initialize skill bar animation on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBar(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  skillBars.forEach(skillBar => {
    // Set the CSS variable for the percentage
    const percentage = skillBar.getAttribute('data-percentage');
    skillBar.style.setProperty('--percentage', `${percentage}%`);
    
    // Observe the skill bar
    observer.observe(skillBar);
  });
  
  // Function to animate skill bar
  function animateSkillBar(skillBar) {
    const percentage = skillBar.getAttribute('data-percentage');
    
    // Animate the width smoothly
    skillBar.style.width = `${percentage}%`;
    skillBar.classList.add('animate');
  }
  
  // Animate skill tags on hover
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.classList.add('hover-lift');
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.classList.remove('hover-lift');
    });
  });
}