import type { ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'

export type SectionTone =
  | 'white'
  | 'surface'
  | 'tinted'
  | 'gradient'
  | 'experience'
  | 'contact'

interface SectionProps {
  id?: string
  title: string
  eyebrow?: string
  description?: string
  children: ReactNode
  className?: string
  tone?: SectionTone
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
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined
  const showTexture = texturedTones.includes(tone)
  const showBridge = bridgedTones.includes(tone)
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <section
      id={id}
      className={`section-base ${toneClasses[tone]} ${className}`}
      aria-labelledby={headingId}
    >
      {showBridge && <div className="section-bridge" aria-hidden="true" />}

      {showTexture && (
        <div className="section-texture" aria-hidden="true" />
      )}

      <div ref={revealRef} className="reveal page-container relative z-[1]">
        <header className="mb-10 sm:mb-12 lg:mb-14">
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
