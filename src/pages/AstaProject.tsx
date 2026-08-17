import pubGolf from '@/imports/Asta_Pub_Golf_April262025-03.jpg'
import freshers from '@/imports/IMG_3584.PNG'
import election from '@/imports/IMG_3591.PNG'
import antidisc from '@/imports/IMG_3596.PNG'
import thriftPhone1 from '@/imports/IMG_3601.PNG'
import thriftPhone2 from '@/imports/IMG_3602.PNG'
import thrift1 from '@/imports/Summer_Thrift_3-02.jpg'
import thrift2 from '@/imports/Summer_Thrift_3.jpg'
import thrift3 from '@/imports/Summer_Thrift-03.jpg'
import thrift4 from '@/imports/Summer_Thrift-04.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function AstaProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* Hero — typographic */}
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
            Graphic Design · Social Media · AStA HSRW · 2025
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            AStA HSRW<br /><em>Event Graphics & PR</em>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.55)' }}>
            Event posters and social media content produced as Public Relations Head for the AStA at Hochschule Rhein-Waal — 2025.
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
                ['Role', 'Public Relations Head, AStA HSRW'],
                ['Scope', 'Event poster design, social media content, campaign graphics'],
                ['Platform', 'Instagram (@asta_hsrw), print distribution'],
                ['Events', 'Pub Golf, Fresher\'s Week, Integration Council Election, Days of Antidiscrimination, Summer Thrift & Treats'],
                ['Year', '2025'],
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
              Designing communications for a student body of thousands.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              As PR Head for AStA HSRW in 2025, the role required consistent output across a calendar of events — each with its own audience, tone, and visual brief. The work spans event posters designed for print and digital, Instagram story graphics, and multi-slide post campaigns.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Each piece needed to communicate quickly — stopping the scroll or catching a glance on a campus noticeboard — while staying recognisably within AStA's communications context. The Summer Thrift & Treats campaign involved multiple design iterations developed toward the final published version.
            </p>
          </div>
        </div>
      </section>

      {/* Pub Golf — full poster */}
      <section className="px-8 md:px-16 pb-3" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Pub Golf — Moers Pub Crawl · April 26, 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div style={{ backgroundColor: '#1a2e1a' }}>
              <img src={pubGolf} alt="Pub Golf / Moers Pub Crawl event poster — AStA x Study & Chill Lounge" className="w-full h-auto block" />
            </div>
            <div className="flex flex-col gap-3">
              <div style={{ backgroundColor: 'var(--color-paper-dark)', border: '1px solid var(--color-border)' }}>
                <img src={freshers} alt="AStA Instagram story — Fresher's Week HSRW Kamp-Lintfort, Sept 22–26 2025" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fresher's Week + Election + Antidiscrimination — social posts in context */}
      <section className="px-8 md:px-16 pb-3" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="max-w-screen-xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Social Media — Published Posts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={election} alt="AStA Instagram — Integration Council Election, September 14 2025" className="w-full h-auto block" />
            </div>
            <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={antidisc} alt="AStA Instagram feed — Days of Antidiscrimination and Döner event posts" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Summer Thrift & Treats — design iterations */}
      <section className="px-8 md:px-16 py-12" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-10">
            <div className="md:col-span-4">
              <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                Summer Thrift & Treats · June 5, 2025
              </p>
              <h3 className="text-3xl md:text-4xl leading-tight mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
                Four directions, one campaign.
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                The Summer Thrift & Treats student market was promoted through multiple design iterations — each exploring a different colour direction, typographic approach, and compositional style before converging on the published version.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper)' }}>
                  <img src={thriftPhone1} alt="Summer Thrift & Treats — Instagram post in context, purple colourway" className="w-full h-auto block" />
                </div>
                <div style={{ border: '1px solid var(--color-border)', backgroundColor: 'var(--color-paper)' }}>
                  <img src={thriftPhone2} alt="Summer Thrift & Treats — Instagram post detail view" className="w-full h-auto block" />
                </div>
              </div>
            </div>
          </div>

          {/* All four poster versions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div style={{ backgroundColor: '#4ecdc4' }}>
              <img src={thrift1} alt="Summer Thrift & Treats — teal gradient with floating objects, duotone" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#f5f0e8' }}>
              <img src={thrift2} alt="Summer Thrift & Treats — clean light direction with jacket photography" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#00bcd4' }}>
              <img src={thrift3} alt="Summer Thrift & Treats — bright cyan with bold lettering and floating items" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#d4ede8' }}>
              <img src={thrift4} alt="Summer Thrift & Treats — mint with clothing rack, sketch typography" className="w-full h-auto block" />
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
              High-volume, fast-turnaround design for a student community — every post a small communication problem.
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
              PR design at the student government level means working quickly across many different event types — social events, civic campaigns, cultural programming — each with its own audience and communication goal. The discipline of producing clear, engaging graphics on tight timelines is the same discipline that runs through all communication design work.
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
              Explore Branson — Magazine Campaign
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
