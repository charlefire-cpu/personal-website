import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

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
    'bg-accent text-white shadow-sm hover:bg-accent-hover focus-visible:ring-accent',
  secondary:
    'bg-primary text-white shadow-sm hover:bg-primary-dark focus-visible:ring-primary',
  outline:
    'border border-accent bg-white text-accent hover:bg-accent-soft focus-visible:ring-accent',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantStyles[variant]} ${className}`

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
