import type { Project } from '../data/portfolio'

function AgentVisual() {
  return (
    <div className="visual-agent" aria-hidden="true">
      <div className="visual-agent__node visual-agent__node--input"><span>01</span>Collect</div>
      <div className="visual-agent__line visual-agent__line--one" />
      <div className="visual-agent__node visual-agent__node--score"><span>02</span>Score</div>
      <div className="visual-agent__line visual-agent__line--two" />
      <div className="visual-agent__core"><i />Human<br />approval</div>
      <div className="visual-agent__line visual-agent__line--three" />
      <div className="visual-agent__node visual-agent__node--action"><span>03</span>Action</div>
      <div className="visual-agent__score"><strong>86</strong><span>FIT / 100</span></div>
    </div>
  )
}

function MarketVisual() {
  return (
    <div className="visual-market" aria-hidden="true">
      <div className="visual-market__labels"><span>IDX SYSTEM</span><span>5Y / 1D</span></div>
      <svg viewBox="0 0 680 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="marketArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c81925" stopOpacity=".28" />
            <stop offset="1" stopColor="#c81925" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="visual-market__area" d="M0 260 C45 248 63 200 110 215 S180 170 218 184 S280 103 326 135 S392 90 432 102 S493 35 545 70 S620 42 680 20 V300 H0Z" />
        <path className="visual-market__line" d="M0 260 C45 248 63 200 110 215 S180 170 218 184 S280 103 326 135 S392 90 432 102 S493 35 545 70 S620 42 680 20" />
      </svg>
      <div className="visual-market__indicators"><span>MA20</span><span>RSI</span><span>MACD</span><span>ATR</span></div>
    </div>
  )
}

function PipelineVisual({ type }: { type: Project['visual'] }) {
  const labels: Record<Exclude<Project['visual'], 'agent' | 'market'>, string[]> = {
    pipeline: ['SYNC', 'VALIDATE', 'STORE', 'REPORT'],
    weather: ['AWS', 'SATELLITE', 'CNN–LSTM', '60 MIN'],
    rag: ['INGEST', 'EMBED', 'RETRIEVE', 'REASON'],
    distributed: ['COLLECT', 'QUEUE', 'CLASSIFY', 'PUBLISH'],
  }

  return (
    <div className={`visual-pipeline visual-pipeline--${type}`} aria-hidden="true">
      <div className="visual-pipeline__orbit"><i /><i /><i /></div>
      <div className="visual-pipeline__flow">
        {labels[type as keyof typeof labels].map((label, index) => (
          <div className="visual-pipeline__step" key={label}>
            <span>0{index + 1}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectVisual({ type }: { type: Project['visual'] }) {
  return (
    <div className={`project-visual project-visual--${type}`}>
      <div className="project-visual__topline">
        <span><i /> System architecture</span>
        <span>Decorative preview</span>
      </div>
      {type === 'agent' ? <AgentVisual /> : type === 'market' ? <MarketVisual /> : <PipelineVisual type={type} />}
      <div className="project-visual__corner" aria-hidden="true">RA / SYS</div>
    </div>
  )
}
