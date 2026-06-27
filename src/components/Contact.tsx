import { profile } from '../data/profile'
import Section from './ui/Section'

function formatLinkDisplay(url: string) {
  return url.replace(/^https?:\/\//, '')
}

export default function Contact() {
  const { id, title } = profile.sections.contact
  const { message, email, linkedin, github, location, labels } = profile.contact

  const contactItems = [
    { label: labels.email, value: email, href: `mailto:${email}` },
    linkedin && {
      label: labels.linkedin,
      value: formatLinkDisplay(linkedin),
      href: linkedin,
      external: true,
    },
    github && {
      label: labels.github,
      value: formatLinkDisplay(github),
      href: github,
      external: true,
    },
    { label: labels.location, value: location },
  ].filter(Boolean) as Array<{
    label: string
    value: string
    href?: string
    external?: boolean
  }>

  return (
    <Section id={id} title={title}>
      <div className="max-w-2xl">
        <p className="mb-8 text-base leading-relaxed text-muted">{message}</p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item) => (
            <li key={item.label} className="card p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="mt-2 block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {item.value}
                </a>
              ) : (
                <span className="mt-2 block text-sm font-medium text-primary">
                  {item.value}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
