# UI image assets (optional)

The site uses **designed CSS backgrounds** by default — no stock photos required.

| Area | Default treatment |
|------|-------------------|
| Hero | Dark slate gradient + subtle grid (structure / clarity) |
| About | Right-side teal glow + vertical line accent |
| Contact | Layered gradient + dot texture |

## Adding your own photos (optional)

Drop files in **`public/assets/images/`** and wire them in components:

| File | How to enable |
|------|----------------|
| `hero-bg.jpg` | Set `backgroundImage` on the hero scene div in `Hero.tsx` |
| `about-accent.jpg` | Pass `backgroundImage={siteImages.aboutAccent}` to About `Section` |
| `contact-bg.jpg` | Pass `backgroundImage={siteImages.contactBg}` to Contact `Section` |

Paths and filenames are defined in **`src/config/images.ts`**.

## Photo guidelines (if you override)

- Cool, desaturated tones; architectural or abstract — avoid staged team shots
- JPG or WebP, ~1920px wide, under 300 KB per file
- Run `npm run build` after replacing assets
