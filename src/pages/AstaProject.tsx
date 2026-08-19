import office1 from '@/imports/ AStA Branding_Office Hours Carousel_001.png'
import office2 from '@/imports/ AStA Branding_Office Hours Carousel_002.png'
import office3 from '@/imports/ AStA Branding_Office Hours Carousel_003.png'
import office4 from '@/imports/ AStA Branding_Office Hours Carousel_004.png'
import pubGolf from '@/imports/Asta_Pub_Golf_April262025-03.jpg'
import thrift1 from '@/imports/Summer_Thrift_3-02.jpg'
import thrift2 from '@/imports/Summer_Thrift_3.jpg'
import thrift3 from '@/imports/Summer_Thrift-03.jpg'
import thrift4 from '@/imports/Summer_Thrift-04.jpg'
import poster1 from '@/imports/00001AStA Posters_.jpg'
import poster2 from '@/imports/00002AStA Posters_.jpg'
import poster3 from '@/imports/00003AStA Posters_.jpg'
import poster4 from '@/imports/00004AStA Posters_.jpg'
import poster5 from '@/imports/00005AStA Posters_.jpg'
import event1 from '@/imports/IMG_3097.PNG'
import event2 from '@/imports/IMG_3100 copy.PNG'
import event3 from '@/imports/IMG_3101 copy.PNG'
import event4 from '@/imports/IMG_3102 2.PNG'
import event5 from '@/imports/IMG_3104 2.PNG'
import event6 from '@/imports/IMG_3104.PNG'
import event7 from '@/imports/IMG_3105 copy.PNG'
import event8 from '@/imports/IMG_3106.PNG'
import event9 from '@/imports/IMG_3107.PNG'

interface Props { navigate: (page: string) => void }
const Gallery = ({images,label}:{images:string[];label:string}) => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((src,i)=><img key={src} src={src} alt={`${label} ${i+1}`} className="w-full h-auto block" />)}</div>

export default function AstaProject({ navigate }: Props) {
  const officeHours=[office1,office2,office3,office4]
  const eventPromotion=[pubGolf,thrift1,thrift2,thrift3,thrift4,poster1,poster2,poster3,poster4,poster5,event1,event2,event3,event4,event5,event6,event7,event8,event9]
  return <article className="page-enter" style={{backgroundColor:'var(--color-paper)'}}>
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto"><button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button><p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Visual Communication · Student Initiatives · 2025–2026</p><h1 className="text-5xl md:text-7xl lg:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>AStA HSRW<br/><em>Visual Communication & Student Initiatives</em></h1></div></section>

    <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16"><div className="md:col-span-4 space-y-5">{[['Roles','Public Relations Head; Campus Representative'],['Scope','Visual communication, copy, event promotion, initiative development'],['Platforms','Instagram, WhatsApp, print'],['Years','2025–2026']].map(([a,b])=><div key={a} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}</div><div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>Creating clearer communication around student opportunities, events, and participation.</h2><p className="leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>Across my AStA roles, I created communication for office hours, individual events, student information, and initiatives intended to help students participate more directly in campus life. The AStA color identity already existed; my role was to structure copy, develop layouts, and create communication that felt clearer and more consistent.</p><p className="leading-relaxed" style={{color:'var(--color-muted)'}}>I also initiated the Student Workshop Initiative, presented it to AStA, wrote the copy and designed the promotional communication, and have been involved in selecting participants for the Kamp-Lintfort campus.</p></div></div></section>

    <section className="py-20 px-8 md:px-16" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{color:'var(--color-muted)'}}>01 · Student Information</p><h3 className="text-3xl md:text-4xl mb-5" style={{fontFamily:'var(--font-display)'}}>Office Hours Communication</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{color:'var(--color-muted)'}}>A carousel system created to make AStA availability easier for students to understand. This work extends the existing identity through layout, text hierarchy, and repeatable social-media communication.</p><Gallery images={officeHours} label="AStA office hours communication"/></div></section>

    <section className="py-20 px-8 md:px-16"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{color:'var(--color-muted)'}}>02 · Event Promotion</p><h3 className="text-3xl md:text-4xl mb-5" style={{fontFamily:'var(--font-display)'}}>AStA Events</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{color:'var(--color-muted)'}}>These graphics belong to event promotion rather than AStA branding. They include Pub Golf, Summer Thrift & Treats, and additional student-event communications developed for different audiences and formats.</p><Gallery images={eventPromotion} label="AStA event promotion"/></div></section>

    <section className="py-28 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-12"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase" style={{color:'rgba(255,255,255,.4)'}}>Role in context</p></div><div className="md:col-span-7"><p className="text-2xl md:text-3xl leading-relaxed text-white mb-6" style={{fontFamily:'var(--font-display)'}}>The work moves between communication design and student initiative development depending on what the campus needs.</p><p className="text-sm leading-relaxed text-white/50">Some outputs are straightforward promotion. Others begin earlier, with identifying an opportunity, proposing an initiative, writing the message, designing the system, and helping bring participants into it.</p></div></div></section>
  </article>
}
