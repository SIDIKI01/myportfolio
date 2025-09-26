// Configuration optimisée du portfolio
const AppConfig = {
  site: {
    name: "Sidiki Coulibaly Portfolio",
    version: "2.0.0",
    author: "Sidiki Coulibaly"
  },
  
  themes: {
    light: {
      primary: "#2563eb",
      accent: "#f59e0b",
      background: "#ffffff",
      text: "#1e293b"
    },
    dark: {
      primary: "#3b82f6",
      accent: "#fbbf24",
      background: "#0f172a",
      text: "#f1f5f9"
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
