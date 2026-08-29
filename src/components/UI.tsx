import type { PropsWithChildren } from 'react'

type SectionHeaderProps = {
  index: string
  eyebrow: string
  title: string
  intro?: string
}

export function SectionHeader({ index, eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <header className="section-header reveal">
      <div className="section-header__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-header__body">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  )
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  )
}

export function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  )
}

export function Reveal({ children, className = '' }: PropsWithChildren<{ className?: string }>) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>
}

export function TextLink({
  href,
  children,
  download,
  external = false,
}: PropsWithChildren<{ href: string; download?: boolean; external?: boolean }>) {
  return (
    <a
      className="text-link"
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  )
}
