import { profile } from '../data/profile'
import { GraduationCapIcon } from './ui/icons'
import Section from './ui/Section'

export default function Education() {
  const { id, title } = profile.sections.education
  const { degree, school, year } = profile.education

  return (
    <Section id={id} title={title} eyebrow="Background" tone="white">
      <div className="card max-w-xl">
        <div className="card-header-icon">
          <span className="icon-circle-sm">
            <GraduationCapIcon />
          </span>
          <div className="min-w-0">
            <h3 className="text-h3">{degree}</h3>
            <p className="card-body mt-2 break-words">{school}</p>
          </div>
        </div>
        <p className="text-accent-label">{year}</p>
      </div>
    </Section>
  )
}
