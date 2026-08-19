import pubGolf from '@/imports/Asta_Pub_Golf_April262025-03.jpg'
import office1 from '@/imports/ AStA Branding_Office Hours Carousel_001.png'
import office2 from '@/imports/ AStA Branding_Office Hours Carousel_002.png'
import office3 from '@/imports/ AStA Branding_Office Hours Carousel_003.png'
import office4 from '@/imports/ AStA Branding_Office Hours Carousel_004.png'
import workshop1 from '@/imports/1.Student Workshop Initiative001.png'
import workshop2 from '@/imports/2.Student Workshop Initiative002.png'
import workshop3 from '@/imports/3.Student Workshop Initiative003.png'
import workshop4 from '@/imports/4.Student Workshop Initiative004.png'
import workshop5 from '@/imports/5.Student Workshop Initiative005.png'
import thrift from '@/imports/Summer_Thrift-03.jpg'

interface Props { navigate: (page: string) => void }

export default function AstaVisualCommunicationProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button onClick={() => navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>← Back to Work Index</button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50" style={{ fontFamily: 'var(--font-body)' }}>Visual Communication · Student Initiatives · 2025–2026</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>AStA HSRW<br /><em>Communication & Initiatives</em></h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">{[
          ['Roles','Public Relations Head; Campus Representative'],
          ['Institution','AStA Hochschule Rhein-Waal'],
          ['Scope','Campaign graphics, copy, student-facing communication, initiative development'],
          ['Featured Initiative','Student Workshop Initiative'],
          ['Period','2025–2026'],
        ].map(([label,value])=><div key={label} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>{label}</p><p className="text-sm leading-relaxed" style={{color:'var(--color-ink)',fontFamily:'var(--font-body)'}}>{value}</p></div>)}</div>
        <div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>Creating clearer student communication while developing programs that give students reasons to participate.</h2><p className="text-base leading-relaxed mb-6" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>Across my work as Public Relations Head and later Campus Representative, I created student-facing visual communication within AStA's existing identity. I selected and structured copy, developed layouts, and tried to bring consistency across materials without claiming ownership of the established AStA brand or colour system.</p><p className="text-base leading-relaxed" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>The work gradually expanded beyond promoting existing events. I began developing initiatives myself, including the Student Workshop Initiative, which I proposed to AStA and am now helping implement for the Kamp-Lintfort campus.</p></div>
      </div></section>

      <section className="py-20 px-8 md:px-16" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>Student Workshop Initiative</p><h3 className="text-3xl md:text-4xl leading-tight mb-5" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>From proposal to participant selection.</h3><p className="text-sm leading-relaxed" style={{fontFamily:'var(--font-body)',color:'var(--color-muted)'}}>I initiated the program, presented the concept to AStA, wrote the communication, designed the campaign materials, and am involved in selecting participants for the Kamp-Lintfort campus. The goal is to create opportunities for students to share skills and lead workshops for other students.</p></div><div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">{[workshop1,workshop2,workshop3,workshop4,workshop5].map((src,i)=><img key={i} src={src} alt={`Student Workshop Initiative communication ${i+1}`} className={`w-full h-auto block ${i===0?'md:col-span-2':''}`} />)}</div></div></div></section>

      <section className="py-20 px-8 md:px-16"><div className="max-w-screen-xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>Office Hours Communication</p><h3 className="text-3xl md:text-4xl leading-tight" style={{fontFamily:'var(--font-display)',color:'var(--color-ink)'}}>Making routine information easier to recognize and act on.</h3></div><div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">{[office1,office2,office3,office4].map((src,i)=><img key={i} src={src} alt={`AStA office hours carousel ${i+1}`} className="w-full h-auto block" />)}</div></div></div></section>

      <section className="py-20 px-8 md:px-16" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>Additional communication</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><img src={pubGolf} alt="AStA Pub Golf communication" className="w-full h-auto block" /><img src={thrift} alt="AStA Summer Thrift communication" className="w-full h-auto block" /></div></div></section>

      <section className="py-28 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase" style={{color:'var(--color-muted)',fontFamily:'var(--font-body)'}}>Direction</p></div><div className="md:col-span-7"><p className="text-2xl md:text-3xl leading-relaxed text-white mb-6" style={{fontFamily:'var(--font-display)'}}>The most useful communication work here is connected to what happens after someone sees the graphic.</p><p className="text-sm leading-relaxed text-white/50" style={{fontFamily:'var(--font-body)'}}>That is the direction I want to continue developing: understanding what students and communities need, designing clearer ways to reach them, and helping shape the experiences that follow.</p></div></div></section>
    </article>
  )
}
