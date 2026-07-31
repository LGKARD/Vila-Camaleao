import type { HeroHighlight } from '../types'

type HeroBadgeProps = HeroHighlight

function HeroBadge({ iconClassName, label }: HeroBadgeProps) {
  return (
    <li className="hero-badge">
      <span aria-hidden="true" className="hero-badge-icon">
        <i className={iconClassName} />
      </span>
      {label}
    </li>
  )
}

export default HeroBadge
