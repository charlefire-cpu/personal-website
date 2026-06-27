import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary py-8 text-center text-sm text-white/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profile.name}. {profile.footer.rightsReserved}
        </p>
      </div>
    </footer>
  )
}
