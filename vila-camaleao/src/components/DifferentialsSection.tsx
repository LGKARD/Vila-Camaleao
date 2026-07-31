import DifferentialCard from './DifferentialCard'
import type { DifferentialsSectionProps } from '../types'

function DifferentialsSection({ items }: DifferentialsSectionProps) {
  return (
    <section className="differentials-section" aria-labelledby="differentials-title">
      <h2 id="differentials-title" className="sr-only">
        Educação com amor, aprendizado significativo e formação para a vida
      </h2>

      <div className="differentials-grid">
        {items.map((item) => (
          <DifferentialCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}

export default DifferentialsSection
