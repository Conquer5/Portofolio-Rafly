import { ArrowIcon, SectionHeader } from './UI'

export function Profile() {
  return (
    <section className="section profile" id="about">
      <div className="container">
        <SectionHeader index="05" eyebrow="Perspective" title="Beyond the code" />

        <div className="profile__layout">
          <div className="about reveal">
            <p className="about__eyebrow">About Rafly</p>
            <p className="about__lead">
              I build at the intersection of <em>data engineering</em>, <em>machine intelligence</em>, and <em>usable products</em>.
            </p>
            <p>
              I&apos;m a Data Science undergraduate in South Jakarta focused on production-oriented AI, data, and automation systems. My work spans enterprise reporting, weather prediction, freelance analytics, AI agents, and the infrastructure that makes those systems useful beyond a notebook.
            </p>
            <a className="about__link" href="mailto:raflyanugrahsyahputra.1@gmail.com">
              Start a conversation <ArrowIcon />
            </a>
          </div>

          <div className="profile__details">
            <article className="profile-card reveal">
              <p className="profile-card__index">01 / LEADERSHIP</p>
              <h3>Student Representative Council</h3>
              <p>DPM FMIPA UNESA · Commission A — Supervision</p>
              <ul><li>Governance</li><li>Oversight</li><li>Evaluation</li><li>Public communication</li></ul>
            </article>
            <article className="profile-card reveal">
              <p className="profile-card__index">02 / COMMUNITY</p>
              <h3>FMIPA Ambassador Association</h3>
              <p>Faculty representation and cross-team collaboration.</p>
              <ul><li>Representation</li><li>Coordination</li><li>Communication</li></ul>
            </article>
            <article className="profile-card profile-card--education reveal">
              <p className="profile-card__index">03 / EDUCATION</p>
              <h3>B.Sc. Data Science</h3>
              <p>State University of Surabaya · 2023 — Present</p>
              <div className="education-metrics">
                <div><strong>3.67</strong><span>GPA / 4.00</span></div>
                <div><strong>122</strong><span>Credits</span></div>
              </div>
              <div className="recognition">
                <span>SENADA 2025</span><p>Finalist & co-author</p>
                <span>WP CASE 2024</span><p>Semifinalist</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
