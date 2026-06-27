import { profile } from '../data/profile'
import { siteImages, toBackgroundImageUrl } from '../config/images'
import Button from './ui/Button'
import { ArrowDownTrayIcon, ArrowRightIcon } from './ui/icons'

function resolveCtaVariant(variant: 'primary' | 'secondary' | 'outline') {
  return variant === 'outline' ? 'outline-light' : variant
}

export default function Hero() {
  const { id, ctas } = profile.hero

  return (
    <section
      id={id}
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <div
        className="hero-background"
        style={{ backgroundImage: toBackgroundImageUrl(siteImages.heroBg) }}
        aria-hidden="true"
      />

      <div className="hero-overlay" aria-hidden="true" />

      <div className="page-container hero-content">
        <div className="hero-inner">
          <div className="hero-panel">
            <div className="hero-enter">
              <h1 id="hero-heading" className="hero-name">
                {profile.name}
              </h1>

              <p className="hero-role">{profile.title}</p>

              <p className="hero-summary">{profile.summary}</p>

              <div className="hero-actions">
                {ctas.map((cta) => (
                  <Button
                    key={cta.label}
                    href={cta.href}
                    variant={resolveCtaVariant(cta.variant)}
                    download={cta.download}
                    aria-label={
                      cta.download ? `${cta.label}: ${cta.download}` : undefined
                    }
                  >
                    {cta.download ? (
                      <ArrowDownTrayIcon className="btn-icon btn-icon--down" />
                    ) : (
                      <ArrowRightIcon className="btn-icon" />
                    )}
                    {cta.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-fade" aria-hidden="true" />
    </section>
  )
}
