import type { CSSProperties, ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export type SectionTone =
  | 'white'
  | 'surface'
  | 'tinted'
  | 'gradient'
  | 'experience'
  | 'contact'

/** Maps to layered background styles in index.css (`--section-bg-image`). */
export type SectionBackgroundVariant = 'accent' | 'contact'

interface SectionProps {
  id?: string
  title: string
  eyebrow?: string
  description?: string
  children: ReactNode
  className?: string
  tone?: SectionTone
  /** Optional photo path from siteImages — layered over CSS when set */
  backgroundImage?: string
  backgroundVariant?: SectionBackgroundVariant
  /** Right-side gradient accent (About) — no stock photo needed */
  designAccent?: boolean
}

const toneClasses: Record<SectionTone, string> = {
  white: 'section-tone-white',
  surface: 'section-tone-surface',
  tinted: 'section-tone-tinted',
  gradient: 'section-tone-gradient',
  experience: 'section-tone-experience',
  contact: 'section-tone-contact',
}

const texturedTones: SectionTone[] = ['tinted', 'experience', 'contact']
const bridgedTones: SectionTone[] = ['tinted', 'gradient', 'experience', 'surface', 'contact']

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = '',
  tone = 'white',
  backgroundImage,
  backgroundVariant,
  designAccent = false,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined
  const showTexture = texturedTones.includes(tone) && !backgroundImage
  const showBridge = bridgedTones.includes(tone) || designAccent
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  const backgroundClass = [
    backgroundImage ? `section-bg-image section-bg-image--${backgroundVariant ?? 'accent'}` : '',
    designAccent ? 'section-designed-accent' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const sectionStyle: CSSProperties | undefined = backgroundImage
    ? ({ '--section-bg-image': `url(${backgroundImage})` } as CSSProperties)
    : undefined

  return (
    <section
      id={id}
      className={`section-base ${toneClasses[tone]} ${backgroundClass} ${className}`.trim()}
      style={sectionStyle}
      aria-labelledby={headingId}
    >
      {showBridge && <div className="section-bridge" aria-hidden="true" />}

      {designAccent && (
        <>
          <div className="section-accent-glow" aria-hidden="true" />
          <div className="section-accent-lines" aria-hidden="true" />
        </>
      )}

      {showTexture && (
        <div className="section-texture" aria-hidden="true" />
      )}

      <div ref={revealRef} className="reveal page-container relative z-[1]">
        <header className="mb-11 sm:mb-12 lg:mb-14">
          {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
          <h2 id={headingId} className="section-heading">
            {title}
          </h2>
          <span className="section-heading-accent" aria-hidden="true" />
          {description && (
            <p className="section-subheading">{description}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}
