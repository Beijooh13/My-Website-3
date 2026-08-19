import social1 from '@/imports/IMG_3097.PNG'
import social2 from '@/imports/IMG_3100 copy.PNG'
import social3 from '@/imports/IMG_3101 copy.PNG'
import social4 from '@/imports/IMG_3102 2.PNG'
import social5 from '@/imports/IMG_3104 2.PNG'
import social6 from '@/imports/IMG_3104.PNG'
import social7 from '@/imports/IMG_3105 copy.PNG'
import social8 from '@/imports/IMG_3106.PNG'
import social9 from '@/imports/IMG_3107.PNG'

interface Props { navigate: (page: string) => void }

export default function SuitmakeProject({ navigate }: Props) {
  const images = [social1,social2,social3,social4,social5,social6,social7,social8,social9]
  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}>
      <div className="max-w-screen-xl mx-auto">
        <button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button>
        <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Social Media & Digital Design · Seoul · 2019</p>
        <h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>Suitmake<br/><em>Social Media & Digital Design</em></h1>
      </div>
    </section>
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">{[['Brand','Suitmake'],['Founder','Jen Auh'],['Role','Intern'],['Location','Itaewon, Seoul, South Korea'],['Year','2019']].map(([a,b])=><div key={a} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}</div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>Digital content developed for a men’s styling brand in Itaewon.</h2>
          <p className="leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>I worked as an intern for Suitmake, Jen Auh’s men’s styling brand in Seoul. My work included social-media content and supporting digital design, alongside photography of men, products, and Jen Auh for personal-brand and social-media use.</p>
          <p className="leading-relaxed" style={{color:'var(--color-muted)'}}>I also designed the brand’s WordPress website, which was published at the time. The surviving visuals shown here are the social-media materials; I no longer have screenshots of the original website or the larger photography set.</p>
        </div>
      </div>
    </section>
    <section className="px-8 md:px-16 pb-28"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((src,i)=><img key={i} src={src} alt={`Suitmake social media design ${i+1}`} className="w-full h-auto"/>)}</div></section>
  </article>
}
