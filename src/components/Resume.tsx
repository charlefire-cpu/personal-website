import { profile } from '../data/profile'
import Button from './ui/Button'
import Section from './ui/Section'

export default function Resume() {
  const { id, title } = profile.sections.resume
  const { description, filePath, fileName, buttonLabel } = profile.resume

  return (
    <Section id={id} title={title} alternate>
      <div className="card max-w-2xl">
        <p className="text-body">{description}</p>
        <div className="mt-6 border-t border-border pt-6 sm:mt-8 sm:pt-8">
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
