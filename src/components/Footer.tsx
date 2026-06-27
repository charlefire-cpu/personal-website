import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary-dark py-10 text-center text-sm text-white/70">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profile.name}. {profile.footer.rightsReserved}
        </p>
      </div>
    </footer>
  )
}
