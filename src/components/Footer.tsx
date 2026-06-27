import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary-dark py-8 text-center text-sm text-white/70 sm:py-10">
      <div className="page-container">
        <p className="break-words px-2">
          &copy; {year} {profile.name}. {profile.footer.rightsReserved}
        </p>
      </div>
    </footer>
  )
}
