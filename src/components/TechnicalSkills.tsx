import { profile } from '../data/profile'
import Section from './ui/Section'

export default function TechnicalSkills() {
  return (
    <Section title="Technical Skills" alternate>
      <div className="grid gap-6 sm:grid-cols-2">
        {profile.skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-border bg-white p-5"
          >
            <h3 className="mb-3 text-sm font-semibold text-primary">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
