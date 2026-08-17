import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import About from './pages/About'
import Journal from './pages/Journal'
import Contact from './pages/Contact'

type Page = 'home' | 'work' | 'project' | 'about' | 'journal' | 'contact'

const navLinks: { id: Page; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [currentProject, setCurrentProject] = useState<string>('maison-de-lumiere')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (target: string, project?: string) => {
    setPage(target as Page)
    if (project) setCurrentProject(project)
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHomePage = page === 'home'
  const navBg = scrolled || !isHomePage

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-paper)' }}>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: navBg ? 'rgba(250,248,245,0.95)' : 'transparent',
          borderBottom: navBg ? '1px solid var(--color-border)' : '1px solid transparent',
          backdropFilter: navBg ? 'blur(12px)' : 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('home')}
            className="text-sm tracking-[0.25em] uppercase transition-opacity duration-200 hover:opacity-60"
            style={{
              fontFamily: 'var(--font-body)',
              color: !navBg ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)',
            }}
          >
            Andrea Polk
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="text-xs tracking-[0.2em] uppercase transition-opacity duration-200 hover:opacity-50"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: !navBg ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)',
                  opacity: page === id ? 0.4 : undefined,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-px transition-all duration-300"
                style={{ backgroundColor: !navBg ? 'rgba(255,255,255,0.92)' : 'var(--color-ink)' }}
              />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden"
            style={{
              backgroundColor: 'rgba(250,248,245,0.98)',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => navigate(id)}
                  className="text-left text-sm tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'work' && <Work navigate={navigate} />}
        {page === 'project' && <Project navigate={navigate} projectId={currentProject} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'journal' && <Journal />}
        {page === 'contact' && <Contact />}
      </main>

      {page !== 'home' && (
        <footer className="border-t py-10 px-8 md:px-16" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-paper)' }}>
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <button
              onClick={() => navigate('home')}
              className="text-sm tracking-[0.25em] uppercase hover:opacity-50 transition-opacity"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
            >
              Andrea Polk
            </button>
            <div className="flex gap-8">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => navigate(id)}
                  className="text-xs tracking-[0.15em] uppercase hover:opacity-50 transition-opacity"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              © 2026 Andrea Polk Studio
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
