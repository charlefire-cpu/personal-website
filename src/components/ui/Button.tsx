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
    'bg-accent text-white shadow-sm hover:bg-accent-hover hover:shadow-md focus-visible:ring-accent motion-safe:hover:-translate-y-px',
  secondary:
    'bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md focus-visible:ring-primary motion-safe:hover:-translate-y-px',
  outline:
    'border border-accent bg-white text-accent hover:bg-accent-soft hover:shadow-sm focus-visible:ring-accent motion-safe:hover:-translate-y-px',
}

const baseStyles =
  'inline-flex min-w-0 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-6'

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
