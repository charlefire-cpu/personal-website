import { profile } from '../data/profile'
import Section from './ui/Section'

export default function About() {
  const { id, title } = profile.sections.about

  return (
    <Section id={id} title={title}>
      <div className="card max-w-3xl">
        <div className="space-y-4 text-base leading-relaxed text-muted sm:space-y-5">
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
