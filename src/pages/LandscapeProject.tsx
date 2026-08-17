import land from '@/imports/Landscaping.jpg'
import land003 from '@/imports/Landscaping_003.jpg'
import land004 from '@/imports/Landscaping_004.jpg'
import land008 from '@/imports/Landscaping_008.jpg'
import land012 from '@/imports/Landscaping_012.JPG'
import land021 from '@/imports/Landscaping_021.jpg'
import land023 from '@/imports/Landscaping_023.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function LandscapeProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* Hero — typographic, no crop */}
      <div className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto">
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-16 transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
            Photography · Commercial Landscape · 2023–2024
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Green Oasis<br /><em>Landscape Photography</em>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>
            On-location commercial photography across Minnesota and Wisconsin — documenting residential landscapes and outdoor living spaces for Green Oasis.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Project Overview
            </p>
            <div className="space-y-6">
              {[
                ['Client', 'Green Oasis'],
                ['Scope', 'Commercial landscape photography for social media advertising'],
                ['Locations', 'Multiple residential sites across Minnesota and Wisconsin'],
                ['Discipline', 'Photography, Art Direction'],
                ['Year', '2023–2024'],
              ].map(([label, value]) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Capturing the finished result of someone else's craft.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The assignment was to travel across Minnesota and Wisconsin, photograph completed residential landscape projects, and produce images usable for Green Oasis's social media advertising. Each location required adapting quickly to the site — reading the light, finding the angle that communicated the scale and quality of the work.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The subjects ranged from paver driveways and lakeside properties to stone water features, outdoor fireplaces, pergolas, and planted retaining walls. Each image needed to work as a standalone advertisement while forming a coherent portfolio of the company's capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Full image gallery — uncropped */}
      <section className="px-8 md:px-16 pb-8" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Full Series
          </p>

          {/* Two-column grid — natural image proportions, no cropping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={land021} alt="Aerial view — outdoor patio with fountain, stone paths, and open countryside beyond" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={land} alt="Paver driveway curving toward a lakeside craftsman home surrounded by mature trees" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={land023} alt="Craftsman home from driveway — boulder edging, forest backdrop, and detached garage" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={land003} alt="Blue craftsman home rear elevation — terraced stone walls, screened porch, and lower patio seating" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={land012} alt="Outdoor stone fireplace with pergola and red brick paver patio" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={land004} alt="Retaining wall with ornamental grasses, black-eyed susans, and vintage iron garden chair" className="w-full h-auto block" />
            </div>
          </div>

          {/* Remaining image — full width */}
          <div className="mt-3" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
            <img src={land008} alt="Onyx stone column water feature — mineral-streaked stone in a rock garden setting" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Scope of Work
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Multi-site, multi-state — showing up to each property ready to read it.
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
              Commercial landscape photography requires flexibility above all else. The client can't control the weather, the season is brief, and the light changes fast. Getting usable images meant being ready to work with whatever the site offered — and finding compositions that communicated quality and craftsmanship even when conditions weren't ideal.
            </p>
          </div>
        </div>

        <div
          className="max-w-screen-xl mx-auto mt-24 pt-12 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Related project
            </p>
            <h4 className="text-3xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Portrait & Street Photography
            </h4>
          </div>
          <button
            onClick={() => navigate('work')}
            className="group flex items-center gap-3 text-sm tracking-[0.12em] uppercase transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}
          >
            <span className="link-underline">View all work</span>
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ backgroundColor: 'rgba(255,255,255,0.35)' }} />
          </button>
        </div>
      </section>
    </article>
  )
}
