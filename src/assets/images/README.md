# UI image assets

Static background images for this site live in **`public/assets/images/`** at deploy time.

Configuration (paths and filenames) is centralized in **`src/config/images.ts`**.

## Files

| File | Used in | Notes |
|------|---------|--------|
| `hero-bg.jpg` | Hero | Full-width background, 1920px+ recommended |
| `about-accent.jpg` | About | Optional subtle accent; keep light and unobtrusive |
| `contact-bg.jpg` | Contact | Optional section background; works best with soft overlays |

## Replace an image

1. Add or overwrite the file in `public/assets/images/` (keep the same filename), **or**
2. Change the filename in `src/config/images.ts` → `imageFiles`.

No component edits are required when swapping files with the same name.

## Optimization (static site)

- Prefer JPG or WebP, compressed for web (typically under 300 KB per background).
- Use roughly 1920×1080 or similar for full-width backgrounds.
- Avoid PNG for large photos.
- After replacing images, run `npm run build` and check `dist/assets/images/`.

## Placeholders

Until you add final art, placeholder copies of `hero-bg.jpg` may be used for `about-accent.jpg` and `contact-bg.jpg`. Replace those when ready.
