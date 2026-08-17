import pod08 from '@/imports/Diogo_Podcast_Event_08.jpg'
import pod09 from '@/imports/Diogo_Podcast_Event_09.jpg'
import pod12 from '@/imports/Diogo_Podcast_Event_12.jpg'
import pod14 from '@/imports/Diogo_Podcast_Event_14.jpg'
import pod16 from '@/imports/Diogo_Podcast_Event_16.jpg'
import pod18 from '@/imports/Diogo_Podcast_Event_18.jpg'
import pod20 from '@/imports/Diogo_Podcast_Event_20.jpg'
import pod23 from '@/imports/Diogo_Podcast_Event_23.jpg'
import pod24 from '@/imports/Diogo_Podcast_Event_24.jpg'
import pod25 from '@/imports/Diogo_Podcast_Event_25.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function PodcastProject({ navigate }: Props) {
  return (
    <article className="page-enter" style={{ backgroundColor: 'var(--color-paper)' }}>

      {/* Hero — typographic, keeps image full */}
      <div className="pt-36 pb-20 px-8 md:px-16" style={{ backgroundColor: '#0f1217' }}>
        <div className="max-w-screen-xl mx-auto">
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase mb-16 transition-opacity hover:opacity-60"
            style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.4)' }}>
            Photography · Event · AStA HSRW · 2025
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Diogo Podcast<br /><em>Event Photography</em>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.5)' }}>
            Documentary photography of a live podcast recording at Hochschule Rhein-Waal — coordination, planning, and visual storytelling.
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
                ['Role', 'Event Photographer, Coordinator'],
                ['Institution', 'Hochschule Rhein-Waal, Kamp-Lintfort'],
                ['Host', 'Diogo'],
                ['Scope', 'Photography, event planning and coordination with host'],
                ['Discipline', 'Documentary Photography'],
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
              Inside a live recording — equipment, conversation, and the people in the room.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              This was purely photographic work: coordinate with the host in advance, understand the format and flow of the event, then be present enough to capture it without interrupting it. The setting was the podcast studio at HSRW — studio monitors, mic arms, DAW on screen, multiple participants across two sessions.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              The goal was a set of images that could be used by AStA and the host to document and promote the event — capturing both the technical environment and the human moments inside it.
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

          {/* Two-column grid — full images, no cropping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div style={{ backgroundColor: '#0f1217' }}>
              <img src={pod20} alt="Host and guest at the podcast desk — DAW visible on screen behind them" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#0f1217' }}>
              <img src={pod14} alt="Guest smiling across the desk at the host — microphone arm in foreground" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#0f1217' }}>
              <img src={pod08} alt="Host gesturing expressively during conversation — student with headphones in foreground" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#0f1217' }}>
              <img src={pod09} alt="Host adjusting headphones — studio monitor and MacBook visible" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#0f1217' }}>
              <img src={pod12} alt="Host and guest in profile — listening and responding" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#0f1217' }}>
              <img src={pod23} alt="Guest with headphones, laughing — candid moment during recording" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#1a1e25' }}>
              <img src={pod24} alt="Participant at the podcast desk — headphones and studio monitor in dim light" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: '#1a1e25' }}>
              <img src={pod25} alt="Participant with headphones standing at equipment — Virtual Barber Shop audio on screen" className="w-full h-auto block" />
            </div>
          </div>

          {/* Wider shots — audience and portrait */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={pod16} alt="Student audience member — listening attentively, others in background" className="w-full h-auto block" />
            </div>
            <div style={{ backgroundColor: 'var(--color-paper-dark)' }}>
              <img src={pod18} alt="Editorial portrait — participant with laptop in the studio space" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Approach
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-2xl md:text-3xl leading-relaxed mb-8 text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Documentary event photography asks for presence without intrusion.
            </p>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.45)' }}>
              Pre-event coordination with the host meant understanding how the recording session would be structured — who would be in the room, when the key moments would happen, and how much space was available to move. The resulting images cover the technical setup, the conversation between participants, and the candid moments that happen between takes.
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
              Perfume Workshops — AStA HSRW
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
