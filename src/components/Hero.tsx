import { profile } from '../data/profile'
import Button from './ui/Button'

export default function Hero() {
  const { id, ctas } = profile.hero

  return (
    <section
      id={id}
      className="scroll-mt-20 bg-gradient-to-b from-surface to-white py-20 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
          {profile.title}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {ctas.map((cta) => (
            <Button key={cta.href} href={cta.href} variant={cta.variant}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
