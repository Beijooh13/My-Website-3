import hw1 from '@/imports/Holiday_World_1.jpg'
import hw2 from '@/imports/Holiday_World_2.jpg'
import hw3 from '@/imports/Holiday_World_3.jpg'
import hw4 from '@/imports/Holiday_World_4.jpg'
import hw6 from '@/imports/Holiday_World_6.jpg'
import hwRed from '@/imports/Holiday_World_Hatch_Red.jpg'
import hwLH from '@/imports/Holiday_World_LH.jpg'

interface Props { navigate: (page: string) => void }

export default function LipcoProject({ navigate }: Props) {
  const images = [hwRed, hw2, hw3, hw4, hw1, hw6, hwLH]
  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto"><button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button><p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Graphic Design · Souvenir Products · 2024</p><h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>Lipco Group<br/><em>Souvenir Product Graphics</em></h1></div></section>
    <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16"><div className="md:col-span-4 space-y-5">{[['Role','Graphic Designer · Full-time Employee'],['Company','Lipco Group'],['Location','Kirbyville, Missouri'],['Period','February–August 2024'],['Scope','Production graphics for souvenir merchandise']].map(([a,b])=><div key={a} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}</div><div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>Designing graphics for real products and real production constraints.</h2><p className="leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>As a full-time graphic designer at Lipco Group, I created and adapted production-ready graphics for souvenir merchandise, including T-shirts, drinkware, keychains, magnets, plush, mugs, and snow globes.</p><p className="leading-relaxed" style={{color:'var(--color-muted)'}}>The T-shirt examples shown here are part of that larger body of graphic design work. Holiday World is one souvenir graphic example rather than a standalone collection. The work required accounting for print area, material, colour count, legibility, and the production method used for each object.</p></div></div></section>
    <section className="px-8 md:px-16 pb-28"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((img,i)=><img key={i} src={img} alt={`Lipco souvenir graphic design ${i+1}`} className="w-full h-auto"/>)}</div></section>
  </article>
}