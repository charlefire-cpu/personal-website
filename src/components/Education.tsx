import { profile } from '../data/profile'
import Section from './ui/Section'

export default function Education() {
  const { id, title } = profile.sections.education
  const { degree, school, year } = profile.education

  return (
    <Section id={id} title={title} tone="white">
      <div className="card max-w-xl">
        <h3 className="text-h3">{degree}</h3>
        <p className="card-body mt-3 break-words">{school}</p>
        <p className="text-accent-label mt-4">{year}</p>
      </div>
    </Section>
  )
}
