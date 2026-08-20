import photoD from '@/imports/02122021_D.jpg'
import photoJ from '@/imports/02122021_J.jpg'
import photoDaerim from '@/imports/01292022_Daerim_ES.jpg'
import photoBL from '@/imports/11032021_Photos_BL.jpg'
import photoReflect from '@/imports/06062022_Sangsu_0048.jpg'
import seoul1 from '@/imports/Seoul Photography_00001.jpg'
import seoul2 from '@/imports/Seoul Photography_00002.jpg'
import seoul3 from '@/imports/Seoul Photography_00003.jpg'
import seoul4 from '@/imports/Seoul Photography_00004.jpg'
import seoul5 from '@/imports/Seoul Photography_00005.jpg'
import seoul6 from '@/imports/Seoul Photography_00006.jpg'
import seoul7 from '@/imports/Seoul Photography_00007.jpg'
import seoul8 from '@/imports/Seoul Photography_00008.jpg'
import seoul9 from '@/imports/Seoul Photography_00009.jpg'

interface Props {
  navigate: (page: string) => void
}

export default function PortraitProject({ navigate }: Props) {
  const additionalSeoul = [seoul1, seoul3, seoul5, seoul6, seoul7, seoul8, seoul9]

  return (
    <article className="page-enter">
      <div className="relative w-full overflow-hidden" style={{ height: '100vh', backgroundColor: '#111' }}>
        <img
          src={photoBL}
          alt="Figure in long black coat crossing a zebra crossing — Seoul, 2021"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.85)' }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16">
          <button
            onClick={() => navigate('work')}
            className="flex items-center gap-2 text-white/60 text-xs tracking-[0.2em] uppercase mb-12 hover:text-white transition-colors duration-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span>←</span> Back to Work Index
          </button>
          <p className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Photography · 2021–2022
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl leading-none" style={{ fontFamily: 'var(--font-display)' }}>
            Portrait &<br /><em>Street</em>
          </h1>
        </div>
      </div>

      <section className="py-28 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Overview
            </p>
            <div className="space-y-6">
              {[
                ['Medium', 'Digital photography'],
                ['Location', 'Seoul, South Korea'],
                ['Neighbourhoods', 'Daerim, Sangsu'],
                ['Period', 'Nov 2021 – Jun 2022'],
                ['Series', 'Studio portraits + street documentary'],
              ].map(([label, value]) => (
                <div key={label} className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                    {label}
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <h2 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Two modes. One city. The same question: what does it feel like to be here?
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              This body of work spans two parallel approaches made during time living and travelling in Seoul. The studio series — controlled, gray-ground, tight — and the street series — loose, environmental, chasing light and movement through Daerim and Sangsu.
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Both ask the same thing: can a photograph make the viewer feel present in a moment they weren't part of?
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 px-8 md:px-16" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto mb-12">
          <div className="flex items-baseline gap-6">
            <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Chapter 01
            </span>
            <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
              Studio Portraits
            </h3>
            <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-border)' }} />
            <span className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              February 2021
            </span>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="img-zoom" style={{ backgroundColor: '#c8c4c0' }}>
            <div className="aspect-[2/3]">
              <img src={photoD} alt="Studio portrait — direct gaze, natural, gray background" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="img-zoom" style={{ backgroundColor: '#b8b4b0' }}>
            <div className="aspect-[2/3]">
              <img src={photoJ} alt="Studio portrait — three-quarter profile, red lip, gray background" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
          <p className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Same subject, same session, same gray ground — two entirely different people. The studio removes context so the face carries everything.
          </p>
          <p className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Shot at a borrowed studio space, Seoul. Natural key light from a north-facing window, reflector for fill. No retouching.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16" style={{ backgroundColor: 'var(--color-ink)' }}>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              On photography
            </p>
          </div>
          <div className="md:col-span-8">
            <blockquote className="text-3xl md:text-4xl leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
              "The street doesn't wait. You learn to see before you think — or you miss it entirely."
            </blockquote>
          </div>
        </div>
      </section>

      <div className="w-full" style={{ backgroundColor: '#1a1a1a', maxHeight: '75vh', overflow: 'hidden' }}>
        <img
          src={photoBL}
          alt="Figure in black coat crossing a zebra crossing — Seoul, November 2021"
          className="w-full object-cover"
          style={{ maxHeight: '75vh', objectPosition: 'center' }}
        />
      </div>

      <section className="py-16 px-8 md:px-16" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-screen-xl mx-auto flex items-baseline gap-6 pb-0">
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Chapter 02
          </span>
          <h3 className="text-3xl md:text-4xl text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Seoul Streets
          </h3>
          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <span className="text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Nov 2021 – Jun 2022
          </span>
        </div>
        <div className="max-w-screen-xl mx-auto mt-6 pb-20">
          <p className="text-base leading-relaxed text-white/50 max-w-xl" style={{ fontFamily: 'var(--font-body)' }}>
            Moving through Daerim and Sangsu — two neighbourhoods in Seoul with entirely different energies. The camera became a way of paying attention to both.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="img-zoom" style={{ backgroundColor: '#2a2420' }}>
          <img
            src={photoDaerim}
            alt="Portrait — Daerim neighbourhood, Seoul, January 2022"
            className="w-full h-full object-cover"
            style={{ minHeight: '60vh' }}
          />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-16">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Daerim — January 2022
          </p>
          <h4 className="text-2xl md:text-3xl leading-tight mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Inside warmth. Outside, the city going about its business.
          </h4>
          <p className="text-sm leading-relaxed text-white/50" style={{ fontFamily: 'var(--font-body)' }}>
            Daerim is a neighbourhood in Yeongdeungpo — working-class, dense, honest. The portrait was made in a small restaurant that had been there since before the neighbourhood changed. The leather jacket, the bokeh of the room behind — the frame writes the person's context.
          </p>
        </div>
      </section>

      <div className="relative w-full" style={{ backgroundColor: '#2d2518' }}>
        <img
          src={photoReflect}
          alt="Figure reflected in a puddle, arms raised — Sangsu, Seoul, June 2022"
          className="w-full object-cover"
          style={{ maxHeight: '85vh', objectPosition: 'center' }}
        />
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <p className="text-white/60 text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
            Sangsu — June 2022
          </p>
          <p className="text-white text-lg md:text-xl leading-tight mt-1" style={{ fontFamily: 'var(--font-display)' }}>
            Reflection in a rain puddle, Sangsu-dong
          </p>
        </div>
      </div>

      <section className="py-4 px-4" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="img-zoom" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
            <div className="aspect-[3/2]">
              <img src={seoul2} alt="Street portrait — Sangsu neighbourhood, Seoul, June 2022" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="img-zoom" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
            <div className="aspect-[3/2]">
              <img src={seoul4} alt="Skateboarding on a Seoul street — Sangsu, June 2022" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Sangsu · Jun 2022
            </p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Street portrait outside a parking booth in Sangsu-dong — Korean summer heat, hand over eye, holding the look.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Sangsu · Jun 2022
            </p>
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Skateboarding down a residential street in Sangsu — the same person, ten seconds later, in a completely different frame.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8" style={{ backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto mb-10 px-4">
          <p className="text-[10px] tracking-[0.3em] uppercase mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            More from Seoul
          </p>
          <h3 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
            Portraits, movement & everyday moments
          </h3>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {additionalSeoul.map((photo, index) => (
            <div key={index} className={`img-zoom ${index === 0 || index === 5 ? 'md:col-span-2' : ''}`} style={{ backgroundColor: 'var(--color-paper)' }}>
              <img
                src={photo}
                alt={`Seoul photography ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ maxHeight: index === 0 || index === 5 ? '82vh' : '68vh' }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto pt-12 border-t flex justify-end" style={{ borderColor: 'var(--color-border)' }}>
          <button
            onClick={() => navigate('work')}
            className="group flex items-center gap-3 text-sm tracking-[0.12em] uppercase"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
          >
            <span className="link-underline">Back to Work Index</span>
            <span className="w-8 h-px transition-all duration-300 group-hover:w-14" style={{ backgroundColor: 'var(--color-ink)' }} />
          </button>
        </div>
      </section>
    </article>
  )
}
