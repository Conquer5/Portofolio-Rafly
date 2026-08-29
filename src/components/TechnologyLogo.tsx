import type { IconType } from 'react-icons'
import {
  SiApacheairflow,
  SiCelery,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLangchain,
  SiLinux,
  SiLooker,
  SiMysql,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiScikitlearn,
  SiSelenium,
  SiSqlite,
  SiStreamlit,
  SiTelegram,
  SiTensorflow,
} from 'react-icons/si'
import {
  FaBrain,
  FaChartColumn,
  FaCode,
  FaDatabase,
  FaGear,
  FaGlobe,
  FaLaptopCode,
  FaMagnifyingGlass,
  FaRobot,
  FaVectorSquare,
} from 'react-icons/fa6'

type LogoDefinition = {
  icon: IconType
  color: string
}

const logos: Record<string, LogoDefinition> = {
  Python: { icon: SiPython, color: '#3776AB' },
  Playwright: { icon: FaLaptopCode, color: '#2EAD33' },
  Selenium: { icon: SiSelenium, color: '#43B02A' },
  BeautifulSoup: { icon: FaCode, color: '#8A3FFC' },
  Pandas: { icon: SiPandas, color: '#150458' },
  SQL: { icon: FaDatabase, color: '#336791' },
  Airflow: { icon: SiApacheairflow, color: '#017CEE' },
  Celery: { icon: SiCelery, color: '#37814A' },
  RabbitMQ: { icon: SiRabbitmq, color: '#FF6600' },
  TensorFlow: { icon: SiTensorflow, color: '#FF6F00' },
  'Scikit-learn': { icon: SiScikitlearn, color: '#F7931E' },
  LangGraph: { icon: SiLangchain, color: '#1C3C3C' },
  LangChain: { icon: SiLangchain, color: '#1C3C3C' },
  RAG: { icon: FaMagnifyingGlass, color: '#C81925' },
  'LLM Agents': { icon: FaRobot, color: '#7257D8' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1' },
  pgvector: { icon: FaVectorSquare, color: '#336791' },
  SQLite: { icon: SiSqlite, color: '#003B57' },
  MySQL: { icon: SiMysql, color: '#4479A1' },
  Streamlit: { icon: SiStreamlit, color: '#FF4B4B' },
  'Web Interfaces': { icon: FaGlobe, color: '#1683C4' },
  Telegram: { icon: SiTelegram, color: '#26A5E4' },
  'Power BI': { icon: FaChartColumn, color: '#C79A00' },
  Tableau: { icon: FaChartColumn, color: '#E97627' },
  'Looker Studio': { icon: SiLooker, color: '#4285F4' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Linux: { icon: SiLinux, color: '#1D1D1B' },
  Git: { icon: SiGit, color: '#F05032' },
  'GitHub Actions': { icon: SiGithubactions, color: '#2088FF' },
  systemd: { icon: FaGear, color: '#4F5D73' },
}

const fallback: LogoDefinition = { icon: FaBrain, color: '#C81925' }

export function TechnologyLogo({ name }: { name: string }) {
  const definition = logos[name] ?? fallback
  const Icon = definition.icon

  return (
    <span className="technology-logo" style={{ '--logo-color': definition.color } as React.CSSProperties} aria-hidden="true">
      <Icon />
    </span>
  )
}
