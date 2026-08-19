import hw1 from '@/imports/Holiday_World_1.jpg'
import hw2 from '@/imports/Holiday_World_2.jpg'
import hw3 from '@/imports/Holiday_World_3.jpg'
import hw4 from '@/imports/Holiday_World_4.jpg'
import hw6 from '@/imports/Holiday_World_6.jpg'
import hwRed from '@/imports/Holiday_World_Hatch_Red.jpg'
import hwLH from '@/imports/Holiday_World_LH.jpg'

interface Props { navigate: (page: string) => void }

export default function LipcoProject({ navigate }: Props) {
  const examples = [hw1, hw2, hw3, hw4, hwRed, hw6, hwLH]
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#171512' }}>
        <div className="absolute inset-0 grid grid-cols-2"><img src={hw1} alt="Souvenir apparel design example" className="w-full h-full object-cover" /><img src={hw4} alt="Souvenir apparel design example" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
        <div className="relative min-h-screen max-w-screen-xl mx-auto px-8 md:px-16 pt-32 pb-20 flex flex-col justify-end">
          <button onClick={() => navigate('work')} className="text-left text-xs tracking-[0.2em] uppercase mb-12 text-white/60 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>← Back to Work Index</button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>Graphic Design · Souvenir Products · Internship</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>Lipco Group<br /><em>Souvenir Product Design</em></h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">{[
          ['Role','Graphic Design Intern'],
          ['Company','Lipco Group'],
          ['Location','Kirbyville, Missouri'],
          ['Period','February–August 2024'],
          ['Scope','Production graphics for souvenir merchandise'],
        ].map(([label,value])=><div key={label} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>{label}</p><p className="text-sm" style={{color:'var(--color-ink)',fontFamily:'var(--font-body)'}}>{value}</p></div>)}</div>
        <div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>Designing artwork that had to work on real products, through real production processes.</h2><p className="text-base leading-relaxed mb-6" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>During my graphic design internship at Lipco Group in Kirbyville, Missouri, I created and adapted production-ready artwork for souvenir merchandise. The work covered product categories including apparel, drinkware, keychains, magnets, plush, mugs, and snow globes.</p><p className="text-base leading-relaxed" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>The examples shown here are apparel graphics from several souvenir clients and locations. Holiday World is one shirt example within that larger body of work, rather than a standalone collection. Each piece had to account for the product, print area, production method, and the practical limitations of manufacturing.</p></div>
      </div></section>

      <section className="py-20 px-8 md:px-16" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>Production context</p><h3 className="text-3xl md:text-4xl leading-tight" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>Design decisions changed with the object and the printing process.</h3></div><div className="md:col-span-7 md:col-start-6"><p className="text-base leading-relaxed mb-5" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>The internship exposed me to screen printing for apparel, UV printing, pad printing, and 360° rotary printing. Preparing artwork meant thinking beyond the screen: colour count, print area, legibility, registration, curvature, material, and how an illustration would reproduce on a physical object.</p><p className="text-base leading-relaxed" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>I worked as part of a four-designer team using Illustrator, Photoshop, and Jira in a production environment where client notes were often brief and designs moved between departments before manufacturing.</p></div></div></section>

      <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">{examples.map((src,i)=><div key={i} className={i===0?'md:col-span-2':''}><img src={src} alt={`Lipco souvenir apparel example ${i+1}`} className="w-full h-auto block" /></div>)}</div></section>

      <section className="py-28 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>What I learned</p></div><div className="md:col-span-7"><p className="text-2xl md:text-3xl leading-relaxed text-white mb-6" style={{fontFamily:'var(--font-display)'}}>Production design taught me that visual decisions are inseparable from the way an object will actually be made.</p><p className="text-sm leading-relaxed text-white/50" style={{fontFamily:'var(--font-body)'}}>It also gave me first-hand experience with the communication problems that appear when briefs, brand guidance, software, and interdepartmental handoffs are inconsistent, an experience that later connected naturally with my interest in usability and process improvement.</p></div></div></section>
    </article>
  )
}
