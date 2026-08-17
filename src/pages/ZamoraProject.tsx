import social from '@/imports/484443753_953244013662362_2822451351378166629_n.jpg'
import smGrid from '@/imports/Screen_Shot_2025-03-20_at_16.12.02.png'
import pdf1 from '@/imports/Screen_Shot_2025-03-20_at_16.14.09.png'
import pdf2 from '@/imports/Screen_Shot_2025-03-20_at_16.14.20.png'
import pdf3 from '@/imports/Screen_Shot_2025-03-20_at_16.14.41.png'

interface Props {
  navigate: (page: string) => void
}

export default function ZamoraProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
        <img
          src={social}
          alt="Interior of Social — a historic brick event venue in Downtown"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.70)' }}
        />
        <div
          className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16"
          style={{ background: 'linear-gradient(to top, rgba(28,24,20,0.85) 0%, transparent 55%)' }}
        >
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-12 transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>
            Photography · Real Estate Marketing · 2023–2024
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Zamora Real Estate<br /><em>Photography & Marketing</em>
          </h1>
          <p className="text-lg md:text-xl max-w-xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)' }}>
            On-location commercial photography, stakeholder PDF flyers, and social media marketing for a real estate brokerage.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-28 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Project Overview
            </p>
            <div className="space-y-6">
              {[
                ['Client', 'Zamora Real Estate'],
                ['Broker', 'Gerald Zamora'],
                ['Scope', 'Photography, PDF Flyers, Social Media Marketing'],
                ['Locations', 'Multiple commercial and residential sites'],
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
              Making a property legible — in a photograph and on a page.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The work required travel across multiple locations on short timelines — commercial interiors, office buildings, and event spaces. Each shoot needed to capture the character of a space and communicate its potential quickly and clearly.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Photography was one part of the deliverable. The other was production: formatting PDF flyers for broker stakeholders and managing the distribution of each listing across social media — coordinating photography schedules, content production, and posting cadence across an active listings calendar.
            </p>
          </div>
        </div>
      </section>

      {/* Scope breakdown */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            ['Photography', 'On-location commercial photography across multiple properties. Traveled to each site, adapted to available light, and framed each space for its strongest angle.'],
            ['Stakeholder PDFs', 'Formatted property flyers for each listing — property type, square footage, address, broker contact, and photography produced and distributed to clients.'],
            ['Social Media', 'Managed listing posts across Zamora Real Estate platforms. Built a consistent posting format that aligned photography with listing copy.'],
          ].map(([title, body]) => (
            <div key={title} className="border-r last:border-r-0 px-8 first:pl-0 last:pr-0" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                {title}
              </p>
              <p className="text-sm leading-relaxed text-white/55" style={{ fontFamily: 'var(--font-body)' }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial interior full-width */}
      <div className="w-full" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <img
          src={social}
          alt="Social bar and event venue — exposed brick, timber beams, mezzanine level, Downtown"
          className="w-full h-auto block"
        />
      </div>

      {/* PDF deliverables */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-12">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Stakeholder Deliverables
              </p>
              <h3 className="text-3xl md:text-4xl leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
                Property flyers for every listing.
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Each listing received a formatted PDF flyer combining photography, property details, and broker information — produced for distribution to clients and used as the social media post template.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper)' }}>
                  <img
                    src={pdf1}
                    alt="Zamora Real Estate — restaurant / event center PDF listing flyer"
                    className="w-full h-auto block"
                  />
                </div>
                <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper)' }}>
                  <img
                    src={pdf2}
                    alt="Zamora Real Estate — multipurpose office building PDF listing flyer"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              <div className="mt-4" style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper)', maxWidth: '480px' }}>
                <img
                  src={pdf3}
                  alt="Zamora Real Estate — small office building PDF listing flyer, Walnut Lawn"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social media posts */}
      <section className="py-20 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Social Media
            </p>
            <h3 className="text-3xl md:text-4xl leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Photography published, managed, and distributed.
            </h3>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Listings coordinated across the brokerage's social channels — photography posted as multi-image sets with listing copy, directing prospective tenants to each property's full detail page.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <div style={{ border: '1px solid var(--color-border)' }}>
              <img
                src={smGrid}
                alt="Zamora Real Estate Facebook post — Social venue interior photography grid"
                className="w-full h-auto block"
              />
            </div>
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
              Photography, production, and distribution — managed across an active listings calendar.
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
              The project demanded flexibility — traveling to different sites on different timelines, adapting to each property's conditions, then returning to produce formatted materials quickly enough to support an active sales pipeline. Working across photography, layout, and social distribution simultaneously.
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
              Green Oasis — Landscape Photography
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
