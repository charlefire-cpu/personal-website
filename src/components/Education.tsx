import { profile } from '../data/profile'
import Section from './ui/Section'

export default function Education() {
  const { id, title } = profile.sections.education
  const { degree, school, year } = profile.education

  return (
    <Section id={id} title={title}>
      <div className="card max-w-xl">
        <h3 className="text-lg font-semibold text-primary">{degree}</h3>
        <p className="mt-2 text-muted">{school}</p>
        <p className="mt-1 text-sm font-medium text-accent">{year}</p>
      </div>
    </Section>
  )
}
