import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const stats = [
  { value: 47000, suffix: '+', label: 'Veterans Placed' },
  { value: 2400, suffix: '+', label: 'Employers Hiring Now' },
  { value: 94, suffix: '%', label: 'Hired in 90 Days' },
  { value: 0, prefix: '$', suffix: '', label: 'Cost to Veterans' },
]

const services = [
  {
    title: 'Resume Builder',
    text: 'AI-powered tools translate military experience into civilian language employers understand.',
    route: '/for-veterans',
  },
  {
    title: 'Career Coaching',
    text: 'One-on-one guidance from coaches who understand military transition.',
    route: '/for-veterans',
  },
  {
    title: 'Veteran Job Board',
    text: 'Browse active roles from employers intentionally seeking veteran talent.',
    route: '/job-board',
  },
  {
    title: 'Interview Prep',
    text: 'Practice interviews and feedback to build confidence and stronger stories.',
    route: '/for-veterans',
  },
  {
    title: 'Mentorship Network',
    text: 'Connect with veterans who have already made the transition successfully.',
    route: '/for-veterans',
  },
  {
    title: 'Salary Coaching',
    text: 'Understand market value and confidently negotiate your next offer.',
    route: '/for-veterans',
  },
]

const testimonials = [
  {
    name: 'Sgt. Marcus Reed',
    role: 'US Army Veteran',
    quote:
      'Vetess coach translated 8 years as an Army Intelligence Officer into language civilian employers actually understood.',
    placement: 'Placed: Language Analyst @ Booz Allen Hamilton',
  },
  {
    name: 'Jennifer Walsh',
    role: 'Military Spouse',
    quote:
      'As a military spouse who moved often, Vetess helped me build a career story instead of a messy list of jobs.',
    placement: 'Placed: UX Designer @ Dell Technologies',
  },
  {
    name: 'Cpl. Devon Torres',
    role: 'USMC Veteran',
    quote:
      'Mock interviews were game-changing. I stopped answering like a Marine and started answering like a professional.',
    placement: 'Placed: Program Manager @ FedEx',
  },
]

function AnimatedStat({ value, prefix = '', suffix = '', label, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTimestamp = null
    const duration = 1400

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const nextValue = Math.floor(easedProgress * value)

      setCount(nextValue)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(value)
      }
    }

    const frame = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(frame)
  }, [start, value])

  return (
    <div className="text-center">
      <div className="font-mono text-[2rem] font-medium text-navy-700 sm:text-[2.5rem] md:text-[48px]">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-xs text-ink-muted sm:text-sm">{label}</div>
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const statsRef = useRef(null)
  const [startStats, setStartStats] = useState(false)

  useEffect(() => {
    const node = statsRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartStats(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-sand-0">
      <section className="bg-sand-100 pt-10 sm:pt-12 md:pt-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 pb-10 sm:px-6 md:gap-12 md:px-10 md:pb-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="mb-5 inline-block rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white sm:mb-6">
              Serving Those Who Served
            </span>

            <h1 className="font-display text-[2.5rem] font-black leading-[1.05] text-navy-700 sm:text-[3.25rem] md:text-[4.25rem]">
              Find Your Next
              <span className="block italic text-crimson-700 underline decoration-gold-500 decoration-3 underline-offset-4">
                Mission.
              </span>
              <span className="block">In Civilian Life.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-ink-body md:mt-6 md:text-lg">
              Vetess connects veterans, active duty members, and military spouses
              with employers who understand the value of your service. From resume
              building to career coaching, we help make the transition easier.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
              <button
                type="button"
                onClick={() => navigate('/for-veterans')}
                className="w-full rounded-md bg-crimson-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-500 sm:w-auto"
              >
                Get Started Free
              </button>

              <button
                type="button"
                onClick={() => navigate('/job-board')}
                className="w-full rounded-md border border-navy-700 px-5 py-3 text-sm font-semibold text-navy-700 transition hover:bg-navy-700 hover:text-white sm:w-auto"
              >
                Browse 2,400+ Jobs
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-ink-muted sm:flex-row sm:flex-wrap sm:gap-4 md:mt-6">
              <span>✓ 100% Free for Veterans</span>
              <span>✓ 47,000+ Placed</span>
              <span>✓ No Login to Browse</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-[20px] bg-white shadow-hero">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Veterans and professionals working together"
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[420px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>

        <div ref={statsRef} className="border-y border-sand-200 bg-white py-8">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 sm:px-6 md:flex md:flex-wrap md:justify-center md:gap-16 md:px-10">
            {stats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                start={startStats}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-0 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-crimson-700">
            Our Services
          </p>

          <h2 className="mt-4 text-center font-display text-3xl font-black leading-tight text-navy-700 sm:text-4xl md:text-[2.4rem]">
            Everything You Need to Land Your Next Role
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-ink-muted sm:text-base">
            Comprehensive support designed specifically for veterans, active duty,
            and military families.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lifted sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-xl">
                  ✦
                </div>

                <h3 className="font-display text-2xl font-bold text-navy-700">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-ink-body">
                  {service.text}
                </p>

                <button
                  type="button"
                  onClick={() => navigate(service.route)}
                  className="mt-5 text-left text-sm font-semibold text-navy-700"
                >
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.12em] text-crimson-700">
            Success Stories
          </p>

          <h2 className="mt-4 text-center font-display text-3xl font-black leading-tight text-navy-700 sm:text-4xl md:text-[2.4rem]">
            Veterans Who Found Their Path
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-ink-muted sm:text-base">
            Real stories from service members who successfully transitioned to civilian careers.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card sm:p-8"
              >
                <div className="mb-4 text-gold-500">★★★★★</div>

                <p className="font-display text-base italic leading-8 text-navy-900 sm:text-lg">
                  “{item.quote}”
                </p>

                <div className="mt-6">
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-ink-muted">{item.role}</p>
                  <p className="mt-2 text-xs font-semibold leading-6 text-gold-700">
                    {item.placement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-navy-700 px-5 py-12 sm:px-6 md:px-10 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-500">
            For Veterans & Military Spouses
          </p>

          <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Translate Your Service Into Success
          </h3>

          <p className="mt-4 max-w-xl text-white/80">
            Access tools and support designed specifically for veterans making the transition to civilian careers.
          </p>

          <ul className="mt-6 space-y-3 text-white/85">
            <li>✓ Resume Builder</li>
            <li>✓ Career Coaching</li>
            <li>✓ Mentorship</li>
            <li>✓ Placement</li>
          </ul>

          <button
            type="button"
            onClick={() => navigate('/for-veterans')}
            className="mt-8 w-full rounded-md bg-crimson-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-500 sm:w-auto"
          >
            Start Your Journey
          </button>
        </div>

        <div className="bg-sand-100 px-5 py-12 sm:px-6 md:px-10 lg:px-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-crimson-700">
            For Employers & Companies
          </p>

          <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-700 sm:text-4xl">
            Hire Leaders Who Are Mission-Proven
          </h3>

          <p className="mt-4 max-w-xl text-ink-body">
            Connect with talented veteran candidates ready to bring discipline,
            leadership, and commitment to your team.
          </p>

          <ul className="mt-6 space-y-3 text-ink-body">
            <li>✓ Talent Database</li>
            <li>✓ Career Fairs</li>
            <li>✓ Direct Placement</li>
            <li>✓ Tools</li>
          </ul>

          <button
            type="button"
            onClick={() => navigate('/for-employers')}
            className="mt-8 w-full rounded-md bg-navy-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-600 sm:w-auto"
          >
            Post a Job Free
          </button>
        </div>
      </section>

      <section className="bg-sand-0 px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1200px] rounded-[20px] bg-crimson-700 px-5 py-8 shadow-hero sm:px-8 sm:py-10 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-300">
              Support Our Mission
            </p>

            <h3 className="mt-3 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
              Help Us Serve More Veterans
            </h3>

            <p className="mt-3 max-w-2xl text-white/85">
              Your donation directly funds free career services for veterans and military families.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/donate')}
            className="mt-6 w-full rounded-md bg-white px-5 py-3 text-sm font-semibold text-crimson-700 transition hover:bg-sand-100 md:mt-0 md:w-auto"
          >
            Donate Today ♥
          </button>
        </div>
      </section>
    </div>
  )
}