import { profile } from '../data/profile'
import Section from './ui/Section'

export default function Education() {
  const { id, title } = profile.sections.education
  const { degree, school, year } = profile.education

  return (
    <Section id={id} title={title} alternate>
      <div className="rounded-lg border border-border bg-white p-6">
        <h3 className="text-lg font-semibold text-primary">{degree}</h3>
        <p className="mt-1 text-muted">{school}</p>
        <p className="mt-1 text-sm text-muted">{year}</p>
      </div>
    </Section>
  )
}
