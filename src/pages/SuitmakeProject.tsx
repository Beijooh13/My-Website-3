import social1 from '@/imports/IMG_3097.PNG'
import social2 from '@/imports/IMG_3100 copy.PNG'
import social4 from '@/imports/IMG_3102 2.PNG'
import social9 from '@/imports/IMG_3107.PNG'
import product1 from '@/imports/ Suitmake Product Photography_001.jpg'
import product2 from '@/imports/ Suitmake Product Photography_002.jpg'
import product5 from '@/imports/ Suitmake Product Photography_005.jpg'
import product6 from '@/imports/ Suitmake Product Photography_006.jpg'
import product7 from '@/imports/ Suitmake Product Photography_007.jpg'
import product8 from '@/imports/ Suitmake Product Photography_008.jpg'
import product9 from '@/imports/ Suitmake Product Photography_009.jpg'
import product10 from '@/imports/ Suitmake Product Photography_010.jpg'
import product11 from '@/imports/ Suitmake Product Photography_011.jpg'
import product12 from '@/imports/ Suitmake Product Photography_012.jpg'
import product13 from '@/imports/ Suitmake Product Photography_013.jpg'
import jen1 from '@/imports/ Jen Auh Photography_001.jpg'
import jen2 from '@/imports/ Jen Auh Photography_002.jpg'
import jen3 from '@/imports/ Jen Auh Photography_003.jpg'
import jen5 from '@/imports/ Jen Auh Photography_005.jpg'
import model1a from '@/imports/Suitmake Model 1_00001.jpg'
import model1b from '@/imports/Suitmake Model 1_00002.jpg'
import model1c from '@/imports/Suitmake Model 1_00003.jpg'
import model1d from '@/imports/Suitmake Model 1_00004.jpg'
import model2a from '@/imports/ Suitmake Model 2_001.jpg'
import model2b from '@/imports/ Suitmake Model 2_002.jpg'
import model3a from '@/imports/ Suitmake Model 3_001.jpg'
import model3b from '@/imports/ Suitmake Model 3_003.jpg'

interface Props { navigate: (page: string) => void }
const Gallery = ({ images, label }: { images: string[]; label: string }) => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((src,i)=><img key={i} src={src} alt={`${label} ${i+1}`} className="w-full h-auto"/>)}</div>

export default function SuitmakeProject({ navigate }: Props) {
  const socialImages = [social1,social2,social4,social9]
  const productImages = [product1,product2,product5,product6,product7,product8,product9,product10,product11,product12,product13]
  const jenImages = [jen1,jen2,jen3,jen5]
  const modelImages = [model1a,model1b,model1c,model1d,model2a,model2b,model3a,model3b]
  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}>
      <div className="max-w-screen-xl mx-auto">
        <button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button>
        <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Photography · Social Media · Digital Design · Seoul · 2019</p>
        <h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>Suitmake<br/><em>Brand Content & Digital Design</em></h1>
      </div>
    </section>
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">{[['Brand','Suitmake'],['Founder','Jen Auh'],['Role','Intern'],['Location','Itaewon, Seoul, South Korea'],['Year','2019']].map(([a,b])=><div key={a} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}</div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>Photography and digital content developed for a men’s styling brand in Itaewon.</h2>
          <p className="leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>I worked as an intern for Suitmake, Jen Auh’s men’s styling brand in Seoul. My work included product photography, social-media content and supporting digital design, alongside photography of men and Jen Auh for personal-brand and social-media use.</p>
          <p className="leading-relaxed" style={{color:'var(--color-muted)'}}>I also designed the brand’s WordPress website, which was published at the time. I no longer have screenshots of that original website, so this case study focuses on the surviving photography and social-media work.</p>
        </div>
      </div>
    </section>
    <section className="px-8 md:px-16 py-20" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{color:'var(--color-muted)'}}>01 · Photography</p><h3 className="text-3xl md:text-4xl mb-5" style={{fontFamily:'var(--font-display)'}}>Product Photography</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{color:'var(--color-muted)'}}>Product imagery created for Suitmake’s digital and social-media content while I was working with the brand.</p><Gallery images={productImages} label="Suitmake product photography" /></div></section>
    <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{color:'var(--color-muted)'}}>02 · Photography</p><h3 className="text-3xl md:text-4xl mb-5" style={{fontFamily:'var(--font-display)'}}>Jen Auh · Founder Portraits</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{color:'var(--color-muted)'}}>Portrait photography of Suitmake founder Jen Auh created for her personal branding and the brand’s social-media presence.</p><Gallery images={jenImages} label="Jen Auh photography" /></div></section>
    <section className="px-8 md:px-16 py-20" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{color:'var(--color-muted)'}}>03 · Photography</p><h3 className="text-3xl md:text-4xl mb-5" style={{fontFamily:'var(--font-display)'}}>Suitmake Model Photography</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{color:'var(--color-muted)'}}>Photography of men styled through Suitmake, documenting the brand’s approach to personal styling and presentation.</p><Gallery images={modelImages} label="Suitmake model photography" /></div></section>
    <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{color:'var(--color-muted)'}}>04 · Social Media</p><h3 className="text-3xl md:text-4xl mb-5" style={{fontFamily:'var(--font-display)'}}>Social Media & Digital Content</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{color:'var(--color-muted)'}}>A reduced selection of the surviving social-media materials from my time with Suitmake.</p><Gallery images={socialImages} label="Suitmake social media design" /></div></section>
  </article>
}
