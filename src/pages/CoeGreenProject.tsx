import img1 from '@/imports/1.jpg'
import img3 from '@/imports/3.jpg'
import img51 from '@/imports/5-1.jpg'
import img6 from '@/imports/6.jpg'
import img7 from '@/imports/7.jpg'
import img8 from '@/imports/8.jpg'
import img10 from '@/imports/10.jpg'
import img11 from '@/imports/11.jpg'
import img13 from '@/imports/13.jpg'
import img14 from '@/imports/14.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function CoeGreenProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', backgroundColor: '#0a0a0a' }}>
        <img
          src={img1}
          alt="Code Green — IDE extension for sustainable software"
          className="w-full h-full object-cover"
          style={{ opacity: 0.9 }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 50%)' }}>
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-12 transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            Research · UX/UI · IDE Extension · 2025
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Code Green
          </h1>
          <p className="text-xl md:text-2xl max-w-xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>
            An IDE extension that helps businesses measure and reduce their software carbon footprint — in real time.
          </p>
        </div>
      </div>

      {/* Project overview */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
              Project Overview
            </p>
            <div className="space-y-6">
              {[
                ['Product', 'IDE Extension'],
                ['My Role', 'Research, UX/UI Design'],
                ['Project Length', '4 Months'],
                ['Year', '2025'],
                ['Collaborators', 'Andrea Polk · Berk Şekerci · Zahra Ansarigilvan · Sharmeen Ahmed'],
              ].map(([label, value]) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.35)' }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.75)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <img
              src={img3}
              alt="Code Green — project goal: net-zero emission software"
              className="w-full object-cover"
              style={{ borderRadius: '4px' }}
            />
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: '#105A51' }}>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-6xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            "Software's climate footprint could reach <em>14% of global emissions</em> by 2040 — if we write code the same way we always have."
          </h2>
          <p className="mt-6 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
            Borderstep Institute, 2022
          </p>
        </div>
      </section>

      {/* Research — Problem & Solution */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            Research
          </p>
          <img
            src={img51}
            alt="Code Green — research: problem and solution"
            className="w-full object-cover"
            style={{ borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* Persona */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#111' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            User Persona
          </p>
          <img
            src={img7}
            alt="Code Green — persona: Anselm Bauer, Software Team Lead"
            className="w-full object-cover"
            style={{ borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* Visual identity */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-10" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            Visual Identity
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={img8}
              alt="Code Green — logo and brand assets"
              className="w-full object-cover"
              style={{ borderRadius: '4px' }}
            />
            <img
              src={img6}
              alt="Code Green — typography and color palette"
              className="w-full object-cover"
              style={{ borderRadius: '4px' }}
            />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
            {[
              { hex: '#42AD82', label: 'Primary' },
              { hex: '#105A51', label: 'Accent' },
              { hex: '#FFFFFF', label: 'White' },
            ].map(({ hex, label }) => (
              <div key={hex}>
                <div
                  className="w-12 h-12 rounded-md mb-2"
                  style={{ backgroundColor: hex, border: hex === '#FFFFFF' ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                />
                <p className="text-[10px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                <p className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>{hex}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding screens */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            UI Design — Onboarding
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Three screens introduce the mission — before a developer writes a single line.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={img10}
              alt="Code Green onboarding — Screen 1: Welcome"
              className="w-full object-cover"
              style={{ borderRadius: '4px' }}
            />
            <img
              src={img11}
              alt="Code Green onboarding — Screens 2 & 3"
              className="w-full object-cover"
              style={{ borderRadius: '4px' }}
            />
          </div>
        </div>
      </section>

      {/* Results screen */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#111' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            UI Design — Results
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Efficiency score, issues found, CO₂ impact — visible at a glance.
          </h3>
          <img
            src={img13}
            alt="Code Green — results screens with efficiency score and CO2 data"
            className="w-full object-cover"
            style={{ borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* Website concept */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: '#42AD82' }}>
            Website Concept
          </p>
          <h3 className="text-3xl md:text-4xl mb-10 leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            "Good Code Runs Fast. <em>Great Code Runs Green.</em>"
          </h3>
          <img
            src={img14}
            alt="Code Green — website concept"
            className="w-full object-cover"
            style={{ borderRadius: '4px' }}
          />
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: '#105A51' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}>
              Reflection
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-white" style={{ fontFamily: 'var(--font-display)' }}>
              "UX work is most meaningful when the problem is urgent. Code Green asked us to make sustainability visible, actionable, and — critically — non-disruptive to the developer's flow."
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
              This project brought together research, user psychology, software development, and interface design across a four-month sprint. The challenge of designing for developers — skeptical users who distrust friction — shaped every decision from onboarding copy to the Autofix interaction pattern.
            </p>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}>
              Next project
            </p>
            <h4 className="text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Explore Branson Campaign
            </h4>
          </div>
          <button
            onClick={() => navigate('work')}
            className="group flex items-center gap-3 text-sm tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}
          >
            <span className="link-underline">View all work</span>
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} />
          </button>
        </div>
      </section>
    </article>
  )
}
