import { capabilities } from '../data/portfolio'
import { CapabilityIcon } from './CapabilityIcon'
import { SectionHeader } from './UI'
import { TechnologyLogo } from './TechnologyLogo'

const layerMeta = {
  Ingest: ['ingest', 'Source acquisition'],
  Process: ['process', 'Transform & orchestrate'],
  Intelligence: ['intelligence', 'Model & reason'],
  Store: ['store', 'Persist & retrieve'],
  Deliver: ['deliver', 'Interface & communicate'],
  Operate: ['operate', 'Deploy & maintain'],
} as const

export function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="System layers"
          title="I build across the stack"
          intro="Technology choices follow the system. The through-line is a reliable flow from source data to a usable outcome."
        />
        <div className="capabilities__flow reveal">
          <div className="capabilities__signal" aria-hidden="true"><i /></div>
          {capabilities.map(([index, title, items], itemIndex) => (
            <article className="capability" key={title}>
              <div className="capability__head">
                <span>{index}</span>
                <span>System layer</span>
              </div>
              <div className="capability__icon">
                <CapabilityIcon type={layerMeta[title][0]} />
              </div>
              <h3>{title}</h3>
              <p className="capability__summary">{layerMeta[title][1]}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <TechnologyLogo name={item} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="capability__connector" aria-hidden="true">
                {itemIndex < capabilities.length - 1 ? '→' : '✓'}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
