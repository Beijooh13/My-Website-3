import chess01 from '@/imports/ Robotic Chess_Lab_001.jpg'
import chess02 from '@/imports/ Robotic Chess_Lab_002.jpg'
import chess03 from '@/imports/ Robotic Chess_Lab_003.jpg'
import chess04 from '@/imports/ Robotic Chess_Lab_004.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function UsabilityLabDocumentationProject({ navigate }: Props) {
  const images = [chess01, chess02, chess03, chess04]

  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button onClick={() => navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
            ← Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50" style={{ fontFamily: 'var(--font-body)' }}>
            Research Documentation · Photography · 2026
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            HSRW Usability Lab<br /><em>Project Documentation</em>
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-5">
            {[
              ['Role', 'Visual Documentation'],
              ['Institution', 'Hochschule Rhein-Waal'],
              ['Context', 'Usability Lab'],
              ['Featured Subject', 'Robotic Chess Project'],
              ['Year', '2026'],
            ].map(([label, value]) => (
              <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{label}</p>
                <p className="text-sm" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}>{value}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Translating technical research environments into images people can understand quickly.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              In 2026, I began documenting projects in the Usability Lab at Hochschule Rhein-Waal. My role is photographic and visual documentation: observing how research projects are physically set up, identifying the important interactions and equipment, and creating images that communicate the work without overstating my role in the underlying research.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The robotic chess project shown here is one example. I approached it as a documentation problem: how can a technical setup, human interaction, and the character of the lab be represented clearly enough that someone outside the project can understand what is happening?
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className={index === 0 ? 'md:col-span-2' : ''} style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={src} alt={`Robotic chess usability lab documentation ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>Documentation approach</p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed mb-6" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-display)' }}>
              The goal is to make research environments legible without simplifying away what makes them interesting.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>
              I am continuing to build this documentation practice across additional lab projects, with a focus on interaction, equipment, spatial context, and the details that explain how people actually engage with a system.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
