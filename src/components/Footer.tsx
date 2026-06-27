import { profile } from '../data/profile'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerLinks = profile.navigation.filter((item) => item.href !== '#home')
  const revealRef = useRevealOnScroll<HTMLDivElement>()

  return (
    <footer className="site-footer">
      <div className="site-footer-bridge" aria-hidden="true" />

      <div ref={revealRef} className="reveal page-container site-footer-inner">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="min-w-0">
            <p className="text-base font-semibold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-white/55">{profile.title}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="site-footer-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer-divider" aria-hidden="true" />

        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-white/45">
            &copy; {year} {profile.name}. {profile.footer.rightsReserved}
          </p>
          <a href="#home" className="site-footer-link text-sm">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
