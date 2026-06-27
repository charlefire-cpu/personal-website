import { profile } from '../data/profile'
import Button from './ui/Button'
import { ArrowDownTrayIcon, DocumentTextIcon } from './ui/icons'
import Section from './ui/Section'

export default function Resume() {
  const { id, title } = profile.sections.resume
  const { description, filePath, fileName, buttonLabel } = profile.resume

  return (
    <Section id={id} title={title} eyebrow="Download" tone="surface">
      <div className="card card-featured max-w-2xl">
        <div className="card-header-icon !mb-0 !border-b-0 !pb-0">
          <span className="icon-circle-sm">
            <DocumentTextIcon />
          </span>
          <p className="card-body min-w-0 flex-1">{description}</p>
        </div>
        <div className="card-footer">
          <Button
            href={filePath}
            download={fileName}
            variant="primary"
            aria-label={`${buttonLabel}: ${fileName}`}
          >
            <ArrowDownTrayIcon className="btn-icon btn-icon--down" />
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Section>
  )
}
