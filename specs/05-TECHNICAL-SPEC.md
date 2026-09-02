# 05 — Technical Specification
Statut : VALIDATED

Le déploiement (Vercel), le mode sombre par défaut et la stack technique sont validés.

## Options proposées (pour mémoire)

| Option | Niveau | Avantages | Limites | Déploiement |
|---|---|---|---|---|
| **A — React + Vite + Tailwind CSS** ✅ Choisie | Intermédiaire | Cohérent avec la stack déjà maîtrisée (frontend BDE Events) ; SPA rapide ; excellent support Vercel ; facile à faire évoluer | SEO natif plus faible qu'un framework avec rendu serveur (peu critique pour un portfolio) | Vercel (natif) |
| B — Next.js + Tailwind CSS | Intermédiaire/avancé | Rendu statique (SSG) idéal pour un portfolio → meilleur SEO et meilleures performances | Légèrement plus de configuration qu'un simple SPA Vite | Vercel |
| C — HTML/CSS/JS vanilla + Tailwind CSS | Débutant/intermédiaire | Cohérent avec la stack de GameVault ; zéro dépendance lourde | Moins adapté à un contenu structuré ; maintenabilité plus faible | Vercel |

## Documentation

- **Stack** : React + Vite + Tailwind CSS (Option A)
- **Version** : React 18+, Vite 5+, Tailwind CSS 3+ (versions exactes fixées au moment de l'initialisation du projet — LOT-01)
- **Architecture** : Séparation contenu/code (NFR-005) — les données de profil, compétences et projets vivent dans des fichiers dédiés (`src/data/`), indépendants des composants d'affichage
- **Arborescence proposée** :
```
portfolio/
├── public/
│   ├── cv/
│   │   └── CV_Youssef_Ait_Abbou_Dev_FullStack.pdf
│   └── images/
│       └── projects/        (placeholders en attendant les vraies captures)
├── src/
│   ├── components/          (Navbar, Button, ProjectCard, SkillBadge, Footer, ...)
│   ├── sections/            (Hero, Skills, Projects, Contact, ...)
│   ├── pages/                (vues associées aux routes React Router)
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   └── projects.js
│   ├── styles/
│   └── assets/
├── specs/
├── tests/
└── README.md
```
- **Gestion des données** : Statique, en JS/JSON dans `src/data/` (pas de base de données — cf. périmètre exclu)
- **Routing** : React Router DOM pour les routes (Accueil, Projets, Détail projet, Contact) ; navigation par ancre pour les sections internes de l'accueil
- **Gestion des images** : Chargement différé (`loading="lazy"`) pour les images non prioritaires (NFR-003) ; placeholders neutres tant que les vraies captures ne sont pas fournies
- **Stratégie CSS** : Tailwind CSS, thème sombre par défaut (`#0F172A` en fond, texte gris clair/blanc, accent vert `#10B981`), police "Poppins", pas de bascule mode clair en v1
- **Tests** : Vérification manuelle des critères d'acceptation (section 06) ; pas de suite de tests automatisés prévue en v1 (non demandé)
- **Déploiement** : Vercel
- **Dépendances autorisées** : React, Vite, Tailwind CSS, React Router DOM, une librairie d'icônes légère (à confirmer, ex. lucide-react)
- **Dépendances refusées** : tout package nécessitant une base de données, une authentification, ou un service tiers non validé (cf. NFR-004 et périmètre exclu)
