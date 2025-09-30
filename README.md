# Portfolio Sidiki Coulibaly - IT Support Analyst

## 🚀 Aperçu du Projet

Portfolio professionnel moderne et responsive pour Sidiki Coulibaly, spécialisé en IT Support et Infrastructure. Ce site web présente de manière élégante les compétences, expériences et projets d'un expert en technologies VMware, FortiGate, Active Directory et cybersécurité.

## ✨ Fonctionnalités

### 🎨 Design Responsive
- **Mobile-First** : Conception adaptative pour tous les appareils
- **Breakpoints** : Mobile (576px), Tablet (768px), Desktop (992px), Large (1200px)
- **Images optimisées** : Chargement adaptatif et compression
- **Polices responsives** : Taille de police adaptative selon l'écran
- **Navigation tactile** : Optimisée pour les appareils mobiles

### 🎯 Expérience Utilisateur
- **Navigation fluide** : Menu hamburger sur mobile
- **Thème clair/sombre** : Basculement dynamique
- **Animations** : Transitions fluides et effets hover
- **Accessibilité** : Support clavier et lecteurs d'écran
- **Performance** : Chargement rapide et optimisé

### 📱 Compatibilité
- **Navigateurs** : Chrome, Firefox, Safari, Edge
- **Appareils** : Desktop, Tablet, Mobile
- **Systèmes** : Windows, macOS, Linux, iOS, Android
- **Résolutions** : 320px à 4K+

## 🛠️ Technologies Utilisées

### Frontend
- **HTML5** : Structure sémantique et accessible
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript ES6+** : Fonctionnalités interactives
- **Font Awesome** : Icônes vectorielles
- **Google Fonts** : Typographie optimisée

### Outils de Développement
- **PowerShell** : Script de build automatisé
- **Git** : Contrôle de version
- **Netlify** : Déploiement et hébergement
- **GitHub** : Repository et collaboration

## 📁 Structure du Projet

```
portfolio/
├── index.html                 # Page principale
├── styles/                    # Feuilles de style
│   ├── main.css              # Styles principaux
│   ├── components.css        # Composants UI
│   ├── animations.css        # Animations
│   ├── responsive.css        # Media queries
│   └── professional.css      # Styles professionnels
├── scripts/                   # JavaScript
│   ├── main.js              # Initialisation
│   ├── navigation.js        # Navigation
│   ├── form.js              # Formulaire contact
│   ├── projects.js          # Projets
│   ├── skills.js            # Compétences
│   └── theme.js             # Thème
├── public/                    # Assets publics
│   └── favicon_io1/         # Favicon complet
├── Images/                    # Images du portfolio
├── app-config.js             # Configuration
├── build.ps1                 # Script de build
├── package.json              # Configuration projet
├── netlify.toml              # Configuration Netlify
└── Sidiki_Coul_CV.pdf        # CV téléchargeable
```

## 🚀 Installation et Déploiement

### Prérequis
- PowerShell 5.0+
- Git
- Navigateur web moderne

### Installation Locale
```bash
# Cloner le repository
git clone https://github.com/SIDIKI01/portfolio.git
cd portfolio

# Installer les dépendances (optionnel)
npm install

# Build du projet
powershell -ExecutionPolicy Bypass -File build.ps1
```

### Déploiement Netlify
1. Connecter le repository GitHub à Netlify
2. Configurer le build command : `powershell -ExecutionPolicy Bypass -File build.ps1`
3. Déployer automatiquement

### Déploiement GitHub Pages
1. Activer GitHub Pages dans les paramètres du repository
2. Sélectionner la branche main
3. Le site sera disponible à l'URL GitHub Pages

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `styles/main.css` :
```css
:root {
  --primary-color: #00d4ff;
  --accent-color: #00d4ff;
  --background-color: #0a192f;
  --text-primary: #ffffff;
}
```

### Thèmes
Support des thèmes clair et sombre avec basculement automatique.

### Responsive
Breakpoints définis dans `styles/responsive.css` :
- Mobile : < 576px
- Tablet : 576px - 768px
- Desktop : 768px - 992px
- Large : 992px - 1200px
- XLarge : > 1200px

## 📱 Responsive Web Design

### Principes Appliqués
- **Mobile-First** : Conception prioritaire mobile
- **Fluid Grid** : Grilles flexibles et adaptatives
- **Flexible Images** : Images responsives avec object-fit
- **Media Queries** : Adaptation selon la taille d'écran
- **Touch-Friendly** : Boutons et liens optimisés pour le tactile

### Optimisations
- **Performance** : Images compressées et optimisées
- **Accessibilité** : Contraste et navigation clavier
- **SEO** : Meta tags et structure sémantique
- **PWA** : Manifest et favicon complet

## 🔧 Configuration

### Variables CSS
```css
:root {
  --mobile: 576px;
  --tablet: 768px;
  --desktop: 992px;
  --large: 1200px;
  --xlarge: 1400px;
}
```

### Configuration JavaScript
```javascript
const AppConfig = {
  site: {
    name: "Sidiki Coulibaly Portfolio",
    version: "2.0.0"
  },
  themes: {
    light: { /* ... */ },
    dark: { /* ... */ }
  }
};
```

## 📊 Performance

### Optimisations
- **CSS Minifié** : Styles optimisés
- **JavaScript Modulaire** : Code organisé
- **Images Responsives** : Chargement adaptatif
- **Lazy Loading** : Chargement différé
- **Caching** : Headers de cache optimisés

### Métriques
- **Lighthouse Score** : 90+
- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🎯 Fonctionnalités Spécifiques

### Formulaire de Contact
- Validation côté client
- Accusé de réception email
- Messages d'erreur/succès
- Design responsive

### Téléchargement CV
- Boutons de téléchargement multiples
- Fichier PDF optimisé
- Design professionnel

### Projets
- Modales détaillées
- Images responsives
- Technologies utilisées
- Liens externes

## 🔒 Sécurité

### Mesures Implémentées
- **HTTPS** : Connexion sécurisée
- **Headers de Sécurité** : X-Frame-Options, X-XSS-Protection
- **Validation** : Sanitisation des entrées
- **CSP** : Content Security Policy

## 📈 SEO

### Optimisations
- **Meta Tags** : Description, keywords, author
- **Structured Data** : Données structurées
- **Sitemap** : Plan du site
- **Robots.txt** : Instructions pour les crawlers
- **Open Graph** : Partage sur réseaux sociaux

## 🐛 Dépannage

### Problèmes Courants
1. **Build échoue** : Vérifier PowerShell et permissions
2. **Images ne s'affichent pas** : Vérifier les chemins
3. **Styles cassés** : Vérifier l'ordre des CSS
4. **JavaScript ne fonctionne pas** : Vérifier la console

### Support
- **Email** : scoulou82@gmail.com
- **LinkedIn** : [Sidiki Coulibaly](https://www.linkedin.com/in/sidiki-coulibaly-0814a0218)
- **GitHub** : [SIDIKI01](https://github.com/SIDIKI01)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Sidiki Coulibaly**
- **Email** : scoulou82@gmail.com
- **LinkedIn** : [Sidiki Coulibaly](https://www.linkedin.com/in/sidiki-coulibaly-0814a0218)
- **GitHub** : [SIDIKI01](https://github.com/SIDIKI01)

## 🙏 Remerciements

- Font Awesome pour les icônes
- Google Fonts pour la typographie
- Netlify pour l'hébergement
- GitHub pour le versioning

---

*Dernière mise à jour : Décembre 2024*
