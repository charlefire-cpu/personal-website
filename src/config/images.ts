/**
 * Site image assets
 *
 * Drop replacement files in `public/assets/images/` using the filenames below.
 * Paths respect Vite `base` (e.g. GitHub Pages project sites).
 *
 * Recommended: JPG or WebP, ~1920px wide for backgrounds, compressed for web.
 */

const ASSETS_BASE = `${import.meta.env.BASE_URL}assets/images`

/** Image filenames in public/assets/images/ */
export const imageFiles = {
  heroBg: 'hero-bg.jpg',
  aboutAccent: 'about-accent.jpg',
  contactBg: 'contact-bg.jpg',
} as const

export type SiteImageKey = keyof typeof imageFiles

export const siteImages = {
  /** Full-width hero background → replace public/assets/images/hero-bg.jpg */
  heroBg: `${ASSETS_BASE}/${imageFiles.heroBg}`,
  /** Subtle About section accent → replace public/assets/images/about-accent.jpg */
  aboutAccent: `${ASSETS_BASE}/${imageFiles.aboutAccent}`,
  /** Contact section background → replace public/assets/images/contact-bg.jpg */
  contactBg: `${ASSETS_BASE}/${imageFiles.contactBg}`,
} as const

/** Inline style for CSS background-image layers in components. */
export function toBackgroundImageUrl(imagePath: string): string {
  return `url(${imagePath})`
}

/** CSS custom property for layered section backgrounds. */
export function sectionBackgroundStyle(imagePath: string): { '--section-bg-image': string } {
  return { '--section-bg-image': toBackgroundImageUrl(imagePath) }
}
