# Charmaine Buffe | Personal Website

Personal portfolio website for **Charmaine Buffe**, a Scrum Master and Project Manager with 10+ years of IT experience in Agile delivery, software engineering, banking and financial systems, SDLC, and enterprise project delivery.

This is a **static website** — no backend, database, or server-side rendering required.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI components |
| [Vite 8](https://vite.dev/) | Build tool and dev server |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |

## Features

- Single-page portfolio with smooth scroll navigation
- Hero, About, Core Competencies, Technical Skills, Experience, Education, Resume, and Contact sections
- Responsive layout for mobile, tablet, and desktop
- Resume PDF download
- SEO metadata and Open Graph tags
- Content managed in one file: `src/data/profile.ts`
- Subtle CSS hover transitions (no heavy animation libraries)

## Project Structure

```text
personal-website/
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── Charmaine-Buffe-Resume.pdf
├── src/
│   ├── components/       # Section components + ui primitives
│   ├── data/profile.ts   # All website content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/                 # Project specifications
├── index.html            # SEO metadata
├── vite.config.ts
├── netlify.toml          # Netlify config
├── vercel.json           # Vercel config
└── .github/workflows/    # GitHub Pages CI/CD
```

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd personal-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 4. Preview the production build locally

```bash
npm run build
npm run preview
```

## Build Command

```bash
npm run build
```

This runs TypeScript compilation and outputs a static site to the **`dist/`** folder.

Other scripts:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build (base path `/`) |
| `npm run build:gh-pages` | Build with base path `/personal-website/` for local GitHub Pages testing |
| `npm run preview` | Serve the `dist/` folder locally |
| `npm run lint` | Run Oxlint |

## Updating Content

Edit **`src/data/profile.ts`** to update name, summary, skills, experience, contact details, and navigation — no component changes required.

To replace the resume, update **`public/resume/Charmaine-Buffe-Resume.pdf`**.

## Deployment Notes

The site builds to static HTML, CSS, and JavaScript in `dist/`. Deploy that folder to any static host.

### Vercel (recommended for Vite)

1. Push the repository to GitHub.
2. Import the project at [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite — no extra config needed.
4. Deploy. Default settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`

`vercel.json` is included for clarity.

### Netlify

1. Push the repository to GitHub.
2. Create a new site at [netlify.com](https://netlify.com) and connect the repo.
3. Netlify reads **`netlify.toml`** automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

Or drag and drop the `dist/` folder after running `npm run build`.

### GitHub Pages

**Option A — GitHub Actions (included)**

1. Push to the `main` or `master` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push.
5. The site is published at `https://<username>.github.io/<repository-name>/`.

The workflow sets `VITE_BASE_PATH` to match your repository name so assets and the resume download work correctly.

**Option B — Manual build**

If your repository is named `personal-website`:

```bash
npm run build:gh-pages
```

Upload the contents of `dist/` to the `gh-pages` branch, or adjust the `--base` flag to match your repository name:

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

**User or organization site** (`username.github.io` with no project subpath):

```bash
npm run build
```

Deploy `dist/` with base path `/` — no `VITE_BASE_PATH` needed.

### Post-deployment checklist

- [ ] All navbar links scroll to the correct sections
- [ ] Resume download opens or saves the PDF
- [ ] Contact email and LinkedIn links work
- [ ] Site looks correct on mobile and desktop

## Documentation

Full project specifications: [`docs/personal_website_documentation.md`](docs/personal_website_documentation.md)

## License

Private personal portfolio project.
