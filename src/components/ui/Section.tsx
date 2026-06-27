import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: string
  eyebrow?: string
  description?: string
  children: ReactNode
  className?: string
  alternate?: boolean
}

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = '',
  alternate = false,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined

  return (
    <section
      id={id}
      className={`section-base ${alternate ? 'section-surface' : 'bg-white'} ${className}`}
      aria-labelledby={headingId}
    >
      <div className="page-container">
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
