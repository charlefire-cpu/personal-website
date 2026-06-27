/**
 * Static image paths (public/).
 * Paths respect Vite `base` for GitHub Pages and Netlify.
 */

const ASSETS_BASE = `${import.meta.env.BASE_URL}assets/images`

export const siteImages = {
  /** Hero background → public/assets/images/hero-bg.jpg */
  heroBg: `${ASSETS_BASE}/hero-bg.jpg`,
} as const

/** Inline style for CSS background-image layers. */
export function toBackgroundImageUrl(imagePath: string): string {
  return `url(${imagePath})`
}
