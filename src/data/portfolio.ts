export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  proof: string
  proofLabel: string
  visual: 'agent' | 'market' | 'pipeline' | 'weather' | 'rag' | 'distributed'
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: '01',
    title: 'AI Career Agent',
    subtitle: 'Human-in-the-Loop Job Application Assistant',
    description:
      'A modular assistant that collects, evaluates, and tracks vacancies across six recruitment platforms—with fit scoring, skill-gap analysis, browser dry-runs, and a deliberate approval gate before any application action.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Gemini', 'Playwright', 'SQLAlchemy', 'SQLite', 'Pytest'],
    proof: '143',
    proofLabel: 'passing tests',
    visual: 'agent',
    featured: true,
  },
  {
    id: '02',
    title: 'StockPulse IDX',
    subtitle: 'Indonesian Stock Market Analysis System',
    description:
      'A daily research, data, decision, and review workflow that turns five years of market history and multi-source news into transparent recommendations, evaluation logs, web views, and Telegram briefs.',
    tech: ['Python', 'Gemini API', 'yfinance', 'BeautifulSoup', 'SQLite', 'Telegram Bot API'],
    proof: '5+ YRS',
    proofLabel: 'OHLCV history',
    visual: 'market',
    featured: true,
  },
  {
    id: '03',
    title: 'KonMan',
    subtitle: 'Enterprise Training Performance Monitoring',
    description:
      'An operational ETL and five-page monitoring system built at PLN Pusdiklat. It synchronizes, validates, and consolidates 50+ Excel workbooks into decision-ready reporting for training units nationwide.',
    tech: ['Python', 'Pandas', 'openpyxl', 'SQLite', 'Streamlit', 'rclone'],
    proof: '23',
    proofLabel: 'training units',
    visual: 'pipeline',
  },
  {
    id: '04',
    title: 'Rainfall Nowcasting',
    subtitle: 'Deep Learning for Short-Term Rainfall Prediction',
    description:
      'A 60-minute CNN–LSTM nowcasting system combining AWS observations and Himawari-9 imagery, supported by a 24/7 ingestion workflow and a real-time operational dashboard for BMKG forecasters.',
    tech: ['Python', 'TensorFlow', 'CNN–LSTM', 'Himawari-9', 'Streamlit'],
    proof: '0.88 F1',
    proofLabel: 'significant weather',
    visual: 'weather',
  },
  {
    id: '05',
    title: 'EnergyPulseAI',
    subtitle: 'RAG-Based Energy Market Intelligence',
    description:
      'An Airflow-orchestrated intelligence pipeline that ingests energy-sector news, builds vector knowledge, and enables semantic question answering through local LLM reasoning and Telegram.',
    tech: ['Airflow', 'LangGraph', 'Ollama', 'PostgreSQL', 'pgvector', 'Telegram'],
    proof: 'RAG',
    proofLabel: 'local intelligence',
    visual: 'rag',
  },
  {
    id: '06',
    title: 'Distributed ETL',
    subtitle: 'News Classification Research System',
    description:
      'A distributed pipeline that decouples news ingestion from asynchronous clickbait and topic classification—recognized as a SENADA 2025 finalist and co-authored publication.',
    tech: ['Python', 'Celery', 'RabbitMQ', 'TF–IDF', 'Random Forest', 'Scikit-learn'],
    proof: 'FINALIST',
    proofLabel: 'SENADA 2025',
    visual: 'distributed',
  },
]

export const experiences = [
  {
    period: 'APR — AUG 2026',
    company: 'PT PLN (PERSERO) · PUSDIKLAT',
    role: 'Data & Automation Intern',
    statement:
      'Engineered the path from fragmented operational files to reliable reporting: synchronization, ETL, validation, monitoring, automation, and maintainable handover.',
    proof: ['50+ workbooks', '23 training units', '5-page dashboard'],
    meta: 'Pandas · SQLite · Streamlit · Apps Script · Selenium · Docker · Linux',
  },
  {
    period: 'JUN — DEC 2025',
    company: 'BMKG · JUANDA METEOROLOGICAL STATION',
    role: 'Data Science Intern',
    statement:
      'Replaced repetitive half-hourly data entry with a 24/7 ingestion workflow, then developed and operationalized a deep-learning rainfall nowcasting system.',
    proof: ['80+ hrs/month automated', '95% accuracy', '0.88 F1-score'],
    meta: 'Python · TensorFlow · CNN–LSTM · Himawari-9 · AWS observations · Streamlit',
  },
  {
    period: 'OCT 2024 — PRESENT',
    company: 'YODATA',
    role: 'Founder & Freelance Data Consultant',
    statement:
      'Turned ambiguous research and small-business questions into useful models, analyses, cleaned datasets, and dashboards across a wide range of domains.',
    proof: ['40+ completed projects', 'ML & NLP', 'Research analytics'],
    meta: 'Python · R · SPSS · EViews · BERT · Random Forest · BI dashboards',
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
  ['01', 'Ingest', ['Python', 'Playwright', 'Selenium', 'BeautifulSoup']],
  ['02', 'Process', ['Pandas', 'SQL', 'Airflow', 'Celery', 'RabbitMQ']],
  ['03', 'Intelligence', ['TensorFlow', 'Scikit-learn', 'LangGraph', 'LangChain', 'RAG', 'LLM Agents']],
  ['04', 'Store', ['PostgreSQL', 'pgvector', 'SQLite', 'MySQL']],
  ['05', 'Deliver', ['Streamlit', 'Web Interfaces', 'Telegram', 'Power BI', 'Tableau', 'Looker Studio']],
  ['06', 'Operate', ['Docker', 'Linux', 'Git', 'GitHub Actions', 'systemd']],
] as const
