import { profile } from '../data/profile'
import Section from './ui/Section'

export default function Experience() {
  const detailedRoles = profile.experience.filter((role) => !role.compact)
  const previousRoles = profile.experience.filter((role) => role.compact)

  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-8">
        {detailedRoles.map((role) => (
          <article
            key={`${role.title}-${role.period}`}
            className="relative border-l-2 border-accent pl-6"
          >
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-white" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-primary">{role.title}</h3>
            <p className="mt-1 text-sm font-medium text-accent">{role.company}</p>
            {role.project && (
              <p className="mt-0.5 text-sm text-muted">{role.project}</p>
            )}
            <p className="mt-1 text-sm text-muted">{role.period}</p>
            {role.highlights && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </article>
        ))}

        {previousRoles.length > 0 && (
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="mb-4 text-lg font-semibold text-primary">
              Previous Roles
            </h3>
            <ul className="space-y-3">
              {previousRoles.map((role) => (
                <li
                  key={`${role.title}-${role.company}`}
                  className="flex flex-col gap-0.5 text-sm sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-medium text-primary">
                    {role.title} — {role.company}
                  </span>
                  <span className="text-muted">{role.period}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
