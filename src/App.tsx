import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import About from './pages/About'
import Journal from './pages/Journal'
import Contact from './pages/Contact'
import DanceCompetitionProject from './pages/DanceCompetitionProject'
import UsabilityLabProject from './pages/UsabilityLabProject'
import KlingerhufProject from './pages/KlingerhufProject'
import LipcoProject from './pages/LipcoProject'
import RvnProject from './pages/RvnProject'
import LunitStudyProject from './pages/LunitStudyProject'
import ConunCyconProject from './pages/ConunCyconProject'
import SuitmakeProject from './pages/SuitmakeProject'
import NgaProject from './pages/NgaProject'
import RealEstatePhotographyProject from './pages/RealEstatePhotographyProject'

const navLinks = [
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function ProjectRoute({ navigate }: { navigate: (path: string) => void }) {
  const { projectId } = useParams<{ projectId: string }>()
  if (!projectId) { navigate('work'); return null }
  return <Project navigate={navigate} projectId={projectId} />
}

function Site() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); setMenuOpen(false) }, [location.pathname])
  const isHomePage = location.pathname === '/'
  const navBg = scrolled || !isHomePage

  return <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-paper)' }}>
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style={{ backgroundColor: navBg ? 'rgba(250,248,245,0.95)' : 'transparent', borderBottom: navBg ? '1px solid var(--color-border)' : '1px solid transparent', backdropFilter: navBg ? 'blur(12px)' : 'none' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between"><button onClick={() => navigate('/')} className="text-sm tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-60" style={{ fontFamily: 'var(--font-body)', color: !navBg ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)' }}>Andrea Polk</button><div className="hidden md:flex items-center gap-10">{navLinks.map(({ path, label }) => <button key={path} onClick={() => navigate(path)} className="text-xs tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-50" style={{ fontFamily: 'var(--font-body)', color: !navBg ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)', opacity: location.pathname === path ? 0.4 : undefined }}>{label}</button>)}</div><button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{[0,1,2].map((i)=><span key={i} className="block w-5 h-px" style={{ backgroundColor: !navBg ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)' }}/>)}</button></div>
      {menuOpen && <div className="md:hidden" style={{ backgroundColor:'rgba(250,248,245,0.98)', borderTop:'1px solid var(--color-border)' }}><div className="px-8 py-6 flex flex-col gap-5">{navLinks.map(({path,label})=><button key={path} onClick={()=>navigate(path)} className="text-left text-sm tracking-[0.2em] uppercase" style={{ fontFamily:'var(--font-body)', color:'var(--color-ink)' }}>{label}</button>)}</div></div>}
    </nav>
    <main><Routes>
      <Route path="/" element={<Home navigate={(path, project) => navigate(project ? `/${path}/${project}` : path === 'home' ? '/' : `/${path}`)} />} />
      <Route path="/work" element={<Work navigate={(path, project) => navigate(project ? `/${path}/${project}` : `/${path}`)} />} />
      <Route path="/about" element={<About navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project/dance-competition-photography" element={<DanceCompetitionProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/usability-lab-documentation" element={<UsabilityLabProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/klingerhuf-restoration" element={<KlingerhufProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/lipco-souvenir-design" element={<LipcoProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/rvn-fashion-photography" element={<RvnProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/lunit-ui-study" element={<LunitStudyProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/conun-cycon" element={<ConunCyconProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/suitmake" element={<SuitmakeProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/nga-fashion-photography" element={<NgaProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/real-estate-photography" element={<RealEstatePhotographyProject navigate={(path) => navigate(`/${path}`)} />} />
      <Route path="/project/:projectId" element={<ProjectRoute navigate={(path) => navigate(`/${path}`)} />} />
    </Routes></main>
    {location.pathname !== '/' && <footer className="border-t py-10 px-8 md:px-16" style={{ borderColor:'var(--color-border)', backgroundColor:'var(--color-paper)' }}><div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6"><button onClick={()=>navigate('/')} className="text-sm tracking-[0.25em] uppercase" style={{fontFamily:'var(--font-body)', color:'var(--color-ink)'}}>Andrea Polk</button><div className="flex gap-8">{navLinks.map(({path,label})=><button key={path} onClick={()=>navigate(path)} className="text-xs tracking-[0.15em] uppercase" style={{fontFamily:'var(--font-body)', color:'var(--color-muted)'}}>{label}</button>)}</div><p className="text-xs" style={{fontFamily:'var(--font-body)', color:'var(--color-muted)'}}>© 2026 Andrea Polk Studio</p></div></footer>}
  </div>
}

export default function App(){ return <BrowserRouter><Site /><Analytics /></BrowserRouter> }
