import type { DifferentialCardProps } from '../types'

function DifferentialCard({ iconClassName, title, description }: DifferentialCardProps) {
  return (
    <article className="differential-card">
      <span aria-hidden="true" className="differential-card-icon">
        <i className={iconClassName} />
      </span>
      <h3 className="differential-card-title">{title}</h3>
      <p className="differential-card-description">{description}</p>
    </article>
  )
}

export default DifferentialCard
