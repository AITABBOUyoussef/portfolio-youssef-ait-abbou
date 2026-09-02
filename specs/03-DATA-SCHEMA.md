# 03 — Data Schema
Statut : VALIDATED

Le schéma ci-dessous adapte le modèle générique de la commande initiale aux contenus réellement collectés (notamment : BDE Events est un projet unique mais réparti sur deux dépôts GitHub, `avatar` remplace `photo`, `resources` couvre les liens Trello/Figma/Canva).

```ts
type Profile = {
  firstName: string;          // obligatoire — "Youssef"
  lastName: string;           // obligatoire — "Ait Abbou"
  jobTitle: string;           // obligatoire — "Développeur Full-Stack Junior"
  opportunity: string;        // obligatoire — "Poste de Développeur Full-Stack Junior"
  valueProposition: string;   // obligatoire
  bio: string;                // obligatoire
  email: string;              // obligatoire, format email valide
  phone?: string;             // facultatif
  location: string;           // obligatoire — "Beni Mellal, Maroc"
  mobility: string;           // obligatoire — "Tout le Maroc, hybride/remote"
  availability: string;       // obligatoire — "Immédiate"
  avatar?: {
    type: "photo" | "initials" | "illustration"; // valeur retenue : "initials" (pas de photo)
    src?: string;
  };
  linkedinUrl: string;        // obligatoire, URL valide
  githubUrl: string;          // obligatoire, URL valide
  cvUrl: string;              // obligatoire — chemin vers le PDF
  cvFileName: string;         // "CV_Youssef_Ait_Abbou_Dev_FullStack.pdf"
  cvUpdatedAt: string;        // "2026-09" (Septembre 2026)
  languages: {
    name: string;
    level: string;
  }[];
};

type SkillCategory = {
  id: string;
  label: string;              // ex. "Front-End", "Back-End", "IA & IA générative"
  skills: string[];
};

type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;             // ex. "2021 – 2025"
  details?: string;
  inProgress: boolean;        // true pour la formation ENAA
};

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  missions: string[];
};

type Repository = {
  label: string;              // ex. "Backend (Laravel)", "Frontend (React)"
  url: string;                // obligatoire, URL GitHub réelle
};

type Project = {
  id: string;                  // "PRJ-001"
  name: string;                 // obligatoire
  type: "web" | "mobile" | "data" | "ai" | "other"; // "web" pour les 3 projets actuels
  featured: boolean;            // true uniquement pour BDE Events (PRJ-001)
  status: "live" | "in-progress" | "archived"; // basé sur l'état réel de la démo
  context: string;              // obligatoire
  problem: string;              // obligatoire
  solution: string;             // obligatoire
  targetUsers?: string;
  features: string[];           // obligatoire, au moins 1
  technologies: {
    name: string;
    role?: string;
  }[];                          // obligatoire, au moins 1
  personalContribution: string[]; // obligatoire — jamais une formulation vague (cf. FR-009)
  difficulties?: string[];
  solutionsImplemented?: string[];
  results?: string[];
  limitations?: string[];
  improvements?: string[];
  coverImage?: string;          // placeholder autorisé tant que la vraie capture n'est pas intégrée
  gallery?: string[];           // placeholders autorisés
  repositories: Repository[];   // obligatoire, au moins 1 — BDE Events en a 2
  readmeUrl?: string;
  demoUrl?: string;             // si absent (ex. LinkUp) → aucun bouton "Démo" affiché
  videoUrl?: string;
  linkedinPostUrl?: string;
  externalResources?: {
    label: string;              // "Trello", "Figma", "Canva"
    url: string;
  }[];
};

type ContactInfo = {
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  mobility: string;
  opportunity: string;
};
```

## Règles de validation

- Tout champ marqué **obligatoire** sans valeur fournie doit afficher `"À compléter"` dans l'interface (jamais un contenu inventé — cf. FR-011).
- `demoUrl`, `videoUrl`, `linkedinPostUrl`, `externalResources` sont facultatifs : si absents, le bouton/lien correspondant n'est simplement pas rendu (pas de lien mort, pas de placeholder cliquable).
- `repositories` doit contenir au moins une entrée valide ; pour BDE Events, deux entrées (`Backend`, `Frontend`) sont attendues, affichées clairement comme deux dépôts d'un même projet.
- `personalContribution` doit être une liste d'actions précises (verbes d'action), jamais une phrase générique du type "j'ai participé au projet" (cf. FR-009 / AC-006).
- `featured: true` n'est autorisé que pour un seul projet à la fois (BDE Events).
- `avatar.type = "initials"` tant qu'aucune photo n'est fournie.
- Comportement en cas de valeur manquante non obligatoire : le champ est omis silencieusement de l'affichage (pas de "À compléter" visible pour du facultatif, sauf demande contraire).
