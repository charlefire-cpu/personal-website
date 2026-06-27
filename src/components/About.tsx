import { profile } from '../data/profile'
import Section from './ui/Section'

export default function About() {
  const { id, title } = profile.sections.about

  return (
    <Section id={id} title={title} eyebrow="Introduction" pattern>
      <div className="card card-accent relative max-w-3xl overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent to-accent-light"
          aria-hidden="true"
        />

        <div className="space-y-5 pl-2 text-base leading-relaxed text-muted sm:space-y-6 sm:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="break-words">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  )
}
