import WhatsAppButton from './WhatsAppButton'
import OutlineButton from './OutlineButton'
import HeroBadge from './HeroBadge'
import type { HeroProps } from '../types'

function Hero({ title, description, whatsappHref, moreHref, imageSrc, imageAlt, highlights }: HeroProps) {
  return (
    <section className="hero-section" aria-label="Apresentação da escola">
      <div className="hero-copy">
        <h1>{title}</h1>
        <p className="hero-description">{description}</p>

        <div className="hero-actions">
          <WhatsAppButton href={whatsappHref}>Falar no WhatsApp</WhatsAppButton>
          <OutlineButton href={moreHref}>Saiba mais</OutlineButton>
        </div>

        <ul className="hero-badges" aria-label="Diferenciais da escola">
          {highlights.map((highlight) => (
            <HeroBadge key={highlight.label} {...highlight} />
          ))}
        </ul>
      </div>

      <div className="hero-visual">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </section>
  )
}

export default Hero
