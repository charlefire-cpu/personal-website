import { profile } from '../data/profile'
import Section from './ui/Section'

function formatLinkDisplay(url: string) {
  return url.replace(/^https?:\/\//, '')
}

export default function Contact() {
  const { id, title } = profile.sections.contact
  const { message, email, linkedin, github, location, labels } = profile.contact

  return (
    <Section id={id} title={title} alternate>
      <div className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted">{message}</p>
        <ul className="mt-6 space-y-4">
          <li>
            <span className="block text-sm font-medium text-primary">{labels.email}</span>
            <a
              href={`mailto:${email}`}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {email}
            </a>
          </li>
          {linkedin && (
            <li>
              <span className="block text-sm font-medium text-primary">{labels.linkedin}</span>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-hover"
              >
                {formatLinkDisplay(linkedin)}
              </a>
            </li>
          )}
          {github && (
            <li>
              <span className="block text-sm font-medium text-primary">{labels.github}</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-hover"
              >
                {formatLinkDisplay(github)}
              </a>
            </li>
          )}
          <li>
            <span className="block text-sm font-medium text-primary">{labels.location}</span>
            <span className="text-muted">{location}</span>
          </li>
        </ul>
      </div>
    </Section>
  )
}
