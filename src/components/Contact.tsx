import type { ComponentType } from 'react'
import { profile } from '../data/profile'
import {
  EnvelopeIcon,
  GitHubIcon,
  LinkedInIcon,
  MapPinIcon,
} from './ui/icons'
import Section from './ui/Section'

function formatLinkDisplay(url: string) {
  return url.replace(/^https?:\/\//, '')
}

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Email: EnvelopeIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Location: MapPinIcon,
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
    <Section id={id} title={title} eyebrow="Get in touch" tone="contact" description={message}>
      <ul className="card-grid-2">
        {contactItems.map((item) => {
          const Icon = iconMap[item.label] ?? EnvelopeIcon

          return (
            <li key={item.label} className="card card-interactive card-contact">
              <div className="card-contact-inner">
                <span className="icon-circle">
                  <Icon />
                </span>
                <div className="card-contact-content">
                  <span className="text-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="card-contact-link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="card-contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
