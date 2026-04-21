import { Link } from 'react-router-dom'

const footerSections = [
  {
    heading: 'For Veterans',
    links: [
      { label: 'Resume Builder', to: '/for-veterans' },
      { label: 'Job Board', to: '/job-board' },
      { label: 'Career Coaching', to: '/for-veterans' },
      { label: 'Mentorship', to: '/for-veterans' },
      { label: 'Interview Prep', to: '/for-veterans' },
    ],
  },
  {
    heading: 'For Employers',
    links: [
      { label: 'Post a Job', to: '/for-employers' },
      { label: 'Search Candidates', to: '/for-employers' },
      { label: 'Career Fairs', to: '/for-employers' },
      { label: 'Direct Placement', to: '/for-employers' },
    ],
  },
  {
    heading: 'Organization',
    links: [
      { label: 'About Vetess', to: '/about' },
      { label: 'Our Team', to: '/about' },
      { label: 'Contact', to: '/about' },
      { label: 'Donate', to: '/donate' },
      { label: 'Volunteer', to: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-crimson-700 bg-navy-900 pt-[72px] pb-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="font-display text-2xl font-black text-white">
              ★ Vetess
            </Link>

            <p className="mt-3 font-display text-sm italic text-white/45">
              Your Service. Your Career. Your Bridge.
            </p>

            <div className="mt-5 flex gap-3">
              {['in', '🌐', '✉️', '💼'].map((icon, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-crimson-700"
                >
                  {icon}
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-white/30">🛡️ 501(c)(3) Nonprofit</p>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-gold-500">
                {section.heading}
              </h3>

              <div className="space-y-2">
                {section.links.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block text-sm text-white/70 transition-colors duration-150 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.70)' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vetess. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Accessibility</span>
            <Link
              to="/admin/login"
              className="text-white/30 transition hover:text-white/60"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}