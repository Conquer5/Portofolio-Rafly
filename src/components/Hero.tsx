import { ArrowIcon } from './UI'

const metrics = [
  ['ML & AI', 'Models, pipelines & agents'],
  ['80+ hrs', 'Est. saved / month'],
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
          <span><i>Rafly</i></span>
          <span><i>Anugrah</i></span>
          <span><i>Syahputra</i></span>
        </h1>
        <p className="hero__role">Data Scientist · Machine Learning · Applied AI</p>
      </div>

      <div className="hero__details">
        <p className="hero__intro">
          I build machine learning models, reliable data pipelines, and grounded AI systems. From rainfall nowcasting at BMKG to operational analytics at PLN.
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

      <aside className="hero__highlights" aria-label="Portfolio highlights">
        <div className="hero__statement">
          <span className="hero__spark" aria-hidden="true">✶</span>
          <p>Turning raw data<br />into useful, intelligent<br />systems.</p>
        </div>
        <div className="hero__metrics" aria-label="Career highlights">
          {metrics.map(([value, label]) => (
            <div className="hero__metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </aside>

      <div className="hero__footer">
        <div className="hero__socials" aria-label="Social links">
          <a href="https://github.com/Conquer5" target="_blank" rel="noreferrer">
            <strong>GitHub</strong><span>Code &amp; projects</span>
          </a>
          <a href="https://linkedin.com/in/rafly-anugrah-syahputra" target="_blank" rel="noreferrer">
            <strong>LinkedIn</strong><span>Professional profile</span>
          </a>
          <a href="mailto:raflyanugrahsyahputra.1@gmail.com">
            <strong>Email</strong><span>Start a conversation</span>
          </a>
        </div>
        <a className="hero__scroll" href="#systems" aria-label="See selected systems">
          <span>Explore selected work</span><ArrowIcon />
        </a>
      </div>
    </header>
  )
}
