import { profile } from '../data/profile'
import Button from './ui/Button'

function TitleLine({ title }: { title: string }) {
  const roles = title.split('|').map((role) => role.trim())

  return (
    <p className="mt-3 flex flex-col items-center gap-1 text-base sm:mt-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-1 sm:text-lg md:gap-x-3 lg:items-start lg:justify-start">
      {roles.map((role, index) => (
        <span key={role} className="inline-flex items-center gap-2 sm:gap-3">
          {index > 0 && (
            <span className="hidden text-border sm:inline" aria-hidden="true">
              |
            </span>
          )}
          <span className="font-medium text-primary/85">{role}</span>
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
      className="relative scroll-mt-[4.5rem] overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface to-white sm:scroll-mt-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="page-container relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto min-w-0 max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div
              className="mx-auto mb-5 h-1 w-10 rounded-full bg-accent sm:mb-6 sm:w-12 lg:mx-0 lg:mb-0 lg:mt-3 lg:h-16 lg:w-1"
              aria-hidden="true"
            />

            <div className="min-w-0 flex-1">
              <h1
                id="hero-heading"
                className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl"
              >
                {profile.name}
              </h1>

              <TitleLine title={profile.title} />

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:mx-0">
                {profile.summary}
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
                {ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={cta.variant}
                    download={cta.download}
                    className="w-full sm:w-auto sm:min-w-[10rem]"
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
        </div>
      </div>
    </section>
  )
}
