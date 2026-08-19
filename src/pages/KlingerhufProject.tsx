import c1 from '@/imports/ Klingerhuf Restoration Event_Carousel_001.png'
import c3 from '@/imports/ Klingerhuf Restoration Event_Carousel_003.png'
import c5 from '@/imports/ Klingerhuf Restoration Event_Carousel_005.png'
import c7 from '@/imports/ Klingerhuf Restoration Event_Carousel_007.png'
import c9 from '@/imports/ Klingerhuf Restoration Event_Carousel_009.png'
import reel from '@/imports/Klingerhuf Restoration Event_Reel_01.png'

interface Props { navigate: (page: string) => void }

export default function KlingerhufProject({ navigate }: Props) {
  const images = [c1, c3, c5, c7, c9, reel]
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button onClick={() => navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>← Back to Work Index</button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50" style={{ fontFamily: 'var(--font-body)' }}>Community Communication · Volunteer Activity · 2026</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>Klingerhuf Restoration<br /><em>Community Participation</em></h1>
        </div>
      </section>
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-5">
            {[
              ['Role', 'Communication Design, Promotion, Volunteer Participation'],
              ['Context', 'AStA HSRW community activity'],
              ['Partner', 'Stadt + Grün'],
              ['Outputs', 'Carousel graphics, reel asset, event communication'],
              ['Year', '2026'],
            ].map(([label, value]) => <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}><p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color:'var(--color-muted)', fontFamily:'var(--font-body)' }}>{label}</p><p className="text-sm" style={{ color:'var(--color-ink)', fontFamily:'var(--font-body)' }}>{value}</p></div>)}
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily:'var(--font-display)', color:'var(--color-ink)' }}>Using communication design to help turn a volunteer opportunity into something students could understand and join.</h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>The Klingerhuf restoration activity was organized in collaboration with Stadt + Grün. I did not organize the event itself. My contribution was to create the promotional graphics, use photography within the visual communication, help promote the opportunity to students, and participate in the restoration as a volunteer.</p>
            <p className="text-base leading-relaxed" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>The project reflects the kind of community-facing work I am increasingly interested in: communication that has a practical purpose, leads people toward a real-world experience, and connects students with activities beyond the university classroom.</p>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-16 pb-24"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((src,i)=><div key={i} className={i===0?'md:col-span-2':''}><img src={src} alt={`Klingerhuf restoration communication ${i+1}`} className="w-full h-auto block" /></div>)}</div></section>
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor:'var(--color-ink)' }}><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase" style={{ color:'var(--color-muted)', fontFamily:'var(--font-body)' }}>Why it matters</p></div><div className="md:col-span-7"><p className="text-2xl md:text-3xl leading-relaxed text-white" style={{ fontFamily:'var(--font-display)' }}>The design was one part of the experience. Its job was to make participation feel clear, approachable, and worth showing up for.</p></div></div></section>
    </article>
  )
}
