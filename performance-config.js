// Configuration des performances pour le portfolio

export const performanceConfig = {
  // Configuration des images
  images: {
    // Formats supportés
    formats: ['webp', 'avif', 'jpg', 'png'],
    
    // Tailles d'images
    sizes: {
      hero: { width: 800, height: 600, quality: 85 },
      project: { width: 600, height: 400, quality: 80 },
      avatar: { width: 300, height: 300, quality: 90 }
    },
    
    // Lazy loading
    lazyLoading: true,
    
    // Placeholder
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+'
  },
  
  // Configuration des polices
  fonts: {
    // Préchargement des polices critiques
    preload: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ],
    
    // Fallback
    fallback: {
      'Inter': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
    },
    
    // Font display
    display: 'swap'
  },
  
  // Configuration du cache
  cache: {
    // Durée de cache pour les assets statiques
    staticAssets: '1y',
    
    // Durée de cache pour le HTML
    html: '1h',
    
    // Durée de cache pour les API
    api: '5m'
  },
  
  // Configuration de la compression
  compression: {
    // Types de fichiers à compresser
    types: ['html', 'css', 'js', 'json', 'xml', 'svg'],
    
    // Niveau de compression
    level: 6,
    
    // Seuil minimum
    threshold: 1024
  },
  
  // Configuration du lazy loading
  lazyLoading: {
    // Intersection Observer options
    rootMargin: '50px',
    threshold: 0.1,
    
    // Délai avant chargement
    delay: 100
  },
  
  // Configuration des animations
  animations: {
    // Respecter les préférences utilisateur
    respectMotionPreference: true,
    
    // Durée par défaut
    defaultDuration: '0.3s',
    
    // Easing par défaut
    defaultEasing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  // Configuration du monitoring
  monitoring: {
    // Core Web Vitals
    coreWebVitals: true,
    
    // Performance Observer
    performanceObserver: true,
    
    // Métriques personnalisées
    customMetrics: [
      'first-contentful-paint',
      'largest-contentful-paint',
      'first-input-delay',
      'cumulative-layout-shift'
    ]
  }
};

// Fonction pour optimiser les images
export function optimizeImage(src, options = {}) {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  // Si c'est une image externe, retourner l'URL originale
  if (src.startsWith('http')) {
    return src;
  }
  
  // Pour les images locales, on pourrait utiliser un service d'optimisation
  return src;
}

// Fonction pour précharger les ressources critiques
export function preloadCriticalResources() {
  const criticalResources = [
    { href: '/styles/main.css', as: 'style' },
    { href: '/styles/components.css', as: 'style' },
    { href: '/scripts/main.js', as: 'script' },
    { href: '/Images/banner-01.jpg', as: 'image' }
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    
    if (resource.as === 'style') {
      link.onload = () => link.rel = 'stylesheet';
    }
    
    document.head.appendChild(link);
  });
}

// Fonction pour mesurer les performances
export function measurePerformance() {
  if ('performance' in window) {
    // Mesurer le temps de chargement
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      
      console.log('Performance Metrics:', {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        firstByte: perfData.responseStart - perfData.requestStart
      });
    });
  }
}

// Fonction pour optimiser le scroll
export function optimizeScroll() {
  let ticking = false;
  
  function updateScroll() {
    // Logique de scroll optimisée
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
}

// Fonction pour gérer le lazy loading
export function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: performanceConfig.lazyLoading.rootMargin,
      threshold: performanceConfig.lazyLoading.threshold
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Fonction pour optimiser les animations
export function optimizeAnimations() {
  // Respecter les préférences de mouvement
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--animation-iteration-count', '1');
  }
}

// Fonction d'initialisation des performances
export function initPerformance() {
  preloadCriticalResources();
  measurePerformance();
  optimizeScroll();
  initLazyLoading();
  optimizeAnimations();
}

export default performanceConfig;
