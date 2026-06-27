import { profile } from '../data/profile'
import Section from './ui/Section'

export default function CoreCompetencies() {
  const { id, title } = profile.sections.coreCompetencies

  return (
    <Section id={id} title={title} alternate>
      <ul className="grid gap-4 sm:grid-cols-2">
        {profile.competencies.map((competency) => (
          <li
            key={competency}
            className="card flex items-start gap-3 p-5"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-primary">{competency}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
