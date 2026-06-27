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
    <Section
      id={id}
      title={title}
      eyebrow="Career"
      alternate
      description="A track record of leading cross-functional teams and delivering complex IT initiatives."
    >
      <div className="relative min-w-0">
        <div className="timeline-line" aria-hidden="true" />

        <div className="space-y-6 sm:space-y-8 md:space-y-10">
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
                      <h3 className="text-lg font-bold leading-snug text-primary sm:text-xl">
                        {role.title}
                      </h3>
                      {isCurrentRole(role.period) && (
                        <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-semibold text-accent sm:text-base">
                      {role.company}
                    </p>
                    {role.project && (
                      <p className="mt-1.5 break-words text-sm leading-relaxed text-muted">
                        {role.project}
                      </p>
                    )}
                  </div>
                  <p className="w-fit shrink-0 rounded-xl border border-border bg-surface px-3.5 py-2 text-xs font-semibold text-primary sm:text-sm">
                    {role.period}
                  </p>
                </div>

                {role.highlights && role.highlights.length > 0 && (
                  <ul className="mt-5 space-y-2.5 border-t border-border/80 pt-5 sm:mt-6 sm:pt-6">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted sm:gap-3.5 sm:text-base"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
          <div className="timeline-item mt-8 sm:mt-10 md:mt-12">
            <div
              className="timeline-dot !bg-surface-alt !shadow-[0_0_0_3px_var(--color-border)]"
              aria-hidden="true"
            />

            <div className="card">
              <h3 className="text-lg font-bold text-primary sm:text-xl">
                {earlierExperienceTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {earlierExperienceDescription}
              </p>

              <ul className="mt-5 divide-y divide-border/80 sm:mt-6">
                {earlierRoles.map((role) => (
                  <li
                    key={`${role.title}-${role.company}`}
                    className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-primary sm:text-base">
                        {role.title}
                      </p>
                      <p className="break-words text-sm text-muted">{role.company}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-muted">{role.period}</p>
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
