// Configuration d'accessibilité pour le portfolio

export const accessibilityConfig = {
  // Configuration des couleurs
  colors: {
    // Contraste minimum WCAG AA
    minContrast: 4.5,
    
    // Contraste préféré WCAG AAA
    preferredContrast: 7,
    
    // Couleurs avec contraste élevé
    highContrast: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#0066cc',
      background: '#ffffff',
      text: '#000000'
    }
  },
  
  // Configuration du focus
  focus: {
    // Style du focus
    style: {
      outline: '2px solid #0066cc',
      outlineOffset: '2px',
      borderRadius: '2px'
    },
    
    // Ordre de tabulation
    tabOrder: [
      'header',
      'main',
      'navigation',
      'content',
      'footer'
    ]
  },
  
  // Configuration des animations
  animations: {
    // Respecter les préférences utilisateur
    respectMotionPreference: true,
    
    // Alternatives pour les animations
    alternatives: {
      fadeIn: 'opacity: 1',
      slideIn: 'transform: translateX(0)',
      scaleIn: 'transform: scale(1)'
    }
  },
  
  // Configuration des polices
  fonts: {
    // Taille minimale
    minSize: '16px',
    
    // Hauteur de ligne
    lineHeight: 1.5,
    
    // Espacement des lettres
    letterSpacing: '0.025em'
  },
  
  // Configuration des images
  images: {
    // Alt text obligatoire
    requireAlt: true,
    
    // Alt text pour les images décoratives
    decorativeAlt: '',
    
    // Longdesc pour les images complexes
    longdesc: false
  },
  
  // Configuration des formulaires
  forms: {
    // Labels obligatoires
    requireLabels: true,
    
    // Messages d'erreur
    errorMessages: {
      required: 'Ce champ est obligatoire',
      email: 'Veuillez entrer une adresse email valide',
      phone: 'Veuillez entrer un numéro de téléphone valide'
    },
    
    // Validation en temps réel
    realTimeValidation: true
  },
  
  // Configuration du clavier
  keyboard: {
    // Raccourcis clavier
    shortcuts: {
      'Escape': 'Fermer le menu',
      'Tab': 'Navigation suivante',
      'Shift+Tab': 'Navigation précédente',
      'Enter': 'Activer',
      'Space': 'Activer'
    },
    
    // Navigation au clavier
    navigation: {
      skipLinks: true,
      focusTrapping: true,
      arrowKeys: true
    }
  },
  
  // Configuration des lecteurs d'écran
  screenReaders: {
    // ARIA labels
    ariaLabels: {
      menu: 'Menu principal',
      close: 'Fermer',
      open: 'Ouvrir',
      next: 'Suivant',
      previous: 'Précédent',
      play: 'Lire',
      pause: 'Pause'
    },
    
    // Landmarks ARIA
    landmarks: {
      main: 'Contenu principal',
      navigation: 'Navigation principale',
      banner: 'En-tête',
      contentinfo: 'Pied de page',
      complementary: 'Contenu complémentaire'
    }
  }
};

// Fonction pour vérifier le contraste des couleurs
export function checkColorContrast(foreground, background) {
  // Convertir les couleurs en RGB
  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);
  
  // Calculer la luminance relative
  const fgLuminance = getLuminance(fg);
  const bgLuminance = getLuminance(bg);
  
  // Calculer le contraste
  const contrast = (Math.max(fgLuminance, bgLuminance) + 0.05) / 
                   (Math.min(fgLuminance, bgLuminance) + 0.05);
  
  return contrast;
}

// Fonction pour convertir hex en RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Fonction pour calculer la luminance
function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Fonction pour gérer le focus
export function manageFocus() {
  // Skip links
  const skipLinks = document.querySelectorAll('.skip-link');
  skipLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.focus();
        target.scrollIntoView();
      }
    });
  });
  
  // Focus trapping pour les modales
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    });
  });
}

// Fonction pour gérer les animations
export function manageAnimations() {
  // Respecter les préférences de mouvement
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--animation-iteration-count', '1');
    
    // Désactiver les animations CSS
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    `;
    document.head.appendChild(style);
  }
}

// Fonction pour gérer les polices
export function manageFonts() {
  // Augmenter la taille des polices si nécessaire
  const fontSize = getComputedStyle(document.documentElement).fontSize;
  const baseSize = parseFloat(fontSize);
  
  if (baseSize < 16) {
    document.documentElement.style.fontSize = '16px';
  }
  
  // Gérer l'espacement des lettres
  document.documentElement.style.setProperty('--letter-spacing', '0.025em');
}

// Fonction pour gérer les images
export function manageImages() {
  // Ajouter des alt text manquants
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      img.alt = 'Image';
    }
  });
  
  // Marquer les images décoratives
  const decorativeImages = document.querySelectorAll('img[data-decorative]');
  decorativeImages.forEach(img => {
    img.alt = '';
    img.setAttribute('role', 'presentation');
  });
}

// Fonction pour gérer les formulaires
export function manageForms() {
  // Ajouter des labels manquants
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    if (!input.labels.length && !input.getAttribute('aria-label')) {
      const label = document.createElement('label');
      label.textContent = input.placeholder || 'Champ de saisie';
      label.setAttribute('for', input.id || input.name);
      input.parentNode.insertBefore(label, input);
    }
  });
  
  // Ajouter des messages d'erreur
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          e.preventDefault();
          showFieldError(field, 'Ce champ est obligatoire');
        }
      });
    });
  }
}

// Fonction pour afficher les erreurs de champ
function showFieldError(field, message) {
  const errorElement = field.parentNode.querySelector('.error-message');
  if (errorElement) {
    errorElement.textContent = message;
  } else {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.setAttribute('role', 'alert');
    field.parentNode.appendChild(error);
  }
  
  field.setAttribute('aria-invalid', 'true');
  field.focus();
}

// Fonction pour gérer le clavier
export function manageKeyboard() {
  // Raccourcis clavier
  document.addEventListener('keydown', (e) => {
    // Escape pour fermer les modales
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal.active');
      if (openModal) {
        openModal.classList.remove('active');
      }
    }
    
    // Alt + M pour le menu
    if (e.altKey && e.key === 'm') {
      e.preventDefault();
      const menu = document.querySelector('.nav-menu');
      if (menu) {
        menu.classList.toggle('active');
      }
    }
  });
}

// Fonction pour gérer les lecteurs d'écran
export function manageScreenReaders() {
  // Ajouter des landmarks ARIA
  const main = document.querySelector('main');
  if (main) {
    main.setAttribute('role', 'main');
  }
  
  const nav = document.querySelector('nav');
  if (nav) {
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation principale');
  }
  
  const header = document.querySelector('header');
  if (header) {
    header.setAttribute('role', 'banner');
  }
  
  const footer = document.querySelector('footer');
  if (footer) {
    footer.setAttribute('role', 'contentinfo');
  }
  
  // Ajouter des ARIA labels
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
      button.setAttribute('aria-label', 'Bouton');
    }
  });
}

// Fonction d'initialisation de l'accessibilité
export function initAccessibility() {
  manageFocus();
  manageAnimations();
  manageFonts();
  manageImages();
  manageForms();
  manageKeyboard();
  manageScreenReaders();
}

export default accessibilityConfig;
