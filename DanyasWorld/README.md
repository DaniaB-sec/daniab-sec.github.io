# Danya's World

A personal portfolio website and digital atlas created for an application to the **Apple Developer Academy at PUCPR**.

## UX Principle
> **“Immersive for the first visit. Efficient for the second click.”**

## Structure

```
DanyasWorld/
├── index.html                 # Central Atlas / Homepage
├── music.html                 # Section 1: Music (Piano spotlight, violin, guitar)
├── multimedia.html            # Section 2: Multimedia & Visual storytelling
├── kitchen.html               # Section 3: Kitchen & Gastronomy (PUCPR Mão na Massa)
├── animals.html               # Section 4: Animals & Rescues
├── community.html             # Section 5: Community (Marista, Easter 120 children, Games)
├── places.html                # Section 6: Places & Formative environments
├── family.html                # Section 7: Family & Foundations
├── css/
│   ├── variables.css          # Color tokens, fonts, spacing, shadows
│   ├── base.css               # Reset, typography, utility classes
│   ├── navigation.css         # Persistent top navbar and bottom section navigation
│   ├── atlas-map.css          # Cartographic map layout and styling
│   └── sections.css           # Section cards, media placeholders, and grids
├── js/
│   ├── main.js                # Mobile drawer navigation and active link highlighting
│   └── atlas.js               # Clean atlas hover interactions
└── assets/
    ├── icons/                 # SVG icons
    └── images/                # Real photos and media to be added
```

## Visual Palette
- **Earthy Greens (Dominant)**: Deep forest (`#112016`, `#193122`), moss (`#2a4733`), soft sage (`#778f7d`, `#edf3ee`)
- **Cream Neutrals (Supporting)**: Warm parchment cream (`#fcfbf7`, `#f6f3eb`)
- **Deep Muted Blues (Secondary)**: Slate/ocean blue (`#1e3342`, `#344c5d`)
- **Warm Gold (Restrained Accents)**: Astrolabe gold (`#bfa15f`)

## Deploying to GitHub Pages
1. Push this repository to GitHub.
2. In the repository settings, go to **Pages**.
3. Under **Branch**, select `main` (or `master`) and `/ (root)` folder.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo>/`.
