import { capabilities, process } from '../data/portfolio'
import { SectionHeader } from './UI'

export function Overview() {
  return (
    <section className="section overview" id="capabilities">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Profile & process"
          title="Built with purpose"
          intro="A practical approach to intelligent products: understand the real problem, build the complete path, and make the result dependable."
        />

        <div className="overview__grid">
          <div className="overview__column overview__profile reveal" id="about">
            <h3>Education &amp; profile</h3>
            <p className="overview__bio">I&apos;m a Data Science undergraduate based in South Jakarta, working across machine learning, quantitative analysis, and applied AI. I focus on grounded outputs, evaluation, reproducibility, and reliable deployment.</p>
            <div className="overview__education">
              <p>B.Sc. Data Science</p>
              <span>Aug 2023 — Present</span>
              <small>State University of Surabaya (UNESA)</small>
            </div>
            <div className="overview__metrics">
              <div><strong>3.67<span> / 4.00</span></strong><p>GPA</p></div>
              <div><strong>122</strong><p>Credits</p></div>
            </div>
            <h4>Leadership &amp; community</h4>
            <div className="overview__activity">
              <strong>Commission A Staff · DPM FMIPA UNESA</strong>
              <span>Feb 2025 — Jan 2026</span>
              <p>Monitored student-executive programs, evaluated performance, and served as MC/moderator for faculty forums.</p>
            </div>
            <div className="overview__activity">
              <strong>Official Faculty Ambassador · FMIPA</strong>
              <span>Sep 2024 — Sep 2025</span>
              <p>Represented the faculty and coordinated cross-faculty communication, event logistics, and community initiatives.</p>
            </div>
            <h4>Languages</h4>
            <p className="overview__languages">Indonesian · Native<br />English · Intermediate</p>
          </div>

          <div className="overview__column overview__process reveal">
            <h3>Work process</h3>
            <ol>
              {process.map(([index, title, description]) => (
                <li key={index}>
                  <span>{index}</span>
                  <i aria-hidden="true">{title === 'Build' ? '</>' : '✶'}</i>
                  <div><strong>{title}</strong><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="overview__recognition reveal">
            <p className="overview__eyebrow">Beyond the projects</p>
            <h3>Research &amp;<br />recognition</h3>
            <ul>
              <li><span>2025 · Finalist &amp; co-author</span><strong>SENADA National Seminar</strong><p>Distributed ETL for clickbait and news classification using Celery and RabbitMQ.</p></li>
              <li><span>2024 · Semifinalist</span><strong>WordPress Case Competition</strong><p>A data-driven digital talent strategy for Society 5.0.</p></li>
              <li><span>2024–2025 · Finalist</span><strong>FMIPA Ambassador Selection</strong><p>Awarded the title of Putra Konservasi.</p></li>
            </ul>
          </aside>
        </div>

        <div className="overview__toolkit reveal">
          <h3>Technical toolkit</h3>
          <p>From source data and model development to reporting and reliable operation.</p>
          <div className="overview__skill-groups">
            {capabilities.map(([index, title, skills]) => (
              <div className="overview__skill-group" key={title}>
                <h4><span>{index}</span>{title}</h4>
                <ul className="overview__skills">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
