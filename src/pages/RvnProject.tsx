import rvn1 from '@/imports/00001RVN Photos single_.jpg'
import rvn2 from '@/imports/00002RVN Photos single_.jpg'
import rvn3 from '@/imports/00003RVN Photos single_.jpg'
import rvn4 from '@/imports/00004RVN Photos single_.jpg'
import rvn5 from '@/imports/00005RVN Photos single_.jpg'
import rvn6 from '@/imports/00006RVN Photos single_.jpg'

interface Props { navigate: (page: string) => void }

export default function RvnProject({ navigate }: Props) {
  const images = [rvn1, rvn2, rvn3, rvn4, rvn5, rvn6]
  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto">
      <button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button>
      <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Fashion Photography · South Korea · c. 2020</p>
      <h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>RVN<br/><em>Trial Fashion Shoot</em></h1>
    </div></section>
    <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16">
      <div className="md:col-span-4 space-y-5">{[['Client','RVN'],['Role','Photographer'],['Context','Interview / trial shoot'],['Location','South Korea'],['Year','c. 2020']].map(([a,b])=><div className="border-b pb-4" style={{borderColor:'var(--color-border)'}} key={a}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}</div>
      <div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>A fast fashion shoot created during a short trial for RVN.</h2><p className="leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>I photographed a model during an approximately ten-minute trial shoot for RVN, a South Korean fashion brand. The session was part of an employment interview and required working quickly with the model and the conditions available in the moment.</p><p className="leading-relaxed" style={{color:'var(--color-muted)'}}>The photographs were not originally commissioned as campaign imagery. I handed over the complete shoot, and selected images were subsequently used by RVN on social media.</p></div>
    </div></section>
    <section className="px-8 md:px-16 pb-28"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((img,i)=><img key={i} src={img} alt={`RVN fashion photography ${i+1}`} className="w-full h-auto"/>)}</div></section>
  </article>
}