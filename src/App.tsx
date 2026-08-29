import { useEffect } from 'react'
import { Contact, Footer } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Overview } from './components/Overview'
import { Projects } from './components/Projects'

function App() {
  useEffect(() => {
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const precisePointer = window.matchMedia('(pointer: fine)')
    let frame = 0

    const updatePointer = (event: PointerEvent) => {
      if (reduceMotion.matches || !precisePointer.matches) return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2
        const y = (event.clientY / window.innerHeight - 0.5) * 2
        root.style.setProperty('--pointer-x', x.toFixed(3))
        root.style.setProperty('--pointer-y', y.toFixed(3))
      })
    }

    const updateScroll = () => {
      if (reduceMotion.matches) return
      const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1)
      root.style.setProperty('--hero-scroll', heroProgress.toFixed(3))
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    )

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    const deepLinkTarget = window.location.hash
      ? document.getElementById(window.location.hash.slice(1))
      : null
    if (deepLinkTarget) {
      deepLinkTarget.classList.add('is-visible')
      deepLinkTarget.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
      requestAnimationFrame(() => deepLinkTarget.scrollIntoView({ behavior: 'auto' }))
    }

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('scroll', updateScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <Hero />
      <main id="main">
        <Projects />
        <Experience />
        <Overview />
      </main>
      <Contact />
      <Footer />
    </>
  )
}

export default App
