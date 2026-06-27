import { profile } from '../data/profile'
import type { ExperienceRole } from '../data/profile'
import Section from './ui/Section'

function isCurrentRole(period: string) {
  return period.toLowerCase().includes('present')
}

type RoleEmphasis = 'featured' | 'highlight' | 'standard'

function getRoleEmphasis(role: ExperienceRole, index: number): RoleEmphasis {
  if (isCurrentRole(role.period) || index === 0) return 'featured'
  if (index === 1) return 'highlight'
  return 'standard'
}

function BriefcaseIcon() {
  return (
    <svg
      className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.25c0-1.126-.875-2.048-1.98-2.193a48.42 48.42 0 0 0-8.04 0c-1.105.145-1.98 1.067-1.98 2.193v4.35a2.18 2.18 0 0 0 .75 1.661m16.5 0h.008v.008h-.008V14.15Zm-16.5 0h.008v.008h-.008V14.15Z"
      />
    </svg>
  )
}

function ExperienceMarker({
  emphasis,
  muted = false,
}: {
  emphasis: RoleEmphasis
  muted?: boolean
}) {
  if (emphasis === 'featured') {
    return (
      <div className="experience-marker" aria-hidden="true">
        <span className="experience-marker-icon">
          <BriefcaseIcon />
        </span>
      </div>
    )
  }

  return (
    <div className="experience-marker" aria-hidden="true">
      <span
        className={`experience-marker-dot ${muted ? 'experience-marker-dot--muted' : ''}`}
      />
    </div>
  )
}

function FeaturedRoleCard({ role }: { role: ExperienceRole }) {
  const current = isCurrentRole(role.period)

  return (
    <article className="experience-card experience-card--interactive experience-card--featured">
      <header className="experience-header">
        <div className="experience-meta">
          <time className="experience-period experience-period--featured">
            {role.period}
          </time>
          {current && <span className="badge">Current</span>}
        </div>
        <h3 className="experience-title experience-title--featured">{role.title}</h3>
        <p className="experience-company">{role.company}</p>
        {role.project && <p className="experience-project">{role.project}</p>}
      </header>

      {role.highlights && role.highlights.length > 0 && (
        <ul className="experience-highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="experience-highlight">
              <span className="experience-highlight-marker" aria-hidden="true" />
              <span className="min-w-0 flex-1 break-words">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function HighlightRoleCard({ role }: { role: ExperienceRole }) {
  return (
    <article className="experience-card experience-card--interactive experience-card--highlight">
      <header className="experience-header">
        <div className="experience-meta">
          <time className="experience-period">{role.period}</time>
        </div>
        <h3 className="experience-title">{role.title}</h3>
        <p className="experience-company">{role.company}</p>
        {role.project && <p className="experience-project">{role.project}</p>}
      </header>

      {role.highlights && role.highlights.length > 0 && (
        <ul className="experience-highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="experience-highlight">
              <span className="experience-highlight-marker" aria-hidden="true" />
              <span className="min-w-0 flex-1 break-words">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function StandardRoleCard({ role }: { role: ExperienceRole }) {
  return (
    <article className="experience-card experience-card--interactive">
      <header className="experience-header">
        <div className="experience-meta">
          <time className="experience-period">{role.period}</time>
        </div>
        <h3 className="experience-title">{role.title}</h3>
        <p className="experience-company">{role.company}</p>
        {role.project && <p className="experience-project">{role.project}</p>}
      </header>

      {role.highlights && role.highlights.length > 0 && (
        <ul className="experience-highlights">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="experience-highlight">
              <span className="experience-highlight-marker" aria-hidden="true" />
              <span className="min-w-0 flex-1 break-words">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function RoleCard({ role, emphasis }: { role: ExperienceRole; emphasis: RoleEmphasis }) {
  if (emphasis === 'featured') return <FeaturedRoleCard role={role} />
  if (emphasis === 'highlight') return <HighlightRoleCard role={role} />
  return <StandardRoleCard role={role} />
}

export default function Experience() {
  const { id, title, earlierExperienceTitle, earlierExperienceDescription } =
    profile.sections.experience
  const featuredRoles = profile.experience.filter((role) => !role.compact)
  const earlierRoles = profile.experience.filter((role) => role.compact)

  return (
    <Section id={id} title={title} tone="experience">
      <div className="experience-timeline">
        <div className="experience-track" aria-hidden="true" />

        <div className="experience-entries">
          {featuredRoles.map((role, index) => {
            const emphasis = getRoleEmphasis(role, index)

            return (
              <div key={`${role.title}-${role.period}`} className="experience-entry">
                <ExperienceMarker emphasis={emphasis} />
                <RoleCard role={role} emphasis={emphasis} />
              </div>
            )
          })}

          {earlierRoles.length > 0 && (
            <div className="experience-entry experience-compact">
              <ExperienceMarker emphasis="standard" muted />
              <article className="experience-card experience-card--compact">
                <header className="experience-header">
                  <h3 className="experience-title">{earlierExperienceTitle}</h3>
                  <p className="experience-compact-intro mt-2">
                    {earlierExperienceDescription}
                  </p>
                </header>

                <ul className="experience-compact-list">
                  {earlierRoles.map((role) => (
                    <li
                      key={`${role.title}-${role.company}`}
                      className="experience-compact-item"
                    >
                      <div className="experience-compact-main">
                        <span className="experience-compact-title">{role.title}</span>
                        <span className="experience-compact-company">{role.company}</span>
                      </div>
                      <time className="experience-compact-period">{role.period}</time>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
