// Configuration principale du portfolio

import { seoConfig, generateMetaTags, generateStructuredData } from './seo-config.js';
import { performanceConfig, initPerformance } from './performance-config.js';
import { accessibilityConfig, initAccessibility } from './accessibility-config.js';

// Configuration globale
export const config = {
  // Informations du site
  site: {
    name: "Sidiki Coulibaly Portfolio",
    version: "2.0.0",
    description: "Portfolio professionnel moderne et responsive",
    author: "Sidiki Coulibaly",
    email: "scoulou82@gmail.com",
    phone: "+223 76 17 66 69",
    location: "Bamako, Mali",
    url: "https://sidiki-coulibaly.dev"
  },
  
  // Configuration des sections
  sections: {
    hero: {
      enabled: true,
      title: "Sidiki COULIBALY",
      subtitle: "IT Support Analyst | IT Infrastructure Engineer",
      description: "Technicien et formateur IT polyvalent, orienté terrain, avec plus de six ans d'expérience dans la gestion et la sécurisation d'infrastructures réseaux et systèmes.",
      image: "/Images/banner-01.jpg"
    },
    
    about: {
      enabled: true,
      title: "À Propos",
      content: "Technicien et formateur IT polyvalent, orienté terrain, avec plus de six ans d'expérience dans la gestion et la sécurisation d'infrastructures réseaux et systèmes. Maîtrise avérée des environnements VMware, Zabbix, Ninja One, FortiGate et Active Directory, avec d'excellents résultats dans la résolution de tickets. Capacité reconnue à optimiser la fiabilité des systèmes et à renforcer la cybersécurité, tout en assurant un service technique réactif. Passionné par l'automatisation des tâches et l'amélioration continue des performances des systèmes. Je cherche à apporter mon expertise à une organisation dynamique pour contribuer à sa croissance."
    },
    
    skills: {
      enabled: true,
      title: "Compétences Techniques",
      categories: [
        {
          name: "Sécurité & Réseaux",
          skills: [
            { name: "FortiGate", percentage: 95 },
            { name: "Zabbix", percentage: 90 },
            { name: "NinjaOne", percentage: 85 },
            { name: "Active Directory", percentage: 90 }
          ]
        },
        {
          name: "Virtualisation & Stockage",
          skills: [
            { name: "VMware", percentage: 95 },
            { name: "vSphere", percentage: 90 },
            { name: "PURE Storage", percentage: 85 },
            { name: "Veeam", percentage: 90 }
          ]
        },
        {
          name: "Monitoring & Automatisation",
          skills: [
            { name: "SolarWinds", percentage: 80 },
            { name: "Cisco Prime", percentage: 75 },
            { name: "Meraki", percentage: 80 },
            { name: "PowerShell", percentage: 85 }
          ]
        }
      ]
    },
    
    experience: {
      enabled: true,
      title: "Expérience Professionnelle",
      timeline: [
        {
          period: "2024 - Présent",
          title: "IT Support Analyst",
          company: "IMPACT DEV | Mali",
          description: "Support technique et administration d'infrastructure IT avec expertise en FortiGate, VMware et solutions de monitoring.",
          technologies: ["FortiGate", "VMware", "NinjaOne", "Veeam"]
        },
        {
          period: "2023 - 2024",
          title: "Technicien Système et Réseau",
          company: "Résolue Mining | Mali",
          description: "Installation et configuration d'équipements réseau, déploiement de solutions de connectivité et gestion centralisée de réseaux sans fil.",
          technologies: ["Cisco", "Meraki", "SolarWinds", "PowerShell"]
        },
        {
          period: "2022 - 2023",
          title: "Technicien IT",
          company: "2IS | Mali",
          description: "Support technique et maintenance d'infrastructures IT avec focus sur la virtualisation et la sécurité.",
          technologies: ["VMware", "Active Directory", "Windows Server", "Linux"]
        },
        {
          period: "Oct 2020 - Jan 2021",
          title: "Technicien Système et Réseau",
          company: "IMPACT DEV | Mali",
          description: "Installation et configuration de routeurs, modems, switches et autres équipements réseau.",
          technologies: ["Cisco", "Networking", "Routing", "Switching"]
        }
      ]
    },
    
    projects: {
      enabled: true,
      title: "Projets Clés",
      items: [
        {
          id: "project1",
          title: "Firewall FortiGate avec Sandboxing et VPN SSL",
          description: "Remplacement d'un firewall obsolète avec déploiement d'une solution de sécurité avancée",
          image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
          technologies: ["FortiGate", "FortiSandbox", "NinjaOne", "vSphere"],
          category: "Cybersécurité",
          year: "2024"
        },
        {
          id: "project2",
          title: "Active Directory Haute Disponibilité avec vSphere et Veeam",
          description: "Migration et modernisation de l'infrastructure Active Directory",
          image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
          technologies: ["vSphere", "Veeam", "PURE Storage", "Windows Server 2022"],
          category: "Infrastructure",
          year: "2024"
        },
        {
          id: "project3",
          title: "Virtualisation Haute Performance avec vSphere/PURE Storage",
          description: "Migration de serveurs physiques vers environnement virtualisé haute performance",
          image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg",
          technologies: ["vSphere", "PURE Storage", "iDRAC", "CIMC"],
          category: "Virtualisation",
          year: "2024"
        },
        {
          id: "project4",
          title: "Monitoring et Surveillance Infrastructure",
          description: "Système de monitoring complet avec NinjaOne et intégration vCenter",
          image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
          technologies: ["NinjaOne", "vCenter", "Syslog", "Veeam"],
          category: "Monitoring",
          year: "2024"
        }
      ]
    },
    
    certifications: {
      enabled: true,
      title: "Certifications",
      items: [
        {
          name: "Fortinet Network Security Expert (NSE)",
          issuer: "Fortinet",
          year: "2024",
          icon: "fas fa-shield-alt"
        },
        {
          name: "VMware Certified Professional (VCP)",
          issuer: "VMware",
          year: "2024",
          icon: "fas fa-server"
        },
        {
          name: "Microsoft Certified: Azure Fundamentals",
          issuer: "Microsoft",
          year: "2023",
          icon: "fab fa-microsoft"
        },
        {
          name: "Cisco Certified Network Associate (CCNA)",
          issuer: "Cisco",
          year: "2023",
          icon: "fas fa-network-wired"
        }
      ]
    },
    
    contact: {
      enabled: true,
      title: "Contact",
      email: "scoulou82@gmail.com",
      phone: "+223 76 17 66 69",
      location: "Hamdallaye, Bamako-Mali",
      social: {
        linkedin: "https://www.linkedin.com/in/sidiki-coulibaly-0814a0218",
        github: "https://github.com/SIDIKI01",
        twitter: "#",
        rss: "#"
      }
    }
  },
  
  // Configuration des thèmes
  themes: {
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
  },
  
  // Configuration des animations
  animations: {
    duration: "0.3s",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    stagger: "0.1s"
  }
};

// Fonction pour initialiser la configuration
export function initConfig() {
  // Initialiser les métadonnées SEO
  if (typeof document !== 'undefined') {
    const metaTags = generateMetaTags(seoConfig);
    const structuredData = generateStructuredData(seoConfig);
    
    // Ajouter les métadonnées au head
    document.head.insertAdjacentHTML('beforeend', metaTags);
    document.head.insertAdjacentHTML('beforeend', structuredData);
  }
  
  // Initialiser les performances
  initPerformance();
  
  // Initialiser l'accessibilité
  initAccessibility();
  
  // Initialiser le thème
  initTheme();
  
  // Initialiser les animations
  initAnimations();
}

// Fonction pour initialiser le thème
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Appliquer les couleurs du thème
  const theme = config.themes[savedTheme];
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--color-${key}`, value);
  });
}

// Fonction pour initialiser les animations
function initAnimations() {
  // Respecter les préférences de mouvement
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--animation-iteration-count', '1');
  }
}

// Fonction pour basculer le thème
export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Appliquer les nouvelles couleurs
  const theme = config.themes[newTheme];
  Object.entries(theme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--color-${key}`, value);
  });
}

// Fonction pour obtenir la configuration d'une section
export function getSectionConfig(sectionName) {
  return config.sections[sectionName] || null;
}

// Fonction pour mettre à jour la configuration
export function updateConfig(sectionName, updates) {
  if (config.sections[sectionName]) {
    Object.assign(config.sections[sectionName], updates);
  }
}

export default config;
