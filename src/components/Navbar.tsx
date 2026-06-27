import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#home')

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  useEffect(() => {
    const sectionIds = profile.navigation
      .map((item) => item.href.replace('#', ''))
      .filter(Boolean)

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: [0, 0.15, 0.35] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <nav
        className="page-container flex h-14 items-center justify-between gap-4 sm:h-[3.75rem]"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          {profile.navBrand}
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {profile.navigation.map((item) => {
            const isActive = activeHref === item.href

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link-item ${isActive ? 'nav-link-item--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          className="nav-menu-button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`mobile-menu-backdrop ${isOpen ? 'mobile-menu-backdrop--open' : ''}`}
        onClick={closeMenu}
        aria-hidden={!isOpen}
      />

      <div
        id="mobile-menu"
        className={`mobile-menu-panel ${isOpen ? 'mobile-menu-panel--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <ul className="page-container flex flex-col gap-0.5 py-3">
          {profile.navigation.map((item) => {
            const isActive = activeHref === item.href

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
