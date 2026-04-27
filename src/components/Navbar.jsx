import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import VeteranIntakeModal from '../components/VeteranIntakeModal'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Job Board', path: '/job-board' },
  { label: 'For Veterans', path: '/for-veterans' },
  { label: 'For Employers', path: '/for-employers' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Donate', path: '/donate' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleNavigate = (path) => {
    closeMenu()
    navigate(path)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b-[2.5px] border-crimson-700 bg-navy-700 shadow-nav">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 xl:px-10">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="text-base text-gold-500">★</span>
            <span className="font-display text-2xl font-black tracking-wide text-white">
              Vetess
            </span>
          </Link>

          <div className="hidden items-center gap-1 xl:flex">
            {links.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  }`}
                  style={{ color: '#ffffff' }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <button
              type="button"
              onClick={() => navigate('/admin/login')}
              className="rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="rounded-md bg-crimson-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-crimson-500"
            >
              Get Started Free
            </button>
            <VeteranIntakeModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              />
            
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 xl:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-navy-900 xl:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="text-base text-gold-500">★</span>
              <span className="font-display text-2xl font-black tracking-wide text-white">
                Vetess
              </span>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10"
              aria-label="Close menu"
            >
              <span className="text-2xl leading-none">×</span>
            </button>
          </div>

          <div className="flex flex-col px-4 py-6 sm:px-6">
            {links.map((link) => {
              const isActive = location.pathname === link.path

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`rounded-md px-4 py-4 text-lg font-medium transition ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-white hover:bg-white/10'
                  }`}
                  style={{ color: '#ffffff' }}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleNavigate('/admin/login')}
                className="w-full rounded-md border border-white/30 px-4 py-3 text-base font-medium text-white transition hover:bg-white/10"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-md bg-crimson-700 px-4 py-3 text-base font-semibold text-white transition hover:bg-crimson-500"
              >
                Get Started Free
              </button>

              <VeteranIntakeModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}