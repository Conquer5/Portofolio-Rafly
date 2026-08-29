import { process } from '../data/portfolio'
import { SectionHeader } from './UI'

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Engineering philosophy"
          title="How I build"
          intro="A useful intelligent system is more than its model. I work through the full path from problem definition to dependable operation."
        />
        <div className="process__pipeline reveal">
          <div className="process__line" aria-hidden="true"><i /></div>
          {process.map(([index, title, description]) => (
            <article className="process-step" key={index}>
              <div className="process-step__node"><span>{index}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
