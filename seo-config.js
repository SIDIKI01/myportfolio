// Configuration SEO pour le portfolio de Sidiki Coulibaly

export const seoConfig = {
  // Métadonnées de base
  title: "Sidiki Coulibaly | IT Support Analyst | IT Infrastructure Engineer",
  description: "Portfolio professionnel de Sidiki Coulibaly, spécialiste en infrastructure IT avec expertise en FortiGate, VMware, Veeam, NinjaOne et PURE Storage. Plus de 6 ans d'expérience en support technique et administration système.",
  keywords: [
    "Sidiki Coulibaly",
    "IT Support Analyst",
    "IT Infrastructure Engineer",
    "FortiGate",
    "VMware",
    "Veeam",
    "NinjaOne",
    "PURE Storage",
    "Active Directory",
    "vSphere",
    "Cybersécurité",
    "Virtualisation",
    "Monitoring",
    "Infrastructure IT",
    "Support technique",
    "Administration système",
    "Bamako",
    "Mali"
  ],
  
  // Open Graph
  og: {
    title: "Sidiki Coulibaly - IT Support Analyst & Infrastructure Engineer",
    description: "Expert en infrastructure IT avec plus de 6 ans d'expérience. Spécialisé en FortiGate, VMware, Veeam et solutions de monitoring.",
    image: "https://sidiki-coulibaly.dev/Images/banner-01.jpg",
    url: "https://sidiki-coulibaly.dev",
    type: "website",
    siteName: "Sidiki Coulibaly Portfolio"
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sidiki Coulibaly - IT Support Analyst & Infrastructure Engineer",
    description: "Expert en infrastructure IT avec plus de 6 ans d'expérience. Spécialisé en FortiGate, VMware, Veeam et solutions de monitoring.",
    image: "https://sidiki-coulibaly.dev/Images/banner-01.jpg",
    creator: "@sidiki_coulibaly"
  },
  
  // Données structurées JSON-LD
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sidiki Coulibaly",
    "jobTitle": "IT Support Analyst | IT Infrastructure Engineer",
    "description": "Technicien et formateur IT polyvalent, orienté terrain, avec plus de six ans d'expérience dans la gestion et la sécurisation d'infrastructures réseaux et systèmes.",
    "url": "https://sidiki-coulibaly.dev",
    "image": "https://sidiki-coulibaly.dev/Images/banner-01.jpg",
    "email": "scoulou82@gmail.com",
    "telephone": "+223 76 17 66 69",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bamako",
      "addressRegion": "Mali",
      "addressCountry": "ML"
    },
    "sameAs": [
      "https://www.linkedin.com/in/sidiki-coulibaly-0814a0218",
      "https://github.com/SIDIKI01"
    ],
    "knowsAbout": [
      "FortiGate",
      "VMware",
      "Veeam",
      "NinjaOne",
      "PURE Storage",
      "Active Directory",
      "vSphere",
      "Cybersécurité",
      "Virtualisation",
      "Monitoring IT"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "IT Support Analyst",
      "description": "Spécialiste en support technique et administration d'infrastructure IT"
    }
  },
  
  // Configuration des robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Canonical URL
  canonical: "https://sidiki-coulibaly.dev",
  
  // Langue
  language: "fr-FR",
  
  // Géolocalisation
  geo: {
    latitude: "12.6392",
    longitude: "-8.0029",
    placename: "Bamako, Mali"
  }
};

// Fonction pour générer les métadonnées dynamiques
export function generateMetaTags(config) {
  const metaTags = [];
  
  // Titre
  metaTags.push(`<title>${config.title}</title>`);
  
  // Description
  metaTags.push(`<meta name="description" content="${config.description}">`);
  
  // Mots-clés
  metaTags.push(`<meta name="keywords" content="${config.keywords.join(', ')}">`);
  
  // Robots
  metaTags.push(`<meta name="robots" content="${config.robots.index ? 'index' : 'noindex'}, ${config.robots.follow ? 'follow' : 'nofollow'}">`);
  
  // Canonical
  metaTags.push(`<link rel="canonical" href="${config.canonical}">`);
  
  // Langue
  metaTags.push(`<meta http-equiv="content-language" content="${config.language}">`);
  
  // Open Graph
  Object.entries(config.og).forEach(([key, value]) => {
    metaTags.push(`<meta property="og:${key}" content="${value}">`);
  });
  
  // Twitter Card
  Object.entries(config.twitter).forEach(([key, value]) => {
    metaTags.push(`<meta name="twitter:${key}" content="${value}">`);
  });
  
  // Géolocalisation
  metaTags.push(`<meta name="geo.region" content="ML-BKO">`);
  metaTags.push(`<meta name="geo.placename" content="${config.geo.placename}">`);
  metaTags.push(`<meta name="geo.position" content="${config.geo.latitude};${config.geo.longitude}">`);
  
  return metaTags.join('\n');
}

// Fonction pour générer les données structurées
export function generateStructuredData(config) {
  return `<script type="application/ld+json">${JSON.stringify(config.structuredData, null, 2)}</script>`;
}

export default seoConfig;
