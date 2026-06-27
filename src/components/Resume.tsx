import { profile } from '../data/profile'
import Button from './ui/Button'
import Section from './ui/Section'

export default function Resume() {
  const { id, title } = profile.sections.resume
  const { description, filePath, fileName, buttonLabel } = profile.resume

  return (
    <Section id={id} title={title} alternate>
      <div className="card max-w-2xl">
        <p className="text-base leading-relaxed text-muted">{description}</p>
        <div className="mt-5 border-t border-border pt-5 sm:mt-6 sm:pt-6">
          <Button
            href={filePath}
            download={fileName}
            variant="primary"
            className="w-full sm:w-auto"
            aria-label={`${buttonLabel}: ${fileName}`}
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Section>
  )
}
