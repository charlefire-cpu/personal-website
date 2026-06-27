import { profile } from '../data/profile'
import Section from './ui/Section'

export default function TechnicalSkills() {
  const { title } = profile.sections.technicalSkills

  return (
    <Section title={title} tone="gradient">
      <div className="card-grid-2">
        {profile.skillGroups.map((group) => (
          <article key={group.category} className="card card-interactive min-w-0">
            <header className="card-header">
              <h3 className="card-title">{group.category}</h3>
            </header>
            <ul className="skill-tags">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
