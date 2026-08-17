import branson1 from '@/imports/Port_2025_Branson.jpg'
import branson2 from '@/imports/Port_2025_Branson2.jpg'
import branson3 from '@/imports/Port_2025_Branson3.jpg'
import process1 from '@/imports/Screen_Shot_2024-01-24_at_10.21.19_PM.png'
import process2 from '@/imports/Screen_Shot_2024-01-24_at_10.21.31_PM.png'

interface Props {
  navigate: (page: string) => void
}

export default function BransonProject({ navigate }: Props) {
  return (
    <article className="page-enter">

      {/* Hero — the boldest direction: dark diamond grid */}
      <div
        className="relative w-full overflow-hidden flex items-end"
        style={{ minHeight: '100vh', backgroundColor: '#2a2a2a' }}
      >
        <img
          src={branson3}
          alt="Explore Branson — diamond grid magazine ad concept"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div className="relative z-10 pb-24 px-8 md:px-16 w-full">
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-white/60 text-xs tracking-[0.2em] uppercase mb-12 hover:text-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>←</span> Back to The Archive
          </button>
          <p className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Editorial · Magazine Advertising · 2024
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none max-w-4xl" style={{ fontFamily: 'var(--font-display)' }}>
            Explore Branson<br /><em>Magazine Campaign</em>
          </h1>
        </div>
      </div>

      {/* Overview */}
      <section className="py-28 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Overview
            </p>
            <div className="space-y-6">
              {[
                ['Client', 'Explore Branson / ExploreBranson.com'],
                ['Scope', 'Magazine ad design — full page'],
                ['Format', 'Print · Three creative directions'],
                ['Year', '2024'],
                ['Campaign line', '"Road trip show tunes is not what I meant."'],
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
              Three ways to say the same true thing: Branson's live music is not what you expect.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The brief from Explore Branson was to reframe a city many travellers had already made up their mind about. The campaign personifies "Vacation" as a character — someone who asked for live music and got something far more extraordinary than they bargained for.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Three distinct creative directions were developed for a full-page magazine placement: a vintage Polaroid approach, a layered blue-collage direction, and a bold graphic diamond-grid concept. Each carries the same campaign line with a different visual personality.
            </p>
          </div>
        </div>
      </section>

      {/* Campaign line — dark statement */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The Campaign Line
            </p>
            <div className="w-8 h-px" style={{ backgroundColor: 'var(--color-sand)' }} />
          </div>
          <div className="md:col-span-8">
            <blockquote className="text-3xl md:text-5xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
              "Road trip show tunes is not what I meant when I said I really love live music."
            </blockquote>
            <p className="text-white/40 text-sm mt-6 tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              — Vacation
            </p>
          </div>
        </div>
      </section>

      {/* ── Direction 01: Polaroid / Vintage ── */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Direction 01
            </span>
            <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Polaroid — Warm & Nostalgic
            </h3>
            <div className="flex-1 h-px hidden md:block" style={{ backgroundColor: 'var(--color-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Ad — shown as a print mockup, centered on its rust ground */}
            <div className="md:col-span-7 img-zoom" style={{ backgroundColor: '#b5432a' }}>
              <img
                src={branson1}
                alt="Explore Branson — Polaroid direction magazine ad"
                className="w-full object-cover"
              />
            </div>
            <div className="md:col-span-4 md:col-start-9 pt-4">
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Creative rationale
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                The Polaroid frame positions Branson as a memory worth keeping — warm, personal, unexpected. The Elvis-tribute performer in a gold jacket with polka-dot backup singers is exactly the kind of moment that doesn't translate to a road trip playlist. The hand-lettered script quote leans into the intimate, postcard quality of the format.
              </p>
              <div className="space-y-3">
                {['Rounded Polaroid frame', 'Stage-lit performance photo', 'Hand-script campaign quote', 'Branson logo at foot', 'Warm terracotta presentation ground'].map((detail) => (
                  <div key={detail} className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    <span style={{ color: 'var(--color-sand)' }}>—</span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direction 02: Blue Collage ── */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Direction 02
            </span>
            <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Blue Collage — Layered & Textural
            </h3>
            <div className="flex-1 h-px hidden md:block" style={{ backgroundColor: 'var(--color-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4 pt-4 order-2 md:order-1">
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Creative rationale
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                The blue duotone collage evokes the layered, storied history of Branson entertainment — generations of performers stacked on top of each other like memories. The paper texture and crumpled ground give it a tactile, handmade quality. The tilted kraft note card for the quote feels found rather than designed.
              </p>
              <div className="space-y-3">
                {['Blue duotone composite', 'Landscape background layering', 'Paper/crumple texture', 'Tilted kraft notecard', 'Ensemble cast of performers'].map((detail) => (
                  <div key={detail} className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    <span style={{ color: 'var(--color-sand)' }}>—</span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6 img-zoom order-1 md:order-2" style={{ backgroundColor: '#b5432a' }}>
              <img
                src={branson2}
                alt="Explore Branson — blue collage direction magazine ad"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Direction 03: Diamond Grid ── */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline gap-6 mb-12">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Direction 03
            </span>
            <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Diamond Grid — Bold & Graphic
            </h3>
            <div className="flex-1 h-px hidden md:block" style={{ backgroundColor: 'var(--color-border)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 img-zoom" style={{ backgroundColor: '#b5432a' }}>
              <img
                src={branson3}
                alt="Explore Branson — diamond grid direction magazine ad"
                className="w-full object-cover"
              />
            </div>
            <div className="md:col-span-4 md:col-start-9 pt-4">
              <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Creative rationale
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                The most typographically driven of the three directions. The diamond-cut photo grid creates visual energy — multiple shows glimpsed simultaneously, each a facet of the same city. The dark charcoal ground and white body text give it the authority of a prestige magazine. No decorative texture; the design is the argument.
              </p>
              <div className="space-y-3">
                {['Charcoal ground', 'Diamond-cut photo mosaic', 'White sans-serif headline', 'Multiple shows visible', 'Most editorial / magazine-native'].map((detail) => (
                  <div key={detail} className="flex items-start gap-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    <span style={{ color: 'var(--color-sand)' }}>—</span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Body copy — the actual ad text, treated as a design artifact */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Ad Copy
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl leading-relaxed mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)', fontStyle: 'italic' }}>
              "Road trip show tunes is not what I meant when I said I really love live music. — Vacation"
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              If live music is your Vacation's idea of a good time, Branson has exactly what it needs. From rings of fire to Swedish super-pop, we've got live shows spanning every genre to really get your Vacation's toe tapping.
            </p>
            <p className="text-sm tracking-[0.1em]" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)', fontWeight: 500 }}>
              Find out more at ExploreBranson.com
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Reflection
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              "Developing multiple directions for the same brief teaches you what the idea actually is — versus what any one execution of it happens to look like."
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Presenting three routes to the same campaign line forces clarity about which visual choices serve the message and which are stylistic habit. The diamond grid earned its place by being the only direction where the format itself became part of the argument about variety.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ borderColor: 'var(--color-border)' }}>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Next project
            </p>
            <h4 className="text-3xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Portrait & Street Photography
            </h4>
          </div>
          <button
            onClick={() => navigate('work')}
            className="group flex items-center gap-3 text-sm tracking-[0.12em] uppercase"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
          >
            <span className="link-underline">Back to The Archive</span>
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ backgroundColor: 'var(--color-ink)' }} />
          </button>
        </div>
      </section>
    </article>
  )
}
