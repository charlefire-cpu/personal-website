import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-primary-dark py-10 text-center sm:py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden="true"
      />

      <div className="page-container relative">
        <p className="text-sm font-medium text-white/90">
          {profile.name}
        </p>
        <p className="mt-2 break-words px-2 text-sm text-white/50">
          &copy; {year}. {profile.footer.rightsReserved}
        </p>
      </div>
    </footer>
  )
}
