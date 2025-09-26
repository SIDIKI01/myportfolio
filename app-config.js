// Configuration optimisée du portfolio
const AppConfig = {
  site: {
    name: "Sidiki Coulibaly Portfolio",
    version: "2.0.0"
  },
  
  themes: {
    light: {
      primary: "#0070f3",
      accent: "#0070f3",
      background: "#f7fafc",
      text: "#1a202c"
    },
    dark: {
      primary: "#00d4ff",
      accent: "#00d4ff",
      background: "#0a192f",
      text: "#ffffff"
    }
  }
};

// Fonctions optimisées
function initTheme() {
  if (typeof document !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

function toggleTheme() {
  if (typeof document !== 'undefined') {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
}

function initApp() {
  initTheme();
}

// Export global
if (typeof window !== 'undefined') {
  window.AppConfig = AppConfig;
  window.initTheme = initTheme;
  window.toggleTheme = toggleTheme;
  window.initApp = initApp;
}

// Auto-initialisation
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initApp);
}
