# 07 — Implementation Plan
Statut : VALIDATED (spécifications approuvées le jour de la validation)

Stack : React + Vite + Tailwind CSS + React Router DOM — Déploiement Vercel.

## LOT-01 — Initialisation

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-01.1 | NFR-006 | Projet Vite + React initialisé, dépendances (Tailwind, React Router DOM) installées | `npm run dev` lance le projet sans erreur | Non commencé |
| T-01.2 | 05-TECHNICAL-SPEC | Arborescence créée (`src/components`, `src/sections`, `src/pages`, `src/data`, `src/styles`, `src/assets`, `public/cv`, `public/images/projects`) | Arborescence conforme au schéma validé | Non commencé |
| T-01.3 | 04-DESIGN-SPEC | Tailwind configuré : mode sombre par défaut, couleurs (`#0F172A`, accent `#10B981`), police Poppins importée | Le thème s'applique globalement, aucune bascule mode clair présente | Non commencé |
| T-01.4 | NFR-006 | Vérification du lancement local sur Chrome/Firefox/Edge | Le site s'affiche sans erreur console sur les 3 navigateurs | Non commencé |

## LOT-02 — Données

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-02.1 | 03-DATA-SCHEMA | `src/data/profile.js` créé avec les données validées (identité, bio, contact, CV) | Les champs respectent le type `Profile` | Non commencé |
| T-02.2 | 03-DATA-SCHEMA, FR-006 | `src/data/skills.js` créé avec les catégories de compétences validées | Les champs respectent le type `SkillCategory` | Non commencé |
| T-02.3 | 03-DATA-SCHEMA, FR-007 | `src/data/projects.js` créé avec les 3 fiches projets (BDE Events avec 2 dépôts, LinkUp sans démo, GameVault) | Les champs respectent le type `Project` ; `featured: true` uniquement sur BDE Events | Non commencé |
| T-02.4 | FR-011 | Logique d'affichage "À compléter" pour tout champ obligatoire manquant | Aucun champ obligatoire vide n'affiche de contenu inventé | Non commencé |

## LOT-03 — Structure principale

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-03.1 | FR-002 | Composant `Navbar` (desktop + menu burger mobile) | AC-007, AC-008 conformes | Non commencé |
| T-03.2 | FR-001 | Section `Hero` (identité, bio, opportunité, avatar en initiales, CTA) | AC-001 conforme | Non commencé |
| T-03.3 | FR-006 | Section `Skills` avec compétences par catégories | AC-012 conforme | Non commencé |
| T-03.4 | NFR-007 | Métadonnées de page (titre, description, langue, structure de titres) | AC-021 conforme | Non commencé |

## LOT-04 — Projets

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-04.1 | FR-007 | Composant `ProjectCard` (image/placeholder, badges technos, résumé) | Rendu cohérent pour les 3 projets | Non commencé |
| T-04.2 | FR-008, FR-007 | Page/section liste des projets avec BDE Events mis en avant | AC-005, AC-013 conformes | Non commencé |
| T-04.3 | FR-007, FR-009 | Page détail projet (contexte, besoin, solution, contribution personnelle, difficultés, résultats, liens) | AC-005, AC-006 conformes | Non commencé |
| T-04.4 | 03-DATA-SCHEMA | Affichage conditionnel des liens (démo absente pour LinkUp → bouton non rendu) | Aucun bouton "Démo" sur la fiche LinkUp | Non commencé |
| T-04.5 | FR-007 | Galerie avec placeholders neutres en attendant les vraies captures | Placeholders visibles, pas d'image cassée | Non commencé |

## LOT-05 — Supports professionnels

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-05.1 | FR-003 | Section/bouton CV avec téléchargement du PDF réel (`CV_Youssef_Ait_Abbou_Dev_FullStack.pdf`) + date de mise à jour affichée | AC-002 conforme | Non commencé |
| T-05.2 | FR-004 | Lien LinkedIn réel, ouverture en nouvel onglet | AC-004 conforme | Non commencé |
| T-05.3 | FR-005 | Lien GitHub + dépôts sélectionnés affichés (BDE Events ×2, LinkUp, GameVault) | AC-011 conforme | Non commencé |
| T-05.4 | FR-010 | Section Contact (email, LinkedIn, GitHub, ville, mobilité, opportunité) sans formulaire connecté | AC-014 conforme | Non commencé |

## LOT-06 — Qualité

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-06.1 | NFR-001 | Vérification responsive complète (375px → grand écran) | AC-007 conforme sur toutes les pages | Non commencé |
| T-06.2 | NFR-002 | Accessibilité : alt texts, focus visible, contrastes, `prefers-reduced-motion` | AC-008, AC-017 conformes | Non commencé |
| T-06.3 | NFR-003 | Optimisation images (lazy loading), vérification console | AC-018 conforme | Non commencé |
| T-06.4 | NFR-004 | Audit sécurité : aucune clé/API/.env exposée | AC-009 conforme | Non commencé |
| T-06.5 | FR-012 | Vérification de tous les liens externes (LinkedIn, GitHub, démos, Jira, Docker Hub, Canva) | AC-016 conforme | Non commencé |

## LOT-07 — Livraison

| ID | Exigence | Résultat attendu | Critère de validation | Statut |
|---|---|---|---|---|
| T-07.1 | NFR-005 | README du portfolio (installation, structure, déploiement) | Fichier présent et à jour | Non commencé |
| T-07.2 | 05-TECHNICAL-SPEC | Build de production (`npm run build`) sans erreur | Build réussi | Non commencé |
| T-07.3 | 05-TECHNICAL-SPEC | Déploiement sur Vercel | Site accessible en ligne | Non commencé |
| T-07.4 | 06-ACCEPTANCE-CRITERIA | Tests finaux : passage en revue de tous les AC | 08-TRACEABILITY-MATRIX.md entièrement à jour | Non commencé |
