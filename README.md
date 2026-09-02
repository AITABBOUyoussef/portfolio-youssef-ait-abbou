# Portfolio — Youssef Ait Abbou

Portfolio professionnel de Youssef Ait Abbou, Développeur Full-Stack Junior.

## Stack

React + Vite + Tailwind CSS + React Router DOM. Déploiement : Vercel.

## Installation locale

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

## Déploiement (Vercel)

1. Importer le dépôt sur [vercel.com](https://vercel.com).
2. Framework détecté automatiquement : Vite. Build command : `npm run build`. Output directory : `dist`.
3. Le fichier `vercel.json` (rewrites) est déjà en place pour que les routes React Router (ex. `/projets/PRJ-001`) fonctionnent aussi après un rechargement de page ou un accès direct par URL.
4. Déployer — aucune variable d'environnement n'est nécessaire pour ce projet (pas de backend, pas de clé API).

## Structure

Voir `specs/05-TECHNICAL-SPEC.md` pour le détail de l'architecture. Les contenus (profil, compétences, projets) sont séparés du code dans `src/data/`.

## Spécifications

Le dossier `specs/` contient l'ensemble des documents de spécification validés (Product, Content, Data Schema, Design, Technical, Acceptance Criteria, Implementation Plan, Traceability Matrix).
