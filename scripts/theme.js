// Theme toggle functionality

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Check if user has a saved theme preference
  const savedTheme = localStorage.getItem('theme');
  
  // Apply saved theme or default to dark
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    }
  });
}