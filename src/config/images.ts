/**
 * Optional photo backgrounds
 *
 * The site uses designed CSS backgrounds by default (hero grid, About accent, Contact gradient).
 * To swap in your own photos, drop files in `public/assets/images/` and wire them up in
 * Hero.tsx or Section via `backgroundImage` / inline styles.
 *
 * Recommended if using photos: JPG or WebP, ~1920px wide, cool/desaturated tones, compressed.
 */

const ASSETS_BASE = `${import.meta.env.BASE_URL}assets/images`

/** Optional image filenames in public/assets/images/ */
export const imageFiles = {
  heroBg: 'hero-bg.jpg',
  aboutAccent: 'about-accent.jpg',
  contactBg: 'contact-bg.jpg',
} as const

export type SiteImageKey = keyof typeof imageFiles

export const siteImages = {
  heroBg: `${ASSETS_BASE}/${imageFiles.heroBg}`,
  aboutAccent: `${ASSETS_BASE}/${imageFiles.aboutAccent}`,
  contactBg: `${ASSETS_BASE}/${imageFiles.contactBg}`,
} as const

/** Inline style for CSS background-image layers. */
export function toBackgroundImageUrl(imagePath: string): string {
  return `url(${imagePath})`
}

/** CSS custom property for layered section backgrounds. */
export function sectionBackgroundStyle(imagePath: string): { '--section-bg-image': string } {
  return { '--section-bg-image': toBackgroundImageUrl(imagePath) }
}
