import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-[var(--shadow-xs)] backdrop-blur-sm">
      <nav
        className="page-container flex items-center justify-between gap-4 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="shrink-0 text-base font-semibold tracking-tight text-primary link-hover hover:text-accent sm:text-lg"
          onClick={closeMenu}
        >
          {profile.navBrand}
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {profile.navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="nav-link inline-flex shrink-0 items-center justify-center rounded-xl p-2.5 text-primary hover:bg-surface lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-white lg:hidden"
        >
          <ul className="page-container flex flex-col gap-1 py-4">
            {profile.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link block rounded-xl px-4 py-3 text-base font-medium text-muted hover:bg-surface hover:text-primary"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
