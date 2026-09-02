# 08 — Traceability Matrix
Mise à jour : LOT-07 — Livraison (final — inclut l'historique des LOT-01 à LOT-06)

| Exigence | User story | Composant / Fichier | Test | Statut |
|---|---|---|---|---|
| NFR-006 (compatibilité navigateurs) | — | Projet Vite + React (package.json, vite.config.js) | Vérification syntaxe : OK. Lancement réel (`npm run dev`) confirmé par l'utilisateur en local : démarrage sans erreur | Conforme (déclaratif utilisateur) |
| 05-TECHNICAL-SPEC (arborescence) | — | `src/components`, `src/sections`, `src/pages`, `src/data`, `src/styles`, `src/assets`, `public/cv`, `public/images/projects` | Arborescence créée et vérifiée par listing de dossiers ; confirmée exacte par l'utilisateur en local | Conforme |
| 04-DESIGN-SPEC (thème sombre, couleurs, police) | — | `tailwind.config.js`, `src/styles/index.css`, `index.html` | Configuration relue (fond `#0F172A`, accent `#10B981`, police Poppins). Rendu visuel confirmé correct par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| NFR-002 (`prefers-reduced-motion`) | — | `src/styles/index.css` | Règle CSS présente et syntaxiquement valide. Comportement réel non vérifié spécifiquement (l'utilisateur n'a testé que l'affichage général) | À tester |
| NFR-007 (métadonnées SEO de base) | — | `index.html` (title, meta description, lang="fr") | Présents dans le fichier, relecture manuelle effectuée | Conforme |
| FR-001 (identité en accueil) | US-001 | `src/App.jsx` (composant `Home`, placeholder LOT-01) | Contenu minimal affiché (nom, métier) ; version complète prévue en LOT-03 | En cours |
| 03-DATA-SCHEMA (Profile) | — | `src/data/profile.js` | Vérification runtime réelle (`node`) : tous les champs obligatoires du type Profile sont renseignés | Conforme |
| FR-006 (compétences par catégories) | US-002 | `src/data/skills.js` | Vérification runtime réelle : 9 catégories de compétences, respectant le type SkillCategory, aucun pourcentage arbitraire | Conforme |
| FR-007, FR-008, FR-009 (projets, projet principal, contribution) | US-002, US-006 | `src/data/projects.js` | Vérification runtime réelle : 3 projets conformes au type Project, un seul `featured: true` (BDE Events / PRJ-001), BDE Events a bien 2 dépôts (`repositories`), contribution personnelle en actions précises pour chaque projet | Conforme |
| 03-DATA-SCHEMA (règle demoUrl facultatif) | — | `src/data/projects.js` (LinkUp / PRJ-002) | Vérification runtime réelle : `demoUrl` absent pour LinkUp, présent pour BDE Events et GameVault | Conforme |
| FR-011 (affichage "À compléter") | — | `src/utils/withFallback.js` | Syntaxe vérifiée (`node --check`) ; fonction testable unitairement mais pas encore utilisée par un composant (prévu en LOT-03/04) | En cours |
| FR-002 (navigation) | — | `src/components/Navbar.jsx` | Vérification TypeScript hors-ligne : aucune erreur de syntaxe. Rendu, menu mobile et responsive confirmés fonctionnels par l'utilisateur en local (AC-007) | Conforme (déclaratif utilisateur) |
| FR-001 (identité en accueil), AC-001 | US-001 | `src/sections/Hero.jsx`, `src/components/Button.jsx` | Vérification TypeScript hors-ligne : pas d'erreur de syntaxe. Affichage confirmé correct par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-011, AC-015 (« À compléter » appliqué concrètement) | — | `src/sections/About.jsx` (champ `education[3].details`) | Donnée réelle "À compléter" affichée via `withFallback()` ; confirmé visuellement par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-006, AC-012 | US-002 | `src/sections/Skills.jsx`, `src/components/SkillBadge.jsx` | Vérification TypeScript hors-ligne : pas d'erreur de syntaxe. Regroupement par catégories confirmé visuellement par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| NFR-002, AC-008 (focus clavier) | — | `Navbar.jsx`, `Button.jsx` | Focus visible confirmé par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-007, FR-008, AC-005, AC-013 (liste des projets, projet principal) | US-002 | `src/sections/Projects.jsx`, `src/components/ProjectCard.jsx` | Vérification TypeScript hors-ligne : aucune erreur de syntaxe réelle. Clic "Voir le projet" confirmé fonctionnel par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-007, FR-009, AC-005, AC-006 (page détail projet, contribution) | US-002, US-006, US-007 | `src/pages/ProjectDetail.jsx` | Fiche projet complète et contribution personnelle confirmées visibles par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| 03-DATA-SCHEMA (affichage conditionnel démo/liens) | — | `ProjectDetail.jsx` (bouton Démo, dépôts, ressources externes) | Absence du bouton Démo sur LinkUp et présence des boutons Jira/Docker/Canva sur BDE Events confirmées par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-007 (galerie, placeholders) | — | `src/components/Gallery.jsx` | Vérification TypeScript hors-ligne : aucune erreur de syntaxe réelle. `gallery: []` pour les 3 projets → placeholders "Capture à venir" affichés, aucune image inventée ; rendu visuel confirmé par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-003, AC-002 (CV réel téléchargeable) | US-003 | `src/sections/CV.jsx`, `public/cv/CV_Youssef_Ait_Abbou_Dev_FullStack.pdf` | Téléchargement du vrai PDF sous le bon nom confirmé fonctionnel par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-003, AC-003 (comportement si CV manquant) | — | `src/sections/CV.jsx` (branche `hasCv` false) | Logique de repli présente ; cas non déclenché en conditions réelles (CV fourni) — reste non testable tant qu'aucun cas réel ne se présente | Non applicable (cas non déclenché) |
| FR-004, AC-004 (LinkedIn réel) | US-004 | `src/sections/Contact.jsx` | Ouverture en nouvel onglet confirmée par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-005 (GitHub) | US-005 | `src/sections/Contact.jsx` | Ouverture en nouvel onglet confirmée par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| FR-010, AC-014 (Contact sans formulaire connecté) | US-008 | `src/sections/Contact.jsx` | Affichage complet et lien `mailto:` fonctionnel confirmés par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| NFR-004, AC-009 (confidentialité) | — | Ensemble du projet | Audit réel (`grep` sur tout `src/` et `public/`) : aucune clé API, aucun secret, aucun fichier `.env` réel trouvé. `.gitignore` exclut `node_modules`, `dist`, `.env` | Conforme |
| FR-012, AC-016 (liens externes) | — | `src/data/profile.js`, `src/data/projects.js` | Vérification syntaxique réelle (16 liens valides) + tous les liens cliqués et confirmés fonctionnels par l'utilisateur en local (Jira, Docker Hub, Figma, Canva, LinkedIn, GitHub, démos) | Conforme (déclaratif utilisateur) |
| NFR-002, AC-017 (accessibilité images) | — | `src/components/ProjectCard.jsx`, `src/components/Gallery.jsx` | Rendu, navigation clavier et balises alt confirmés par l'utilisateur en local | Conforme (déclaratif utilisateur) |
| NFR-001, AC-007 (responsive global) | — | Toutes les sections | Testé de manière exhaustive (mobile, tablette, desktop) par l'utilisateur en local, aucun débordement constaté | Conforme (déclaratif utilisateur) |
| NFR-007, AC-021 (SEO) | — | `index.html` | Toujours un seul titre/description statiques (pas de changement de titre par route React Router) — limite acceptée pour la v1, non demandée dans les specs | Conforme (statique, limite connue) |
| NFR-005 (maintenabilité, README) | — | `README.md` | Présent, à jour, décrit installation, build et procédure de déploiement Vercel détaillée | Conforme |
| 05-TECHNICAL-SPEC (build de production) | — | `package.json` (`npm run build`) | Vérification syntaxique complète de tout le projet (`tsc` + `node --check`) : aucune erreur de syntaxe réelle détectée sur l'ensemble des fichiers `.jsx`/`.js`. **Limite non résolue** : le build réel (`npm run build`) n'a jamais pu être exécuté par moi (pas d'accès réseau pour installer les dépendances) | À tester (à faire par l'utilisateur avant déploiement réel) |
| 05-TECHNICAL-SPEC (déploiement Vercel) | — | `vercel.json` (rewrites SPA) | Ajouté pour que les routes React Router (ex. `/projets/PRJ-001`) fonctionnent après rechargement ou accès direct par URL sur Vercel. Non testé sur un déploiement réel | À tester (au moment du déploiement) |
| 06-ACCEPTANCE-CRITERIA (tests finaux) | — | Ensemble du projet | Revue complète des AC Must-have : tous conformes sur la base des vérifications hors-ligne réalisées par moi et des confirmations visuelles de l'utilisateur en local à chaque lot | Conforme (voir détail par ligne ci-dessus) |

## Note sur le statut "Conforme (déclaratif utilisateur)"

Ces lignes sont marquées conformes sur la base de la confirmation de l'utilisateur, qui a exécuté `npm install` et `npm run dev` en local — je n'ai pas moi-même observé le résultat (pas d'accès réseau dans cet environnement). Cette nuance est conservée pour la traçabilité.

## Note sur les limites de test de ce lot

Cet environnement d'exécution n'a pas d'accès réseau : `npm install` ne peut pas télécharger les dépendances (React, Vite, Tailwind...), donc je n'ai pas pu exécuter `npm run dev` ni `npm run build` pour une vérification réelle dans un navigateur. Ce que j'ai pu vérifier avec certitude :
- Le JSON de `package.json` est valide.
- Les fichiers de configuration en JavaScript pur (`vite.config.js`, `tailwind.config.js`, `postcss.config.js`) sont syntaxiquement valides (`node --check`).
- L'arborescence de dossiers correspond exactement à celle validée dans `05-TECHNICAL-SPEC.md`.

Ce que je n'ai pas pu vérifier (nécessite une exécution locale de ta part) :
- Que `npm install` se déroule sans erreur.
- Que le serveur de développement démarre et affiche correctement le thème sombre/vert/Poppins.
- L'absence d'erreurs console dans un vrai navigateur.

**Action recommandée** : télécharge le projet, lance `npm install` puis `npm run dev` en local, et confirme-moi que tout s'affiche correctement. Je passerai alors ces lignes de "À tester" à "Conforme".

## Résumé de clôture du projet

Tous les critères d'acceptation liés aux exigences **Must have** (cf. 01-PRODUCT-SPEC.md) sont passés en statut **Conforme**, sur la base :
- des vérifications que j'ai pu réaliser réellement dans cet environnement (vérification runtime des données avec `node`, vérification syntaxique complète avec `tsc`/`node --check`, audit de sécurité par `grep`) ;
- et des confirmations visuelles de l'utilisateur après exécution en local (`npm run dev`) à chaque lot, dont je n'ai pas moi-même pu être témoin faute d'accès réseau dans ce conteneur.

**Limite qui reste ouverte, à ne pas ignorer avant une mise en production réelle** : je n'ai jamais pu exécuter moi-même `npm install`, `npm run build`, ni un déploiement Vercel réel. Avant de considérer le projet définitivement livré, l'utilisateur doit :
1. Exécuter `npm run build` en local et vérifier qu'il se termine sans erreur.
2. Déployer sur Vercel et vérifier que les routes `/projets/:id` fonctionnent après rechargement (grâce à `vercel.json`).
3. Confirmer qu'aucune erreur n'apparaît dans la console du site déployé en production.
