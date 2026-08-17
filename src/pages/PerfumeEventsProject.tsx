import mar3317 from '@/imports/MAR_3317.jpg'
import mar3155 from '@/imports/MAR_3155.jpg'
import mar3170 from '@/imports/MAR_3170.jpg'
import mar3179 from '@/imports/MAR_3179.jpg'
import mar3235 from '@/imports/MAR_3235.jpg'
import mar3249 from '@/imports/MAR_3249.jpg'
import mar3420 from '@/imports/MAR_3420.jpg'
import mar3359 from '@/imports/MAR_3359.jpg'
import mar3322 from '@/imports/MAR_3322.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function PerfumeEventsProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* Hero — full bleed, dramatic light */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
        <img
          src={mar3235}
          alt="Natural perfume workshop — HSRW Kamp-Lintfort, 2026"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16"
          style={{ background: 'linear-gradient(to top, rgba(28,24,20,0.75) 0%, transparent 55%)' }}
        >
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-12 transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>
            Experience Design · AStA HSRW · 2026
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Perfume<br /><em>Workshops</em>
          </h1>
          <p className="text-lg md:text-xl max-w-xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>
            Designing sensory experiences for students at Hochschule Rhein-Waal — in collaboration with a local natural perfumist.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Project Overview
            </p>
            <div className="space-y-6">
              {[
                ['Role', 'AStA Campus Representative — Coordination, Inventory, Logistics, Photography'],
                ['Institution', 'Hochschule Rhein-Waal, Kamp-Lintfort'],
                ['Perfumist', 'Sarthak Chadha'],
                ['Since', 'March 2026'],
                ['Discipline', 'Experience Design, Community Building'],
              ].map(([label, value]) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Scent as a starting point for community, curiosity, and making.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Since becoming AStA Campus Representative at HSRW in March 2026, Andrea has been developing workshop programmes for students that go beyond the academic. The first series brought students into direct contact with natural perfumery — an ancient craft that also happens to be the physical counterpart of the Essentia research.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Working with Sarthak Chadha, a local natural perfumist, students composed their own scents from a palette of botanical oils — learning to read scent notes, balance accords, and make something genuinely their own. Andrea coordinated the event end-to-end: inventory management, order timelines, hosting logistics, and photography to document the workshop for the AStA record.
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed — the oils box */}
      <div className="w-full" style={{ height: '70vh', maxHeight: '680px', backgroundColor: 'var(--color-paper-dark)' }}>
        <img
          src={mar3420}
          alt="Box of natural perfume oils — handwritten labels, amber dropper bottles"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Divider — approach */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-6xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            A workshop as a design problem: open enough for discovery, structured enough to finish.
          </h2>
        </div>
      </section>

      {/* Workshop in action — two wide images */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            The Workshop
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="img-zoom aspect-[3/2]" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img
                src={mar3317}
                alt="Student composing a scent with black gloves and amber oil bottles"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-[3/2]" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img
                src={mar3322}
                alt="Andrea guiding participants through the scent composition process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="img-zoom aspect-[3/4]" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img
                src={mar3249}
                alt="Close-up — gloved hand holding a small amber oil bottle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-[3/4]" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img
                src={mar3359}
                alt="Student testing a scent strip with oil bottles arranged on the table"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="img-zoom aspect-[3/4]" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img
                src={mar3170}
                alt="Two students working together over scent blends in afternoon light"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community — wider shots */}
      <section className="py-0" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="img-zoom" style={{ minHeight: '500px' }}>
            <img
              src={mar3155}
              alt="Workshop room — students at tables with scent materials in window light"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            />
          </div>
          <div className="img-zoom" style={{ minHeight: '500px' }}>
            <img
              src={mar3179}
              alt="Participants collaborating at the workshop table"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            />
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
              Experience design rarely happens on a screen. Sometimes it is a room, a table, fifty small bottles, and a group of people learning to trust what they smell.
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
              This workshop series connects the academic interest in olfactory experience explored through Essentia with hands-on community programming. The next sessions will expand the format — exploring scent memory, cultural context, and the design of sensory environments. In collaboration with Sarthak Chadha. Ongoing from 2026.
            </p>
          </div>
        </div>

        <div
          className="max-w-screen-xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Related project
            </p>
            <h4 className="text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Essentia Olfactory Display
            </h4>
          </div>
          <button
            onClick={() => navigate('work')}
            className="group flex items-center gap-3 text-sm tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
          >
            <span className="link-underline">View all work</span>
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ backgroundColor: 'rgba(255,255,255,0.35)' }} />
          </button>
        </div>
      </section>
    </article>
  )
}
