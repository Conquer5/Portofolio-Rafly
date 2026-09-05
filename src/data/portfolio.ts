export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tech: string[]
  proof: string
  proofLabel: string
  screenshot: {
    src: string
    alt: string
    width: number
    height: number
    kind: 'dashboard' | 'telegram'
  }
  access: 'Public case study' | 'Public showcase' | 'Public repository' | 'Private repository' | 'Project overview'
  url?: string
  linkLabel?: string
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'AI Career Agent',
    subtitle: 'Human-in-the-Loop Career Intelligence System',
    description:
      'A stateful career agent that discovers vacancies across platforms, scores candidate fit, and prepares application answers grounded in verified CV and profile facts.',
    highlights: [
      'LangGraph and LangChain orchestrate job discovery, vacancy scoring, and candidate matching with Gemini.',
      'Dynamic form fields are evaluated only against verified candidate evidence, with human checkpoints for salary, visa, CAPTCHA, and other sensitive inputs.',
      'Multi-tier Gemini routing, automatic Flash Lite failover, quota controls, and 30-day response caching manage API usage.',
      'SQLite checkpoints preserve workflow state so applications can pause for review and resume.',
    ],
    tech: ['Python', 'LangGraph', 'LangChain', 'Gemini', 'Playwright', 'SQLAlchemy', 'SQLite', 'Pytest'],
    proof: '30 DAYS',
    proofLabel: 'response caching',
    screenshot: {
      src: '/images/projects/ai-career-agent.png',
      alt: 'AI Career Agent dashboard with an opportunity radar, job review queue, candidate evidence map, and fit breakdown.',
      width: 1354,
      height: 651,
      kind: 'dashboard',
    },
    access: 'Public showcase',
    url: 'https://conquer5.github.io/ai-career-agent-showcase/',
    linkLabel: 'Live showcase',
  },
  {
    id: '02',
    title: 'StockPulse AI',
    subtitle: 'Financial Intelligence & Quantitative Decision Support',
    description:
      'An IDX research system combining LLM news fact extraction with deterministic quantitative rules, traceable predictions, and a responsive dashboard for daily briefs and position tracking.',
    highlights: [
      'Ingests 8+ tier-classified news sources, official IDX foreign-flow data, and broker summaries with deduplication and date-conflict quarantine.',
      'An immutable prediction ledger and five evaluation layers audit grounding, decision consistency, and H+5/H+20 forward outcomes without lookahead bias, including fees and slippage.',
      'ATR and structural support/resistance inform entry, stop-loss, and staged take-profit levels across multiple horizons.',
      'A Python REST API powers the JavaScript dashboard and P/L journal; systemd schedules pre-open, pre-close, and 10-minute intraday checks with Telegram alerts.',
    ],
    tech: ['Python', 'Gemini API', 'Pydantic', 'SQLite (WAL)', 'JavaScript', 'HTML/CSS', 'REST API', 'systemd'],
    proof: '5',
    proofLabel: 'evaluation layers',
    screenshot: {
      src: '/images/projects/stockpulse-ai.png',
      alt: 'StockPulse AI daily market dashboard with a market summary, news analysis counts, catalysts, and daily risks.',
      width: 1354,
      height: 651,
      kind: 'dashboard',
    },
    access: 'Public showcase',
    url: 'https://conquer5.github.io/stockpulse-ai-showcase/',
    linkLabel: 'Live showcase',
  },
  {
    id: '03',
    title: 'PersonaLab',
    subtitle: 'AI-Powered Developer Storytelling & Branding',
    description:
      'Transforms GitHub commits, code diffs, and repository READMEs into factual LinkedIn updates through a four-stage pipeline that separates writing from evidence verification.',
    highlights: [
      'Content Scout, Evidence Judge, Draft Writer, and Final Reviewer work as distinct Gemini-powered roles.',
      'Fact guards cross-check diff patches and READMEs to prevent fabricated metrics, performance claims, or business impacts.',
      'Repository-specific project memory and deterministic commit-SHA hashing reduce repetitive narratives and redundant model calls.',
      'GitHub extraction and LinkedIn REST API integration support media uploads and programmatic publishing through Next.js Server Actions.',
    ],
    tech: ['Next.js', 'TypeScript', 'Gemini API', 'GitHub API', 'LinkedIn REST API', 'Server Actions'],
    proof: '4',
    proofLabel: 'AI pipeline stages',
    screenshot: {
      src: '/images/projects/personalab.png',
      alt: 'PersonaLab content command center showing GitHub activity, analyzed projects, story opportunities, and a LinkedIn draft review.',
      width: 1354,
      height: 651,
      kind: 'dashboard',
    },
    access: 'Private repository',
  },
  {
    id: '04',
    title: 'Autonomous AI Research Radar',
    subtitle: 'Evidence-First Autonomous Research Agent',
    description:
      'An autonomous research agent that retrieves and synthesizes AI developments across arXiv, GitHub, Brave Search, and RSS, delivering evidence-grounded digests through Telegram.',
    highlights: [
      'Authenticated HTTP boundaries separate Telegram UX, Hermes agent orchestration, and tool execution for traceable research.',
      'Retrieval uses recency and velocity scoring, context-budgeted chunks, and SQLite deduplication; systemd automates digest delivery.',
      'A copy-resistant consensus engine reduces syndicated-source amplification, weighs source authority, and preserves dissenting benchmark evidence.',
      'A 32-case adversarial benchmark across seven AI domains recorded 100% grounding on that benchmark, alongside citation-coverage and contradiction-detection evaluation in QUICK and DEEP modes.',
    ],
    tech: ['Python 3.12', 'Gemini', 'Hermes Agent', 'Pydantic v2', 'SQLite', 'Asyncio', 'Tenacity', 'Telegram', 'systemd', 'Pytest'],
    proof: '32',
    proofLabel: 'adversarial test cases',
    screenshot: {
      src: '/images/projects/research-radar.png',
      alt: 'Autonomous AI Research Radar Telegram digest with an AI summary, source links, evidence ratings, and research commentary.',
      width: 628,
      height: 645,
      kind: 'telegram',
    },
    access: 'Public repository',
    url: 'https://github.com/Conquer5/Autonomous-AI-Research',
    linkLabel: 'View repository',
  },
  {
    id: '05',
    title: 'Yodata',
    subtitle: 'Content Planning & Generation Bot',
    description:
      'A Telegram bot for planning and drafting data and AI content, combining rule-based idea scoring with grounded text generation and reviewable drafts.',
    highlights: [
      'Scores quality, distribution, researchability, and client intent with seven-factor weighting to filter ideas and place them in the right funnel stage.',
      'Gemini Flash / Flash Lite routing combines automatic quota rotation, 429 handling, retries, and cache-first generation.',
      'Proof verification with SIMULATION and DEMO tags, sequence-based deduplication, and content-franchise routing keep claims and recurring content consistent.',
      'Idempotent SQLite lifecycle states are covered by 58+ offline unit and integration tests with mocked LLM behavior.',
    ],
    tech: ['Python', 'Gemini API', 'Telegram Bot', 'SQLite', 'Pytest'],
    proof: '58+',
    proofLabel: 'offline tests',
    screenshot: {
      src: '/images/projects/yodata.png',
      alt: 'Yodata Telegram bot showing an Excel automation content idea, carousel output formats, and a draft with its objective and audience.',
      width: 627,
      height: 642,
      kind: 'telegram',
    },
    access: 'Project overview',
  },
]

export const experiences = [
  {
    period: 'APR — AUG 2026',
    company: 'PT PLN (PERSERO) · PUSDIKLAT',
    role: 'Data & Automation Intern',
    statement:
      'Built a validated KPI ETL workflow and KonMan, a five-page Streamlit dashboard with PDF/Excel reporting. Added Looker Studio and Apps Script automations, a Selenium letter-entry proof of concept, and Docker, systemd, and Synology handover guides.',
    proof: ['50+ workbooks', '23 training units', '5-page dashboard'],
    meta: 'Pandas · openpyxl · SQLite · Streamlit · Looker Studio · Apps Script · Selenium · Docker',
  },
  {
    period: 'JUN — DEC 2025',
    company: 'BMKG · JUANDA METEOROLOGICAL STATION',
    role: 'Data Science Intern',
    statement:
      'Automated half-hourly data entry with a 24/7 Python pipeline. Built a 60-minute CNN–LSTM rainfall model using AWS observations and Himawari-9 imagery, outperforming GRU baselines and serving real-time outputs to forecasters through Streamlit.',
    proof: ['Estimated 80+ hrs/month saved', '95% accuracy', '0.88 F1 · significant weather', '0.790 CSI'],
    meta: 'Python · TensorFlow · CNN–LSTM · Himawari-9 · AWS observations · Streamlit',
  },

]

export const process = [
  ['01', 'Understand', 'Define the operational problem, constraints, data, stakeholders, and measurable success.'],
  ['02', 'Architect', 'Design the data flow, components, storage, model workflow, and automation strategy.'],
  ['03', 'Build', 'Develop pipelines, intelligence, interfaces, integrations, and infrastructure.'],
  ['04', 'Validate', 'Test models, workflows, outputs, data quality, and system reliability.'],
  ['05', 'Deploy', 'Automate execution, monitor behavior, document the system, and make it usable.'],
] as const

export const capabilities = [
  ['01', 'Ingest', ['Python', 'Playwright', 'Selenium', 'Web Scraping', 'Asyncio']],
  ['02', 'Process', ['Pandas', 'SQL', 'R', 'ETL/ELT', 'Airflow', 'Celery', 'RabbitMQ', 'Data Validation']],
  ['03', 'Intelligence', ['TensorFlow', 'Scikit-learn', 'NLP', 'CNN/LSTM', 'Time Series', 'Statistical Modeling', 'Gemini API', 'LangGraph', 'LangChain', 'RAG', 'LLM Agents']],
  ['04', 'Store', ['PostgreSQL', 'pgvector', 'SQLite', 'MySQL', 'SQLAlchemy']],
  ['05', 'Deliver', ['Streamlit', 'JavaScript', 'TypeScript', 'Next.js', 'Telegram', 'Power BI', 'Tableau', 'Looker Studio']],
  ['06', 'Operate', ['Docker', 'Linux', 'Git', 'GitHub Actions', 'systemd', 'Pytest', 'Backtesting']],
] as const
