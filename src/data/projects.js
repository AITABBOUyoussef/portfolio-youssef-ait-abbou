// Données validées dans specs/02-CONTENT-SPEC.md
// Respecte le type Project défini dans specs/03-DATA-SCHEMA.md
//
// Règle FR-011 / AC-015 : tout champ obligatoire manquant est explicitement
// marqué "À compléter" plutôt que d'être inventé ou laissé vide silencieusement.
// Règle : un champ facultatif absent (ex. demoUrl) est simplement omis —
// aucun bouton correspondant ne doit être rendu par les composants.

export const projects = [
  {
    id: "PRJ-001",
    name: "BDE Events",
    type: "web",
    featured: true,
    status: "live",
    context:
      "Digitaliser la gestion des événements parascolaires du Bureau Des Étudiants (BDE).",
    problem:
      "Le BDE doit créer des événements à jauge limitée ; les étudiants doivent pouvoir réserver sans risque de surréservation.",
    solution:
      "Application découpée en deux dépôts — un backend API REST (Laravel) et un frontend SPA (React) — communiquant via API, avec gestion des accès concurrents (race conditions).",
    targetUsers: "Bureau Des Étudiants (administrateurs) et étudiants",
    features: [
      "Tableau de bord admin (statistiques, chiffre d'affaires)",
      "CRUD événements avec blocage de suppression si inscriptions existantes",
      "Réservation intelligente (bouton dynamique selon disponibilité)",
      "Génération de pass numérique avec code unique (ex. RES-123456789)",
      "Authentification multi-rôles (Laravel Breeze / Sanctum)",
    ],
    technologies: [
      { name: "Laravel 12", role: "Backend / API REST" },
      { name: "MySQL", role: "Base de données" },
      { name: "Blade", role: "Templates backend" },
      { name: "Laravel Breeze", role: "Authentification" },
      { name: "React.js (Vite)", role: "Frontend SPA" },
      { name: "React Router DOM", role: "Navigation frontend" },
      { name: "Axios", role: "Communication avec l'API" },
      { name: "Tailwind CSS", role: "Style" },
    ],
    personalContribution: [
      "Conception de l'architecture MVC du backend",
      "Modélisation UML (diagramme de classes avec héritage Admin/Étudiant depuis User, cas d'utilisation, modèle ERD)",
      "Implémentation de la sécurité anti-surréservation (gestion des race conditions)",
      "Développement du frontend React (SPA mobile-first, dashboards admin/étudiant, gestion des tickets)",
      "Intégration Axios/Sanctum pour l'authentification par token",
    ],
    results: ["Application déployée avec démo en ligne fonctionnelle"],
   coverImage: "/images/projects/bde-cover.png",
    // coverImage: null, // placeholder à intégrer — cf. NOTE ci-dessous
    // gallery: [],
    gallery: [
      "/images/projects/bde/login.png",
      "/images/projects/bde/dashboard-admin.png",
      "/images/projects/bde/dashboard_student.png",
      "/images/projects/bde/add_event.png",
      "/images/projects/bde/tickets.png",
      "/images/projects/bde/chargement.png"
      
    ],
    
    repositories: [
      {
        label: "Backend (Laravel)",
        url: "https://github.com/AITABBOUyoussef/bde-events",
      },
      {
        label: "Frontend (React)",
        url: "https://github.com/AITABBOUyoussef/frontend-bde",
      },
    ],
    demoUrl: "https://frontend-bde.vercel.app/",
    externalResources: [
      {
        label: "Jira (Backend)",
        url: "https://youssefaitabo0-1782491183945.atlassian.net/jira/software/projects/KAN/boards/1",
      },
      {
        label: "Jira (Frontend)",
        url: "https://youssefaitabo0-1782491183945.atlassian.net/jira/software/projects/KAN/boards/1?filter=&groupBy=none",
      },
      {
        label: "Docker Hub (Frontend)",
        url: "https://hub.docker.com/r/aitaboyoussef/bde-events-react",
      },
      {
        label: "Docker Hub (API)",
        url: "https://hub.docker.com/r/aitaboyoussef/bde-events-api",
      },
      {
        label: "Moodboard Canva",
        url: "https://www.canva.com/design/DAHQTnu7JXM/_wyJhjQcrmujG4TyqG1Agw/edit?ui=e30",
      },
    ],
  },
  {
    id: "PRJ-002",
    name: "LinkUp",
    type: "web",
    featured: false,
    status: "live",
    context:
      "Plateforme de réseau social professionnel pour se connecter avec d'autres experts, partager des actualités et mettre en valeur son expérience.",
    problem:
      "Les professionnels et chercheurs d'emploi ont souvent du mal à maintenir un réseau actif et à découvrir des opportunités dans un espace unifié dédié au monde du travail.",
    solution:
      "Plateforme regroupant profil professionnel détaillé, gestion d'un réseau de contacts et fil d'actualité dynamique.",
    targetUsers: "Travailleurs indépendants, étudiants, professionnels",
    features: [
      "Création/gestion de profil (titre, entreprise, photo)",
      "Authentification sécurisée",
      "Publication de posts (texte + image)",
      "Interactions (like, commentaire, sauvegarde, repost)",
      "Recherche de professionnels",
      "Gestion du réseau (envoyer/accepter/refuser/ignorer des invitations)",
    ],
    technologies: [
      { name: "Laravel 12", role: "Backend / MVC" },
      { name: "Blade", role: "Frontend" },
      { name: "Tailwind CSS", role: "Style" },
      { name: "MySQL", role: "Base de données" },
      { name: "Eloquent ORM", role: "Accès aux données" },
    ],
    personalContribution: [
      "Développement Full-Stack complet (backend Laravel + frontend Blade/Tailwind)",
      "Modélisation de la base de données relationnelle",
      "Intégration du système d'authentification",
      "Fusion du fil d'actualité (posts + reposts, deux tables distinctes) via les Collections Laravel — résolution du problème N+1 queries",
      "Système de connexion mutuelle (networking) entre utilisateurs",
    ],
    difficulties: [
      "Afficher un fil d'actualité cohérent mélangeant publications originales et reposts issus de deux tables distinctes, triés chronologiquement",
    ],
    solutionsImplemented: [
      "Utilisation des Collections Laravel (with(), concat(), sortByDesc()) plutôt que des requêtes SQL brutes avec JOIN/UNION",
    ],
    // coverImage: null,
    coverImage: "/images/projects/linkup-cover.png",
     gallery: [
      "/images/projects/linkup/Login.png",
      "/images/projects/linkup/feed.png",
      "/images/projects/linkup/Cree_Post.png",
      "/images/projects/linkup/Mon_reseau.png",
      "/images/projects/linkup/My_Profil.png",
      "/images/projects/linkup/Profil_othre_user.png",


     
    ],
    repositories: [
      {
        label: "Dépôt principal",
        url: "https://github.com/AITABBOUyoussef/Linkup",
      },
    ],
    // Pas de demoUrl : absence de démo en ligne confirmée par l'utilisateur.
    // Aucun bouton "Démo" ne doit être rendu pour ce projet (cf. AC-005 / règle de données).
  },
  {
    id: "PRJ-003",
    name: "GameVault",
    type: "web",
    featured: false,
    status: "live",
    context: "Boutique en ligne de jeux vidéo, sans backend.",
    problem:
      "Proposer une expérience d'achat de jeux vidéo claire et réactive côté client, tout en conservant le panier de l'utilisateur entre les sessions.",
    solution:
      "Architecture JavaScript modulaire (ES Modules) séparant catalogue, recherche, filtrage et gestion du panier, avec persistance via localStorage.",
    targetUsers: "Joueurs souhaitant explorer et acheter des jeux vidéo",
    features: [
      "Catalogue de jeux (cartes image/titre/prix/catégorie)",
      "Recherche en temps réel",
      "Filtrage par catégorie",
      "Panier avec gestion des quantités, modification/suppression",
      "Calcul automatique du total",
      "Persistance du panier via localStorage",
      "Validation de commande",
    ],
    technologies: [
      { name: "HTML5", role: "Structure" },
      { name: "JavaScript (ES Modules)", role: "Logique métier" },
      { name: "Tailwind CSS", role: "Style" },
      { name: "Web Storage API (localStorage)", role: "Persistance côté client" },
    ],
    personalContribution: [
      "Développement frontend complet en JavaScript vanilla (modules ES6)",
      "Logique de gestion du panier (ajout, quantités, suppression) synchronisée avec localStorage",
      "Centralisation de la lecture/écriture du panier dans un module unique (cart-data.js) comme source de vérité",
      "Système de recherche et de filtrage par catégorie",
      "Intégration Tailwind CSS",
    ],
    difficulties: [
      "Garder le panier synchronisé entre plusieurs fichiers JS indépendants sans backend",
    ],
    solutionsImplemented: [
      "Centralisation de toute la lecture/écriture du panier dans cart-data.js (getPanier() / savePanier())",
    ],
    coverImage: "/images/projects/gamevault-cover.png",
    gallery: [
       "/images/projects/gamevault/Home.png",
       "/images/projects/gamevault/Panier.png",
    ],
    repositories: [
      {
        label: "Dépôt principal",
        url: "https://github.com/AITABBOUyoussef/GameVault",
      },
    ],
    demoUrl: "https://game-vault-26mtj5b2x-youssef-3992.vercel.app/",
    externalResources: [
      {
        label: "Maquette Figma",
        url: "https://www.figma.com/design/Hox9pJlsJoLJ26Ha1dNxZe/Untitled?node-id=0-1&t=dktXV87lIO6bxV7w-0",
      },
      {
        label: "Tableau Trello",
        url: "https://trello.com/b/wbcyius2/gamevault",
      },
      {
        label: "Moodboard Canva",
        url: "https://www.canva.com/design/DAHF0L2MeJQ/7qChHNbTB7e4eHyvR3qS4g/edit",
      },
    ],
  },{
  id: "PRJ-004",
  name: "PeerSync",
  type: "web",
  featured: false,
  status: "completed",
  context:
    "Plateforme d'entraide entre apprenants permettant de mettre en relation les étudiants bloqués avec des tuteurs volontaires.",
  problem:
    "Les apprenants peuvent rester bloqués sur des problèmes techniques sans disposer d'un moyen simple pour trouver rapidement une personne capable de les aider.",
  solution:
    "Application web permettant aux apprenants de demander de l'aide et de faciliter la mise en relation avec des tuteurs volontaires.",
  targetUsers: "Apprenants et tuteurs",
  features: [
    "Authentification utilisateur",
    "Gestion des profils",
    "Mise en relation apprenant / tuteur",
    "Gestion des demandes d'aide",
    "Interface dédiée à l'entraide",
    "Persistance des données avec MySQL",
  ],
  technologies: [
    { name: "PHP 8+", role: "Backend / Programmation Orientée Objet" },
    { name: "MySQL", role: "Base de données" },
    { name: "PDO", role: "Accès sécurisé aux données" },
    { name: "HTML5", role: "Structure frontend" },
    { name: "Tailwind CSS", role: "Interface responsive" },
    { name: "Composer", role: "Gestion des dépendances / Autoload PSR-4" },
    { name: "MVC", role: "Architecture applicative" },
    { name: "Repository Pattern", role: "Abstraction de l'accès aux données" },
  ],
  personalContribution: [
    "Développement de l'application en PHP Orienté Objet",
    "Mise en place de l'architecture MVC",
    "Implémentation du Repository Pattern",
    "Modélisation de la base de données MySQL",
    "Utilisation de PDO et des requêtes préparées",
    "Mise en place de l'autoloading PSR-4 avec Composer",
  ],
  difficulties: [
    "Structurer une application PHP sans framework tout en conservant une séparation claire entre logique métier, accès aux données et présentation",
  ],
  solutionsImplemented: [
    "Utilisation combinée de MVC, Repository Pattern, typage strict et encapsulation",
  ],
  coverImage: "/images/projects/peersync-cover.png",
  gallery: [
    "/images/projects/peersync/login.png",
    "/images/projects/peersync/dashboard.png",
  ],
  repositories: [
    {
      label: "Dépôt principal",
      url: "https://github.com/AITABBOUyoussef/PeerSync",
    },
  ],
},

{
  id: "PRJ-005",
  name: "NutriFlow",
  type: "web",
  featured: false,
  status: "live",
  context:
    "Application web dédiée à la découverte et à la consultation de recettes avec une architecture JavaScript modulaire.",
  problem:
    "Permettre aux utilisateurs de rechercher et consulter des recettes dans une interface simple, organisée et responsive.",
  solution:
    "Application frontend structurée en modules indépendants pour séparer l'accès aux données, les services métier, l'interface utilisateur et les styles.",
  targetUsers: "Utilisateurs recherchant des recettes et des idées de repas",
  features: [
    "Consultation de recettes",
    "Recherche de recettes",
    "Communication avec une API de recettes",
    "Interface utilisateur modulaire",
    "Organisation du code par responsabilités",
    "Interface responsive",
  ],
  technologies: [
    { name: "JavaScript", role: "Logique applicative" },
    { name: "HTML5", role: "Structure" },
    { name: "CSS", role: "Interface utilisateur" },
    { name: "API REST", role: "Récupération des recettes" },
    { name: "ES Modules", role: "Architecture modulaire" },
  ],
  personalContribution: [
    "Organisation du frontend en modules indépendants",
    "Intégration d'une API de recettes",
    "Séparation des responsabilités entre API, services et UI",
    "Développement de l'interface utilisateur",
    "Structuration du point d'entrée de l'application",
  ],
  difficulties: [
    "Maintenir une architecture frontend claire tout en séparant la récupération des données, les services métier et l'interface utilisateur",
  ],
  solutionsImplemented: [
    "Organisation du projet en modules API, services, UI et styles",
  ],
  coverImage: "/images/projects/nutriflow-cover.png",
  gallery: [
    "/images/projects/nutriflow/home.png",
    "/images/projects/nutriflow/recipes.png",
  ],
  repositories: [
    {
      label: "Dépôt principal",
      url: "https://github.com/AITABBOUyoussef/NutriFlow",
    },
  ],
},
];

// NOTE (FR-011 / AC-015) : coverImage et gallery sont à `null`/`[]` pour les 3 projets
// tant que les vraies captures d'écran ne sont pas intégrées (placeholders prévus en LOT-04,
// cf. 07-IMPLEMENTATION-PLAN.md T-04.5). Aucune image inventée n'est référencée ici.
