import { profile } from '../data/profile'
import Section from './ui/Section'

function isCurrentRole(period: string) {
  return period.toLowerCase().includes('present')
}

export default function Experience() {
  const { id, title, earlierExperienceTitle, earlierExperienceDescription } =
    profile.sections.experience
  const featuredRoles = profile.experience.filter((role) => !role.compact)
  const earlierRoles = profile.experience.filter((role) => role.compact)

  return (
    <Section id={id} title={title} alternate>
      <div className="relative min-w-0">
        <div className="timeline-line" aria-hidden="true" />

        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {featuredRoles.map((role) => (
            <article
              key={`${role.title}-${role.period}`}
              className="timeline-item"
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="card">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold leading-snug text-primary sm:text-lg">
                        {role.title}
                      </h3>
                      {isCurrentRole(role.period) && (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-accent">{role.company}</p>
                    {role.project && (
                      <p className="mt-1 break-words text-sm leading-relaxed text-muted">
                        {role.project}
                      </p>
                    )}
                  </div>
                  <p className="w-fit shrink-0 rounded-lg bg-surface px-3 py-1.5 text-xs font-medium text-primary sm:text-sm">
                    {role.period}
                  </p>
                </div>

                {role.highlights && role.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 border-t border-border pt-4 sm:mt-5 sm:pt-5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted sm:gap-3"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span className="min-w-0 break-words">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {earlierRoles.length > 0 && (
          <div className="timeline-item mt-6 sm:mt-8 md:mt-10">
            <div className="timeline-dot !bg-surface" aria-hidden="true" />

            <div className="card">
              <h3 className="text-base font-semibold text-primary sm:text-lg">
                {earlierExperienceTitle}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {earlierExperienceDescription}
              </p>

              <ul className="mt-4 divide-y divide-border sm:mt-5">
                {earlierRoles.map((role) => (
                  <li
                    key={`${role.title}-${role.company}`}
                    className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:py-3.5"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-primary">{role.title}</p>
                      <p className="break-words text-sm text-muted">{role.company}</p>
                    </div>
                    <p className="shrink-0 text-sm text-muted">{role.period}</p>
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
