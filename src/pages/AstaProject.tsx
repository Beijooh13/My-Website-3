import office1 from '@/imports/ AStA Branding_Office Hours Carousel_001.png'
import office2 from '@/imports/ AStA Branding_Office Hours Carousel_002.png'
import office3 from '@/imports/ AStA Branding_Office Hours Carousel_003.png'
import workshop1 from '@/imports/1.Student Workshop Initiative001.png'
import workshop2 from '@/imports/2.Student Workshop Initiative002.png'
import workshop3 from '@/imports/3.Student Workshop Initiative003.png'
import workshop4 from '@/imports/4.Student Workshop Initiative004.png'
import workshop5 from '@/imports/5.Student Workshop Initiative005.png'
import workshopWhatsapp from '@/imports/Student Workshop Initiative_WhatsApp.jpg'
import pubGolf from '@/imports/Asta_Pub_Golf_April262025-03.jpg'
import freshers from '@/imports/IMG_3584.PNG'
import election from '@/imports/IMG_3591.PNG'
import antidisc from '@/imports/IMG_3596.PNG'
import event1 from '@/imports/IMG_3601.PNG'
import thrift1 from '@/imports/Summer_Thrift_3-02.jpg'
import thrift2 from '@/imports/Summer_Thrift_3.jpg'
import thrift3 from '@/imports/Summer_Thrift-03.jpg'

interface Props { navigate: (page: string) => void }
const Gallery = ({ images, label }: { images: string[]; label: string }) => <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{images.map((src,i)=><img key={i} src={src} alt={`${label} ${i+1}`} className="w-full h-auto" />)}</div>

export default function AstaProject({ navigate }: Props) {
  return <article className="page-enter" style={{ backgroundColor:'var(--color-paper)' }}>
    <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor:'var(--color-ink)' }}><div className="max-w-screen-xl mx-auto"><button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button><p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Visual Communication · Student Initiatives · Event Promotion</p><h1 className="text-5xl md:text-7xl lg:text-8xl leading-none text-white" style={{ fontFamily:'var(--font-display)' }}>AStA HSRW<br/><em>Visual Communication & Student Initiatives</em></h1></div></section>
    <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16"><div className="md:col-span-4 space-y-5">{[['Roles','Public Relations Head; Campus Representative'],['Scope','Visual communication, copy, student initiatives, event promotion'],['Institution','AStA Hochschule Rhein-Waal'],['Period','2025–2026']].map(([a,b])=><div key={a} className="border-b pb-4" style={{ borderColor:'var(--color-border)' }}><p className="text-[10px] uppercase tracking-[0.2em]" style={{ color:'var(--color-muted)' }}>{a}</p><p className="text-sm">{b}</p></div>)}</div><div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily:'var(--font-display)' }}>Communication work developed inside an active student-government environment.</h2><p className="leading-relaxed mb-5" style={{ color:'var(--color-muted)' }}>My AStA work spans several different kinds of contribution. I developed communication materials, wrote and structured copy, created event-promotion graphics, and originated the Student Workshop Initiative for my campus.</p><p className="leading-relaxed" style={{ color:'var(--color-muted)' }}>These sections are separated by purpose so event posters are presented as event promotion, while broader communication systems and initiatives are shown in their own context.</p></div></div></section>
    <section className="px-8 md:px-16 py-20" style={{ backgroundColor:'var(--color-paper-dark)' }}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color:'var(--color-muted)' }}>01 · Visual Communication</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>Office Hours Communication</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>A communication series developed within AStA’s existing visual context. I selected the copy and typography approach and worked with the established colour system to make office-hour information feel more coherent across posts.</p><Gallery images={[office1,office2,office3]} label="AStA office hours" /></div></section>
    <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color:'var(--color-muted)' }}>02 · Student Initiative</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>Student Workshop Initiative</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>I originated this initiative, presented it to AStA, developed the communication concept and copy, designed the promotional materials, and began selecting participants for the Kamp-Lintfort campus.</p><Gallery images={[workshop1,workshop2,workshop3,workshop4,workshop5,workshopWhatsapp]} label="Student Workshop Initiative" /></div></section>
    <section className="px-8 md:px-16 py-20" style={{ backgroundColor:'var(--color-paper-dark)' }}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] uppercase tracking-[0.3em] mb-3" style={{ color:'var(--color-muted)' }}>03 · Event Promotion</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>AStA Event Promotion</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>Posters and social-media graphics created to promote AStA events and campus programming. These are shown as event-promotion outputs rather than as a standalone AStA brand identity.</p><Gallery images={[pubGolf,freshers,election,antidisc,event1,thrift1,thrift2,thrift3]} label="AStA event promotion" /></div></section>
  </article>
}
