import { useState } from 'react'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import FadeUp from './FadeUp'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=1771+RD+261+64240+Urt+France'
const PHONE_DISPLAY = '06 98 94 84 92'
const PHONE_TEL = 'tel:+33698948492'

const HOURS = [
  { day: 'Lundi — Samedi', time: '09:00 – 19:00' },
  { day: 'Dimanche', time: 'Fermé' },
]

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function Contact() {
  const [profil, setProfil] = useState<'Particulier' | 'Professionnel'>('Particulier')
  const [nom, setNom] = useState('')
  const [coord, setCoord] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Demande ${profil.toLowerCase()} — ${nom}`)
    const body = encodeURIComponent(`Nom : ${nom}\nContact : ${coord}\nProfil : ${profil}\n\n${message}`)
    window.location.href = `mailto:contact@animonde.fr?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative z-10 min-h-screen w-full overflow-hidden bg-black">
      {/* Background photo — full opacity */}
      <img
        src="/media/geant-aquarium.webp"
        alt="Aquarium géant Animonde"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left — pitch + coordonnées */}
          <div>
            <FadeUp>
              <p className="mb-6 font-body text-sm text-white/80">// Contact</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading italic text-5xl leading-[0.95] tracking-[-2px] text-white sm:text-6xl lg:text-7xl">
                Votre projet
                <br />
                commence ici.
              </h2>
            </FadeUp>

            {/* Note Google */}
            <FadeUp delay={0.2}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass mt-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-body text-sm text-white transition-transform hover:scale-[1.03]"
              >
                <GoogleIcon />
                <span className="font-semibold">5,0</span>
                <span className="tracking-tight text-[#FBBC05]">★★★★★</span>
                <span className="text-white/60">Avis Google</span>
              </a>
            </FadeUp>

            {/* Téléphone en très grand */}
            <FadeUp delay={0.3}>
              <a
                href={PHONE_TEL}
                className="group mt-10 block font-ticker text-2xl text-white transition-colors hover:text-white/80 sm:text-4xl lg:text-5xl"
              >
                {PHONE_DISPLAY}
                <span className="mt-2 block font-body text-sm font-light normal-case tracking-normal text-white/60 transition-colors group-hover:text-white/80">
                  <Phone className="mr-1.5 inline" size={13} />
                  Appelez-nous — réponse rapide, conseil gratuit
                </span>
              </a>
            </FadeUp>

            {/* Adresse + horaires */}
            <FadeUp delay={0.4}>
              <div className="mt-10 flex flex-col gap-6 font-body sm:flex-row sm:gap-12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Le magasin</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm leading-relaxed text-white hover:text-white/80"
                  >
                    1771 RD 261
                    <br />
                    64240 Urt, France
                    <span className="mt-1.5 flex items-center gap-1 text-white/60 underline decoration-white/30 underline-offset-4">
                      <MapPin size={12} /> Itinéraire <ArrowRight size={12} />
                    </span>
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">Horaires</p>
                  <div className="mt-2 space-y-1 text-sm text-white">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex gap-4">
                        <span className="w-32 text-white/60">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    Livraison 09:00 – 19:00 · Accès 09:00 – 17:00
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — formulaire, même langage que les cartes de la section services */}
          <FadeUp delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="liquid-glass flex flex-col rounded-[1.25rem] p-6"
            >
              {/* Top row : icône + toggle profil, comme icône + tags des cartes */}
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.75rem] text-white">
                  <Phone size={18} />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {(['Particulier', 'Professionnel'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setProfil(p)}
                      className={`whitespace-nowrap rounded-full px-3 py-1 font-body text-[11px] transition-colors ${
                        profil === p
                          ? 'bg-white text-black'
                          : 'liquid-glass text-white/90 hover:text-white'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="mt-8 font-heading italic text-3xl leading-none tracking-[-1px] text-white md:text-4xl">
                Demandez votre devis gratuit
              </h3>
              <p className="mt-3 font-body text-sm font-light leading-snug text-white/90">
                Décrivez votre projet — nous vous rappelons sous 24 h ouvrées.
              </p>

              <div className="mt-8 space-y-7 font-body">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Votre nom</span>
                  <input
                    type="text"
                    required
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Jean Dupont"
                    className="mt-2 w-full border-b border-white/25 bg-transparent pb-2.5 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Téléphone ou email</span>
                  <input
                    type="text"
                    required
                    value={coord}
                    onChange={(e) => setCoord(e.target.value)}
                    placeholder="06 12 34 56 78"
                    className="mt-2 w-full border-b border-white/25 bg-transparent pb-2.5 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Votre projet</span>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Aquarium récifal 400 L dans mon salon, vivier pour mon restaurant…"
                    className="mt-2 w-full resize-none border-b border-white/25 bg-transparent pb-2.5 text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-body text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              >
                Envoyer ma demande
                <ArrowRight size={16} />
              </button>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
