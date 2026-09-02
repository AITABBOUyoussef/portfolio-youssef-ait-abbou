# 01 — Product Specification
Statut : VALIDATED

## 7.1 Vision produit

Le portfolio est un site web personnel destiné à présenter Youssef Ait Abbou comme candidat au poste de **Développeur Full-Stack Junior**. Il s'adresse aux recruteurs, responsables techniques et jurys qui souhaitent évaluer rapidement son profil. Il valorise ses projets réels (BDE Events, LinkUp, GameVault), ses compétences prouvées et relie CV, LinkedIn et GitHub en un point d'entrée unique. Le résultat attendu est qu'un recruteur comprenne en moins d'une minute qui est Youssef, ce qu'il recherche, et où vérifier ses preuves techniques.

## 7.2 Utilisateurs cibles

### Persona principal
- **Nom du persona** : Recruteur
- **Objectif** : comprendre rapidement le profil et vérifier les preuves.
- **Besoin** : accéder facilement au CV, aux projets et aux liens (LinkedIn, GitHub).
- **Contrainte** : dispose de peu de temps.

### Personas secondaires
- **Responsable technique** : veut évaluer la qualité du code et l'architecture des projets (via GitHub/README), la contribution personnelle réelle sur chaque projet.
- **Jury** (soutenance ENAA) : veut vérifier la cohérence entre le parcours (Économie/Électromécanique → Dev Web), les compétences acquises et les projets réalisés.

*(Client potentiel et partenaire professionnel ne sont pas retenus comme personas pour la v1 : rien dans les informations fournies n'indique une cible de freelance/client à ce stade — statut : Non applicable.)*

## 7.3 User stories

- **US-001** — En tant que recruteur, je veux comprendre immédiatement le métier recherché, afin de déterminer si le profil correspond à mon besoin.
- **US-002** — En tant que recruteur, je veux consulter les projets réalisés, afin d'évaluer les compétences pratiques.
- **US-003** — En tant que recruteur, je veux télécharger le CV, afin de le transmettre en interne.
- **US-004** — En tant que recruteur, je veux ouvrir le profil LinkedIn, afin de vérifier le parcours et la visibilité professionnelle.
- **US-005** — En tant que responsable technique, je veux ouvrir le GitHub, afin d'évaluer la qualité du code.
- **US-006** — En tant que responsable technique, je veux comprendre la contribution personnelle sur chaque projet, afin de distinguer le travail réel de Youssef d'un travail d'équipe.
- **US-007** — En tant que recruteur, je veux consulter une démonstration en ligne d'un projet, afin de voir le résultat sans avoir à l'installer.
- **US-008** — En tant que recruteur, je veux contacter Youssef facilement, afin d'organiser un entretien.

## 7.4 Périmètre

### Inclus dans la version 1
- Accueil
- Profil (identité, bio, formations)
- Compétences
- Projets (BDE Events, LinkUp, GameVault)
- CV (consultation/téléchargement)
- LinkedIn (lien)
- GitHub (lien + dépôts sélectionnés)
- Contact (email, LinkedIn, GitHub, ville, mobilité, opportunité recherchée)
- Responsive (mobile, tablette, desktop)
- Accessibilité de base
- Mode sombre par défaut

### Exclu par défaut (aucune demande explicite contraire)
- Espace administrateur
- Authentification
- Base de données
- Blog
- Système de commentaires
- Formulaire de contact avec stockage backend (aucun service de formulaire mentionné → email direct utilisé à la place)
- Système de réservation
- Analytics
- Chatbot
- Multilingue (le contenu est fourni en français ; l'anglais n'a pas été demandé pour le portfolio lui-même)
- Récupération automatique de tous les dépôts GitHub (seuls BDE Events, LinkUp, GameVault sont retenus)

## 7.5 Priorisation MoSCoW

**Must have**
- Accueil avec identité, métier recherché, proposition de valeur
- Navigation fonctionnelle (desktop + mobile)
- Section Projets avec les 3 projets (BDE Events en projet principal)
- Section CV (consultation + téléchargement)
- Liens LinkedIn et GitHub réels
- Section Contact (email, ville, mobilité, opportunité)
- Responsive
- Mode sombre par défaut

**Should have**
- Section Compétences organisée par catégories
- Détail de contribution personnelle par projet
- Accessibilité (navigation clavier, contrastes, alt texts)

**Could have**
- Galerie de captures d'écran (placeholders en attendant les vraies captures)
- Liens vers Trello / Figma / Canva par projet (déjà disponibles pour BDE Events et GameVault)

**Won't have (cette version)**
- Mode clair (le dark mode est le seul mode demandé pour la v1)
- Multilingue
- Formulaire de contact connecté à un service d'envoi
