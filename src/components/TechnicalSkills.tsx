import { profile } from '../data/profile'
import Section from './ui/Section'

export default function TechnicalSkills() {
  const { title } = profile.sections.technicalSkills

  return (
    <Section title={title}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {profile.skillGroups.map((group) => (
          <div key={group.category} className="card min-w-0">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary sm:mb-4 sm:text-sm">
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
