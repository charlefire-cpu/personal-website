import { profile } from '../data/profile'
import Button from './ui/Button'
import Section from './ui/Section'

export default function Resume() {
  const { id, title } = profile.sections.resume
  const { description, filePath, fileName, buttonLabel } = profile.resume

  return (
    <Section id={id} title={title} tone="surface">
      <div className="card card-featured max-w-2xl">
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="card-footer">
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
