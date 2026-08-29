import { experiences } from '../data/portfolio'
import { SectionHeader } from './UI'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Track record"
          title="Work experience"
          intro="Applied engineering across enterprise operations, public weather services, and independent consulting."
        />

        <div className="experience__list">
          {experiences.map((item, index) => (
            <article className="experience-item reveal" key={item.company}>
              <div className="experience-item__rail">
                <span>0{index + 1}</span><i />
              </div>
              <p className="experience-item__period">{item.period}</p>
              <div className="experience-item__main">
                <p className="experience-item__company">{item.company}</p>
                <h3>{item.role}</h3>
                <p className="experience-item__statement">{item.statement}</p>
                <ul className="experience-item__proof">
                  {item.proof.map((proof) => <li key={proof}>{proof}</li>)}
                </ul>
                <p className="experience-item__meta">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
