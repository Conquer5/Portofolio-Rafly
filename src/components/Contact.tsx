import { ArrowIcon } from './UI'

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__grid" aria-hidden="true" />
      <div className="contact__glow" aria-hidden="true" />
      <div className="container contact__inner reveal">
        <div className="contact__meta"><span>04</span><span>Contact</span><i /></div>
        <div className="contact__layout">
          <div className="contact__pitch">
            <h2>Let&apos;s work<br />together<span>.</span></h2>
            <p>Open to AI engineering, data science, and data engineering opportunities where useful systems matter.</p>
            <a className="contact__email" href="mailto:raflyanugrahsyahputra.1@gmail.com">
              <span>Available for opportunities</span><ArrowIcon />
            </a>
          </div>
          <div className="contact__details">
            <a href="mailto:raflyanugrahsyahputra.1@gmail.com"><span>@</span><p>Email<strong>raflyanugrahsyahputra.1@gmail.com</strong></p></a>
            <a href="https://linkedin.com/in/rafly-anugrah-syahputra" target="_blank" rel="noreferrer"><span>in</span><p>LinkedIn<strong>rafly-anugrah-syahputra</strong></p></a>
            <a href="https://github.com/Conquer5" target="_blank" rel="noreferrer"><span>&lt;/&gt;</span><p>GitHub<strong>Conquer5</strong></p></a>
            <a href="/documents/Rafly-Anugrah-Syahputra-CV.pdf" download><span>↓</span><p>Curriculum vitae<strong>Download PDF</strong></p></a>
          </div>
          <div className="contact__screen" aria-hidden="true">
            <div className="contact__screen-bar"><i /><i /><i /></div>
            <p>WE BUILD<br /><em>INTELLIGENT</em><br />SYSTEMS</p>
            <span>RA / 2026</span>
          </div>
        </div>
        <div className="contact__links">
          <p>Based in Jakarta, Indonesia · Available worldwide</p>
          <a href="#top">Back to top <ArrowIcon /></a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__mark">RA<span>.</span></a>
        <p>© {new Date().getFullYear()} Rafly Anugrah Syahputra</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
