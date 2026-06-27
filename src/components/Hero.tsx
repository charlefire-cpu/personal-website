import { profile } from '../data/profile'
import Button from './ui/Button'

function TitleLine({ title }: { title: string }) {
  const roles = title.split('|').map((role) => role.trim())

  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-6 lg:justify-start">
      {roles.map((role) => (
        <span key={role} className="role-pill">
          {role}
        </span>
      ))}
    </div>
  )
}

export default function Hero() {
  const { id, ctas } = profile.hero

  return (
    <section
      id={id}
      className="hero-bg relative scroll-mt-[4.5rem] overflow-hidden sm:scroll-mt-[5.5rem]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.25),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="page-container relative py-20 sm:py-24 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-4xl lg:text-left">
          <p className="section-eyebrow !mb-4 !text-accent-light">
            Portfolio
          </p>

          <h1
            id="hero-heading"
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            {profile.name}
          </h1>

          <TitleLine title={profile.title} />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg lg:mx-0">
            {profile.summary}
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:w-auto sm:flex-row sm:justify-center lg:justify-start">
            {ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant === 'outline' ? 'ghost' : cta.variant}
                download={cta.download}
                className="w-full sm:w-auto sm:min-w-[11rem]"
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

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
