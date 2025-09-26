// Script de build simple pour éviter les erreurs de Vite

const fs = require('fs');
const path = require('path');

// Configuration de build
const buildConfig = {
  inputDir: '.',
  outputDir: 'dist',
  filesToCopy: [
    'index.html',
    'styles/',
    'scripts/',
    'Images/',
    'app-config.js',
    'build-simple.js'
  ]
};

// Fonction pour copier un fichier
function copyFile(src, dest) {
  const srcPath = path.join(buildConfig.inputDir, src);
  const destPath = path.join(buildConfig.outputDir, dest);
  
  // Créer le répertoire de destination si nécessaire
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copier le fichier
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${src} -> ${dest}`);
  }
}

// Fonction pour copier un répertoire
function copyDir(src, dest) {
  const srcPath = path.join(buildConfig.inputDir, src);
  const destPath = path.join(buildConfig.outputDir, dest);
  
  if (fs.existsSync(srcPath)) {
    // Créer le répertoire de destination
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }
    
    // Copier tous les fichiers du répertoire
    const files = fs.readdirSync(srcPath);
    files.forEach(file => {
      const srcFile = path.join(srcPath, file);
      const destFile = path.join(destPath, file);
      
      if (fs.statSync(srcFile).isDirectory()) {
        copyDir(path.join(src, file), path.join(dest, file));
      } else {
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied: ${path.join(src, file)} -> ${path.join(dest, file)}`);
      }
    });
  }
}

// Fonction principale de build
function build() {
  console.log('Starting build process...');
  
  // Créer le répertoire de sortie
  if (!fs.existsSync(buildConfig.outputDir)) {
    fs.mkdirSync(buildConfig.outputDir, { recursive: true });
  }
  
  // Copier les fichiers
  buildConfig.filesToCopy.forEach(item => {
    const srcPath = path.join(buildConfig.inputDir, item);
    
    if (fs.existsSync(srcPath)) {
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(item, item);
      } else {
        copyFile(item, item);
      }
    } else {
      console.warn(`File/directory not found: ${item}`);
    }
  });
  
  // Créer un fichier de configuration pour Netlify
  const netlifyConfig = `[build]
  publish = "dist"
  command = "node build.js"
  
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200`;
  
  fs.writeFileSync(path.join(buildConfig.outputDir, 'netlify.toml'), netlifyConfig);
  
  console.log('Build completed successfully!');
  console.log(`Output directory: ${buildConfig.outputDir}`);
}

// Exécuter le build si ce script est appelé directement
if (require.main === module) {
  build();
}

module.exports = { build, buildConfig };
