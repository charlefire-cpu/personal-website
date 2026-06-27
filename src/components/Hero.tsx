import { profile } from '../data/profile'
import Button from './ui/Button'

function TitleLine({ title }: { title: string }) {
  const roles = title.split('|').map((role) => role.trim())

  return (
    <p className="text-display-sub mt-4 flex flex-col items-center gap-1 sm:mt-5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 lg:items-start lg:justify-start">
      {roles.map((role, index) => (
        <span key={role} className="inline-flex items-center gap-3">
          {index > 0 && (
            <span className="hidden text-muted-light sm:inline" aria-hidden="true">
              |
            </span>
          )}
          <span>{role}</span>
        </span>
      ))}
    </p>
  )
}

export default function Hero() {
  const { id, ctas } = profile.hero

  return (
    <section
      id={id}
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="hero-accent" aria-hidden="true" />

      <div className="page-container py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <h1 id="hero-heading" className="text-display">
            {profile.name}
          </h1>

          <TitleLine title={profile.title} />

          <p className="text-body mx-auto mt-6 max-w-2xl sm:mt-8 lg:mx-0">
            {profile.summary}
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
                download={cta.download}
                className="w-full sm:w-auto sm:min-w-[10.5rem]"
                aria-label={
                  cta.download ? `${cta.label}: ${cta.download}` : undefined
                }
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
