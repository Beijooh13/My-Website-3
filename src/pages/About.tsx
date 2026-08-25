interface AboutProps {
  navigate: (page: string) => void
}

const services = [
  'UI/UX Design & Usability Research',
  'Graphic Design & Visual Identity',
  'Photography & Art Direction',
  'Editorial & Publication Design',
  'Experience Design',
  'Content Strategy',
]

const interests = [
  'Usability engineering and how people experience systems, spaces, and services',
  'Photography as a tool for understanding culture and place',
  'Visual storytelling across photography, design, and content',
]

export default function About({ navigate }: AboutProps) {
  return (
    <div className="page-enter">
      <div className="min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 pt-36" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>About</p>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-none mb-10" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>Andrea<br /><em>Polk</em></h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-10" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>UI/UX designer, graphic designer, and photographer.</p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Currently based in Kamp-Lintfort, Germany.</p>
            <p className="text-xs tracking-[0.15em] uppercase pt-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Open to new commissions</p>
          </div>
        </div>
      </div>

      <section className="py-28 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16"><div className="md:col-span-3"><p className="text-[10px] tracking-[0.3em] uppercase sticky top-32" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Biography</p></div><div className="md:col-span-7 space-y-6"><p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>Andrea Polk is a multidisciplinary designer with a passion for connecting creative disciplines — photography, graphic design, and UX thinking — to produce work that is functional, striking, and human-centered.</p><p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Her background spans graphic design, content creation, and photography, building a broad skill set across visual communication, editorial work, and experience design.</p><p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Andrea is currently completing a Master's degree in Usability Engineering (M.Sc.) at Hochschule Rhein-Waal University in Germany — deepening her understanding of how people experience systems, spaces, and services at a research level.</p><p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>The result is a practice that thinks in experiences first, and aesthetics second — but refuses to treat the two as separate questions.</p></div></div></section>

      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}><div className="max-w-screen-xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"><div className="md:col-span-5"><p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Design Philosophy</p><div className="space-y-4">{['Experiences should be functional, striking, and human-centered.','Photography is a research tool as much as a creative one.','The best graphic design understands the person who will live with it.'].map((line) => (<p key={line} className="text-base text-white/70 border-b pb-4 border-white/10" style={{ fontFamily: 'var(--font-body)' }}>— {line}</p>))}</div></div><div className="md:col-span-6 md:col-start-7"><h2 className="text-4xl md:text-5xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>"I document how people experience systems, spaces, and services — then design what should have been there."</h2></div></div></div></section>

      <section className="py-28 px-8 md:px-16"><div className="max-w-screen-xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-12 gap-16"><div className="md:col-span-3"><p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Services</p></div><div className="md:col-span-8"><div className="grid grid-cols-1 md:grid-cols-2 gap-0">{services.map((service, i) => (<div key={service} className="border-b py-5 flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}><span className="text-base" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>{service}</span><span className="text-[10px] tracking-widest" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-border)' }}>0{i + 1}</span></div>))}</div></div></div></div></section>

      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}><div className="max-w-screen-xl mx-auto"><div className="grid grid-cols-1 md:grid-cols-12 gap-16"><div className="md:col-span-3"><p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>Current Interests</p></div><div className="md:col-span-8 space-y-4">{interests.map((interest) => (<div key={interest} className="border-b py-4 flex gap-4 items-start" style={{ borderColor: 'var(--color-border)' }}><span className="text-xs mt-1 flex-shrink-0" style={{ color: 'var(--color-sand)' }}>→</span><p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>{interest}</p></div>))}</div></div></div></section>

      <section className="py-28 px-8 md:px-16 text-center"><div className="max-w-2xl mx-auto"><h2 className="text-4xl md:text-5xl mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>Let's make something together.</h2><button onClick={() => navigate('contact')} className="group inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase border-b pb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)', borderColor: 'var(--color-ink)' }}>Get in touch<span className="w-6 h-px transition-all duration-300 group-hover:w-12" style={{ backgroundColor: 'var(--color-ink)' }} /></button></div></section>
    </div>
  )
}