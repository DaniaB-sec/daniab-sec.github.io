# Danya Beck — Digital Atlas & Portfolio Hub

> **"Two ways of looking at the same world."**

A dual-universe digital atlas and personal portfolio created by **Danya Beck**. This repository hosts two complementary, mirror-symmetric web experiences:

1. **[Danya's World](./DanyasWorld/index.html)** — *The Creative Twin*
   - Grounded in deep earthy forest greens (`#132318`, `#193021`) and warm polished gold.
   - Highlights curiosity, design, storytelling, music (piano, guitar, flute), multimedia production, gastronomy, animal rescue, community engagement, and formative places.
2. **[Danya Builds](./DanyaBuilds/index.html)** — *The Technical Twin*
   - Grounded in deep oceanic navy blues (`#101f2c`, `#142738`) and warm polished gold.
   - Highlights systems engineering, cybersecurity defense & cryptography, artificial intelligence models & agent workflows, and quantum computing (QRNG & circuits).

---

## Directory Structure

```
AppleAcademy/
├── index.html                 # Central Gateway / "Two Worlds Collide" Portal
├── .nojekyll                  # Bypasses Jekyll on GitHub Pages for clean asset delivery
├── .gitignore                 # Standard OS and editor ignore rules
├── README.md                  # Unified repository overview
├── DanyasWorld/               # Creative Twin (7 core sectors + digital atlas)
│   ├── index.html             # Creative Atlas Homepage
│   ├── music.html
│   ├── multimedia.html
│   ├── kitchen.html
│   ├── animals.html
│   ├── community.html
│   ├── places.html
│   ├── family.html
│   ├── css/
│   ├── js/
│   └── sources/               # Original media, recordings, and photography
└── DanyaBuilds/               # Technical Twin (3 technical sectors + credentials)
    ├── index.html             # Technical Atlas Homepage
    ├── cybersecurity.html
    ├── ai.html
    ├── quantum.html
    ├── extras.html
    ├── css/
    ├── js/
    └── sources/               # Technical demos, screen captures, PDFs, and certificates
```

---

## GitHub Pages Deployment

This repository is pre-configured for deployment to GitHub Pages as a **User Site** (`https://<username>.github.io/`) or **Project Site** (`https://<username>.github.io/<repo>/`):

- **Gateway URL**: `https://daniab-sec.github.io/`
- **Danya's World**: `https://daniab-sec.github.io/DanyasWorld/`
- **Danya Builds**: `https://daniab-sec.github.io/DanyaBuilds/`

### Activation Steps:
1. In the repository on GitHub, navigate to **Settings** $\rightarrow$ **Pages**.
2. Under **Build and deployment** $\rightarrow$ **Source**, choose **Deploy from a branch**.
3. Under **Branch**, select `main` and root `/ (root)`.
4. Click **Save**. GitHub Pages will build and deploy the site automatically in under a minute.

---

## Local Development & Testing

To serve the entire dual-site repository locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your web browser. You can navigate between both twins using the interactive gateway or the in-app switcher buttons.
