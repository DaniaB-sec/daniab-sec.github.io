# Danya Builds

A personal portfolio website and technical atlas created as the direct engineering and systems counterpart ("technical twin") to **Danya's World**.

Where **Danya's World** is grounded in deep earthy greens and highlights creative expressions (music, multimedia, gastronomy, community, animals, family, places), **Danya Builds** is grounded in deep oceanic blues and highlights logical, engineering, and development systems (cybersecurity, artificial intelligence, quantum computing).

---

## Architecture & Mirror Symmetry

| Dimension | Danya's World (Creative Twin) | Danya Builds (Technical Twin) |
| :--- | :--- | :--- |
| **Dominant Canvas** | Deep Earthy Greens (`#132318`, `#193021`) | Deep Oceanic/Navy Blues (`#101f2c`, `#142738`, `#1c354a`) |
| **Gold Accents** | Warm Polished Gold (`#cca762`, `#e5c98d`) | Warm Polished Gold (`#cca762`, `#e5c98d`) — **Identical** |
| **Explore Gradients** | Green base with Oceanic Blue gradients | Blue base with Earthy Green gradients |
| **Core Sections** | 7 Creative Sectors (Music, Kitchen, etc.) | 3 Technical Sectors (Cybersecurity, AI, Quantum) |
| **Typography** | Cormorant Garamond & Plus Jakarta Sans | Cormorant Garamond & Plus Jakarta Sans & Space Mono |

---

## Directory Structure

```
DanyaBuilds/
├── index.html                 # Central Technical Atlas / Homepage
├── cybersecurity.html         # Sector 01: Cybersecurity (Defense & Cryptography)
├── ai.html                    # Sector 02: Artificial Intelligence (Models & Agents)
├── quantum.html               # Sector 03: Quantum Computing (Circuits & IC)
├── extras.html                # Sector 04: Extras & Field Certifications (Awards & APH)
├── README.md                  # Project documentation & GitHub Pages instructions
├── css/
│   ├── variables.css          # Design tokens (Oceanic Blue canvas, identical Gold, Green accents)
│   ├── base.css               # Reset, typography, background radial gradients
│   ├── navigation.css         # Persistent top navbar + mobile drawer + bottom nav
│   ├── atlas-map.css          # Technical Atlas layout with blue-to-green gradient cards
│   └── sections.css           # Feature spotlights, story cards, media placeholders, tech badges
├── js/
│   ├── main.js                # Accessible mobile drawer, active nav state, cert/lightbox modal
│   └── atlas.js               # Atlas region interactions
└── sources/                   # Media repository for user photos, videos, and schematics
```

---

## Deploying to GitHub Pages

1. Initialize git (if not already done) and push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial Danya Builds technical twin site"
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
2. In the repository settings on GitHub, navigate to **Pages**.
3. Under **Branch**, select `main` (or `master`) and `/ (root)` folder.
4. Click **Save**. Your site will be live at `https://<your-username>.github.io/<your-repo>/`.

---

## Local Development & Testing

To serve locally on a port other than `8080` (since Danya's World is running on `8080`):
```bash
python3 -m http.server 8085
```
Then visit `http://localhost:8085` in your browser.
