# 06 — Acceptance Criteria
Statut : VALIDATED

## Identité et accueil (FR-001)
**AC-001 — Identification du profil**
Étant donné que le visiteur arrive sur la page d'accueil
Quand la section principale est affichée
Alors le nom (Youssef Ait Abbou), le métier (Développeur Full-Stack Junior) et le type d'opportunité recherchée sont visibles sans défilement
Et aucun contenu professionnel n'est inventé

## Navigation (FR-002)
**AC-007 — Responsive**
Étant donné une largeur d'écran de 375 pixels
Quand le portfolio est consulté
Alors aucun contenu principal ne déborde horizontalement
Et la navigation mobile reste utilisable

**AC-008 — Navigation clavier**
Étant donné qu'un visiteur utilise uniquement le clavier
Quand il parcourt les éléments interactifs
Alors chaque élément reçoit un focus visible
Et l'ordre de navigation est logique

## CV (FR-003)
**AC-002 — Consultation du CV**
Étant donné que le fichier CV_Youssef_Ait_Abbou_Dev_FullStack.pdf est fourni
Quand le visiteur clique sur « Consulter mon CV »
Alors le fichier PDF réel est ouvert
Et le nom du fichier reste professionnel (celui validé)

**AC-003 — CV manquant**
Étant donné qu'aucun CV valide n'est fourni
Quand la page est générée
Alors aucun lien fictif vers un CV n'est créé
Et l'interface indique « À compléter »

## LinkedIn (FR-004)
**AC-004 — LinkedIn**
Étant donné que l'URL linkedin.com/in/youssef-ait-abbou est fournie
Quand le visiteur clique sur le bouton LinkedIn
Alors le véritable profil LinkedIn s'ouvre dans un nouvel onglet

## GitHub (FR-005)
**AC-011 — GitHub**
Étant donné que le lien github.com/AITABBOUyoussef et les 3 dépôts sélectionnés sont fournis
Quand le visiteur consulte la section GitHub ou un projet
Alors seuls les dépôts validés (BDE Events — 2 dépôts, LinkUp, GameVault) sont affichés
Et aucun autre dépôt n'est récupéré automatiquement

## Compétences (FR-006)
**AC-012 — Compétences par catégories**
Étant donné les compétences validées dans 02-CONTENT-SPEC.md
Quand la section Compétences est affichée
Alors les compétences sont regroupées par catégorie (Front-End, Back-End, Bases de données, DevOps, etc.)
Et aucun pourcentage arbitraire n'est affiché

## Projets (FR-007, FR-008)
**AC-005 — Projet**
Étant donné qu'un projet est validé (BDE Events, LinkUp ou GameVault)
Quand sa fiche est affichée
Alors le besoin, la solution, les technologies et la contribution personnelle sont visibles
Et seuls les liens réellement fournis sont affichés (ex. pas de bouton « Démo » pour LinkUp)

**AC-013 — Projet principal**
Étant donné que BDE Events est désigné projet principal
Quand la page d'accueil ou la liste des projets est affichée
Alors BDE Events est visuellement mis en avant (badge ou emplacement prioritaire)
Et ses deux dépôts (backend Laravel, frontend React) sont clairement distingués comme faisant partie d'un seul projet

## Contribution (FR-009)
**AC-006 — Contribution**
Étant donné qu'une contribution est décrite pour un projet
Quand elle apparaît dans le portfolio
Alors elle contient des actions précises (ex. « Implémentation de la sécurité anti-surréservation »)
Et elle ne se limite jamais à une formulation vague du type « j'ai participé au projet »

## Contact (FR-010)
**AC-014 — Contact**
Étant donné les informations de contact validées
Quand la section Contact est affichée
Alors l'email (aitabbouyoussef111@gmail.com), LinkedIn, GitHub, la ville, la mobilité et l'opportunité recherchée sont visibles
Et aucun formulaire n'est présenté comme fonctionnel s'il n'est pas connecté à un service réel

## Informations manquantes (FR-011)
**AC-015 — Contenu manquant**
Étant donné qu'une information nécessaire est absente (ex. palette de couleurs précise, démo LinkUp)
Quand la page est générée en phase de travail
Alors elle affiche « À compléter »
Et ce contenu n'est jamais remplacé par une invention

## Liens externes (FR-012)
**AC-016 — Liens externes**
Étant donné tous les liens externes du portfolio (LinkedIn, GitHub, démos, Trello, Figma, Canva)
Quand ils sont affichés
Alors chaque lien utilise une URL réelle et testée, avec un libellé explicite

## Responsive (NFR-001)
Couvert par AC-007.

## Accessibilité (NFR-002)
**AC-008** (ci-dessus) et :
**AC-017 — Accessibilité générale**
Étant donné le portfolio complet
Quand une vérification d'accessibilité de base est réalisée
Alors le HTML est sémantique, les images ont un texte alternatif, les contrastes sont suffisants (mode sombre), et `prefers-reduced-motion` est respecté

## Performance (NFR-003)
**AC-018 — Performance**
Étant donné une connexion moyenne
Quand la page principale est chargée
Alors les images sont optimisées et différées quand non prioritaires
Et aucune erreur n'apparaît dans la console

## Confidentialité (NFR-004)
**AC-009 — Confidentialité**
Étant donné le code et les fichiers du projet
Quand une vérification de sécurité est réalisée
Alors aucune clé API, aucun token et aucun fichier .env réel ne sont publiés

## Maintenabilité (NFR-005)
**AC-019 — Séparation contenu/code**
Étant donné l'architecture définie dans 05-TECHNICAL-SPEC.md
Quand le code est inspecté
Alors les contenus (profil, compétences, projets) sont dans `src/data/`, séparés des composants d'affichage

## Compatibilité (NFR-006)
**AC-020 — Compatibilité navigateurs**
Étant donné les versions récentes de Chrome, Firefox, Edge et Safari mobile
Quand le portfolio est consulté
Alors l'affichage et les fonctionnalités restent cohérents

## Référencement (NFR-007)
**AC-021 — SEO de base**
Étant donné la page d'accueil
Quand elle est inspectée
Alors elle possède un titre de page, une description, la langue du document déclarée et une structure de titres cohérente (h1 → h2 → h3)
