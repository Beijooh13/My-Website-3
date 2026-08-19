import chess1 from '@/imports/ Robotic Chess_Lab_001.jpg'
import chess2 from '@/imports/ Robotic Chess_Lab_002.jpg'
import chess3 from '@/imports/ Robotic Chess_Lab_003.jpg'
import chess4 from '@/imports/ Robotic Chess_Lab_004.jpg'
import olf1 from '@/imports/ Olfactory Study_Feb2026_001.jpg'
import olf2 from '@/imports/ Olfactory Study_Feb2026_002.jpg'
import olf3 from '@/imports/ Olfactory Study_Feb2026_003.jpg'
import olf4 from '@/imports/ Olfactory Study_Feb2026_004.jpg'
import marius1 from '@/imports/Marius_Thesis_003.jpg'
import marius2 from '@/imports/Marius_Thesis_005.jpg'
import marius3 from '@/imports/Marius_Thesis_011.jpg'
import marius4 from '@/imports/Marius_Thesis_014.jpg'
import ai1 from '@/imports/IP_Roboitk AI Land_001.jpg'
import ai2 from '@/imports/IP_Roboitk AI Land_004.jpg'
import ai3 from '@/imports/IP_Roboitk AI Land_007.jpg'
import ai4 from '@/imports/IP_Roboitk AI Land_010.jpg'

interface Props { navigate: (page: string) => void }

const Gallery = ({ images, label }: { images: string[]; label: string }) => <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{images.map((src,i)=><img key={i} src={src} alt={`${label} ${i+1}`} className="w-full h-auto" />)}</div>

export default function UsabilityLabProject({ navigate }: Props) {
  return <article className="page-enter">
    <section className="pt-36 pb-20 px-8 md:px-16" style={{backgroundColor:'var(--color-ink)'}}><div className="max-w-screen-xl mx-auto"><button onClick={()=>navigate('work')} className="text-xs tracking-[0.2em] uppercase mb-16 text-white/50">← Back to Work Index</button><p className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50">Research Documentation · Photography · 2026</p><h1 className="text-6xl md:text-8xl leading-none text-white" style={{fontFamily:'var(--font-display)'}}>HSRW Usability Lab<br/><em>Project Documentation</em></h1></div></section>
    <section className="py-24 px-8 md:px-16"><div className="max-w-screen-xl mx-auto grid md:grid-cols-12 gap-16"><div className="md:col-span-4 space-y-5">{[['Role','Photographic Documentation'],['Institution','Hochschule Rhein-Waal'],['Context','Usability Lab'],['Year','2026']].map(([a,b])=><div className="border-b pb-4" style={{borderColor:'var(--color-border)'}} key={a}><p className="text-[10px] uppercase tracking-[0.2em]" style={{color:'var(--color-muted)'}}>{a}</p><p className="text-sm">{b}</p></div>)}</div><div className="md:col-span-7 md:col-start-6"><h2 className="text-4xl md:text-5xl mb-8" style={{fontFamily:'var(--font-display)'}}>Documenting how people, research, and technology meet inside the lab.</h2><p className="leading-relaxed mb-5" style={{color:'var(--color-muted)'}}>My role is photographic documentation of projects taking place in the HSRW Usability Lab. I document setups, interactions, equipment, and participant activity while keeping the authorship of the underlying research clearly separate from my own contribution.</p><p className="leading-relaxed" style={{color:'var(--color-muted)'}}>This case study brings together four research-documentation series: Robotic Chess, an Olfactory Study, Marius’ robotics thesis, and Robotic AI Land.</p></div></div></section>
    <section className="px-8 md:px-16 py-20" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><h3 className="text-3xl md:text-4xl mb-8" style={{fontFamily:'var(--font-display)'}}>Robotic Chess</h3><Gallery images={[chess1,chess2,chess3,chess4]} label="Robotic Chess" /></div></section>
    <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><h3 className="text-3xl md:text-4xl mb-8" style={{fontFamily:'var(--font-display)'}}>Olfactory Study</h3><Gallery images={[olf1,olf2,olf3,olf4]} label="Olfactory Study" /></div></section>
    <section className="px-8 md:px-16 py-20" style={{backgroundColor:'var(--color-paper-dark)'}}><div className="max-w-screen-xl mx-auto"><h3 className="text-3xl md:text-4xl mb-8" style={{fontFamily:'var(--font-display)'}}>Marius’ Thesis</h3><Gallery images={[marius1,marius2,marius3,marius4]} label="Marius Thesis" /></div></section>
    <section className="px-8 md:px-16 py-20"><div className="max-w-screen-xl mx-auto"><h3 className="text-3xl md:text-4xl mb-8" style={{fontFamily:'var(--font-display)'}}>Robotic AI Land</h3><Gallery images={[ai1,ai2,ai3,ai4]} label="Robotic AI Land" /></div></section>
  </article>
}