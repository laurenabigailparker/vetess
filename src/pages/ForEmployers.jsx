import {useNavigate} from 'react-router-dom'

export default function ForEmployers() {
  
  const navigate = useNavigate

  const veteranServices = [
    'Resume Services',
    'Career Coaching',
    'Mentorship',
    'Placement',
  ]

  const employerServices = [
    'Talent Database',
    'Career Fairs',
    'Direct Placement',
    'Tools',
  ]

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10">

                            {/* Hero section */}
      <div className="flex flex-col items-center p-4">

        <h1 className="font-display text-5xl font-black text-navy-700">
        Hire Veterans
        </h1>

        <p className="mt-4 text-lg text-ink-body text-center max-w-160">Connenct with talented veterans ready to bring discipline, leadership, and commitment to your organization</p>
      </div>

                            {/* Value section */}
      <div className="flex mt-10 justify-center">
          <div className="bg-navy-700 p-12 max-w-[500px]">
          <p className="m-4 text-gold-500">FOR VETERANS & MILITARY SPOUSES</p>

          <h1 className="m-4 font-display font-bold text-3xl text-white">Translate Your Services Into Success</h1>

          <p className="m-4 text-steel-300">Access tools ans suport designed specifically for veterans making the transition to civilian careers.</p>

          <ul className="mt-6 space-y-3 text-white/85">
            {veteranServices.map((item) => (
                <li key={item}>
                  <span className="text-gold-500 font-bold">✓</span> {item}
                </li>
              ))}
          </ul>

          <button
            type="button"
            onClick={() => navigate('/ForVeterans')}
            className="mt-8 mb-10 w-full rounded-md bg-crimson-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-500 sm:w-auto after:content-['→'] after:ml-2 after:font-bold"
            >
              Start Your Journey 
            </button>
          </div>


          <div className="p-12 max-w-[500px]">
          <p className="m-4 text-crimson-700">FOR EMPLYERS & COMPANIES</p>

          <h1 className="m-4 font-display font-bold text-3xl text-navy-700">Hire Leaders Who Are Mission-Proven</h1>

          <p className="m-4">Connect with talented veterans to bring discipline, leadership, and commitment to your team.</p>

          <ul className="mt-6 space-y-3">
            {employerServices.map((item) => (
                <li key={item}>
                  <span className="text-crimson-800 font-bold">✓</span> {item}
                </li>
              ))}
          </ul>

          <button
            type="button"
            onClick={() => navigate('')}
            className="mt-8 mb-10 w-full rounded-md bg-navy-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-500 sm:w-auto after:content-['→'] after:ml-2"
            >
              Post a Job Free
            </button>
          </div>
      </div>

    </div>

  )
}