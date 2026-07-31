import WhatsAppButton from './WhatsAppButton'
import type { CtaSectionProps } from '../types'

function CtaSection({ logoSrc, logoAlt, title, description, whatsappHref, whatsappLabel }: CtaSectionProps) {
  return (
    <section className="cta-section" aria-labelledby="cta-section-title">
      <div className="cta-content">
        <img className="cta-illustration" src={logoSrc} alt={logoAlt} />

        <div className="cta-copy">
          <h2 id="cta-section-title">{title}</h2>
          <p className="cta-description">{description}</p>
        </div>
      </div>

      <WhatsAppButton href={whatsappHref}>{whatsappLabel}</WhatsAppButton>
    </section>
  )
}

export default CtaSection
