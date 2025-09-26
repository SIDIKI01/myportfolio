// Script de build simplifié pour éviter les erreurs d'imports

// Configuration de base
const config = {
  site: {
    name: "Sidiki Coulibaly Portfolio",
    version: "2.0.0",
    description: "Portfolio professionnel moderne et responsive",
    author: "Sidiki Coulibaly",
    email: "scoulou82@gmail.com",
    phone: "+223 76 17 66 69",
    location: "Bamako, Mali",
    url: "https://sidiki-coulibaly.dev"
  }
};

// Fonction pour initialiser le thème
function initTheme() {
  if (typeof document !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Appliquer les couleurs du thème
    const themes = {
      light: {
        primary: "#2563eb",
        secondary: "#64748b",
        accent: "#f59e0b",
        background: "#ffffff",
        surface: "#f8fafc",
        text: "#1e293b",
        textSecondary: "#64748b"
      },
      dark: {
        primary: "#3b82f6",
        secondary: "#94a3b8",
        accent: "#fbbf24",
        background: "#0f172a",
        surface: "#1e293b",
        text: "#f1f5f9",
        textSecondary: "#94a3b8"
      }
    };
    
    const theme = themes[savedTheme];
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }
}

// Fonction pour initialiser les animations
function initAnimations() {
  if (typeof window !== 'undefined') {
    // Respecter les préférences de mouvement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }
  }
}

// Fonction pour basculer le thème
function toggleTheme() {
  if (typeof document !== 'undefined') {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Appliquer les nouvelles couleurs
    const themes = {
      light: {
        primary: "#2563eb",
        secondary: "#64748b",
        accent: "#f59e0b",
        background: "#ffffff",
        surface: "#f8fafc",
        text: "#1e293b",
        textSecondary: "#64748b"
      },
      dark: {
        primary: "#3b82f6",
        secondary: "#94a3b8",
        accent: "#fbbf24",
        background: "#0f172a",
        surface: "#1e293b",
        text: "#f1f5f9",
        textSecondary: "#94a3b8"
      }
    };
    
    const theme = themes[newTheme];
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
  }
}

// Fonction d'initialisation
function init() {
  initTheme();
  initAnimations();
}

// Exporter les fonctions
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { config, initTheme, initAnimations, toggleTheme, init };
} else if (typeof window !== 'undefined') {
  window.PortfolioConfig = { config, initTheme, initAnimations, toggleTheme, init };
}

// Auto-initialisation si dans le navigateur
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', init);
}
