// Données validées dans specs/02-CONTENT-SPEC.md
// Respecte le type Profile défini dans specs/03-DATA-SCHEMA.md

export const profile = {
  firstName: "Youssef",
  lastName: "Ait Abbou",
  jobTitle: "Développeur Full-Stack Junior",
  opportunity: "Poste de Développeur Full-Stack Junior",
  valueProposition:
    "Développeur Full-Stack Junior passionné par la conception d'applications web modernes et performantes. J'allie logique backend (Laravel, PHP) et interfaces dynamiques (React) pour transformer des idées en solutions concrètes.",
  bio: "Double compétence atypique : Licence en Économie et Gestion et diplôme de Technicien Spécialisé en Électromécanique, renforcés par une formation intensive en Développement Web Full-Stack.",
  email: "aitabbouyoussef111@gmail.com",
  phone: "+212 6 24 83 41 13",
  location: "Beni Mellal, Maroc",
  mobility: "Tout le Maroc, ouvert au mode hybride et remote",
  availability: "Immédiate",
  avatar: {
    type: "initials", // pas de photo fournie — cf. 02-CONTENT-SPEC.md
  },
  linkedinUrl: "https://www.linkedin.com/in/youssef-ait-abbou",
  githubUrl: "https://github.com/AITABBOUyoussef",
  cvUrl: "/cv/CV_Youssef_Ait_Abbou_Dev_FullStack.pdf",
  cvFileName: "CV_Youssef_Ait_Abbou_Dev_FullStack.pdf",
  cvUpdatedAt: "2026-09",
  languages: [
    { name: "Français", level: "Intermédiaire / Opérationnel" },
    { name: "Anglais", level: "Courant / Opérationnel" },
  ],
};

export const education = [
  {
    id: "EDU-001",
    degree: "Formation Intensive Développement Web Full-Stack",
    institution: "ENAA (École Numérique Ahmed El Hansali), Beni Mellal",
    period: "Déc. 2025 – en cours",
    details: "JavaScript (React), PHP (Laravel), SQL, Tailwind CSS",
    inProgress: true,
  },
  {
    id: "EDU-002",
    degree: "Licence Fondamentale en Économie et Gestion",
    institution: "USMS, Beni Mellal",
    period: "2021 – 2025",
    details: "Systèmes d'information, management stratégique et analyse",
    inProgress: false,
  },
  {
    id: "EDU-003",
    degree: "DTS Électromécanique des Systèmes Automatisés",
    institution: "EMSTI",
    period: "2022 – 2024",
    details: "Esprit analytique et résolution de problèmes complexes",
    inProgress: false,
  },
  {
    id: "EDU-004",
    degree: "Baccalauréat en Sciences Physiques",
    institution: "Lycée El Amriya",
    period: "2020 – 2021",
    details: "À compléter",
    inProgress: false,
  },
];

export const experiences = [
  {
    id: "EXP-001",
    role: "Stagiaire en Électromécanique & Automatisation",
    company: "ONEE",
    period: "Juillet 2024",
    missions: [
      "Tests haute tension (22 kV)",
      "Configuration réseau (modems, points d'accès) et résolution de problèmes de connectivité",
    ],
  },
  {
    id: "EXP-002",
    role: "Stagiaire en Maintenance Industrielle",
    company: "Groupe OCP",
    period: "Juillet 2023",
    missions: [
      "Maintenance moteurs/alternateurs",
      "Contrôle qualité post-intervention et respect des normes de sécurité",
    ],
  },
];
