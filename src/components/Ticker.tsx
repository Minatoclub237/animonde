function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function TickerGroup() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      <span>25 ans d'expérience</span>
      <Dot />
      <span>Déplacement à domicile</span>
      <Dot />
      <span>Particuliers & pros</span>
      <Dot />
      <span>Départements 64 & 40</span>
      <Dot />

      {/* Google review */}
      <span className="flex items-center gap-2 normal-case">
        <GoogleIcon />
        <span className="tracking-normal text-[#FBBC05]" aria-label="5 étoiles sur 5">
          ★★★★★
        </span>
        <span className="font-semibold">Jeremy Hennuy</span>
        <span className="text-black/50">· 5 avis · il y a 3 mois</span>
        <span>« Personne très pro »</span>
        <span className="text-black/50">· Visité en avril</span>
      </span>
      <Dot />

      {/* Address */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=1771+RD+261+64240+Urt+France"
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black"
      >
        1771 RD 261, 64240 Urt, France
      </a>
      <Dot />

      {/* CTA */}
      <a
        href="tel:+33698948492"
        className="rounded-full bg-black px-5 py-1.5 text-white transition-transform hover:scale-105"
      >
        Appelez-nous
      </a>
      <Dot />
    </div>
  )
}

function Dot() {
  return <span className="text-black/30">✦</span>
}

export default function Ticker() {
  return (
    <div className="relative z-20 w-full overflow-hidden bg-white py-3">
      <div className="marquee-track flex w-max items-center font-ticker text-xs uppercase tracking-[0.08em] text-black">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  )
}
