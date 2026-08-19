import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import hw1 from '@/imports/Holiday_World_1.jpg'
import portraitD from '@/imports/02122021_D.jpg'
import branson3 from '@/imports/Port_2025_Branson3.jpg'
import codeGreen from '@/imports/1.jpg'
import essentia from '@/imports/0_Cover.jpg'
import perfume from '@/imports/MAR_3235.jpg'
import landscape from '@/imports/Landscaping_021.jpg'
import astaThumb from '@/imports/Summer_Thrift-03.jpg'
import zamoraSocial from '@/imports/484443753_953244013662362_2822451351378166629_n.jpg'
import podcast from '@/imports/Diogo_Podcast_Event_20.jpg'
import danceThumb from '@/imports/ 2024_Heat Photography_005.jpg'
import labThumb from '@/imports/ Robotic Chess_Lab_001.jpg'
import klingerThumb from '@/imports/Klingerhuf Restoration Event_Reel_01.png'

interface WorkProps { navigate: (page: string, project?: string) => void }
const categories = ['All', 'Photography', 'Graphic Design', 'Editorial', 'Objects', 'Research / UX', 'UX/UI', 'Experience Design']
interface Project { id: string; title: string; year: string; category: string; localImg: string; size: 'tall' | 'wide' | 'square' }

const projects: Project[] = [
  { id: 'dance-competition-photography', title: 'Dance Competition Photography', year: '2022–2024', category: 'Photography', localImg: 'danceThumb', size: 'wide' },
  { id: 'usability-lab-documentation', title: 'HSRW Usability Lab — Project Documentation', year: '2026', category: 'Photography', localImg: 'labThumb', size: 'tall' },
  { id: 'klingerhuf-restoration', title: 'Klingerhuf Restoration — Community Participation', year: '2026', category: 'Graphic Design', localImg: 'klingerThumb', size: 'wide' },
  { id: 'lipco-souvenir-design', title: 'Lipco Group — Souvenir Product Design', year: '2024', category: 'Objects', localImg: 'hw1', size: 'wide' },
  { id: 'code-green', title: 'Code Green', year: '2025', category: 'Research / UX', localImg: 'codeGreen', size: 'tall' },
  { id: 'branson-magazine', title: 'Explore Branson — Magazine Campaign', year: '2024', category: 'Editorial', localImg: 'branson3', size: 'wide' },
  { id: 'portrait-photography', title: 'Portrait & Street Photography', year: '2021–2022', category: 'Photography', localImg: 'portraitD', size: 'tall' },
  { id: 'essentia', title: 'Essentia Olfactory Display', year: '2024', category: 'UX/UI', localImg: 'essentia', size: 'wide' },
  { id: 'perfume-events', title: 'Perfume Workshops — AStA HSRW', year: '2026', category: 'Experience Design', localImg: 'perfume', size: 'tall' },
  { id: 'landscape-photography', title: 'Green Oasis — Landscape Photography', year: '2023–2024', category: 'Photography', localImg: 'landscape', size: 'wide' },
  { id: 'zamora-real-estate', title: 'Zamora Real Estate — Photography & Marketing', year: '2023–2024', category: 'Photography', localImg: 'zamoraSocial', size: 'tall' },
  { id: 'podcast-event', title: 'Diogo Podcast — Event Photography', year: '2025', category: 'Photography', localImg: 'podcast', size: 'wide' },
  { id: 'asta-graphics', title: 'AStA HSRW — Visual Communication & Student Initiatives', year: '2025–2026', category: 'Graphic Design', localImg: 'astaThumb', size: 'tall' },
]

const localImgMap: Record<string, string> = { hw1, portraitD, branson3, codeGreen, essentia, perfume, landscape, zamoraSocial, podcast, astaThumb, danceThumb, labThumb, klingerThumb }

export default function Work({ navigate: _legacyNavigate }: WorkProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const routerNavigate = useNavigate()
  const filtered = activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)
  return <div className="page-enter pt-28 pb-32">
    <div className="px-8 md:px-16 mb-16"><div className="max-w-screen-xl mx-auto"><p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>Work</p><h1 className="text-6xl md:text-8xl leading-none mb-16" style={{ fontFamily:'var(--font-display)', color:'var(--color-ink)' }}>Selected Work</h1><div className="flex flex-wrap gap-2">{categories.map((cat)=><button key={cat} onClick={()=>setActiveCategory(cat)} className="px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-200" style={{ fontFamily:'var(--font-body)', backgroundColor:activeCategory===cat?'var(--color-ink)':'transparent', color:activeCategory===cat?'#faf8f5':'var(--color-muted)', border:`1px solid ${activeCategory===cat?'var(--color-ink)':'var(--color-border)'}` }}>{cat}</button>)}</div></div></div>
    <div className="px-8 md:px-16"><div className="max-w-screen-xl mx-auto"><div className="grid gap-4" style={{ gridTemplateColumns:'repeat(12, 1fr)', gridAutoRows:'80px' }}>{filtered.map((project)=>{ const colSpan=project.size==='tall'?4:project.size==='wide'?8:6; const rowSpan=project.size==='tall'?7:project.size==='wide'?4:5; return <div key={project.id} className="work-item cursor-pointer relative overflow-hidden" style={{ gridColumn:`span ${colSpan}`, gridRow:`span ${rowSpan}`, backgroundColor:'var(--color-paper-dark)' }} onClick={()=>routerNavigate(`/project/${project.id}`)}><img src={localImgMap[project.localImg]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out"/><div className="absolute bottom-0 left-0 right-0 p-5 md:p-6" style={{ background:'linear-gradient(to top, rgba(13,13,11,0.72) 0%, transparent 100%)' }}><p className="text-white/60 text-[10px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily:'var(--font-body)' }}>{project.category} · {project.year}</p><h3 className="text-white text-lg md:text-xl leading-tight" style={{ fontFamily:'var(--font-display)' }}>{project.title}</h3></div><div className="work-overlay absolute inset-0 flex items-center justify-center"><span className="px-5 py-2 text-xs tracking-[0.2em] uppercase border border-white text-white" style={{ fontFamily:'var(--font-body)', backgroundColor:'rgba(13,13,11,0.4)' }}>View Project</span></div></div>})}</div>{filtered.length===0&&<div className="text-center py-32"><p style={{ fontFamily:'var(--font-body)', color:'var(--color-muted)' }}>No projects in this category.</p></div>}</div></div>
  </div>
}
