import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary-dark py-10 text-center sm:py-12">
      <div className="page-container">
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
