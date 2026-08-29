import { ArrowIcon } from './UI'

const metrics = [
  ['40+', 'Data projects'],
  ['80+ hrs', 'Automated monthly'],
  ['0.88 F1', 'Significant rainfall'],
]

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <p className="hero__backdrop" aria-hidden="true">
        PORTFOLIO
      </p>

      <div className="hero__identity">
        <p className="hero__hello">Hello, I&apos;m</p>
        <h1>
          <span><i>Rafly</i></span><span><i>Anugrah</i></span>
          <span><i>Syahputra</i></span>
        </h1>
        <p className="hero__role">AI Engineer &amp;<br />Data Specialist</p>
        <p className="hero__intro">
          I design and build intelligent systems—from dependable data pipelines to machine learning products and practical AI automation.
        </p>
        <a className="hero__worldwide" href="mailto:raflyanugrahsyahputra.1@gmail.com">
          <span aria-hidden="true">◉</span> Available worldwide
        </a>
      </div>

      <div className="hero__portrait-wrap">
        <picture>
          <source srcSet="/images/rafly-hero.webp" type="image/webp" />
          <img
            className="hero__portrait"
            src="/images/rafly-hero.png"
            alt="Rafly Anugrah Syahputra wearing a black suit in a dark studio portrait"
            width="1122"
            height="1402"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="hero__statement">
        <span className="hero__spark" aria-hidden="true">✶</span>
        <p>Turning raw data<br />into useful, intelligent<br />systems.</p>
      </div>

      <div className="hero__footer">
        <div className="hero__socials">
          <a href="https://github.com/Conquer5" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/rafly-anugrah-syahputra" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:raflyanugrahsyahputra.1@gmail.com">Email</a>
        </div>
        <div className="hero__metrics" aria-label="Career highlights">
          {metrics.map(([value, label]) => (
            <div className="hero__metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <a className="hero__scroll" href="#systems" aria-label="See selected systems">
        <span>Explore selected work</span><ArrowIcon />
      </a>
    </header>
  )
}
