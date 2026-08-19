import nga1 from '@/imports/ Nga Photography_001.jpg'
import nga2 from '@/imports/ Nga Photography_002.jpg'
import nga3 from '@/imports/ Nga Photography_003.jpg'
import nga4 from '@/imports/ Nga Photography_004.jpg'
import nga5 from '@/imports/ Nga Photography_005.jpg'
import nga6 from '@/imports/ Nga Photography_006.jpg'
import nga7 from '@/imports/ Nga Photography_007.jpg'
import nga8 from '@/imports/ Nga Photography_008.jpg'
import nga9 from '@/imports/ Nga Photography_009.jpg'
import nga10 from '@/imports/ Nga Photography_010.jpg'
import nga11 from '@/imports/ Nga Photography_011.jpg'
import nga12 from '@/imports/ Nga Photography_012.jpg'
import nga13 from '@/imports/ Nga Photography_013.jpg'
import nga14 from '@/imports/ Nga Photography_014.jpg'
import nga15 from '@/imports/ Nga Photography_015.jpg'
import nga16 from '@/imports/ Nga Photography_016.jpg'
import nga17 from '@/imports/ Nga Photography_017.jpg'

interface Props { navigate: (page: string) => void }

const images = [nga1,nga2,nga3,nga4,nga5,nga6,nga7,nga8,nga9,nga10,nga11,nga12,nga13,nga14,nga15,nga16,nga17]

export default function NgaProject({ navigate }: Props) {
  return <article className="page-enter" style={{ backgroundColor:'var(--color-paper)' }}>
    <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor:'var(--color-ink)' }}>
      <div className="max-w-screen-xl mx-auto">
        <button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button>
        <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Fashion Photography · 2022</p>
        <h1 className="text-6xl md:text-8xl leading-none text-white" style={{ fontFamily:'var(--font-display)' }}>NGA<br/><em>Fashion Photography</em></h1>
      </div>
    </section>

    <section className="py-24 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">
          {[["Client","NGA"],["Role","Photographer"],["Field","Fashion"],["Year","2022"]].map(([a,b])=><div key={a} className="border-b pb-4" style={{ borderColor:'var(--color-border)' }}><p className="text-[10px] uppercase tracking-[0.2em]" style={{ color:'var(--color-muted)' }}>{a}</p><p className="text-sm">{b}</p></div>)}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily:'var(--font-display)' }}>Portrait and fashion photography created for a Vietnamese fashion entrepreneur.</h2>
          <p className="leading-relaxed" style={{ color:'var(--color-muted)' }}>In 2022, NGA commissioned me to photograph her for her fashion work. The project focused on creating a varied set of portraits and fashion-oriented imagery that could support how she presented herself and her business visually.</p>
        </div>
      </div>
    </section>

    <section className="px-8 md:px-16 py-20" style={{ backgroundColor:'var(--color-paper-dark)' }}>
      <div className="max-w-screen-xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color:'var(--color-muted)' }}>01 · Photography</p>
        <h3 className="text-3xl md:text-4xl mb-10" style={{ fontFamily:'var(--font-display)' }}>Selected Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((src,i)=><img key={i} src={src} alt={`NGA fashion photography ${i+1}`} className="w-full h-auto" />)}</div>
      </div>
    </section>
  </article>
}
