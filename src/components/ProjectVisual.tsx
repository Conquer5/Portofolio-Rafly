import type { Project } from '../data/portfolio'

export function ProjectVisual({ screenshot }: { screenshot: Project['screenshot'] }) {
  return (
    <div className={`project-visual project-visual--${screenshot.kind}`}>
      <div className="project-visual__topline" aria-hidden="true">
        <span className="project-visual__dots"><i /><i /><i /></span>
        <span>{screenshot.kind === 'telegram' ? 'Telegram bot' : 'Application dashboard'}</span>
        <span>Screenshot</span>
      </div>
      <div className="project-visual__stage">
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
