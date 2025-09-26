# Guide de Déploiement GitHub Pages - Portfolio Sidiki Coulibaly

## 🚀 Déploiement Rapide

### Option 1: Déploiement Manuel (Recommandé)

1. **Build le projet** :
   ```powershell
   powershell -ExecutionPolicy Bypass -File build.ps1
   ```

2. **Aller dans le dossier `dist`** et copier tous les fichiers

3. **Créer un nouveau repository** sur GitHub :
   - Nom : `sidiki-coulibaly.github.io`
   - Description : "Portfolio professionnel de Sidiki Coulibaly"

4. **Uploader les fichiers** du dossier `dist` dans le repository

5. **Activer GitHub Pages** :
   - Aller dans Settings > Pages
   - Source : Deploy from a branch
   - Branch : main
   - Folder : / (root)

6. **Votre site est en ligne !** 🎉
   - URL : `https://sidiki-coulibaly.github.io`

### Option 2: Déploiement avec GitHub Actions

1. **Créer le repository** `sidiki-coulibaly.github.io`

2. **Pousser le code source** :
   ```bash
   git add .
   git commit -m "feat: Portfolio ready for GitHub Pages"
   git push origin main
   ```

3. **Le déploiement se fait automatiquement** via GitHub Actions

## ✅ Vérifications Post-Déploiement

### 1. Fonctionnalités
- [ ] Site accessible à `https://sidiki-coulibaly.github.io`
- [ ] Navigation fonctionnelle
- [ ] Formulaire de contact
- [ ] Thème sombre/clair
- [ ] Responsive design

### 2. Performance
- [ ] Temps de chargement < 3s
- [ ] Images optimisées
- [ ] CSS/JS minifiés
- [ ] Cache configuré

### 3. SEO
- [ ] Métadonnées présentes
- [ ] Titre et description
- [ ] Images avec alt text
- [ ] Structure sémantique

## 🔧 Configuration Avancée

### Domaine Personnalisé
1. Créer un fichier `CNAME` dans le repository :
   ```
   sidiki-coulibaly.dev
   ```

2. Configurer les DNS chez votre registrar :
   ```
   Type: CNAME
   Name: www
   Value: sidiki-coulibaly.github.io
   
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

### HTTPS
- GitHub Pages force HTTPS automatiquement
- Pas de configuration supplémentaire nécessaire

### Analytics
1. Aller dans Settings > Pages
2. Activer GitHub Pages Analytics
3. Ou intégrer Google Analytics

## 🚨 Dépannage

### Erreur 404
- Vérifier que le fichier `index.html` est à la racine
- Vérifier la configuration des redirections

### Erreur de Build
- Vérifier les logs dans GitHub Actions
- Ou build localement avec `build.ps1`

### Problème de Performance
- Vérifier la compression des images
- Optimiser les CSS/JS
- Utiliser un CDN

## 📊 Monitoring

### GitHub Pages
- Aller dans Settings > Pages pour voir le statut
- Vérifier les logs de déploiement

### Performance
- Utiliser **Lighthouse** pour tester
- Surveiller les **Core Web Vitals**
- Optimiser selon les recommandations

## 🎯 Optimisations

### Images
- Utiliser des formats modernes (WebP, AVIF)
- Optimiser les tailles
- Implémenter le lazy loading

### CSS/JS
- Minifier le code
- Utiliser la compression gzip
- Mettre en cache les assets

### SEO
- Ajouter un sitemap
- Optimiser les métadonnées
- Utiliser des données structurées

## 📞 Support

### Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Community](https://github.community/)

### Contact
- **Email** : scoulou82@gmail.com
- **GitHub** : [SIDIKI01](https://github.com/SIDIKI01)

---

## 🎉 Félicitations !

Votre portfolio est maintenant déployé sur GitHub Pages ! 

**Prochaines étapes :**
1. Configurer votre domaine personnalisé
2. Activer les analytics
3. Optimiser les performances
4. Partager votre portfolio !

*Dernière mise à jour: Décembre 2024*
