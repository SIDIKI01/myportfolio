# Guide de Déploiement - Portfolio Sidiki Coulibaly

## 🚀 Options de Déploiement

### 1. GitHub Pages (Recommandé)

#### Configuration automatique avec GitHub Actions
1. Créer un repository GitHub
2. Pousser le code vers le repository
3. Aller dans Settings > Pages
4. Sélectionner "GitHub Actions" comme source
5. Le workflow se déclenchera automatiquement

#### Configuration manuelle
```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Build du projet
npm run build

# Déployer vers gh-pages
npx gh-pages -d dist
```

### 2. Netlify

#### Déploiement par glisser-déposer
1. Aller sur [netlify.com](https://netlify.com)
2. Glisser le dossier `dist` dans la zone de déploiement
3. Configurer le domaine personnalisé si nécessaire

#### Déploiement avec CLI
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Build du projet
npm run build

# Déployer
netlify deploy --prod --dir=dist
```

### 3. Vercel

#### Déploiement avec CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Build du projet
npm run build

# Déployer
vercel --prod
```

### 4. Serveur Web Traditionnel

#### Apache
```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name sidiki-coulibaly.dev;
    root /var/www/portfolio;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Cache static assets
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Configuration du Domaine Personnalisé

### GitHub Pages
1. Aller dans Settings > Pages
2. Ajouter le domaine personnalisé
3. Créer un fichier `CNAME` avec le nom de domaine
4. Configurer les DNS chez votre registrar

### Netlify
1. Aller dans Domain settings
2. Ajouter le domaine personnalisé
3. Configurer les DNS selon les instructions

## 📊 Optimisations de Performance

### Images
- Utiliser des formats modernes (WebP, AVIF)
- Optimiser les tailles d'images
- Implémenter le lazy loading

### CSS/JS
- Minification automatique avec Vite
- Compression gzip/brotli
- Mise en cache des assets statiques

### CDN
- Utiliser un CDN pour les assets statiques
- Optimiser les polices avec font-display: swap

## 🔒 Sécurité

### Headers de Sécurité
```html
<!-- Dans index.html -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://cdnjs.cloudflare.com;">
```

### HTTPS
- Forcer HTTPS sur tous les déploiements
- Utiliser des certificats SSL valides
- Configurer HSTS

## 📈 Monitoring et Analytics

### Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Utiliser Google PageSpeed Insights
- Implémenter Core Web Vitals
- Surveiller les métriques de performance

## 🚨 Dépannage

### Problèmes Courants

#### 1. Routes 404 sur refresh
**Solution**: Configurer le serveur pour rediriger vers index.html

#### 2. Assets non chargés
**Solution**: Vérifier les chemins relatifs et la configuration de base

#### 3. Performance lente
**Solution**: 
- Optimiser les images
- Minifier le CSS/JS
- Utiliser un CDN

#### 4. Problèmes de cache
**Solution**: 
- Ajouter des paramètres de version
- Configurer les headers de cache
- Utiliser le cache busting

## 📞 Support

Pour toute question concernant le déploiement :
- **Email**: scoulou82@gmail.com
- **GitHub Issues**: [Créer une issue](https://github.com/SIDIKI01/portfolio/issues)

---

*Dernière mise à jour: Décembre 2024*
