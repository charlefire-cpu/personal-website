import { profile } from '../data/profile'
import Button from './ui/Button'

function TitleLine({ title }: { title: string }) {
  const roles = title.split('|').map((role) => role.trim())

  return (
    <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-lg sm:text-xl lg:justify-start">
      {roles.map((role, index) => (
        <span key={role} className="inline-flex items-center gap-3">
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
  const { filePath, fileName } = profile.resume

  return (
    <section
      id={id}
      className="relative scroll-mt-24 overflow-hidden border-b border-border bg-gradient-to-b from-white via-surface to-white"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.08),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div
              className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent lg:mx-0 lg:mb-0 lg:mt-3 lg:h-16 lg:w-1"
              aria-hidden="true"
            />

            <div className="flex-1">
              <h1
                id="hero-heading"
                className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl"
              >
                {profile.name}
              </h1>

              <TitleLine title={profile.title} />

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
                {profile.summary}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                {ctas.map((cta) => {
                  const isDownload = Boolean(cta.download)

                  return (
                    <Button
                      key={cta.label}
                      href={isDownload ? filePath : cta.href}
                      variant={cta.variant}
                      download={isDownload ? fileName : undefined}
                      className="w-full sm:w-auto"
                      aria-label={isDownload ? `${cta.label}: ${fileName}` : undefined}
                    >
                      {cta.label}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
