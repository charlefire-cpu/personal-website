import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface BaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-[var(--shadow-card)] hover:bg-accent-hover hover:shadow-[var(--shadow-card-hover)] focus-visible:ring-accent motion-safe:hover:-translate-y-0.5',
  secondary:
    'bg-primary text-white shadow-[var(--shadow-card)] hover:bg-primary-dark hover:shadow-[var(--shadow-card-hover)] focus-visible:ring-primary motion-safe:hover:-translate-y-0.5',
  outline:
    'border-2 border-accent/30 bg-white text-accent hover:border-accent hover:bg-accent-soft hover:shadow-[var(--shadow-soft)] focus-visible:ring-accent motion-safe:hover:-translate-y-0.5',
  ghost:
    'border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/20 focus-visible:ring-white motion-safe:hover:-translate-y-0.5',
}

const baseStyles =
  'inline-flex min-w-0 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-7'

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props
    return (
      <a href={href} className={styles} {...linkProps}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={styles} {...(props as ButtonAsButton)}>
      {children}
    </button>
  )
}
