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
      className={`scroll-mt-[4.5rem] py-12 sm:scroll-mt-24 sm:py-16 md:py-20 lg:py-24 ${
        alternate ? 'bg-surface' : 'bg-white'
      } ${className}`}
      aria-labelledby={headingId}
    >
      <div className="page-container">
        <header className="mb-8 sm:mb-10 md:mb-12">
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
