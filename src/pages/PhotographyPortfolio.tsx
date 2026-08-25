import { useNavigate } from 'react-router-dom'
import portrait from '@/imports/Seoul Photography_00005.jpg'
import dance from '@/imports/ 2024_Heat Photography_005.jpg'
import realEstate from '@/imports/ Real Estate Photography_012.jpg'
import nga from '@/imports/ Nga Photography_009.jpg'
import rvn from '@/imports/00001RVN Photos single_.jpg'
import lab from '@/imports/Marius_Thesis_011.jpg'
import landscape from '@/imports/Landscaping_021.jpg'
import podcast from '@/imports/Diogo_Podcast_Event_20.jpg'

const work = [
  { title: 'Portrait & Street', meta: 'Seoul · 2021–2022', image: portrait, span: 'md:col-span-7', height: 'h-[640px]' },
  { title: 'Fashion', meta: 'Selected Work', image: nga, span: 'md:col-span-5', height: 'h-[640px]' },
  { title: 'Dance & Performance', meta: 'Competition Photography · 2022–2024', image: dance, span: 'md:col-span-8', height: 'h-[520px]' },
  { title: 'Editorial Fashion', meta: 'RVN · c. 2020', image: rvn, span: 'md:col-span-4', height: 'h-[520px]' },
  { title: 'Spaces', meta: 'Real Estate · Selected Work', image: realEstate, span: 'md:col-span-5', height: 'h-[560px]' },
  { title: 'Documentation', meta: 'People, Process & Place · 2025–2026', image: lab, span: 'md:col-span-7', height: 'h-[560px]' },
]

export default function PhotographyPortfolio() {
  const navigate = useNavigate()
  return (
    <div className="page-enter pt-16">
      <section className="px-8 md:px-16 pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: 'var(--color-muted)' }}>Photography</p>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.95]" style={{ fontFamily: 'var(--font-display)', fontWeight: 520 }}>
              Andrea Polk<br/><em style={{ fontWeight: 330 }}>Photography</em>
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-2">
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Photography for people, brands, spaces, performances, and moments that need to feel alive rather than generic.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-28">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative overflow-hidden h-[72vh] min-h-[540px] img-zoom">
            <img src={podcast} alt="Event photography by Andrea Polk" className="w-full h-full object-cover"/>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,13,11,.55), transparent 55%)' }} />
            <div className="absolute left-7 right-7 bottom-7 md:left-10 md:right-10 md:bottom-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 text-white">
              <div><p className="text-[10px] tracking-[.25em] uppercase mb-2 text-white/65">Selected Photography</p><h2 className="text-3xl md:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>People, atmosphere, and visual stories.</h2></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-32">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-end justify-between mb-12 border-b pb-6" style={{ borderColor: 'var(--color-border)' }}>
            <div><p className="text-[10px] tracking-[.3em] uppercase mb-3" style={{ color: 'var(--color-muted)' }}>Portfolio</p><h2 className="text-4xl md:text-6xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 520 }}>Selected Work</h2></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {work.map((item) => (
              <article key={item.title} className={`${item.span} ${item.height} relative overflow-hidden group`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8" style={{ background: 'linear-gradient(to top, rgba(13,13,11,.68), transparent)' }}>
                  <p className="text-[10px] tracking-[.22em] uppercase text-white/60 mb-1">{item.meta}</p>
                  <h3 className="text-white text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-28" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <p className="text-[10px] tracking-[.3em] uppercase mb-5 text-white/45">Available for selected projects</p>
            <h2 className="text-white text-5xl md:text-7xl leading-[1.02]" style={{ fontFamily: 'var(--font-display)', fontWeight: 430 }}>Have something you want<br/><em>to make visible?</em></h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-white/55 leading-relaxed mb-8">Portraits, fashion, events, documentation, spaces, and visual campaigns.</p>
            <button onClick={() => navigate('/contact')} className="accent-button">Work with me <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      </section>
    </div>
  )
}
