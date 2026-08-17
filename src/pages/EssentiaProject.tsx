import cover from '@/imports/0_Cover.jpg'
import img1 from '@/imports/1_Essentia.jpg'
import img2 from '@/imports/2_Essentia.jpg'
import img4 from '@/imports/4_Essentia.jpg'
import img7 from '@/imports/7_Essentia.jpg'
import img91 from '@/imports/9_Essentia-1.jpg'
import img92 from '@/imports/9_Essentia-2.jpg'
import img10 from '@/imports/10_Essentia.jpg'
import img16 from '@/imports/16_Essentia.jpg'
import img17 from '@/imports/17_Essentia.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function EssentiaProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: '#f0ebe3' }}>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', backgroundColor: '#ede8e0' }}>
        <img
          src={cover}
          alt="Essentia App — MK9 Olfactory Prototype"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16"
          style={{ background: 'linear-gradient(to top, rgba(240,235,227,0.88) 0%, transparent 55%)' }}
        >
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-12 transition-opacity hover:opacity-50"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            UX/UI · Mobile Application · 2024
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Essentia<br /><em>Olfactory Display</em>
          </h1>
          <p className="text-lg md:text-xl max-w-xl" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Designing a mobile interface for the MK9 — a five-chamber olfactory device that lets users compose, schedule, and release personalised scent experiences.
          </p>
        </div>
      </div>

      {/* Overview & Goal */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: '#ede8e0' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Project Overview
            </p>
            <div className="space-y-6">
              {[
                ['Product', 'Mobile Application'],
                ['My Role', 'UX/UI Design'],
                ['Project Length', '4 Months'],
                ['Year', '2024'],
                ['Collaborators', 'Andrea Polk · Design\nShahzeb Kazmi · Design\nBerk Şekerci · Psychology'],
              ].map(([label, value]) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: 'rgba(13,13,11,0.1)' }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <img
              src={img1}
              alt="Essentia — project overview and goal"
              className="w-full object-cover"
              style={{ borderRadius: '2px' }}
            />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-6xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            "The sense of smell remains largely <em>untapped in digital experiences.</em>"
          </h2>
          <p className="mt-6 text-sm max-w-xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
            Essentia started from a single question: what would it mean to design intentionally for scent — not as novelty, but as genuine interface?
          </p>
        </div>
      </section>

      {/* MK9 Device */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#ede8e0' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            The Device
          </p>
          <img
            src={img2}
            alt="MK9 Olfactory Device — 3D printed, 5 chambers"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Research — Preliminary Interviews */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#f5f0ea' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Research — Preliminary Interviews
          </p>
          <img
            src={img7}
            alt="Essentia — preliminary interview findings: 53.85% home use, 91.67% daily scent users"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Moodboard */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#ede8e0' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Visual Direction — Moodboard
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Earthy. Sensory. Alive.
          </h3>
          <img
            src={img92}
            alt="Essentia moodboard — natural textures, water drop, sand dunes, leaf, flower, oil"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Color & Typography */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#f5f0ea' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Visual Identity — Color &amp; Typography
          </p>
          <img
            src={img4}
            alt="Essentia — color palette and typography: Source Serif 4 + Avenir"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Paper Prototypes */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#ede8e0' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Process — Paper Prototypes
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Beginning with hands and paper before pixels.
          </h3>
          <img
            src={img91}
            alt="Essentia — paper prototypes: Instant Scent, Home, Modes, Custom Scent screens"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Low Fidelity */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#f5f0ea' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Design — Low Fidelity (Version 1)
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Onboarding, home, scent library, blends — the full flow mapped.
          </h3>
          <img
            src={img10}
            alt="Essentia — low fidelity wireframes, Version 1"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Home Screen — High Fidelity */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#ede8e0' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Final Design — Home Screen
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Device status, scent slots, recents — everything at a glance.
          </h3>
          <img
            src={img17}
            alt="Essentia — high fidelity Home Screen, three states"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
        </div>
      </section>

      {/* Onboarding — High Fidelity */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#f5f0ea' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Final Design — Onboarding
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Register your device. Tap a slot. Name your scent.
          </h3>
          <img
            src={img16}
            alt="Essentia — onboarding screens: device setup and capsule registration"
            className="w-full object-cover"
            style={{ borderRadius: '2px' }}
          />
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
              "Designing for a sense that has no pixel equivalent forced us to think differently about feedback, control, and trust. Smell is deeply personal — the interface had to be, too."
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
              The Essentia project required bridging physical hardware constraints with the expectations users bring to polished mobile software. Research — from preliminary interviews to paper prototyping to high-fidelity iteration — kept the work grounded in what people actually needed from a scent interface: simplicity, personalisation, and a sense of calm control.
            </p>
          </div>
        </div>

        <div
          className="max-w-screen-xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Next project
            </p>
            <h4 className="text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Code Green
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
