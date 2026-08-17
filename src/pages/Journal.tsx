export default function Journal() {
  return (
    <div className="page-enter pt-28 pb-32 px-8 md:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          Journal
        </p>
        <h1 className="text-6xl md:text-8xl leading-none mb-8" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
          Coming<br /><em>Soon</em>
        </h1>
        <p className="text-base max-w-md" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
          Notes, observations, and process writing — in progress.
        </p>
      </div>
    </div>
  )
}
