import { profile } from '../data/profile'
import Button from './ui/Button'
import Section from './ui/Section'

export default function Resume() {
  const { description, filePath, fileName } = profile.resume

  return (
    <Section id="resume" title="Resume">
      <div className="max-w-2xl">
        <p className="text-base leading-relaxed text-muted">{description}</p>
        <div className="mt-6">
          <Button
            href={filePath}
            download={fileName}
            variant="primary"
            aria-label={`Download resume: ${fileName}`}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </Section>
  )
}
