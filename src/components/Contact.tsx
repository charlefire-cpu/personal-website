import { profile } from '../data/profile'
import Section from './ui/Section'

export default function Contact() {
  const { message, email, linkedin, github, location } = profile.contact

  return (
    <Section id="contact" title="Contact" alternate>
      <div className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted">{message}</p>
        <ul className="mt-6 space-y-4">
          <li>
            <span className="block text-sm font-medium text-primary">Email</span>
            <a
              href={`mailto:${email}`}
              className="text-accent transition-colors hover:text-accent-hover"
            >
              {email}
            </a>
          </li>
          {linkedin && (
            <li>
              <span className="block text-sm font-medium text-primary">LinkedIn</span>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-hover"
              >
                {linkedin.replace('https://', '')}
              </a>
            </li>
          )}
          {github && (
            <li>
              <span className="block text-sm font-medium text-primary">GitHub</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors hover:text-accent-hover"
              >
                {github.replace('https://', '')}
              </a>
            </li>
          )}
          <li>
            <span className="block text-sm font-medium text-primary">Location</span>
            <span className="text-muted">{location}</span>
          </li>
        </ul>
      </div>
    </Section>
  )
}
