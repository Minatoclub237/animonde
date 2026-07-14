import { useState } from 'react'

const REALISATIONS = [
  { src: '/media/realisations/recifal-salon.webp', label: 'Aquarium récifal salon particulier' },
  { src: '/media/realisations/eau-douce-plante.webp', label: 'Aquarium eau douce planté' },
  { src: '/media/realisations/vivier-restaurant.webp', label: 'Vivier professionnel restaurant' },
  { src: '/media/realisations/vivier-poissonnerie.webp', label: 'Vivier poissonnerie' },
  { src: '/media/realisations/avant-apres.webp', label: 'Avant / Après (diptyque)' },
  { src: '/media/realisations/technicien-intervention.webp', label: 'Technicien en intervention' },
  { src: '/media/realisations/installation-entreprise.webp', label: 'Installation sur-mesure entreprise' },
]

export default function Realisations() {
  const [activeImage, setActiveImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const switchImage = (index: number) => {
    if (index === activeImage || isTransitioning) return
    setActiveImage(index)
    setIsTransitioning(true)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  return (
    <section id="realisations" className="relative z-10 h-screen w-full overflow-hidden bg-black">
      {/* Crossfading image stack */}
      {REALISATIONS.map((item, i) => (
        <img
          key={item.src}
          src={item.src}
          alt={item.label}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === activeImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Mist overlay */}
      <img
        src="/media/mist-overlay.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover animate-[train-bob_3s_ease-in-out_infinite]"
      />

      {/* Content */}
      <div className="relative z-[2] flex h-full flex-col px-6 pb-8 pt-16 sm:px-10">
        <div className="flex-1" />

        {/* Image switcher */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {REALISATIONS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => switchImage(i)}
              className={`border-b pb-1 font-body text-sm text-white transition-all duration-700 ${
                i === activeImage
                  ? 'border-current opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-body text-xs text-white/70 sm:text-sm">
          <span>25 ans d'expérience</span>
          <span className="hidden sm:inline">|</span>
          <span>Particuliers & professionnels</span>
          <span className="hidden sm:inline">|</span>
          <span>5,0 sur Google</span>
          <span className="hidden sm:inline">|</span>
          <span>Interventions 64 & 40</span>
        </div>
      </div>
    </section>
  )
}
