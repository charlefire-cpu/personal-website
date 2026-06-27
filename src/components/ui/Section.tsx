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
      className={`scroll-mt-20 py-16 md:py-20 ${alternate ? 'bg-surface' : 'bg-white'} ${className}`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2
          id={headingId}
          className="mb-8 text-2xl font-bold tracking-tight text-primary sm:text-3xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
