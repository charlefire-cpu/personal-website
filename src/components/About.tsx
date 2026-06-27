import { profile } from '../data/profile'
import Section from './ui/Section'

export default function About() {
  const { id, title } = profile.sections.about

  return (
    <Section id={id} title={title}>
      <div className="card max-w-3xl">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}
