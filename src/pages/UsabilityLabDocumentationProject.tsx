import chess01 from '@/imports/ Robotic Chess_Lab_001.jpg'
import chess02 from '@/imports/ Robotic Chess_Lab_002.jpg'
import chess03 from '@/imports/ Robotic Chess_Lab_003.jpg'
import chess04 from '@/imports/ Robotic Chess_Lab_004.jpg'
import olfactory01 from '@/imports/ Olfactory Study_Feb2026_001.jpg'
import olfactory02 from '@/imports/ Olfactory Study_Feb2026_002.jpg'
import olfactory03 from '@/imports/ Olfactory Study_Feb2026_003.jpg'
import olfactory04 from '@/imports/ Olfactory Study_Feb2026_004.jpg'
import olfactory08 from '@/imports/ Olfactory Study_Feb2026_008.jpg'
import olfactory09 from '@/imports/ Olfactory Study_Feb2026_009.jpg'
import olfactory15 from '@/imports/ Olfactory Study_Feb2026_015.jpg'
import olfactory17 from '@/imports/ Olfactory Study_Feb2026_017.jpg'
import olfactory18 from '@/imports/ Olfactory Study_Feb2026_018.jpg'
import marius03 from '@/imports/Marius_Thesis_003.jpg'
import marius05 from '@/imports/Marius_Thesis_005.jpg'
import marius11 from '@/imports/Marius_Thesis_011.jpg'
import marius14 from '@/imports/Marius_Thesis_014.jpg'
import marius18 from '@/imports/Marius_Thesis_018.jpg'
import marius22 from '@/imports/Marius_Thesis_022.jpg'
import ai01 from '@/imports/IP_Roboitk AI Land_001.jpg'
import ai04 from '@/imports/IP_Roboitk AI Land_004.jpg'
import ai07 from '@/imports/IP_Roboitk AI Land_007.jpg'
import ai10 from '@/imports/IP_Roboitk AI Land_010.jpg'
import ai13 from '@/imports/IP_Roboitk AI Land_013.jpg'
import ai16 from '@/imports/IP_Roboitk AI Land_016.jpg'
import ai20 from '@/imports/IP_Roboitk AI Land_020.jpg'

interface Props { navigate: (page: string) => void }

const Gallery = ({ images, label }: { images: string[]; label: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {images.map((src, index) => (
      <div key={src} className={index === 0 ? 'md:col-span-2' : ''} style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <img src={src} alt={`${label} photographic documentation ${index + 1}`} className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
)

export default function UsabilityLabDocumentationProject({ navigate }: Props) {
  const chess = [chess01, chess02, chess03, chess04]
  const olfactory = [olfactory01, olfactory02, olfactory03, olfactory04, olfactory08, olfactory09, olfactory15, olfactory17, olfactory18]
  const marius = [marius03, marius05, marius11, marius14, marius18, marius22]
  const roboticAI = [ai01, ai04, ai07, ai10, ai13, ai16, ai20]

  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>
      <section className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button onClick={() => navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-body)' }}>← Back to Work Index</button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50" style={{ fontFamily: 'var(--font-body)' }}>Research Documentation · Photography · 2026</p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>HSRW Usability Lab<br /><em>Project Documentation</em></h1>
        </div>
      </section>
      <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16"><div className="md:col-span-4 space-y-5">{[['Role','Photographic Documentation'],['Institution','Hochschule Rhein-Waal'],['Context','Usability Lab'],['Subjects','Research studies, student theses, robotics'],['Year','2026']].map(([label,value]) => <div key={label} className="border-b pb-4" style={{ borderColor:'var(--color-border)' }}><p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color:'var(--color-muted)', fontFamily:'var(--font-body)' }}>{label}</p><p className="text-sm" style={{ color:'var(--color-ink)', fontFamily:'var(--font-body)' }}>{value}</p></div>)}</div><div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily:'var(--font-display)', color:'var(--color-ink)' }}>Documenting how people, technology, and research meet inside the lab.</h2><p className="text-base leading-relaxed mb-6" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>In 2026, I began photographing projects in the Usability Lab at Hochschule Rhein-Waal. The work is documentation rather than authorship of the underlying research. I observe each setup, interaction, participant activity, and technical detail and create a visual record of the work taking place.</p><p className="text-base leading-relaxed" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>The series now spans robotics, a student thesis, and an olfactory user study. Together they show different kinds of research through a consistent documentary approach.</p></div></div></section>
      <section className="px-8 md:px-16 py-20" style={{ backgroundColor:'var(--color-paper-dark)' }}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--color-muted)' }}>01 · Robotics</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>Robotic Chess</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>Photographic documentation of a robotic chess project in the HSRW Usability Lab, focusing on the physical setup, interaction, and relationship between the user and system.</p><Gallery images={chess} label="Robotic chess" /></div></section>
      <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--color-muted)' }}>02 · User Study</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>Olfactory Study</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>Documentation of an olfactory user study, capturing the study environment, materials, participant interaction, and the sensory research process through photography.</p><Gallery images={olfactory} label="Olfactory study" /></div></section>
      <section className="px-8 md:px-16 py-20" style={{ backgroundColor:'var(--color-paper-dark)' }}><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--color-muted)' }}>03 · Student Thesis</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>Marius’ Thesis</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>Photographic documentation of Marius’ student thesis involving robotics. The images focus on the thesis setup and the technology in use without presenting the research itself as my work.</p><Gallery images={marius} label="Marius thesis" /></div></section>
      <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color:'var(--color-muted)' }}>04 · Robotics</p><h3 className="text-3xl md:text-4xl mb-5" style={{ fontFamily:'var(--font-display)' }}>Robotic AI Land</h3><p className="text-sm leading-relaxed max-w-2xl mb-10" style={{ color:'var(--color-muted)' }}>A further robotics documentation series from the lab, photographed as part of the same ongoing effort to create clear visual records of technical and research projects.</p><Gallery images={roboticAI} label="Robotic AI Land" /></div></section>
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor:'var(--color-ink)' }}><div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12"><div className="md:col-span-4"><p className="text-[10px] tracking-[0.3em] uppercase" style={{ color:'rgba(255,255,255,.4)' }}>Documentation approach</p></div><div className="md:col-span-7"><p className="text-2xl md:text-3xl leading-relaxed mb-6 text-white" style={{ fontFamily:'var(--font-display)' }}>Each project requires a different way of seeing what matters.</p><p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,.5)' }}>My focus is on interaction, equipment, spatial context, process, and the details that help someone outside the project understand what is happening.</p></div></div></section>
    </article>
  )
}
