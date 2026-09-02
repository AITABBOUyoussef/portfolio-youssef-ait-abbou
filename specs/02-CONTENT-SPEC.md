# 02 — Content Specification
Statut : VALIDATED

Ce document ne contient que des contenus validés (fournis par Youssef ou extraits du CV/README). Aucun contenu du produit final ne peut apparaître s'il n'est pas listé ici.

## Identité

| Champ | Contenu validé | Source | Statut |
|---|---|---|---|
| Nom | Ait Abbou | CV | Validé |
| Prénom | Youssef | CV | Validé |
| Métier / titre | Développeur Full-Stack Junior | CV + Utilisateur | Validé |
| Opportunité recherchée | Poste de Développeur Full-Stack Junior | CV | Validé |
| Ville | Beni Mellal | CV | Validé |
| Mobilité | Tout le Maroc, ouvert au mode hybride et remote | Utilisateur | Validé |
| Disponibilité | Immédiate | Utilisateur | Validé |
| Proposition de valeur / bio | "Développeur Full-Stack Junior passionné par la conception d'applications web modernes et performantes. J'allie logique backend (Laravel, PHP) et interfaces dynamiques (React) pour transformer des idées en solutions concrètes." | Utilisateur | Validé |
| Photo | Aucune — utiliser un avatar ou du texte | Utilisateur | Validé |
| Téléphone | (+212) 6 24 83 41 13 | CV | Validé |
| Email | aitabbouyoussef111@gmail.com | Utilisateur | Validé |
| Langues | Français (intermédiaire/opérationnel), Anglais (courant/opérationnel) | CV | Validé |

## CV

| Champ | Contenu validé | Source | Statut |
|---|---|---|---|
| Nom du fichier | CV_Youssef_Ait_Abbou_Dev_FullStack.pdf | Utilisateur | Validé |
| Date de mise à jour | Septembre 2026 | Utilisateur | Validé |
| Métier ciblé | Développeur Full-Stack Junior | CV | Validé |

## LinkedIn

| Champ | Contenu validé | Source | Statut |
|---|---|---|---|
| Lien public | linkedin.com/in/youssef-ait-abbou | CV + Utilisateur | Validé |
| Publications à relier | Aucune fournie | — | Non applicable |

## GitHub

| Champ | Contenu validé | Source | Statut |
|---|---|---|---|
| Lien profil | github.com/AITABBOUyoussef | CV + Utilisateur | Validé |
| Dépôts à présenter | bde-events (backend), frontend-bde (frontend), Linkup, GameVault | README | Validé |

## Formations

| Formation | Établissement | Période | Compétences associées |
|---|---|---|---|
| Formation intensive Dév. Web Full-Stack | ENAA, Beni Mellal | Déc. 2025 – en cours | JavaScript (React), PHP (Laravel), SQL, Tailwind CSS |
| Licence Fondamentale Économie et Gestion | USMS, Beni Mellal | 2021 – 2025 | Systèmes d'information, management stratégique, analyse |
| DTS Électromécanique des Systèmes Automatisés | EMSTI | 2022 – 2024 | Esprit analytique, résolution de problèmes complexes |
| Baccalauréat Sciences Physiques | Lycée El Amriya | 2020 – 2021 | À compléter |

## Expériences professionnelles

| Poste | Entreprise | Période | Missions |
|---|---|---|---|
| Stagiaire Électromécanique & Automatisation | ONEE | Juillet 2024 | Tests haute tension (22 kV), configuration réseau (modems, AP), résolution de problèmes de connectivité |
| Stagiaire Maintenance Industrielle | Groupe OCP | Juillet 2023 | Maintenance moteurs/alternateurs, contrôle qualité post-intervention, respect des normes de sécurité |

## Compétences

**Front-End** : HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Tailwind CSS, Bootstrap
**Back-End** : PHP, Laravel, Architecture MVC, WordPress, conception et développement d'API REST
**Bases de données** : MySQL
**Tests** : React Testing Library, PHPUnit
**IA & IA générative** : n8n, Prompt Engineering, OpenAI API, Claude, GitHub Copilot, OpenCode
**DevOps & Versioning** : Git, GitHub, Docker, GitHub Actions, CI/CD
**Gestion de projet** : Jira (Scrum, Kanban), Trello
**Conception & modélisation** : Figma, Adobe Illustrator, UML (diagrammes de classes, cas d'utilisation)
**Transversales** : Travail en équipe, adaptabilité, résolution de problèmes, organisation, apprentissage continu

## Projets

### PRJ-001 — BDE Events (⭐ Projet principal)
- **Statut** : Fonctionnel, démo en ligne active
- **Contexte** : Digitaliser la gestion des événements parascolaires du Bureau Des Étudiants (BDE)
- **Besoin** : Le BDE doit créer des événements à jauge limitée ; les étudiants doivent pouvoir réserver sans risque de surréservation
- **Solution** : Application découpée en 2 dépôts — un backend API REST (Laravel) et un frontend SPA (React) — communiquant via API, avec gestion des accès concurrents (race conditions)
- **Fonctionnalités** : Tableau de bord admin (statistiques, chiffre d'affaires) ; CRUD événements avec blocage de suppression si inscriptions existantes ; réservation intelligente (bouton dynamique selon disponibilité) ; génération de pass numérique avec code unique (ex. RES-123456789) ; authentification multi-rôles (Laravel Breeze / Sanctum)
- **Technologies** : Backend — Laravel 12, MySQL, Blade, Tailwind CSS, Laravel Breeze. Frontend — React.js (Vite), Tailwind CSS, React Router DOM, Axios (Sanctum)
- **Contribution personnelle** : Conception de l'architecture MVC du backend ; modélisation UML (diagramme de classes avec héritage Admin/Étudiant depuis `User`, cas d'utilisation, modèle ERD) ; implémentation de la sécurité anti-surréservation (gestion des race conditions) ; développement du frontend React (SPA mobile-first, dashboards admin/étudiant, gestion des tickets) ; intégration Axios/Sanctum pour l'authentification par token
- **Résultats** : Application déployée avec démo en ligne fonctionnelle
- **GitHub** : backend — github.com/AITABBOUyoussef/bde-events ; frontend — github.com/AITABBOUyoussef/frontend-bde
- **Démonstration** : https://frontend-bde.vercel.app/
- **Autres liens** : Tableau Jira — backend : atlassian.net/.../projects/KAN/boards/1, frontend : atlassian.net/.../projects/KAN/boards/1 (vue filtrée) ; Docker Hub — frontend : hub.docker.com/r/aitaboyoussef/bde-events-react, API : hub.docker.com/r/aitaboyoussef/bde-events-api ; Moodboard Canva
- **Captures** : Placeholders en attendant l'intégration des vraies captures (login, dashboard admin, dashboard étudiant, création d'événement, tickets — noms de fichiers connus dans le dépôt frontend)
- **Éléments manquants** : Captures d'écran réelles à intégrer

### PRJ-002 — LinkUp
- **Statut** : Fonctionnel
- **Contexte** : Réseau social professionnel pour se connecter avec d'autres experts, partager des actualités, valoriser son expérience
- **Besoin** : Les professionnels et chercheurs d'emploi peinent à maintenir un réseau actif et à découvrir des opportunités dans un espace dédié
- **Solution** : Plateforme regroupant profil professionnel détaillé, gestion de réseau de contacts et fil d'actualité dynamique
- **Fonctionnalités** : Création/gestion de profil (titre, entreprise, photo) ; authentification sécurisée ; publication de posts (texte + image) ; interactions (like, commentaire, sauvegarde, repost) ; recherche de professionnels ; gestion du réseau (envoyer/accepter/refuser/ignorer des invitations)
- **Technologies** : Laravel 12 (PHP), Blade, Tailwind CSS, MySQL, Eloquent ORM
- **Contribution personnelle** : Développement Full-Stack complet (backend Laravel + frontend Blade/Tailwind) ; modélisation de la base de données relationnelle ; intégration du système d'authentification ; logique métier de fusion du fil d'actualité (posts + reposts, deux tables distinctes) via les Collections Laravel (résolution du problème N+1 queries) ; système de connexion mutuelle (networking) entre utilisateurs
- **Difficultés rencontrées** : Fusionner et trier chronologiquement des posts et reposts provenant de deux tables distinctes sans requêtes SQL brutes complexes — résolu via les Collections Laravel (`with()`, `concat()`, `sortByDesc()`)
- **GitHub** : github.com/AITABBOUyoussef/Linkup
- **Démonstration** : Aucune (confirmé) — aucun bouton « Démo » ne doit être affiché pour ce projet
- **Captures** : Feed, Gestion du réseau, Profil Utilisateur (présentes dans le README, noms de fichiers connus)
- **Éléments manquants** : Aucun

### PRJ-003 — GameVault
- **Statut** : Fonctionnel, démo en ligne active
- **Contexte** : Boutique en ligne de jeux vidéo, sans backend
- **Besoin** : Offrir une expérience d'achat de jeux vidéo claire et réactive côté client, avec panier persistant entre sessions
- **Solution** : Architecture JavaScript modulaire (ES Modules) séparant catalogue, recherche, filtrage et gestion du panier, avec persistance via localStorage
- **Fonctionnalités** : Catalogue de jeux (cartes image/titre/prix/catégorie) ; recherche en temps réel ; filtrage par catégorie ; panier avec gestion des quantités, modification/suppression, calcul automatique du total ; persistance via localStorage ; validation de commande
- **Technologies** : HTML5, JavaScript (ES Modules, vanilla), Tailwind CSS, Web Storage API (localStorage)
- **Contribution personnelle** : Développement frontend complet en JavaScript vanilla (modules ES6) ; logique de gestion du panier (ajout, quantités, suppression) synchronisée avec localStorage ; centralisation de la lecture/écriture du panier dans un module unique (`cart-data.js`) comme source de vérité ; système de recherche et de filtrage par catégorie ; intégration Tailwind CSS
- **Difficultés rencontrées** : Garder le panier synchronisé entre plusieurs fichiers JS indépendants sans backend — résolu en centralisant tout dans `cart-data.js` (`getPanier()` / `savePanier()`)
- **GitHub** : github.com/AITABBOUyoussef/GameVault
- **Démonstration** : https://game-vault-26mtj5b2x-youssef-3992.vercel.app/
- **Autres liens** : Maquette Figma, Tableau Trello, Moodboard Canva
- **Captures** : Placeholders en attendant l'intégration
- **Éléments manquants** : Captures d'écran réelles
