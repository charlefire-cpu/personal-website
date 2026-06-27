# Charmaine Buffe Personal Website

A static personal portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Tech Stack

- **React** — UI components
- **Vite** — build tool and dev server
- **TypeScript** — type-safe JavaScript
- **Tailwind CSS** — utility-first styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

Output is written to the `dist/` folder, ready for static hosting (GitHub Pages, Netlify, Vercel, etc.).

### Preview production build

```bash
npm run preview
```

## Project Structure

```text
personal-website/
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── Charmaine-Buffe-Resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/                 # Button, Section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── CoreCompetencies.tsx
│   │   ├── TechnicalSkills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── profile.ts          # All site content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   └── personal_website_documentation.md
├── index.html
├── package.json
└── vite.config.ts
```

## Updating Content

Edit `src/data/profile.ts` to update text, skills, experience, and contact details without changing component code.

## Documentation

See `docs/personal_website_documentation.md` for full project specifications.
