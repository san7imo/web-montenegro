import { useState } from 'react'
import { Container } from '../../../components/ui/Container'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { ecoGalleryContent } from '../../../data/eco'
import { ecoMedia, type EcoGalleryCategory } from '../../../data/ecoMedia'

export function EcoGallery() {
  const [selectedCategory, setSelectedCategory] = useState<EcoGalleryCategory | null>(null)
  const selectedItems = ecoMedia.filter((item) => item.category === selectedCategory)

  return (
    <section id="resultados" className="scroll-mt-20 bg-cream py-14 text-forest sm:py-18 lg:py-20">
      <Container className="!max-w-[72rem]">
        <div className="text-center">
          <SectionLabel variant="pink">{ecoGalleryContent.label}</SectionLabel>
          <SectionTitle as="h2" className="mt-4 text-forest">{ecoGalleryContent.title}</SectionTitle>
          <p className="type-body mx-auto mt-3 max-w-3xl">{ecoGalleryContent.description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ecoGalleryContent.items.map((category) => {
            const cover = ecoMedia.find((item) => item.category === category.id)
            const selected = selectedCategory === category.id
            return (
              <button
                key={category.id}
                type="button"
                aria-expanded={selected}
                aria-controls="eco-gallery-media"
                onClick={() => setSelectedCategory(selected ? null : category.id)}
                className="group rounded-[1.35rem] text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
              >
                <img
                  src={cover?.poster ?? cover?.src}
                  alt=""
                  loading="lazy"
                  className={`h-72 w-full rounded-[1.35rem] object-cover shadow-lg transition-transform group-hover:-translate-y-1 ${selected ? 'ring-4 ring-pink' : ''}`}
                />
                <h3 className={`type-body-sm mt-5 font-bold ${selected ? 'text-pink' : 'text-forest-soft'}`}>{category.title}</h3>
              </button>
            )
          })}
        </div>
        <div id="eco-gallery-media" hidden={!selectedCategory} className="mt-10 border-t border-pink/25 pt-8">
          {selectedCategory ? (
            <>
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="type-card-title text-forest">Galería de {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h3>
                <button type="button" onClick={() => setSelectedCategory(null)} className="rounded-full border border-pink px-4 py-2 font-semibold text-pink">Cerrar galería</button>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {selectedItems.map((item) => (
                  <figure key={item.id} className="overflow-hidden rounded-2xl bg-forest-dark">
                    {item.kind === 'video' ? (
                      <video controls playsInline preload="none" poster={item.poster} aria-label={item.title} className="h-80 w-full object-contain">
                        <source src={item.src} type="video/mp4" />
                        Tu navegador no permite reproducir este video.
                      </video>
                    ) : (
                      <img src={item.src} alt={item.title} loading="lazy" className="h-80 w-full object-contain" />
                    )}
                    <figcaption className="type-body-sm px-4 py-3 text-cream">{item.title.replace(/\s*\(1\)$|\s+\d+$/g, '')}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
