import type { FeatureItemProps } from '../types'

function FeatureItem({ iconClassName, label, accentClassName }: FeatureItemProps) {
  return (
    <li className="feature-item">
      <span aria-hidden="true" className={`feature-item-icon ${accentClassName}`}>
        <i className={iconClassName} />
      </span>
      <span className="feature-item-label">{label}</span>
    </li>
  )
}

export default FeatureItem
