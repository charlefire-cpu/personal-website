import { profile } from '../data/profile'
import Section from './ui/Section'

export default function TechnicalSkills() {
  const { title } = profile.sections.technicalSkills

  return (
    <Section
      title={title}
      eyebrow="Toolkit"
      description="Technical foundations that support effective collaboration with engineering teams."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        {profile.skillGroups.map((group) => (
          <div key={group.category} className="card min-w-0">
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
              <span
                className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-accent to-accent-light"
                aria-hidden="true"
              />
              <h3 className="text-sm font-bold uppercase tracking-wide text-primary">
                {group.category}
              </h3>
            </div>
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
