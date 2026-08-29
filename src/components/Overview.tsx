import { capabilities, process } from '../data/portfolio'
import { SectionHeader } from './UI'

export function Overview() {
  const skills = [...new Set(capabilities.flatMap(([, , items]) => items))]

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
            <div className="overview__education">
              <p>B.Sc. Data Science</p>
              <span>2023 — Present</span>
              <small>State University of Surabaya</small>
            </div>
            <div className="overview__education">
              <p>Data &amp; AI Systems</p>
              <span>Production focused</span>
              <small>Pipelines · ML · Automation · Agents</small>
            </div>
            <h4>Core toolkit</h4>
            <ul className="overview__skills">
              {skills.slice(0, 18).map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <div className="overview__column overview__process reveal">
            <h3>Work process</h3>
            <ol>
              {process.map(([index, title, description]) => (
                <li key={index}>
                  <span>{index}</span>
                  <i aria-hidden="true">{title === 'Build' ? '&lt;/&gt;' : '✶'}</i>
                  <div><strong>{title}</strong><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="overview__quote reveal">
            <span aria-hidden="true">“</span>
            <blockquote>Good technology is not just clever. It is clear, useful, and built to last.</blockquote>
            <p>Rafly A. Syahputra</p>
            <small>Let&apos;s create something that works.</small>
          </aside>
        </div>
      </div>
    </section>
  )
}
