import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title: string
  children: ReactNode
  className?: string
  alternate?: boolean
}

export default function Section({
  id,
  title,
  children,
  className = '',
  alternate = false,
}: SectionProps) {
  const headingId = id ? `${id}-heading` : undefined

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 md:py-24 ${
        alternate ? 'bg-surface' : 'bg-white'
      } ${className}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <header className="mb-10 md:mb-12">
          <h2 id={headingId} className="section-heading">
            {title}
          </h2>
          <span className="section-heading-accent" aria-hidden="true" />
        </header>
        {children}
      </div>
    </section>
  )
}
