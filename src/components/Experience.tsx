import { profile } from '../data/profile'
import Section from './ui/Section'

export default function Experience() {
  const { id, title, previousRolesTitle } = profile.sections.experience
  const detailedRoles = profile.experience.filter((role) => !role.compact)
  const previousRoles = profile.experience.filter((role) => role.compact)

  return (
    <Section id={id} title={title} alternate>
      <div className="relative">
        <div className="timeline-line" aria-hidden="true" />

        <div className="space-y-8">
          {detailedRoles.map((role) => (
            <article
              key={`${role.title}-${role.period}`}
              className="relative pl-8 md:pl-12"
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="card">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{role.title}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{role.company}</p>
                    {role.project && (
                      <p className="mt-1 text-sm text-muted">{role.project}</p>
                    )}
                  </div>
                  <p className="shrink-0 text-sm font-medium text-muted">{role.period}</p>
                </div>

                {role.highlights && (
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {previousRoles.length > 0 && (
          <div className="relative mt-8 pl-8 md:pl-12">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="card">
              <h3 className="mb-5 text-lg font-semibold text-primary">
                {previousRolesTitle}
              </h3>
              <ul className="divide-y divide-border">
                {previousRoles.map((role) => (
                  <li
                    key={`${role.title}-${role.company}`}
                    className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-medium text-primary">
                      {role.title}
                      <span className="font-normal text-muted"> — {role.company}</span>
                    </span>
                    <span className="text-sm text-muted">{role.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
