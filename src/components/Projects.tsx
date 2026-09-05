import { projects } from '../data/portfolio'
import { ProjectVisual } from './ProjectVisual'
import { ArrowIcon, SectionHeader, TextLink } from './UI'

export function Projects() {
  return (
    <section className="section projects" id="systems">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="Selected work"
          title="Selected projects"
          intro="Five applied AI systems spanning career intelligence, quantitative research, developer storytelling, autonomous discovery, and B2B content."
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.id}>
              <a
                className="project-card__preview-link"
                href={project.url ?? project.screenshot.src}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.url ? project.linkLabel : 'View full-size screenshot'}: ${project.title} (opens in a new tab)`}
              >
                <ProjectVisual screenshot={project.screenshot} />
                <span className="project-card__preview-cta" aria-hidden="true">
                  {project.url ? project.linkLabel : 'View full-size screenshot'}<ArrowIcon />
                </span>
              </a>
              <div className="project-card__content">
                <div className="project-card__heading">
                  <span className="project-card__index">{project.id}</span>
                  <div className="project-card__copy">
                    <p>{project.subtitle}</p>
                    <h3>
                      {project.url ? (
                        <a className="project-card__title-link" href={project.url} target="_blank" rel="noreferrer">
                          {project.title}<ArrowIcon /><span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      ) : project.title}
                    </h3>
                  </div>
                </div>

                <p className="project-card__description">{project.description}</p>

                <details className="project-card__details">
                  <summary>Explore engineering details<span className="sr-only"> for {project.title}</span></summary>
                  <ul>
                    {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </details>

                <ul className="project-card__tech" aria-label={`${project.title} technologies`}>
                  {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>

                <div className="project-card__footer">
                  <div className="project-card__proof">
                    <strong>{project.proof}</strong>
                    <span>{project.proofLabel}</span>
                  </div>
                  <div className="project-card__access">
                    <span className={`project-card__status${project.url ? '' : ' project-card__status--private'}`}>
                      <i />{project.access}
                    </span>
                    {project.url && <TextLink href={project.url} external>{project.linkLabel}</TextLink>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
