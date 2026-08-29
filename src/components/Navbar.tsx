import { useEffect, useState } from 'react'

const links = [
  ['Systems', '#systems'],
  ['Experience', '#experience'],
  ['Capabilities', '#capabilities'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} aria-label="Primary navigation">
      <a className="nav__mark" href="#top" aria-label="Rafly Anugrah Syahputra, home">
        RA<span>.</span>
      </a>

      <button
        className="nav__toggle"
        type="button"
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span>{open ? 'Close' : 'Menu'}</span>
        <i aria-hidden="true" />
      </button>

      <div className={`nav__menu ${open ? 'nav__menu--open' : ''}`} id="nav-menu">
        <div className="nav__links">
          {links.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span> {label}
            </a>
          ))}
        </div>
        <a className="nav__availability" href="mailto:raflyanugrahsyahputra.1@gmail.com">
          <i aria-hidden="true" /> Available for opportunities
        </a>
      </div>
    </nav>
  )
}
