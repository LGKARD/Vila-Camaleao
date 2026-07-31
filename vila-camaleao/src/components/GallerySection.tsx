import type { GallerySectionProps } from '../types'

function GallerySection({ eyebrow, title, images }: GallerySectionProps) {
  return (
    <section className="gallery-section" id="galeria" aria-labelledby="gallery-section-title">
      <div className="gallery-heading">
        <p className="gallery-kicker">{eyebrow}</p>
        <h2 id="gallery-section-title">{title}</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <figure className="gallery-item" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GallerySection
