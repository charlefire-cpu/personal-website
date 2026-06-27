import { profile } from '../data/profile'
import Button from './ui/Button'

export default function Hero() {
  const { id, ctas } = profile.hero

  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-border bg-surface py-20 sm:py-24 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-primary/80 sm:text-xl">
            {profile.title}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-accent" aria-hidden="true" />
          <p className="mx-auto mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            {ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
