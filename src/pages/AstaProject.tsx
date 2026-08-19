import pubGolf from '@/imports/Asta_Pub_Golf_April262025-03.jpg'
import freshers from '@/imports/IMG_3584.PNG'
import election from '@/imports/IMG_3591.PNG'
import antidisc from '@/imports/IMG_3596.PNG'
import thriftPhone1 from '@/imports/IMG_3601.PNG'
import thriftPhone2 from '@/imports/IMG_3602.PNG'
import thrift1 from '@/imports/Summer_Thrift_3-02.jpg'
import thrift2 from '@/imports/Summer_Thrift_3.jpg'
import thrift3 from '@/imports/Summer_Thrift-03.jpg'
import thrift4 from '@/imports/Summer_Thrift-04.jpg'

interface Props { navigate: (page: string) => void }

export default function AstaProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <div className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button onClick={() => navigate('work')} className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-16 transition-opacity hover:opacity-60" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}><span>←</span> Back to Work Index</button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>Visual Communication · Student Initiatives · AStA HSRW · 2025–2026</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>AStA HSRW<br /><em>Visual Communication & Student Initiatives</em></h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>A broader body of student-facing communication created across my roles as Public Relations Head and Campus Representative.</p>
        </div>
      </div>

      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-6">
            {[
              ['Roles', 'Public Relations Head; Campus Representative'],
              ['Scope', 'Visual communication, campaign graphics, event promotion, initiative development'],
              ['Platforms', 'Instagram, WhatsApp, print communication'],
              ['Years', '2025–2026'],
            ].map(([label, value]) => <div key={label} className="border-b pb-4" style={{ borderColor:'var(--color-border)' }}><p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>{label}</p><p className="text-sm leading-relaxed" style={{ fontFamily:'var(--font-body)', color:'var(--color-ink)' }}>{value}</p></div>)}
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily:'var(--font-display)', color:'var(--color-ink)' }}>Creating clearer communication around student opportunities, events, and participation.</h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>Across my AStA work, I created communication for different purposes: event promotion, student information, office-hours messaging, and initiatives intended to help students participate more directly in campus life.</p>
            <p className="text-base leading-relaxed" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>The visual identity itself already existed. My role was to work within that context, choose and structure copy, develop layouts, and bring different communications into a clearer and more consistent system.</p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-16" style={{ backgroundColor:'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>AStA Event Promotion</p>
          <h3 className="text-3xl md:text-4xl mb-6" style={{ fontFamily:'var(--font-display)', color:'var(--color-ink)' }}>Campaign graphics made to communicate individual events quickly and clearly.</h3>
          <p className="text-sm leading-relaxed max-w-3xl mb-10" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>These pieces are examples of event promotion rather than AStA branding. Each event had its own subject, audience, and visual direction, while still needing to function within the larger AStA communications environment.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <img src={pubGolf} alt="Pub Golf event promotion" className="w-full h-auto block" />
            <img src={freshers} alt="Freshers Week event promotion" className="w-full h-auto block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <img src={election} alt="AStA event and civic promotion" className="w-full h-auto block" />
            <img src={antidisc} alt="AStA event and antidiscrimination promotion" className="w-full h-auto block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <img src={thriftPhone1} alt="Summer Thrift event promotion in context" className="w-full h-auto block" />
            <img src={thriftPhone2} alt="Summer Thrift event promotion detail" className="w-full h-auto block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={thrift1} alt="Summer Thrift event promotion variation" className="w-full h-auto block" />
            <img src={thrift2} alt="Summer Thrift event promotion variation" className="w-full h-auto block" />
            <img src={thrift3} alt="Summer Thrift event promotion variation" className="w-full h-auto block" />
            <img src={thrift4} alt="Summer Thrift event promotion variation" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-16" style={{ backgroundColor:'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>Role in context</p></div>
          <div className="md:col-span-7"><p className="text-2xl md:text-3xl leading-relaxed mb-8 text-white" style={{ fontFamily:'var(--font-display)' }}>The work moved between communication design and student initiative development, depending on what the campus needed.</p><p className="text-sm leading-relaxed" style={{ fontFamily:'var(--font-body)', color:'rgba(255,255,255,0.45)' }}>That range is important to the case study: some outputs were straightforward event promotion, while others involved developing an initiative, presenting it internally, writing the copy, creating the communication materials, and supporting participant selection.</p></div>
        </div>
      </section>
    </article>
  )
}
