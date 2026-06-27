import type { ComponentType } from 'react'
import { profile } from '../data/profile'
import {
  BeakerIcon,
  ClipboardListIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from './ui/icons'
import Section from './ui/Section'

const categoryIcons: Record<string, ComponentType<{ className?: string }>> = {
  'Agile and Project Tools': ClipboardListIcon,
  'Programming and Backend Technologies': CodeBracketIcon,
  'Testing and Quality Assurance': BeakerIcon,
  'Delivery and SDLC': RocketLaunchIcon,
}

export default function TechnicalSkills() {
  const { title } = profile.sections.technicalSkills

  return (
    <Section title={title} eyebrow="Toolkit" tone="gradient">
      <div className="card-grid-2 reveal-stagger">
        {profile.skillGroups.map((group) => {
          const Icon = categoryIcons[group.category] ?? CodeBracketIcon

          return (
            <article key={group.category} className="card card-interactive min-w-0">
              <header className="card-header-icon">
                <span className="icon-circle-sm">
                  <Icon />
                </span>
                <h3 className="card-heading">{group.category}</h3>
              </header>
              <ul className="skill-tags">
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
