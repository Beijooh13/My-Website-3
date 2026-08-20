import photo1 from '@/imports/ Real Estate Photography_001.jpg'
import photo2 from '@/imports/ Real Estate Photography_002.jpg'
import photo3 from '@/imports/ Real Estate Photography_003.jpg'
import photo4 from '@/imports/ Real Estate Photography_004.jpg'
import photo5 from '@/imports/ Real Estate Photography_005.jpg'
import photo6 from '@/imports/ Real Estate Photography_006.jpg'
import photo7 from '@/imports/ Real Estate Photography_007.jpg'
import photo8 from '@/imports/ Real Estate Photography_008.jpg'
import photo9 from '@/imports/ Real Estate Photography_009.jpg'
import photo10 from '@/imports/ Real Estate Photography_010.jpg'
import photo11 from '@/imports/ Real Estate Photography_011.jpg'
import photo12 from '@/imports/ Real Estate Photography_012.jpg'
import photo13 from '@/imports/ Real Estate Photography_013.jpg'
import photo14 from '@/imports/ Real Estate Photography_014.jpg'
import photo15 from '@/imports/ Real Estate Photography_015.jpg'

interface Props { navigate: (page: string) => void }

export default function RealEstatePhotographyProject({ navigate }: Props) {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15]

  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}>
      <div className="max-w-screen-xl mx-auto">
        <button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button>
        <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Photography · Residential Spaces · Selected Work</p>
        <h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>Real Estate<br/><em>Photography</em></h1>
      </div>
    </section>

    <section className="py-24 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">
          {[['Role','Photographer'],['Focus','Residential interiors & properties'],['Format','Selected work']].map(([a,b])=><div key={a} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="text-4xl md:text-5xl mb-8 leading-[1.08]" style={{fontFamily:'var(--font-display)'}}>A glimpse of my real estate photography work.</h2>
          <p className="leading-relaxed" style={{color:'var(--color-muted)'}}>This is a small selection from a larger body of real estate photography. The images focus on presenting residential spaces clearly, documenting interiors, architectural details, light, layout, and the character of each property.</p>
        </div>
      </div>
    </section>

    <section className="px-8 md:px-16 pb-28">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img,i)=><img key={i} src={img} alt={`Real estate photography ${i+1}`} className="w-full h-auto" loading={i > 3 ? 'lazy' : 'eager'}/>) }
      </div>
    </section>
  </article>
}
