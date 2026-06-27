import { profile } from '../data/profile'
import Section from './ui/Section'

export default function About() {
  const paragraphs = profile.about.split('\n\n')

  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
