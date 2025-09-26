// Optimisation des jetons pour le portfolio

// Configuration optimisée pour réduire l'utilisation des jetons
const TokenOptimization = {
  // Texte optimisé pour les descriptions
  descriptions: {
    hero: "Technicien IT polyvalent avec 6+ ans d'expérience en infrastructures réseaux, VMware, FortiGate et Active Directory. Expert en support technique et cybersécurité.",
    
    about: "Technicien et formateur IT orienté terrain, spécialisé dans l'installation, maintenance et optimisation d'infrastructures réseaux. Maîtrise avérée des environnements VMware, Zabbix, Ninja One, FortiGate et Active Directory.",
    
    skills: "Expertise technique approfondie en sécurité réseau, virtualisation, monitoring et automatisation. Compétences certifiées et expérience terrain confirmée.",
    
    experience: "Parcours professionnel riche avec des expériences variées dans le support IT, la formation technique et l'administration d'infrastructures critiques.",
    
    projects: "Projets techniques d'envergure démontrant l'expertise en cybersécurité, virtualisation, monitoring et administration d'infrastructures IT."
  },
  
  // Mots-clés optimisés
  keywords: {
    primary: ["IT Support", "Infrastructure", "VMware", "FortiGate", "Active Directory", "Cybersécurité"],
    secondary: ["Réseaux", "Virtualisation", "Monitoring", "Formation", "Technique", "Support"],
    technologies: ["vSphere", "NinjaOne", "Zabbix", "Office 365", "PowerShell", "Cisco"]
  },
  
  // Textes courts pour les éléments UI
  ui: {
    buttons: {
      downloadCV: "Télécharger CV",
      getInTouch: "Contact",
      viewWork: "Projets",
      sendMessage: "Envoyer",
      subscribe: "S'abonner"
    },
    
    labels: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      newsletter: "Newsletter"
    },
    
    sections: {
      hero: "Accueil",
      about: "À Propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact"
    }
  },
  
  // Métadonnées optimisées
  meta: {
    title: "Sidiki Coulibaly - IT Support Analyst & Infrastructure Engineer",
    description: "Portfolio professionnel de Sidiki Coulibaly, spécialiste IT avec expertise en VMware, FortiGate, Active Directory et cybersécurité. 6+ ans d'expérience.",
    keywords: "Sidiki Coulibaly, IT Support, Infrastructure, VMware, FortiGate, Active Directory, Cybersécurité, Mali, Bamako"
  }
};

// Fonction pour optimiser les textes longs
function optimizeText(text, maxLength = 150) {
  if (text.length <= maxLength) return text;
  
  // Trouver le dernier point avant la limite
  const lastPeriod = text.lastIndexOf('.', maxLength);
  if (lastPeriod > maxLength * 0.7) {
    return text.substring(0, lastPeriod + 1);
  }
  
  // Sinon, tronquer à la limite
  return text.substring(0, maxLength - 3) + '...';
}

// Fonction pour générer des descriptions courtes
function generateShortDescription(experience) {
  const templates = {
    'IT Support': `Support technique niveau 1-2 avec expertise en ${experience.technologies.join(', ')}.`,
    'Formateur': `Formation technique et support utilisateur sur ${experience.technologies.join(', ')}.`,
    'Technicien': `Installation, configuration et maintenance d'infrastructures ${experience.technologies.join(', ')}.`
  };
  
  const roleType = experience.title.includes('Formateur') ? 'Formateur' : 
                   experience.title.includes('Support') ? 'IT Support' : 'Technicien';
  
  return templates[roleType] || `Expertise technique en ${experience.technologies.join(', ')}.`;
}

// Fonction pour optimiser les listes de compétences
function optimizeSkillsList(skills, maxItems = 5) {
  if (skills.length <= maxItems) return skills;
  
  // Prioriser les compétences les plus importantes
  const priority = ['VMware', 'FortiGate', 'Active Directory', 'NinjaOne', 'PowerShell'];
  const prioritized = skills.filter(skill => priority.includes(skill));
  const others = skills.filter(skill => !priority.includes(skill));
  
  return [...prioritized, ...others].slice(0, maxItems);
}

// Fonction pour optimiser les descriptions de projets
function optimizeProjectDescription(project) {
  const keyPoints = [
    project.context ? `Contexte: ${project.context}` : null,
    project.actions ? `Actions: ${project.actions.slice(0, 2).join(', ')}` : null,
    project.results ? `Résultats: ${project.results.slice(0, 2).join(', ')}` : null
  ].filter(Boolean);
  
  return keyPoints.join(' | ');
}

// Export pour utilisation dans l'application
if (typeof window !== 'undefined') {
  window.TokenOptimization = TokenOptimization;
  window.optimizeText = optimizeText;
  window.generateShortDescription = generateShortDescription;
  window.optimizeSkillsList = optimizeSkillsList;
  window.optimizeProjectDescription = optimizeProjectDescription;
}

// Export pour Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TokenOptimization,
    optimizeText,
    generateShortDescription,
    optimizeSkillsList,
    optimizeProjectDescription
  };
}
