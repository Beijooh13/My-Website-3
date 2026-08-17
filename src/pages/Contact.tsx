import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page-enter">
      {/* Large photograph */}
      <div className="relative w-full overflow-hidden" style={{ height: '70vh', backgroundColor: 'var(--color-ink)' }}>
        <img
          src="https://images.unsplash.com/photo-1779641774851-9bd6c763e4e1?w=1800&h=1000&fit=crop&auto=format"
          alt="Light through window — studio"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.55)' }}
        />
        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 md:px-16">
          <div className="max-w-3xl">
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Contact
            </p>
            <h1 className="text-white text-5xl md:text-7xl leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Every great project<br />
              begins with<br />
              <em>a conversation.</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Contact content */}
      <section className="py-28 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
          {/* Left: info */}
          <div className="md:col-span-4">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Studio
            </p>

            <div className="space-y-10">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  Email
                </p>
                <a
                  href="mailto:andreanpolk@gmail.com"
                  className="text-base link-underline"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
                >
                  andreanpolk@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  Location
                </p>
                <p className="text-base" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                  Kamp-Lintfort, Germany<br />
                  (Originally: Springfield, Missouri)
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  Availability
                </p>
                <p className="text-base" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}>
                  Accepting new commissions<br />
                  from Q1 2027
                </p>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  Connect
                </p>
                <div className="space-y-2">
                  {[
                    ['Instagram', '@andreanpolk'],
                    ['LinkedIn', 'Andrea Polk Studio'],
                    ['Are.na', 'elara-voss'],
                  ].map(([platform, handle]) => (
                    <div key={platform} className="flex gap-4 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      <span style={{ color: 'var(--color-muted)', minWidth: '90px' }}>{platform}</span>
                      <span className="link-underline cursor-pointer" style={{ color: 'var(--color-ink)' }}>{handle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-[10px] tracking-[0.3em] uppercase mb-8" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
              Send a message
            </p>

            {sent ? (
              <div className="py-20">
                <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-ink)' }}>
                  Message received.
                </h2>
                <p className="text-base" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
                  Thank you for reaching out. I read everything personally and aim to respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { id: 'project', label: 'Project type', type: 'text', placeholder: 'Brand identity, photography, etc.' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                    <label
                      htmlFor={id}
                      className="block text-[10px] tracking-[0.2em] uppercase mt-6 mb-2"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      value={formData[id as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                      className="w-full pb-4 bg-transparent text-base outline-none placeholder:text-sand/50"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-ink)',
                      }}
                      required
                    />
                  </div>
                ))}

                <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
                  <label
                    htmlFor="message"
                    className="block text-[10px] tracking-[0.2em] uppercase mt-6 mb-2"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, and what you're hoping to create..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pb-4 bg-transparent text-base outline-none resize-none placeholder:text-sand/50"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-ink)',
                    }}
                    required
                  />
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="group flex items-center gap-4 text-sm tracking-[0.15em] uppercase"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ink)' }}
                  >
                    Send message
                    <span className="w-8 h-px transition-all duration-300 group-hover:w-16" style={{ backgroundColor: 'var(--color-ink)' }} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <div className="px-8 md:px-16 py-12 border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-paper-dark)' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Press & editorial enquiries: press@andreanpolk.com
          </p>
          <p className="text-xs tracking-[0.15em] uppercase" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-muted)' }}>
            Lecture & teaching: speaking@andreanpolk.com
          </p>
        </div>
      </div>
    </div>
  )
}
