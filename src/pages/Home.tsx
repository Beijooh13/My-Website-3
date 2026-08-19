import { useEffect, useRef } from 'react'
import photoBL from '@/imports/11032021_Photos_BL.jpg'
import mainPage from '@/imports/Main Page.jpg'
import hw2 from '@/imports/Holiday_World_2.jpg'
import branson3 from '@/imports/Port_2025_Branson3.jpg'
import photoD from '@/imports/02122021_D.jpg'
import codeGreen from '@/imports/1.jpg'

interface HomeProps { navigate: (page: string, project?: string) => void }

export default function Home({ navigate }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll=()=>{ if(heroRef.current) heroRef.current.style.transform=`translateY(${window.scrollY*.35}px)` }
    window.addEventListener('scroll',handleScroll,{passive:true}); return()=>window.removeEventListener('scroll',handleScroll)
  },[])

  return <div className="page-enter">
    <section className="relative w-full h-screen overflow-hidden" style={{backgroundColor:'var(--color-ink)'}}>
      <div ref={heroRef} className="absolute inset-0 w-full h-[115%] -top-[7%]"><img src={photoBL} alt="Street photography — Seoul" className="w-full h-full object-cover object-center" style={{filter:'brightness(.64)'}}/></div>
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 md:px-16"><div className="max-w-5xl">
        <p className="text-xs tracking-[.2em] uppercase mb-6 text-white/60">Graphic Design · Photography · UX · Experience Design</p>
        <h1 className="text-white text-6xl md:text-8xl lg:text-[7rem] leading-[1.08] mb-8" style={{fontFamily:'var(--font-display)',fontWeight:520}}>I want to make<br/><em style={{fontWeight:330}}>experiences better.</em></h1>
        <button onClick={()=>navigate('work')} className="group flex items-center gap-3 text-white text-sm tracking-[.12em]"><span className="link-underline">View work</span><span className="w-8 h-px bg-white group-hover:w-14 transition-all"/></button>
      </div></div>
    </section>

    <section className="relative w-full overflow-hidden" style={{backgroundColor:'var(--color-ink)'}}>
      <img src={mainPage} alt="Selected visual work by Andrea Polk" className="w-full h-auto block"/>
      <div className="absolute top-0 left-0 right-0 flex justify-between p-5 md:p-8 text-white mix-blend-difference">
        <p className="text-[10px] md:text-xs tracking-[.2em] uppercase">Selected visual work</p><p className="hidden md:block text-[10px] tracking-[.2em] uppercase">Andrea Polk · Visual practice</p>
      </div>
    </section>

    <section className="py-28 px-8 md:px-16"><div className="max-w-screen-xl mx-auto">
      <div className="flex items-baseline justify-between mb-16"><div><p className="text-xs tracking-[.2em] uppercase mb-3" style={{color:'var(--color-muted)'}}>Work</p><h2 className="text-5xl md:text-7xl" style={{fontFamily:'var(--font-display)',fontWeight:520}}>Selected Work</h2></div><button onClick={()=>navigate('work')} className="hidden md:block text-sm link-underline">All projects</button></div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7 img-zoom cursor-pointer" onClick={()=>navigate('project','code-green')}><div className="relative aspect-[4/5] md:h-[680px] md:aspect-auto"><img src={codeGreen} className="w-full h-full object-cover" alt="Code Green"/><div className="absolute bottom-0 p-8 text-white"><p className="text-[10px] tracking-[.2em] uppercase mb-2">Research · UX/UI · 2025</p><h3 className="text-3xl" style={{fontFamily:'var(--font-display)'}}>Code Green <em>IDE Extension</em></h3></div></div></div>
        <div className="md:col-span-5 flex flex-col gap-4"><div className="img-zoom cursor-pointer flex-1" onClick={()=>navigate('project','portrait-photography')}><div className="relative h-[320px] md:h-full"><img src={photoD} className="w-full h-full object-cover object-top" alt="Seoul Portrait Series"/><div className="absolute bottom-0 p-6 text-white"><p className="text-[10px] tracking-[.2em] uppercase mb-1">Photography · 2021–2022</p><h3 className="text-2xl" style={{fontFamily:'var(--font-display)'}}>Seoul Portrait Series</h3></div></div></div><div className="img-zoom cursor-pointer" onClick={()=>navigate('project','branson-magazine')}><div className="relative h-[280px]"><img src={branson3} className="w-full h-full object-cover" alt="Explore Branson"/><div className="absolute bottom-0 p-6 text-white"><p className="text-[10px] tracking-[.2em] uppercase mb-1">Editorial · Print · 2024</p><h3 className="text-2xl" style={{fontFamily:'var(--font-display)'}}>Explore Branson Campaign</h3></div></div></div></div>
        <div className="md:col-span-12 img-zoom cursor-pointer" onClick={()=>navigate('project','holiday-world')}><div className="relative h-[300px]"><img src={hw2} className="w-full h-full object-cover object-center" alt="LIPCO Group souvenir shirt design"/><div className="absolute bottom-0 p-8 text-white"><p className="text-[10px] tracking-[.2em] uppercase mb-2">Souvenir Design · Kirbyville, Missouri · 2024</p><h3 className="text-3xl" style={{fontFamily:'var(--font-display)'}}>LIPCO Group · <em>Souvenir Product Design</em></h3></div></div></div>
      </div>
    </div></section>

    <section className="py-24 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16 items-center"><div className="md:col-span-7"><h2 className="text-white text-4xl md:text-6xl leading-[1.08]" style={{fontFamily:'var(--font-display)',fontWeight:430}}>Every project begins as a story about how someone <em>moves through the world.</em></h2></div><div className="md:col-span-4 md:col-start-9"><p className="leading-relaxed mb-8 text-white/55">Andrea Polk is a multidisciplinary designer working across graphic design, photography, UX research, and experience design.</p><button onClick={()=>navigate('about')} className="text-sm text-white link-underline">About Andrea</button></div></div></section>

    <section className="py-32 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-center"><div><p className="text-xs tracking-[.2em] uppercase mb-6" style={{color:'var(--color-muted)'}}>About</p><h2 className="text-5xl md:text-6xl mb-10 leading-[1.08]" style={{fontFamily:'var(--font-display)',fontWeight:520}}>Experience-first. <em>Always.</em></h2><p className="text-sm mb-10" style={{color:'var(--color-muted)'}}>Currently at Hochschule Rhein-Waal, Germany.</p><button onClick={()=>navigate('about')} className="text-sm link-underline">Read more</button></div><div className="img-zoom"><div className="aspect-[4/3]"><img src={branson3} alt="Explore Branson" className="w-full h-full object-cover"/></div></div></div></section>
  </div>
}
