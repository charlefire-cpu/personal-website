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

        <div className="space-y-6 sm:space-y-8">
          {featuredRoles.map((role) => (
            <article
              key={`${role.title}-${role.period}`}
              className="timeline-item"
            >
              <div className="timeline-dot" aria-hidden="true" />

              <div className="card">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-h3">{role.title}</h3>
                      {isCurrentRole(role.period) && (
                        <span className="badge">Current</span>
                      )}
                    </div>
                    <p className="text-accent-label mt-2">{role.company}</p>
                    {role.project && (
                      <p className="text-body-sm mt-1.5 break-words">
                        {role.project}
                      </p>
                    )}
                  </div>
                  <p className="w-fit shrink-0 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-primary sm:text-sm">
                    {role.period}
                  </p>
                </div>

                {role.highlights && role.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5 sm:mt-6 sm:pt-6">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-body-sm sm:gap-3.5"
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
          <div className="timeline-item mt-8 sm:mt-10">
            <div
              className="timeline-dot !bg-surface-alt !ring-border"
              aria-hidden="true"
            />

            <div className="card">
              <h3 className="text-h3">{earlierExperienceTitle}</h3>
              <p className="text-body-sm mt-2">
                {earlierExperienceDescription}
              </p>

              <ul className="mt-5 divide-y divide-border sm:mt-6">
                {earlierRoles.map((role) => (
                  <li
                    key={`${role.title}-${role.company}`}
                    className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-primary sm:text-base">
                        {role.title}
                      </p>
                      <p className="text-body-sm break-words">{role.company}</p>
                    </div>
                    <p className="shrink-0 text-body-sm">{role.period}</p>
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
