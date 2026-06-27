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
│   └── resume/              # Place Charmaine-Buffe-Resume.pdf here
├── src/
│   ├── components/          # Reusable UI and section components
│   │   ├── ui/              # Shared primitives (Button, Section)
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── profile.ts       # All site content in one place
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

## Updating Content

Edit `src/data/profile.ts` to update text, skills, experience, and contact details without changing component code.

## Resume

Add your resume PDF to `public/resume/Charmaine-Buffe-Resume.pdf` for the download button to work.

## Documentation

See `personal_website_documentation.md` for full project specifications.
