type CapabilityIconProps = {
  type: 'ingest' | 'process' | 'intelligence' | 'store' | 'deliver' | 'operate'
}

export function CapabilityIcon({ type }: CapabilityIconProps) {
  const commonProps = {
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  }

  if (type === 'ingest') {
    return (
      <svg {...commonProps}>
        <path d="M24 5v22m0 0 8-8m-8 8-8-8" />
        <path d="M10 29v10h28V29" />
        <path d="M14 35h20" className="icon-accent" />
      </svg>
    )
  }

  if (type === 'process') {
    return (
      <svg {...commonProps}>
        <path d="M7 12h34M7 24h34M7 36h34" />
        <circle cx="17" cy="12" r="4" />
        <circle cx="31" cy="24" r="4" />
        <circle cx="21" cy="36" r="4" />
        <path d="M17 8v8m14 4v8m-10 4v8" className="icon-accent" />
      </svg>
    )
  }

  if (type === 'intelligence') {
    return (
      <svg {...commonProps}>
        <circle cx="24" cy="24" r="5" className="icon-accent" />
        <circle cx="10" cy="12" r="3" /><circle cx="38" cy="12" r="3" />
        <circle cx="10" cy="36" r="3" /><circle cx="38" cy="36" r="3" />
        <path d="m13 14 7 7m15-7-7 7m-15 13 7-7m15 7-7-7" />
        <path d="M24 5v14m0 10v14" />
      </svg>
    )
  }

  if (type === 'store') {
    return (
      <svg {...commonProps}>
        <ellipse cx="24" cy="11" rx="15" ry="6" />
        <path d="M9 11v13c0 3.3 6.7 6 15 6s15-2.7 15-6V11" />
        <path d="M9 24v13c0 3.3 6.7 6 15 6s15-2.7 15-6V24" />
        <path d="M13 27c2.7 1.8 6.5 3 11 3s8.3-1.2 11-3" className="icon-accent" />
      </svg>
    )
  }

  if (type === 'deliver') {
    return (
      <svg {...commonProps}>
        <rect x="6" y="8" width="36" height="27" rx="1" />
        <path d="M6 15h36M17 42h14m-7-7v7" />
        <path d="m20 28 9-9m0 0h-7m7 0v7" className="icon-accent" />
        <circle cx="11" cy="11.5" r="1" className="icon-fill" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M24 5 39 13v11c0 9-6.3 15.8-15 19-8.7-3.2-15-10-15-19V13L24 5Z" />
      <path d="M17 25a7 7 0 0 1 12-4m2 2a7 7 0 0 1-12 7" />
      <path d="m28 17 1 4-4-1m-5 14-1-4 4 1" className="icon-accent" />
    </svg>
  )
}
