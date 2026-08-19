import { useEffect, useRef } from 'react'
import photoBL from '@/imports/11032021_Photos_BL.jpg'
import mainPage from '@/imports/Main Page.jpg'
import hw1 from '@/imports/Holiday_World_1.jpg'
import branson3 from '@/imports/Port_2025_Branson3.jpg'
import photoD from '@/imports/02122021_D.jpg'
import codeGreen from '@/imports/1.jpg'

interface HomeProps {
  navigate: (page: string, project?: string) => void
}

export default function Home({ navigate }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY
        heroRef.current.style.transform = `translateY(${y * 0.35}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="page-enter">
      <section className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div ref={heroRef} className="absolute inset-0 w-full h-[115%] -top-[7%]">
          <img src={photoBL} alt="Street photography — Seoul, November 2021" className="w-full h-full object-cover object-center" style={{ filter: 'brightness(0.65)' }} />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 md:px-16">
          <div className="max-w-5xl">
            <p className="text-xs tracking-[0.25em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>Graphic Design · Photography · UX · Experience Design</p>
            <h1 className="text-white text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.92] mb-8 uppercase" style={{ fontFamily: 'var(--font-display)' }}>I design experiences<br/><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.9)', color: 'transparent' }}>people remember.</span></h1>
            <button onClick={() => navigate('work')} className="group flex items-center gap-3 text-white text-sm tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-body)' }}><span className="link-underline">View Work</span><span className="w-8 h-px bg-white transition-all duration-300 group-hover:w-14" /></button>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pt-20 md:pt-28 pb-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-end justify-between gap-8 mb-8">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color:'var(--color-muted)' }}>Visual practice · observation · people · place</p>
            <span className="hidden md:block text-[10px] tracking-[0.25em] uppercase" style={{ color:'var(--color-muted)' }}>Andrea Polk</span>
          </div>
          <div className="overflow-hidden" style={{backgroundColor:'var(--color-paper-dark)'}}><img src={mainPage} alt="Andrea Polk — selected visual work" className="w-full h-auto block" /></div>
        </div>
      </section>

      <section className="py-28 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-16"><div><p className="text-xs tracking-[0.25em] uppercase mb-3" style={{color:'var(--color-muted)'}}>Work</p><h2 className="text-5xl md:text-6xl uppercase" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>Selected Work</h2></div><button onClick={()=>navigate('work')} className="hidden md:flex items-center gap-3 text-sm tracking-[0.12em] uppercase link-underline" style={{color:'var(--color-ink)'}}>All projects</button></div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 img-zoom cursor-pointer group" onClick={()=>navigate('project','code-green')}><div className="relative aspect-[4/5] md:aspect-auto md:h-[680px]"><img src={codeGreen} alt="Code Green — IDE extension for sustainable software" className="w-full h-full object-cover"/><div className="absolute bottom-0 left-0 p-8"><p className="text-white/70 text-[10px] tracking-[0.25em] uppercase mb-2">Research · UX/UI · 2025</p><h3 className="text-white text-3xl leading-tight uppercase" style={{fontFamily:'var(--font-display)'}}>Code Green<br/>IDE Extension</h3></div></div></div>
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="img-zoom cursor-pointer group flex-1" onClick={()=>navigate('project','portrait-photography')}><div className="relative h-[320px] md:h-full" style={{minHeight:'320px'}}><img src={photoD} alt="Portrait photography — Seoul studio series" className="w-full h-full object-cover object-top"/><div className="absolute bottom-0 left-0 p-6"><p className="text-white/70 text-[10px] tracking-[0.25em] uppercase mb-1">Photography · 2021–2022</p><h3 className="text-white text-xl uppercase" style={{fontFamily:'var(--font-display)'}}>Seoul Portrait Series</h3></div></div></div>
              <div className="img-zoom cursor-pointer group" onClick={()=>navigate('project','branson-magazine')}><div className="relative h-[280px]"><img src={branson3} alt="Explore Branson — magazine ad campaign" className="w-full h-full object-cover"/><div className="absolute bottom-0 left-0 p-6"><p className="text-white/70 text-[10px] tracking-[0.25em] uppercase mb-1">Editorial · Print · 2024</p><h3 className="text-white text-xl uppercase" style={{fontFamily:'var(--font-display)'}}>Explore Branson Campaign</h3></div></div></div>
            </div>
            <div className="md:col-span-12 img-zoom cursor-pointer group" onClick={()=>navigate('project','holiday-world')}><div className="relative h-[300px]"><img src={hw1} alt="Holiday World Apparel — Sunshine tee" className="w-full h-full object-cover object-center"/><div className="absolute bottom-0 left-0 p-8"><p className="text-white/70 text-[10px] tracking-[0.25em] uppercase mb-2">Apparel Design · Objects · 2025</p><h3 className="text-white text-3xl leading-tight uppercase" style={{fontFamily:'var(--font-display)'}}>Holiday World · Apparel Collection</h3></div></div></div>
          </div>
          <div className="mt-6 md:hidden"><button onClick={()=>navigate('work')} className="text-sm tracking-[0.12em] uppercase link-underline">All projects</button></div>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center"><div className="md:col-span-7"><h2 className="text-white text-4xl md:text-6xl lg:text-7xl leading-[1.02] uppercase" style={{fontFamily:'var(--font-display)'}}>Every project begins as a story about how someone moves through the world.</h2></div><div className="md:col-span-4 md:col-start-9"><p className="text-base leading-relaxed mb-8" style={{color:'rgba(255,255,255,0.55)'}}>Andrea Polk is a multidisciplinary designer working across graphic design, photography, UX research, and experience design.</p><button onClick={()=>navigate('about')} className="group flex items-center gap-3 text-sm tracking-[0.15em] uppercase" style={{color:'var(--color-sand)'}}><span className="link-underline">About Andrea</span><span className="w-6 h-px" style={{backgroundColor:'var(--color-sand)'}}/></button></div></div></section>

      <section className="py-32 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"><div><p className="text-xs tracking-[0.25em] uppercase mb-6" style={{color:'var(--color-muted)'}}>About</p><h2 className="text-5xl md:text-6xl mb-10 leading-tight uppercase" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>Experience-first. Always.</h2><p className="text-sm mb-10" style={{color:'var(--color-muted)'}}>Currently at Hochschule Rhein-Waal, Germany.</p><button onClick={()=>navigate('about')} className="group flex items-center gap-3 text-sm tracking-[0.15em] uppercase"><span className="link-underline">Read more</span></button></div><div className="img-zoom" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="aspect-[4/3]"><img src={branson3} alt="Explore Branson — campaign work" className="w-full h-full object-cover"/></div></div></div></section>
    </div>
  )
}
