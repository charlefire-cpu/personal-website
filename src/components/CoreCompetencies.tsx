import { profile } from '../data/profile'
import Section from './ui/Section'

export default function CoreCompetencies() {
  return (
    <Section id="skills" title="Core Competencies">
      <ul className="grid gap-3 sm:grid-cols-2">
        {profile.competencies.map((competency) => (
          <li
            key={competency}
            className="flex items-start gap-2 rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {competency}
          </li>
        ))}
      </ul>
    </Section>
  )
}
