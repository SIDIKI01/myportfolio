# Guide de Développement - Portfolio Sidiki Coulibaly

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- npm 6+
- Navigateur web moderne

### Installation
```bash
# Cloner le repository
git clone https://github.com/SIDIKI01/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 📁 Structure du Projet

```
project/
├── index.html                 # Page principale
├── config.js                  # Configuration principale
├── seo-config.js              # Configuration SEO
├── performance-config.js      # Configuration des performances
├── accessibility-config.js    # Configuration d'accessibilité
├── styles/
│   ├── main.css              # Styles principaux
│   ├── components.css        # Styles des composants
│   ├── animations.css        # Animations et transitions
│   ├── responsive.css        # Design responsive
│   └── professional.css      # Améliorations professionnelles
├── scripts/
│   ├── main.js               # Script principal
│   ├── navigation.js         # Navigation améliorée
│   ├── skills.js             # Gestion des compétences
│   ├── projects.js           # Gestion des projets
│   ├── theme.js              # Gestion du thème
│   └── form.js               # Gestion du formulaire
├── Images/                   # Images du portfolio
├── .github/workflows/        # GitHub Actions
├── README.md                 # Documentation principale
├── DEVELOPMENT.md            # Guide de développement
├── deploy.md                 # Guide de déploiement
└── package.json              # Configuration npm
```

## 🛠️ Architecture Technique

### Frontend
- **HTML5**: Structure sémantique et accessible
- **CSS3**: Styles modernes avec variables CSS et Grid/Flexbox
- **JavaScript ES6+**: Code modulaire et optimisé
- **Vite**: Build tool moderne et rapide

### Design System
- **Variables CSS**: Couleurs, espacements, polices centralisées
- **Composants**: Cartes, boutons, modales réutilisables
- **Responsive**: Mobile-first avec breakpoints optimisés
- **Thèmes**: Support thème sombre/clair

### Performance
- **Lazy Loading**: Images et composants
- **Code Splitting**: JavaScript modulaire
- **Optimisation**: Images, CSS, JS minifiés
- **Caching**: Stratégies de cache optimisées

## 🎨 Personnalisation

### Couleurs
Modifier les couleurs dans `styles/main.css`:
```css
:root {
  --primary-color: #2563eb;    /* Bleu principal */
  --accent-color: #f59e0b;     /* Orange accent */
  --text-primary: #1f2937;     /* Texte principal */
  --text-secondary: #6b7280;   /* Texte secondaire */
  --background-color: #ffffff; /* Arrière-plan */
  --background-light: #f9fafb; /* Arrière-plan clair */
}
```

### Contenu
Modifier le contenu dans `config.js`:
```javascript
export const config = {
  sections: {
    hero: {
      title: "Votre Nom",
      subtitle: "Votre Titre",
      description: "Votre description..."
    }
  }
};
```

### Projets
Ajouter des projets dans `config.js`:
```javascript
projects: {
  items: [
    {
      id: "project1",
      title: "Nom du Projet",
      description: "Description du projet",
      technologies: ["Tech1", "Tech2"],
      category: "Catégorie",
      year: "2024"
    }
  ]
}
```

## 🔧 Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement Vite
npm run start        # Serveur Python simple

# Build
npm run build        # Build de production
npm run preview      # Prévisualisation du build

# Déploiement
npm run serve        # Serveur local avec npx serve
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### Composants Responsive
- **Navigation**: Menu hamburger sur mobile
- **Grilles**: Adaptation automatique des colonnes
- **Images**: Tailles adaptatives
- **Typographie**: Échelles fluides

## ♿ Accessibilité

### Standards
- **WCAG 2.1 AA**: Conformité niveau AA
- **ARIA**: Attributs pour les lecteurs d'écran
- **Navigation clavier**: Support complet
- **Contraste**: Ratios respectés

### Implémentation
```javascript
// Initialisation automatique
import { initAccessibility } from './accessibility-config.js';
initAccessibility();
```

## ⚡ Optimisations de Performance

### Images
- **Formats modernes**: WebP, AVIF
- **Lazy loading**: Chargement différé
- **Tailles adaptatives**: Responsive images
- **Compression**: Optimisation automatique

### CSS/JS
- **Minification**: Code optimisé
- **Compression**: Gzip/Brotli
- **Cache**: Headers optimisés
- **CDN**: Assets distribués

### Monitoring
```javascript
// Métriques Core Web Vitals
import { measurePerformance } from './performance-config.js';
measurePerformance();
```

## 🔍 SEO

### Métadonnées
```javascript
// Configuration automatique
import { seoConfig } from './seo-config.js';
```

### Données Structurées
- **Person**: Informations personnelles
- **Organization**: Entreprise
- **WebSite**: Site web
- **BreadcrumbList**: Navigation

### Optimisations
- **URLs canoniques**: Éviter le contenu dupliqué
- **Sitemap**: Plan du site
- **Robots.txt**: Instructions pour les crawlers

## 🧪 Tests

### Tests Manuels
- **Navigateurs**: Chrome, Firefox, Safari, Edge
- **Appareils**: Mobile, tablette, desktop
- **Accessibilité**: Lecteurs d'écran, navigation clavier

### Tests Automatisés
```bash
# Vérification du code
npm run lint

# Tests de performance
npm run test:performance
```

## 🚀 Déploiement

### GitHub Pages
```bash
# Build et déploiement automatique
git push origin main
```

### Netlify
```bash
# Déploiement avec CLI
npm run build
netlify deploy --prod --dir=dist
```

### Vercel
```bash
# Déploiement avec CLI
npm run build
vercel --prod
```

## 🐛 Dépannage

### Problèmes Courants

#### 1. Images non chargées
**Solution**: Vérifier les chemins dans `Images/`

#### 2. Styles non appliqués
**Solution**: Vérifier l'ordre des imports CSS

#### 3. JavaScript non fonctionnel
**Solution**: Vérifier la console pour les erreurs

#### 4. Performance lente
**Solution**: 
- Optimiser les images
- Minifier le CSS/JS
- Utiliser un CDN

### Debug
```javascript
// Mode debug
localStorage.setItem('debug', 'true');

// Logs détaillés
console.log('Debug mode enabled');
```

## 📚 Ressources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Outils
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)

### Standards
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [HTML5 Specification](https://html.spec.whatwg.org/)
- [CSS3 Specification](https://www.w3.org/Style/CSS/)

## 🤝 Contribution

### Workflow
1. Fork le repository
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

### Standards
- **Code**: ESLint, Prettier
- **Commits**: Conventional Commits
- **Tests**: Tests unitaires et d'intégration
- **Documentation**: README et commentaires

## 📞 Support

### Contact
- **Email**: scoulou82@gmail.com
- **GitHub**: [SIDIKI01](https://github.com/SIDIKI01)
- **LinkedIn**: [Sidiki Coulibaly](https://www.linkedin.com/in/sidiki-coulibaly-0814a0218)

### Issues
- [Créer une issue](https://github.com/SIDIKI01/portfolio/issues)
- [Discussions](https://github.com/SIDIKI01/portfolio/discussions)

---

*Dernière mise à jour: Décembre 2024*
