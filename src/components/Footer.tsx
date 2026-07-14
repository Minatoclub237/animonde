const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=1771+RD+261+64240+Urt+France'

const NAV = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Prestations', href: '#realisations' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const LEGAL = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Politique de confidentialité', href: '#' },
  { label: 'CGV', href: '#' },
  { label: 'Gestion des cookies', href: '#' },
]

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.5-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black font-body">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 lg:px-16">
        {/* Ligne principale : marque + nav + réseaux */}
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="Animonde — retour à l'accueil">
            <img
              src="/media/logo-drop.webp"
              alt=""
              className="h-12 w-auto drop-shadow-[0_0_16px_rgba(45,212,191,0.3)]"
            />
            <span>
              <span className="block font-heading italic text-2xl leading-none text-white">Animonde</span>
              <span className="mt-1 block text-xs font-light text-white/50">
                Magasin d'aquariophilie à Urt — aquariums & viviers, particuliers & professionnels
              </span>
            </span>
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Animonde sur Facebook"
              className="liquid-glass flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform hover:scale-110"
            >
              <FacebookIcon />
            </a>
          </nav>
        </div>

        {/* Coordonnées + horaires sur une ligne */}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-white/10 pt-5 text-xs text-white/60">
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
            1771 RD 261, 64240 Urt, France
          </a>
          <span className="text-white/20">·</span>
          <a href="tel:+33698948492" className="transition-colors hover:text-white">
            06 98 94 84 92
          </a>
          <span className="text-white/20">·</span>
          <a href="mailto:contact@animonde.fr" className="transition-colors hover:text-white">
            contact@animonde.fr
          </a>
          <span className="text-white/20">·</span>
          <span>Lun – Sam : 09:00 – 19:00</span>
          <span className="text-white/20">·</span>
          <span>Dim : fermé</span>
          <span className="text-white/20">·</span>
          <span>Livraison 09:00 – 19:00 · Accès 09:00 – 17:00</span>
        </div>

        {/* Barre légale */}
        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Animonde — Tous droits réservés · 25 ans d'expertise aquariophile</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {LEGAL.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white/80">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
