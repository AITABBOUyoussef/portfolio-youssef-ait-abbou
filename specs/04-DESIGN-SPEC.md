# 04 — Design Specification
Statut : VALIDATED

## Direction visuelle

- **Style** : Moderne, épuré, orienté développeur (inspiration "Modern SaaS", cohérent avec le style déjà utilisé dans BDE Events)
- **Mode** : Sombre (dark mode) par défaut — pas de mode clair prévu en v1
- **Palette** : Fond sombre `#0F172A` ; texte gris clair/blanc ; couleur d'accent `#10B981` (vert), utilisée pour les CTA et liens actifs
- **Typographies** : "Poppins" pour l'ensemble du site (titres et corps de texte)
- **Bordures** : Coins arrondis modérés (cohérent avec un style "carte" moderne)
- **Ombres** : Légères, utilisées pour distinguer les cartes (projets, compétences) du fond sombre
- **Iconographie** : Icônes simples pour les technologies (type badges, comme dans les README des projets) et pour la navigation
- **Animations** : Transitions discrètes (hover, apparition au scroll) ; respect de `prefers-reduced-motion` obligatoire (NFR-002)

## Composants

| Composant | Description |
|---|---|
| Navigation | Barre fixe ou sticky, liens vers Accueil / Profil / Compétences / Projets / CV / Contact ; menu burger en mobile |
| Bouton | Style plein (CTA principal, ex. "Voir mes projets") et style contour (CTA secondaire, ex. "GitHub") |
| Carte projet | Image de couverture (ou placeholder), nom, résumé court, badges technologies, lien "Voir le projet" |
| Badge technologie | Petit tag arrondi avec le nom de la techno (et idéalement son logo/couleur, cohérent avec les badges déjà utilisés dans les README) |
| Section | Bloc full-width avec titre hiérarchisé et contenu, espacement vertical généreux |
| Galerie | Grille d'images (captures d'écran), avec placeholders visuellement neutres tant que les vraies captures ne sont pas intégrées |
| Pied de page | Liens rapides (LinkedIn, GitHub, Email), mention de disponibilité |
| État vide | Utilisé si un projet n'a pas de démo (ex. LinkUp) : le bouton "Démo" n'apparaît simplement pas |
| État "À compléter" | Texte discret en italique, visible uniquement en phase de travail, à masquer avant publication finale |

## Breakpoints

- **Mobile** : jusqu'à 640px
- **Tablette** : 641px – 1024px
- **Desktop** : à partir de 1025px

## États des composants interactifs

| État | Bouton | Lien de navigation | Carte projet |
|---|---|---|---|
| Normal | Couleur d'accent pleine/contour | Texte standard | Fond neutre, ombre légère |
| Hover | Léger changement d'opacité/teinte | Soulignement ou changement de couleur | Légère élévation (ombre plus marquée) |
| Focus | Contour visible (obligatoire, NFR-002/AC-008) | Contour visible | Contour visible sur la carte entière ou son lien principal |
| Actif | Couleur légèrement assombrie | Couleur d'accent | — |
| Désactivé | Opacité réduite, curseur "not-allowed" (ex. bouton "Démo" absent plutôt que désactivé — cf. règle de données) | — | — |
| Erreur | Non applicable (pas de formulaire connecté à un backend) | — | — |

## Wireframes textuels

### Page d'accueil
```
[ Navigation : Accueil | Profil | Compétences | Projets | CV | Contact ]
[ Hero ]
  Avatar (initiales) — Youssef Ait Abbou
  Développeur Full-Stack Junior — À Beni Mellal, mobile sur tout le Maroc (hybride/remote)
  Proposition de valeur (bio courte)
  [ Voir mes projets ] [ Consulter mon CV ] [ LinkedIn ] [ GitHub ]
[ Aperçu Compétences (catégories principales) ]
[ Projet principal mis en avant : BDE Events ]
[ Aperçu des 2 autres projets ]
[ Pied de page : Contact rapide ]
```

### Liste des projets
```
[ Navigation ]
[ Titre : Mes Projets ]
[ Carte : BDE Events (⭐ mis en avant) ]
[ Carte : LinkUp ]
[ Carte : GameVault ]
```

### Détail d'un projet
```
[ Navigation ]
[ Titre du projet + badges technologies ]
[ Contexte / Besoin / Solution ]
[ Fonctionnalités (liste) ]
[ Contribution personnelle (liste d'actions précises) ]
[ Difficultés & solutions (si disponibles) ]
[ Résultats ]
[ Liens : GitHub (1 ou 2 dépôts) | Démo | README | Trello/Figma/Canva ]
[ Galerie (placeholders en attendant) ]
```

### Section Contact
```
[ Navigation ]
[ Titre : Me contacter ]
[ Email : aitabbouyoussef111@gmail.com ]
[ LinkedIn ] [ GitHub ]
[ Ville : Beni Mellal — Mobilité : Tout le Maroc (hybride/remote) ]
[ Opportunité recherchée : Développeur Full-Stack Junior — Disponibilité immédiate ]
```
