# Script de build PowerShell pour le portfolio

Write-Host "Starting build process..." -ForegroundColor Green

# Configuration
$sourceDir = "."
$outputDir = "dist"

# Créer le répertoire de sortie
if (Test-Path $outputDir) {
    Remove-Item $outputDir -Recurse -Force
}
New-Item -ItemType Directory -Path $outputDir -Force | Out-Null

# Fonction pour copier un fichier
function Copy-File {
    param($source, $dest)
    $destPath = Join-Path $outputDir $dest
    $destDir = Split-Path $destPath -Parent
    
    if (!(Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    if (Test-Path $source) {
        Copy-Item $source $destPath -Force
        Write-Host "Copied: $source -> $dest" -ForegroundColor Yellow
    } else {
        Write-Warning "File not found: $source"
    }
}

# Fonction pour copier un répertoire
function Copy-Directory {
    param($source, $dest)
    $sourcePath = Join-Path $sourceDir $source
    $destPath = Join-Path $outputDir $dest
    
    if (Test-Path $sourcePath) {
        if (!(Test-Path $destPath)) {
            New-Item -ItemType Directory -Path $destPath -Force | Out-Null
        }
        
        Get-ChildItem $sourcePath -Recurse | ForEach-Object {
            $relativePath = $_.FullName.Substring($sourcePath.Length + 1)
            $destFile = Join-Path $destPath $relativePath
            
            if ($_.PSIsContainer) {
                if (!(Test-Path $destFile)) {
                    New-Item -ItemType Directory -Path $destFile -Force | Out-Null
                }
            } else {
                $destFileDir = Split-Path $destFile -Parent
                if (!(Test-Path $destFileDir)) {
                    New-Item -ItemType Directory -Path $destFileDir -Force | Out-Null
                }
                Copy-Item $_.FullName $destFile -Force
                Write-Host "Copied: $($_.Name)" -ForegroundColor Yellow
            }
        }
    } else {
        Write-Warning "Directory not found: $source"
    }
}

# Fichiers et répertoires à copier
$itemsToCopy = @(
    "index.html",
    "styles",
    "scripts", 
    "Images",
    "public",
    "app-config.js",
    "Sidiki_Coul_CV.pdf"
)

# Copier les éléments
foreach ($item in $itemsToCopy) {
    $sourcePath = Join-Path $sourceDir $item
    
    if (Test-Path $sourcePath) {
        if ((Get-Item $sourcePath).PSIsContainer) {
            Copy-Directory $item $item
        } else {
            Copy-File $item $item
        }
    } else {
        Write-Warning "Item not found: $item"
    }
}

# Créer le fichier netlify.toml
$netlifyConfig = @"
[build]
  publish = "dist"
  command = "powershell -ExecutionPolicy Bypass -File build.ps1"

[build.environment]
  NODE_VERSION = "18"
  NODE_ENV = "production"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/styles/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "/scripts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.jpg"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.png"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.svg"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
"@

$netlifyPath = Join-Path $outputDir "netlify.toml"
$netlifyConfig | Out-File -FilePath $netlifyPath -Encoding UTF8

Write-Host "Build completed successfully!" -ForegroundColor Green
Write-Host "Output directory: $outputDir" -ForegroundColor Cyan
Write-Host "Ready for Netlify deployment!" -ForegroundColor Magenta
