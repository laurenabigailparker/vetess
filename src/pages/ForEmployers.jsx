import {useNavigate} from 'react-router-dom'

export default function ForEmployers() {
  const navigate = useNavigate()
  return (
    // Hero section
    <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10 bg-sand-100">
      <div className="flex flex-col items-center p-4">

        <h1 className="font-display text-5xl font-black text-navy-700">
        Hire Veterans
        </h1>

        <p className="mt-4 text-lg text-ink-body text-center">Veterans bring discipline, leadership, and adaptability from high-pressure environments. Their strong work ethic and teamwork skills make them reliable contributors who deliver results quickly.</p>

        <button
        type="button"
        onClick={() => navigate('/about')}
         className="bg-navy-700 p-3 border-2 border-navy-900 rounded-2xl mt-4 hover:bg-navy-800 cursor-pointer">
         About Vetess
         </button>
      </div>
    </div>


  )
}