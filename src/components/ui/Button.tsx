import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light'

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
    'border border-transparent bg-accent text-white shadow-none hover:border-accent-hover hover:bg-accent-hover hover:shadow-[var(--shadow-xs)] focus-visible:ring-accent',
  secondary:
    'border border-transparent bg-primary text-white shadow-none hover:bg-primary-dark hover:shadow-[var(--shadow-xs)] focus-visible:ring-primary',
  outline:
    'border border-border bg-white text-primary shadow-none hover:border-accent/35 hover:bg-accent-soft/40 hover:text-accent focus-visible:ring-accent',
  'outline-light':
    'border border-white/35 bg-white/10 text-white shadow-none backdrop-blur-sm hover:border-white/50 hover:bg-white/15 focus-visible:ring-white focus-visible:ring-offset-primary-dark',
}

const baseStyles =
  'btn-base focus-visible:ring-offset-2'

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
