import { profile } from '../data/profile'
import Section from './ui/Section'

function GraduationIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
      />
    </svg>
  )
}

export default function Education() {
  const { id, title } = profile.sections.education
  const { degree, school, year } = profile.education

  return (
    <Section id={id} title={title} eyebrow="Background" pattern>
      <div className="card card-accent max-w-xl">
        <div className="flex items-start gap-4">
          <span className="icon-circle">
            <GraduationIcon />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-snug text-primary sm:text-xl">
              {degree}
            </h3>
            <p className="mt-2 break-words text-muted">{school}</p>
            <p className="mt-2 inline-flex rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
              {year}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
