import mgr01 from '@/imports/CONUN_MGR-01.png'
import mgr03 from '@/imports/CONUN_MGR-03.png'
import mgr05 from '@/imports/CONUN_MGR-05.png'
import mgr07 from '@/imports/CONUN_MGR-07.png'
import mgr09 from '@/imports/CONUN_MGR-09.png'
import mgr11 from '@/imports/CONUN_MGR-11.png'
import mgr13 from '@/imports/CONUN_MGR-13.png'
import cycon1 from '@/imports/CyconWP_Port_2025.jpg'
import cycon2 from '@/imports/CyconWP_Port_20252.jpg'
import cycon16 from '@/imports/CyconWP_Port_202516.jpg'
import cycon17 from '@/imports/CyconWP_Port_202517.jpg'

interface Props { navigate: (page: string) => void }

const Gallery = ({ images, label }: { images: string[]; label: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {images.map((src, index) => <img key={src} src={src} alt={`${label} ${index + 1}`} className="w-full h-auto block" />)}
  </div>
)

export default function ConunCyconProject({ navigate }: Props) {
  const manager = [mgr01, mgr03, mgr05, mgr07, mgr09, mgr11, mgr13]
  const whitepaper = [cycon1, cycon2, cycon16, cycon17]

  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button onClick={() => navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50 hover:text-white transition-colors">← Back to Work Index</button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">UX/UI Design · Digital Products · c. 2019–2020</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>Conun + Cycon<br /><em>Product & Communication Design</em></h1>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-5">
            {[
              ['Role', 'UX/UI Designer'],
              ['Company', 'Conun'],
              ['Industry', 'Cryptocurrency / decentralized storage'],
              ['Scope', 'Website, software concepts, digital publication'],
              ['Period', 'c. 2019–2020'],
            ].map(([label, value]) => <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}><p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--color-muted)' }}>{label}</p><p className="text-sm">{value}</p></div>)}
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>Exploring interfaces and communication for early-stage decentralized technology.</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-muted)' }}>As a UX/UI designer at Conun, I worked on website design and interface concepts for software the company was testing around cryptocurrency and decentralized storage. Some of the work shown here remained exploratory because I left before the product work was completed.</p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-muted)' }}>I also developed proposed design directions for the Cycon white paper. The white-paper designs shown here were presented internally but were not ultimately used. They are included as concept work rather than published company material.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--color-muted)' }}>01 · Product Interface</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily: 'var(--font-display)' }}>Conun Manager</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: 'var(--color-muted)' }}>Interface concepts created while the company was testing different software directions. These screens represent design exploration rather than a completed shipped product.</p><Gallery images={manager} label="Conun Manager interface" /></div>
      </section>

      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--color-muted)' }}>02 · Editorial / Digital Publication</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily: 'var(--font-display)' }}>Cycon White Paper</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color: 'var(--color-muted)' }}>A proposed visual direction for the Cycon white paper. I presented multiple design directions; the version shown here was not published and the project was later continued by another intern.</p><Gallery images={whitepaper} label="Cycon white paper design" /></div>
      </section>
    </article>
  )
}
