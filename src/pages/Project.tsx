import PortraitProject from './PortraitProject'
import BransonProject from './BransonProject'
import CoeGreenProject from './CoeGreenProject'
import EssentiaProject from './EssentiaProject'
import PerfumeEventsProject from './PerfumeEventsProject'
import LandscapeProject from './LandscapeProject'
import AstaProject from './AstaProject'
import ZamoraProject from './ZamoraProject'
import PodcastProject from './PodcastProject'
import DancePhotographyProject from './DancePhotographyProject'
import UsabilityLabDocumentationProject from './UsabilityLabDocumentationProject'
import KlingerhufProject from './KlingerhufProject'
import LipcoProject from './LipcoProject'
import RvnProject from './RvnProject'
import LunitStudyProject from './LunitStudyProject'
import ConunCyconProject from './ConunCyconProject'

interface ProjectProps {
  navigate: (page: string) => void
  projectId: string
}

export default function Project({ navigate, projectId }: ProjectProps) {
  switch (projectId) {
    case 'lipco-souvenir-design':
    case 'holiday-world':
      return <LipcoProject navigate={navigate} />
    case 'dance-competition-photography':
      return <DancePhotographyProject navigate={navigate} />
    case 'usability-lab-documentation':
      return <UsabilityLabDocumentationProject navigate={navigate} />
    case 'klingerhuf-restoration':
      return <KlingerhufProject navigate={navigate} />
    case 'rvn-fashion-photography':
      return <RvnProject navigate={navigate} />
    case 'lunit-ui-study':
      return <LunitStudyProject navigate={navigate} />
    case 'conun-cycon':
      return <ConunCyconProject navigate={navigate} />
    case 'portrait-photography':
      return <PortraitProject navigate={navigate} />
    case 'branson-magazine':
      return <BransonProject navigate={navigate} />
    case 'code-green':
      return <CoeGreenProject navigate={navigate} />
    case 'essentia':
      return <EssentiaProject navigate={navigate} />
    case 'perfume-events':
      return <PerfumeEventsProject navigate={navigate} />
    case 'landscape-photography':
      return <LandscapeProject navigate={navigate} />
    case 'zamora-real-estate':
      return <ZamoraProject navigate={navigate} />
    case 'podcast-event':
      return <PodcastProject navigate={navigate} />
    case 'asta-graphics':
      return <AstaProject navigate={navigate} />
    default:
      return (
        <section className="page-enter pt-40 pb-32 px-8 md:px-16">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-muted)' }}>Project unavailable</p>
            <h1 className="text-5xl md:text-7xl mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>This project link does not match a published case study.</h1>
            <button onClick={() => navigate('work')} className="text-sm uppercase tracking-[0.15em] underline">Back to Work</button>
          </div>
        </section>
      )
  }
}
