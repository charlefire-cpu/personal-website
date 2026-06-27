import { profile } from '../data/profile'
import Section from './ui/Section'

export default function CoreCompetencies() {
  const { id, title } = profile.sections.coreCompetencies

  return (
    <Section id={id} title={title} eyebrow="Strengths" tone="tinted">
      <ul className="card-grid-2">
        {profile.competencies.map((competency) => (
          <li key={competency} className="card card-interactive card-row">
            <span className="card-marker" aria-hidden="true" />
            <span className="card-row-text">{competency}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
