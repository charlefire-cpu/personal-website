import { profile } from '../data/profile'
import Button from './ui/Button'
import Section from './ui/Section'

function DownloadIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
      />
    </svg>
  )
}

export default function Resume() {
  const { id, title } = profile.sections.resume
  const { description, filePath, fileName, buttonLabel } = profile.resume

  return (
    <Section id={id} title={title} eyebrow="Download" alternate>
      <div className="card card-accent relative max-w-2xl overflow-hidden">
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10"
          aria-hidden="true"
        />

        <p className="relative text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
        <div className="relative mt-6 border-t border-accent/15 pt-6 sm:mt-8 sm:pt-8">
          <Button
            href={filePath}
            download={fileName}
            variant="primary"
            className="w-full sm:w-auto"
            aria-label={`${buttonLabel}: ${fileName}`}
          >
            <DownloadIcon />
            {buttonLabel}
          </Button>
        </div>
      </div>
    </Section>
  )
}
