import OutlineButton from './OutlineButton'
import type { AboutSectionProps } from '../types'

function AboutSection({ kicker, title, description, buttonLabel, buttonHref, imageSrc, imageAlt }: AboutSectionProps) {
  return (
    <section className="about-section" id="escola" aria-labelledby="about-section-title">
      <div className="about-copy">
        <p className="about-kicker">{kicker}</p>
        <h2 id="about-section-title">{title}</h2>
        <p className="about-description">{description}</p>
        <OutlineButton href={buttonHref}>{buttonLabel}</OutlineButton>
      </div>

      <div className="about-visual">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  )
}

export default AboutSection
