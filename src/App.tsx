import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Services from './components/Services'
import Ticker from './components/Ticker'
import Realisations from './components/Realisations'
import FaqSection from './components/FaqSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_LINKS = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Prestations', href: '#realisations' },
  { label: 'FAQ', href: '#faq' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-black">
      <section className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover [object-position:70%_center]"
        src="/media/hero.mp4"
      />

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5" aria-label="Animonde — retour à l'accueil">
            <img
              src="/media/logo-drop.webp"
              alt=""
              className="h-9 w-auto drop-shadow-[0_0_14px_rgba(45,212,191,0.35)] sm:h-10"
            />
            <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              Animonde
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block"
        >
          Contactez-nous
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white active:scale-90 md:hidden"
        >
          <Menu
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileMenuOpen ? 'h-screen opacity-100' : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center gap-7 px-8 transition-all delay-100 duration-500 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
          >
            Contactez-nous
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs text-white/90 animate-[fadeSlideUp_0.8s_ease_0.2s_both] sm:mb-6 sm:text-sm">
            À domicile sur les Pyrénées-Atlantiques et les Landes
          </p>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-white animate-[fadeSlideUp_0.8s_ease_0.4s_both] sm:text-5xl md:text-6xl lg:text-7xl">
            Installation et entretien
            <br />
            des aquariums
          </h1>
        </div>

        <div>
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 animate-[fadeSlideUp_0.8s_ease_0.7s_both] sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Aquariophilie & viviers — 25 ans d'expertise à Urt (64)
          </p>
          <a
            href="#realisations"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform animate-[fadeSlideUp_0.8s_ease_0.9s_both] hover:scale-105 sm:px-6 sm:py-3"
          >
            Découvrir nos prestations
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      </section>

      {/* Nos services reste épinglée pendant que Réalisations la recouvre,
          puis les deux défilent normalement — la FAQ n'est jamais superposée */}
      <div className="relative">
        <Services />
        <Realisations />
      </div>

      <Ticker />

      <FaqSection />

      <Contact />

      <Footer />
    </main>
  )
}
