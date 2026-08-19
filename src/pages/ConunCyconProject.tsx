import wp1 from '@/imports/CyconWP_Port_2025.jpg'
import wp2 from '@/imports/CyconWP_Port_202516.jpg'
import wp3 from '@/imports/CyconWP_Port_202517.jpg'
import wp4 from '@/imports/CyconWP_Port_20252.jpg'

interface Props { navigate: (page: string) => void }

export default function ConunCyconProject({ navigate }: Props) {
  const images = [wp1, wp2, wp3, wp4]
  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}>
      <div className="max-w-screen-xl mx-auto">
        <button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button>
        <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Digital Publication Design · South Korea · c. 2019–2020</p>
        <h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>Cycon<br/><em>White-Paper Design</em></h1>
      </div>
    </section>
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-5">
          {[["Role","UX/UI Designer"],["Industry","Crypto / decentralized storage"],["Period","c. 2019–2020"],["Scope","White-paper design proposal"]].map(([a,b])=><div key={a} className="border-b pb-4" style={{borderColor:'var(--color-border)'}}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>A publication design proposal created while working in UX/UI for a decentralized-storage company.</h2>
          <p className="leading-relaxed" style={{color:'var(--color-muted)'}}>I developed and presented multiple visual directions for the Cycon white paper. The pages shown here are proposal work and were not ultimately published or used by the company. The project was later handed to another intern to continue.</p>
        </div>
      </div>
    </section>
    <section className="px-8 md:px-16 pb-28">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src,i)=><img key={i} src={src} alt={`Cycon white-paper design ${i+1}`} className="w-full h-auto"/>)}
      </div>
    </section>
  </article>
}