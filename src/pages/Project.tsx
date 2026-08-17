import PortraitProject from './PortraitProject'
import BransonProject from './BransonProject'
import CoeGreenProject from './CoeGreenProject'
import EssentiaProject from './EssentiaProject'
import PerfumeEventsProject from './PerfumeEventsProject'
import LandscapeProject from './LandscapeProject'
import AstaProject from './AstaProject'
import ZamoraProject from './ZamoraProject'
import PodcastProject from './PodcastProject'
import hw1 from '@/imports/Holiday_World_1.jpg'
import hw2 from '@/imports/Holiday_World_2.jpg'
import hw3 from '@/imports/Holiday_World_3.jpg'
import hw4 from '@/imports/Holiday_World_4.jpg'
import hw6 from '@/imports/Holiday_World_6.jpg'
import hwRed from '@/imports/Holiday_World_Hatch_Red.jpg'
import hwLH from '@/imports/Holiday_World_LH.jpg'

interface ProjectProps {
  navigate: (page: string) => void
  projectId: string
}

function HolidayWorldProject({ navigate }: { navigate: (page: string) => void }) {
  const shirts = [
    { src: hw1, title: 'Holiday World — Sunshine', bg: '#6a85a7', desc: 'Circular stained-glass scene: rolling hills, sunflowers, sun rays, clouds.' },
    { src: hw2, title: 'Holiday World — Poppy', bg: '#8b3a7a', desc: 'Arched wordmark over a botanical arrangement of red poppies with teal accents.' },
    { src: hw3, title: 'Ghastly Games — Bocce Ball', bg: '#6b4d9b', desc: 'Halloween-themed event tee for the Waynesville Fall Festival bocce tournament.' },
    { src: hw4, title: '40 Mile Point Lighthouse — White', bg: '#c4a882', desc: 'Line-art illustration on white — pen-and-ink architectural rendering with banner type.' },
    { src: hwRed, title: 'Hatch New Mexico — Coral', bg: '#7a6a6a', desc: 'Zia sun symbol identity on a coral ground. Est. 1875 detail below.' },
    { src: hw6, title: 'Hatch New Mexico — White', bg: '#b5928a', desc: 'Same Zia symbol identity printed in black on white for a clean colourway.' },
    { src: hwLH, title: '40 Mile Point Lighthouse — Lake Blue', bg: '#c4b8b0', desc: 'The lighthouse rendering on a sky-blue ground — a second colourway of the series.' },
  ]

  return (
    <article className="page-enter">
      {/* Hero — full screen, two shirts side by side */}
      <div
        className="relative w-full overflow-hidden flex"
        style={{ height: '100vh', backgroundColor: '#1a1410' }}
      >
        <div className="w-1/2 h-full" style={{ backgroundColor: '#6a85a7' }}>
          <img
            src={hw1}
            alt="Holiday World — Sunshine tee on blue background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full" style={{ backgroundColor: '#8b3a7a' }}>
          <img
            src={hw2}
            alt="Holiday World — Poppy tee on purple background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16">
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-white/60 text-xs tracking-[0.2em] uppercase mb-12 hover:text-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Apparel Design · Objects · 2025
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            Holiday World<br /><em>Apparel Collection</em>
          </h1>
        </div>
      </div>

      {/* Project overview */}
      <section className="py-28 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Project Overview
            </p>
            <div className="space-y-6">
              {[
                ['Client', 'Holiday World & Various'],
                ['Scope', 'Apparel Graphic Design, T-Shirt Illustration'],
                ['Colourways', '7 designs across 3 collections'],
                ['Year', '2025'],
                ['Techniques', 'Vector illustration, screenprint-ready artwork'],
              ].map(([label, value]) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Graphics that live on the body — and stay on the mind.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The Holiday World apparel collection spans three distinct design identities: a retro-botanical landscape series, a place-specific heritage series for Hatch, New Mexico, and an event series for the Waynesville Fall Festival. Each design is screenprint-ready and built to feel handcrafted — illustrated with controlled line quality and deliberate colour relationships.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The work sits at the intersection of regional identity, nostalgia, and wearable graphic design. The goal was not just to make good-looking shirts — it was to make shirts that feel like they already belong somewhere specific.
            </p>
          </div>
        </div>
      </section>

      {/* Creative approach — dark text block */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Creative Direction
            </p>
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--color-sand)' }} />
          </div>
          <div className="md:col-span-8">
            <h3 className="text-4xl md:text-5xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
              "A great shirt graphic doesn't announce itself. It just <em>belongs</em> — on the shirt, in the place, in the moment."
            </h3>
          </div>
        </div>
      </section>

      {/* Full collection — editorial grid */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-12" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            The Collection — Seven Designs
          </p>

          {/* Feature the first two large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {shirts.slice(0, 2).map((shirt) => (
              <div key={shirt.title} className="group" style={{ backgroundColor: shirt.bg }}>
                <div className="aspect-[4/3] img-zoom">
                  <img
                    src={shirt.src}
                    alt={shirt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm mb-1 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    {shirt.title}
                  </p>
                  <p className="text-xs leading-relaxed text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                    {shirt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Three across */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {shirts.slice(2, 5).map((shirt) => (
              <div key={shirt.title} className="group" style={{ backgroundColor: shirt.bg }}>
                <div className="aspect-[4/3] img-zoom">
                  <img
                    src={shirt.src}
                    alt={shirt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm mb-1 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    {shirt.title}
                  </p>
                  <p className="text-xs leading-relaxed text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                    {shirt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final two */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shirts.slice(5).map((shirt) => (
              <div key={shirt.title} className="group" style={{ backgroundColor: shirt.bg }}>
                <div className="aspect-[4/3] img-zoom">
                  <img
                    src={shirt.src}
                    alt={shirt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm mb-1 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    {shirt.title}
                  </p>
                  <p className="text-xs leading-relaxed text-white/40" style={{ fontFamily: 'var(--font-body)' }}>
                    {shirt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colourway comparison — Hatch in two versions side by side */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Colourway Study
              </p>
              <h3 className="text-3xl md:text-4xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
                Same mark. Different ground. Entirely different feeling.
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Hatch, New Mexico is famous for its green chile peppers — and this design was made to honour that. Two colourways: a coral ground for warmth and a clean black-on-white version for versatility.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-2 gap-4">
              <div style={{ backgroundColor: '#7a6a6a' }}>
                <img src={hwRed} alt="Hatch New Mexico — coral colourway" className="w-full object-cover" />
              </div>
              <div style={{ backgroundColor: '#b5928a' }}>
                <img src={hw6} alt="Hatch New Mexico — white colourway" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lighthouse comparison */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-8 grid grid-cols-2 gap-4">
              <div style={{ backgroundColor: '#c4a882' }}>
                <img src={hw4} alt="40 Mile Point Lighthouse — white tee" className="w-full object-cover" />
              </div>
              <div style={{ backgroundColor: '#c4b8b0' }}>
                <img src={hwLH} alt="40 Mile Point Lighthouse — blue tee" className="w-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Architectural Series
              </p>
              <h3 className="text-3xl md:text-4xl mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
                40 Mile Point Lighthouse — a monument rendered in line.
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Pen-and-ink illustration of the Rogers City, Michigan lighthouse. The architectural line work prioritises depth and texture — it reads clearly at small sizes but rewards closer inspection. Available in white and lake blue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Reflection
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-white" style={{ fontFamily: 'var(--font-display)' }}>
              "Apparel is one of the most democratic canvases in design. When a shirt is right, people wear it for years. That's a longer lifespan than most brand campaigns."
            </p>
            <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: 'var(--font-body)' }}>
              The Holiday World collection demonstrates range across illustration styles — from retro botanical to architectural line work to event-driven graphic storytelling. Each piece was designed with real print constraints in mind: screenprint registration, colour count, ink-on-fabric behaviour.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-white/10">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Next project
            </p>
            <h4 className="text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Maison de Lumière
            </h4>
          </div>
          <button
            onClick={() => navigate('work')}
            className="group flex items-center gap-3 text-sm tracking-[0.12em] uppercase text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="link-underline">View all work</span>
            <span className="w-8 h-px bg-white/40 transition-all duration-300 group-hover:w-14 group-hover:bg-white" />
          </button>
        </div>
      </section>
    </article>
  )
}


export default function Project({ navigate, projectId }: ProjectProps) {
  if (projectId === 'holiday-world') {
    return <HolidayWorldProject navigate={navigate} />
  }
  if (projectId === 'portrait-photography') {
    return <PortraitProject navigate={navigate} />
  }
  if (projectId === 'branson-magazine') {
    return <BransonProject navigate={navigate} />
  }
  if (projectId === 'code-green') {
    return <CoeGreenProject navigate={navigate} />
  }
  if (projectId === 'essentia') {
    return <EssentiaProject navigate={navigate} />
  }
  if (projectId === 'perfume-events') {
    return <PerfumeEventsProject navigate={navigate} />
  }
  if (projectId === 'landscape-photography') {
    return <LandscapeProject navigate={navigate} />
  }
  if (projectId === 'zamora-real-estate') {
    return <ZamoraProject navigate={navigate} />
  }
  if (projectId === 'podcast-event') {
    return <PodcastProject navigate={navigate} />
  }
  if (projectId === 'asta-graphics') {
    return <AstaProject navigate={navigate} />
  }
  navigate('work')
  return null
}
