import FeatureItem from './FeatureItem'
import OutlineButton from './OutlineButton'
import type { FeaturesSectionProps } from '../types'

function FeaturesSection({ title, items, buttonLabel, buttonHref }: FeaturesSectionProps) {
  return (
    <section className="features-section" id="diferenciais" aria-labelledby="features-section-title">
      <h2 id="features-section-title">{title}</h2>

      <ul className="features-grid">
        {items.map((item) => (
          <FeatureItem key={item.label} {...item} />
        ))}
      </ul>

      <OutlineButton className="features-button" href={buttonHref}>
        {buttonLabel}
      </OutlineButton>
    </section>
  )
}

export default FeaturesSection
