import heat01 from '@/imports/ 2024_Heat Photography_001.jpg'
import heat03 from '@/imports/ 2024_Heat Photography_003.jpg'
import heat05 from '@/imports/ 2024_Heat Photography_005.jpg'
import heat08 from '@/imports/ 2024_Heat Photography_008.jpg'
import heat12 from '@/imports/ 2024_Heat Photography_012.jpg'
import heat16 from '@/imports/ 2024_Heat Photography_016.jpg'
import heat20 from '@/imports/ 2024_Heat Photography_020.jpg'
import heat23 from '@/imports/ 2024_Heat Photography_023.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function DancePhotographyProject({ navigate }: Props) {
  const images = [heat01, heat03, heat05, heat08, heat12, heat16, heat20, heat23]

  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="relative min-h-screen bg-black overflow-hidden">
        <img src={heat05} alt="Dancer performing at HEAT competition" className="absolute inset-0 w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
        <div className="relative min-h-screen max-w-screen-xl mx-auto px-8 md:px-16 pb-20 pt-32 flex flex-col justify-end">
          <button onClick={() => navigate('work')} className="text-left text-xs tracking-[0.2em] uppercase mb-12 text-white/60 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
            ← Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
            Performance Photography · Freelance · 2022–2024
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            Dance Competition<br /><em>Photography</em>
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-5">
            {[
              ['Role', 'Freelance Dance Photographer'],
              ['Company', 'Same Day Productions'],
              ['Featured Event', 'HEAT Convention & Competition, 2024'],
              ['Scope', 'Live performance photography'],
              ['Period', '2022–2024'],
            ].map(([label, value]) => (
              <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>{label}</p>
                <p className="text-sm" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-body)' }}>{value}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Photographing movement at the point where timing, expression, and form align.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              From 2022 to 2024, I worked as a freelance dance photographer for Same Day Productions, an external production company contracted to document dance competitions. My responsibility was to photograph routines as they unfolded live, capturing individual dancers and groups through fast, unpredictable movement.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The work required anticipation rather than staging. I learned to read choreography quickly, respond to changing lighting and spacing, and look for moments that communicated both the physical precision of a routine and the emotion behind it. This 2024 HEAT series represents one competition from that larger freelance period.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className={index === 0 || index === 5 ? 'md:col-span-2' : ''}>
              <img src={src} alt={`Dance competition photograph ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}>What the work taught me</p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Live performance photography sharpened my ability to anticipate what matters before the moment disappears.
            </p>
            <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: 'var(--font-body)' }}>
              That instinct now carries into how I document events and experiences more broadly: watch the room, understand the rhythm, and be ready for the image that explains what it felt like to be there.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
