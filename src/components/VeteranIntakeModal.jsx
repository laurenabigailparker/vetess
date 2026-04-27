export default function VeteranIntakeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1f]/45 px-4 py-8">
      {/* modal shell */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-[#e4d8c4] bg-white shadow-[0_20px_60px_rgba(31,31,31,0.18)] max-h-[650px] overflow-y-auto [&::-webkit-scrollbar]:hidden">
        
        {/* top accent area */}
        <div className="border-b-3 border-crimson-600 bg-navy-700 px-6 py-6 md:px-8 sticky top-0">
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute right-10 top-5 text-sm font-medium text-steel-100 transition hover:text-[#1f1f1f]"
          >
            <span className="text-[30px]">✕</span>
          </button>

          {/* modal intro */}
          <h2 className="mb-3 max-w-2xl text-3xl font- font-bold leading-tight text-white md:text-4xl font-display">
            Get Started
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-steel-300 md:text-base">
            Tell us about yourself and how we can help you transition. 
          </p>
        </div>

        {/* modal content */}
        <div className="px-6 py-6 md:px-8 md:py-8">
          {/* form section label */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-navy-700">
              Personal Information
            </h3>
          </div>

          {/* intake form fields */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-navy-800">
                First Name *
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-navy-800">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="w-full rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-navy-800">
                Email Address *
              </label>
              <input
                type="text"
                placeholder="john.smith@email.com"
                className="w-full rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-navy-800">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="(555) 123-4567"
                className="w-full rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>
                    {/* Military Status Section */}
            <div className="md:col-span-2">
              <label className="mb-4 block text-[20px] font-semibold text-navy-800">
                Military Status *
              </label>
              
              <div className="grid grid-cols-2 gap-5">
              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="radio" name="status" value="active-duty" className="accent-[#9b7a46]" />
              <span className="text-sm text-[#1f1f1f]">Active Duty</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="radio" name="status" value="Veteran" className="accent-[#9b7a46]" />
              <span className="text-sm text-[#1f1f1f]">Veteran</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="radio" name="status" value="Military Spouse" className="accent-[#9b7a46]" />
              <span className="text-sm text-[#1f1f1f]">Military Spouse</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="radio" name="status" value="Transitioning Service Member" className="accent-[#9b7a46]" />
              <span className="text-sm text-[#1f1f1f]">Transitioning Service Member</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="radio" name="status" value="Reserve/National Gaurd" className="accent-[#9b7a46]" />
              <span className="text-sm text-[#1f1f1f]">Reserve/National Gaurd</span>
              </label>
              </div>
            </div>

                  {/* Services Section */}
            <div className="md:col-span-2">
              <label className="mb-4 block text-[20px] font-semibold text-navy-800">
                Services You Are Interested In *
              </label>

              <p className="mb-4 text-sand-700">Select all that apply</p>

              <div className="grid grid-cols-2 gap-5">
              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="checkbox" name="services" value="Resume Builder" className="appearance-none h-4 w-4 rounded-full border-2 border-sand-300 checked:bg-sand-400" />
              <span className="text-sm text-[#1f1f1f]">Resume Builder</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="checkbox" name="services" value="Career Coaching" className="appearance-none h-4 w-4 rounded-full border-2 border-sand-300 checked:bg-sand-400" />
              <span className="text-sm text-[#1f1f1f]">Career Coaching</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="checkbox" name="services" value="Job Placement" className="appearance-none h-4 w-4 rounded-full border-2 border-sand-300 checked:bg-sand-400" />
              <span className="text-sm text-[#1f1f1f]">Job Placement</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="checkbox" name="services" value="Interview Preperation" className="appearance-none h-4 w-4 rounded-full border-2 border-sand-300 checked:bg-sand-400" />
              <span className="text-sm text-[#1f1f1f]">Interview Preperation</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="checkbox" name="services" value="Mentorship Program" className="appearance-none h-4 w-4 rounded-full border-2 border-sand-300 checked:bg-sand-400" />
              <span className="text-sm text-[#1f1f1f]">Mentorship Program</span>
              </label>

              <label className=" max-w-85 flex items-center gap-3 rounded-2xl border-2 border-[#e4d8c4] px-4 py-3 cursor-pointer">
              <input type="checkbox" name="services" value="Salary Negotiation" className="appearance-none h-4 w-4 rounded-full border-2 border-sand-300 checked:bg-sand-400" />
              <span className="text-sm text-[#1f1f1f]">Salary Negotiation</span>
              </label>

              </div>
            </div>
          </div>

          {/* modal footer */}
          <div className="mt-8 flex flex-col gap-3 border-t border-[#efe5d6] pt-6 sm:items-center sm:justify-between">
            
            <div className="flex flex-col gap-3 sm:flex-row">
      
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl bg-crimson-700 px-35 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Submit
              </button>

              <button
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-2xl border-2 border-[#d6c6a8] bg-white px-35 py-3 text-sm font-medium text-[#5a4a2f] transition hover:bg-[#f4f1eb]"
              >
                Cancel
              </button>
            </div>
            <p className="text-[13px] leading-5 text-[#7a7a7a]">
              By submitting this form, you agree to be contacted by VetBridge regaurding our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}