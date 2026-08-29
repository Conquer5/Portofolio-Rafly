import { projects } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { SectionHeader, TextLink } from './UI'

export function Projects() {
  return (
    <section className="section projects" id="systems">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Selected projects"
          intro="Not isolated demos. Each system connects data, decisions, and delivery around a real operational problem."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.id}>
              <ProjectVisual type={project.visual} />
              <div className="project-card__body">
                <span className="project-card__index">{project.id}</span>
                <div className="project-card__copy">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <TextLink href="https://github.com/Conquer5" external>Open</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
