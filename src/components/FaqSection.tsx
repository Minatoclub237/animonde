import { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import SpotlightBorder, { spotlightMaskStyle } from './SpotlightBorder'
import FadeUp from './FadeUp'
import { MIcon } from './MIcon'

type CategoryKey = 'general' | 'entretien' | 'pros'

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'general', label: 'Général' },
  { key: 'entretien', label: 'Installation & entretien' },
  { key: 'pros', label: 'Viviers & professionnels' },
]

const faqs: Record<CategoryKey, { q: string; a: string }[]> = {
  general: [
    {
      q: "Un aquarium, c'est trop de contraintes pour moi, non ?",
      a: "C'est justement notre métier de les faire disparaître. Avec un contrat d'entretien, nous nous occupons de tout : nettoyage, analyses, réglages, santé des poissons. Vous profitez du spectacle, nous gérons le reste.",
    },
    {
      q: "Je n'y connais rien en poissons, est-ce raisonnable de me lancer ?",
      a: "Oui. Nous concevons des bacs adaptés aux débutants, choisissons avec vous des espèces robustes et vous transmettons les bons gestes au fil de nos passages. Vous n'êtes jamais seul face à votre aquarium.",
    },
    {
      q: 'Vous déplacez-vous vraiment jusque chez moi ?',
      a: "Oui, c'est le cœur de notre fonctionnement : nous intervenons à domicile et sur site professionnel, sur l'ensemble des Pyrénées-Atlantiques et des Landes, depuis notre base d'Urt (64).",
    },
    {
      q: 'Combien coûte une installation ?',
      a: "Chaque projet est différent : volume du bac, eau douce ou récifal, mobilier, espèces. Nous établissons un devis gratuit et détaillé après un premier échange — sans surprise ensuite.",
    },
    {
      q: 'Que devient mon aquarium pendant mes vacances ?',
      a: "Nous proposons des passages ponctuels : nourrissage, contrôle des paramètres et de l'équipement. Vous partez tranquille, vos poissons restent entre de bonnes mains.",
    },
  ],
  entretien: [
    {
      q: "Mon eau est trouble, mes poissons meurent — pouvez-vous récupérer la situation ?",
      a: "Oui, c'est une demande fréquente. Nous diagnostiquons le bac (analyses d'eau, filtration, population), corrigeons le déséquilibre et remettons l'écosystème sur pied. 25 ans de bacs difficiles, ça forge l'expérience.",
    },
    {
      q: 'À quelle fréquence un aquarium doit-il être entretenu ?',
      a: "Cela dépend du volume, de la population et de la technique. Selon les cas, nous recommandons un passage hebdomadaire, bimensuel ou mensuel — le rythme est défini ensemble dans votre contrat d'entretien.",
    },
    {
      q: "Un récifal sans expérience, c'est possible ?",
      a: "Avec un suivi professionnel, oui. Nous dimensionnons la technique (brassage, éclairage, écumage), introduisons les coraux progressivement et assurons la maintenance. Vous obtenez un récif vivant sans les années d'erreurs.",
    },
    {
      q: "Un aquarium, ça consomme beaucoup d'électricité ?",
      a: "Beaucoup moins qu'avant : éclairage LED, pompes basse consommation et dimensionnement juste de la technique. Nous optimisons chaque installation pour limiter la facture sans compromettre l'équilibre du bac.",
    },
    {
      q: "Reprenez-vous un aquarium installé par quelqu'un d'autre ?",
      a: "Bien sûr. Nous auditons l'existant, corrigeons ce qui doit l'être et reprenons le suivi — nos remises en état avant/après parlent d'elles-mêmes.",
    },
  ],
  pros: [
    {
      q: 'Installez-vous des viviers pour restaurants et poissonneries ?',
      a: "Oui, c'est l'une de nos spécialités : conception, installation et suivi de viviers pour les métiers de bouche — crustacés, coquillages, poissons — avec une filtration et une réfrigération adaptées aux produits vivants.",
    },
    {
      q: 'Que se passe-t-il si mon vivier tombe en panne un samedi ?',
      a: "Un vivier en panne, c'est de la marchandise vivante en jeu. Nous assurons le dépannage de nos installations avec une intervention la plus rapide possible — appelez-nous, nous faisons le nécessaire.",
    },
    {
      q: 'Un vivier est-il vraiment rentable pour mon commerce ?',
      a: "Un vivier bien entretenu réduit les pertes de marchandise, garantit une fraîcheur visible et attire l'œil du client. C'est un outil de travail qui se rentabilise — à condition d'être correctement dimensionné et suivi.",
    },
    {
      q: "Pouvez-vous intervenir en dehors de mes heures d'ouverture ?",
      a: "Oui. Nous connaissons les contraintes des commerces de bouche et planifions nos interventions tôt le matin ou pendant vos fermetures, pour ne jamais gêner votre activité.",
    },
    {
      q: "L'eau de mon vivier doit répondre à des exigences sanitaires — comment m'assurez-vous ça ?",
      a: "Nous contrôlons la qualité de l'eau à chaque passage (température, salinité, oxygénation, filtration) et tenons votre installation dans un état irréprochable, compatible avec les exigences de votre métier.",
    },
  ],
}

export default function FaqSection() {
  const [active, setActive] = useState<CategoryKey>('general')
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  // Per-card spotlight: write --spot-x/--spot-y on each accordion item
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      for (const el of itemRefs.current) {
        if (!el) continue
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
        el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [active])

  return (
    <section id="faq" className="relative z-10 w-full bg-background py-12 font-body sm:py-16">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-landing-surface px-3 py-1 text-xs text-foreground/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                FAQ
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-heading italic text-3xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground sm:text-4xl">
                Les réponses aux questions
                <br className="hidden sm:block" /> qu'on nous pose le plus.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm text-foreground/60 sm:text-base">
              Installation, entretien, viviers professionnels : voici ce qu'il
              faut savoir avant de nous confier votre projet.
            </p>
          </FadeUp>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Left column */}
          <div className="flex flex-col gap-4 lg:h-full">
            <div className="lg:flex-1">
              <SpotlightBorder radius="2xl" size={280} className="flex flex-col p-2 sm:p-3 lg:sticky lg:top-24">
                {categories.map((cat) => (
                  <SpotlightBorder
                    key={cat.key}
                    as="button"
                    radius="full"
                    size={200}
                    intensity={0.4}
                    onClick={() => setActive(cat.key)}
                    className={`w-full px-5 py-3 text-center text-sm transition-colors ${
                      active === cat.key
                        ? 'border border-white/10 bg-landing-surface text-foreground'
                        : 'border border-transparent text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </SpotlightBorder>
                ))}
              </SpotlightBorder>
            </div>

            {/* Contact card */}
            <SpotlightBorder radius="2xl" size={360} className="mt-8 p-2 sm:p-3 lg:mt-0">
              <SpotlightBorder
                radius="2xl"
                size={260}
                intensity={0.4}
                className="border border-white/10 bg-landing-surface p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">Une autre question ?</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  Besoin d'un conseil pour votre projet ? Nous sommes là pour
                  vous simplifier la vie. N'hésitez pas à nous écrire.
                </p>
                <a
                  href="mailto:contact@animonde.fr"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-foreground hover:text-foreground/80"
                >
                  Écrivez-nous <span aria-hidden>→</span>
                </a>
              </SpotlightBorder>
            </SpotlightBorder>
          </div>

          {/* Right column — accordion */}
          <SpotlightBorder radius="2xl" size={360} className="p-2 sm:p-3">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs[active].map((faq, idx) => (
                <FadeUp key={`${active}-${idx}`} delay={0.15 * idx}>
                  <AccordionItem
                    value={`${active}-${idx}`}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    className="relative rounded-2xl border border-white/10 bg-landing-surface px-6 [&[data-state=open]]:bg-landing-surface-hover"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-2xl"
                      style={spotlightMaskStyle(260, 0.4)}
                    />
                    <AccordionTrigger className="py-7 text-left text-sm font-medium text-foreground hover:no-underline sm:text-base [&>svg]:hidden">
                      <span className="flex-1 pr-4">{faq.q}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-foreground/70 transition-transform duration-200 group-data-[state=open]:rotate-180">
                        <MIcon name="expand_more" size={16} />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-7 text-sm leading-relaxed text-foreground/60">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </FadeUp>
              ))}
            </Accordion>
          </SpotlightBorder>
        </div>
      </div>
    </section>
  )
}
