import { profile } from '../data/profile'
import Section from './ui/Section'

export default function CoreCompetencies() {
  const { id, title } = profile.sections.coreCompetencies

  return (
    <Section
      id={id}
      title={title}
      eyebrow="Strengths"
      alternate
      description="Core capabilities honed across Agile delivery, stakeholder management, and enterprise IT projects."
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
        {profile.competencies.map((competency, index) => (
          <li
            key={competency}
            className="card flex items-start gap-4 !p-5 sm:!p-6"
          >
            <span className="competency-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="min-w-0 pt-1 break-words text-sm leading-relaxed text-primary sm:text-base">
              {competency}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
