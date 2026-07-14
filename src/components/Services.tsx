import FadingVideo from './FadingVideo'
import BlurText from './BlurText'

function TankIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z" />
    </svg>
  )
}

function RenewIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" />
    </svg>
  )
}

function FishIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M22 12c-2-3.5-5.5-6-10-6-1.7 0-3.3.4-4.7 1.1L2 4v16l5.3-3.1c1.4.7 3 1.1 4.7 1.1 4.5 0 8-2.5 10-6zm-5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
      />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  )
}

const SERVICES = [
  {
    title: "Installation d'aquariums",
    icon: <TankIcon />,
    tags: ['Conception', 'Mise en eau', 'Aménagement'],
    body: "Conception, mise en eau et aménagement complet : un bac équilibré dès le premier jour, pensé pour votre intérieur.",
  },
  {
    title: 'Entretien & maintenance',
    icon: <RenewIcon />,
    tags: ['Visites régulières', "Analyses d'eau", 'Nettoyage'],
    body: "Des passages réguliers pour une eau saine, des poissons en pleine forme et un bac impeccable, toute l'année.",
  },
  {
    title: 'Viviers',
    icon: <FishIcon />,
    tags: ['Installation', 'Suivi', 'Métiers de bouche'],
    body: 'Installation et suivi de viviers pour restaurants, poissonneries et professionnels des produits de la mer.',
  },
  {
    title: 'À domicile & sur site',
    icon: <HomeIcon />,
    tags: ['Particuliers', 'Professionnels', '64 & 40'],
    body: 'Nous intervenons chez les particuliers comme en établissement professionnel, sur les Pyrénées-Atlantiques et les Landes.',
  },
]

export default function Services() {
  return (
    <section id="services" className="sticky top-0 min-h-screen overflow-hidden bg-black">
      <FadingVideo
        src="/media/fish-reef.mp4"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-8 pb-10 pt-24 md:px-16 lg:px-20">
        <div className="mb-auto">
          <p className="mb-6 font-body text-sm text-white/80">// Nos services</p>
          <h2 className="font-heading italic text-6xl leading-[0.9] tracking-[-3px] text-white md:text-7xl lg:text-[6rem]">
            <BlurText text="De l'installation" style={{ justifyContent: 'flex-start' }} />
            <BlurText text="au suivi" style={{ justifyContent: 'flex-start' }} />
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="liquid-glass flex flex-col rounded-[1.25rem] p-6 md:min-h-[320px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.75rem] text-white">
                  {service.icon}
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass whitespace-nowrap rounded-full px-3 py-1 font-body text-[11px] text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-7 md:h-auto md:flex-1" />

              <div>
                <h3 className="font-heading italic text-3xl leading-none tracking-[-1px] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-[32ch] font-body text-sm font-light leading-snug text-white/90">
                  {service.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
