import { profile } from '../data/profile'
import Section from './ui/Section'

export default function TechnicalSkills() {
  const { title } = profile.sections.technicalSkills

  return (
    <Section title={title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {profile.skillGroups.map((group) => (
          <div key={group.category} className="card">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-tag">
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
