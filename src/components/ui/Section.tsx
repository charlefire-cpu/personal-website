import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: string
  eyebrow?: string
  description?: string
  children: ReactNode
  className?: string
  alternate?: boolean
  pattern?: boolean
}

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className = '',
  alternate = false,
  pattern = false,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined

  const bgClasses = alternate
    ? 'section-bg-gradient section-bg-pattern'
    : 'bg-white'

  return (
    <section
      id={id}
      className={`relative scroll-mt-[4.5rem] py-16 sm:scroll-mt-[5.5rem] sm:py-20 md:py-24 lg:py-28 ${bgClasses} ${className}`}
      aria-labelledby={headingId}
    >
      {pattern && !alternate && (
        <div
          className="pointer-events-none absolute inset-0 section-bg-pattern opacity-50"
          aria-hidden="true"
        />
      )}

      <div className="page-container relative">
        <header className="mb-10 sm:mb-12 md:mb-14">
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
