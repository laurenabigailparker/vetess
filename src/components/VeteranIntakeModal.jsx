export default function VeteranIntakeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1f]/45 px-4 py-8">
      {/* modal shell */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-[#e4d8c4] bg-white shadow-[0_20px_60px_rgba(31,31,31,0.18)]">
        
        {/* top accent area */}
        <div className="border-b border-[#efe5d6] bg-[#f8f3ea] px-6 py-6 md:px-8">
          {/* close button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 text-sm font-medium text-[#6a6a6a] transition hover:text-[#1f1f1f]"
          >
            close
          </button>

          {/* modal intro */}
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6b4a]">
            Veteran Intake
          </p>

          <h2 className="mb-3 max-w-2xl text-3xl font-bold leading-tight text-[#1f2f6b] md:text-4xl">
            Tell us a little about yourself
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-[#5f5f5f] md:text-base">
            This helps us get a better sense of your background so we can guide you toward the right opportunities.
          </p>
        </div>

        {/* modal content */}
        <div className="px-6 py-6 md:px-8 md:py-8">
          {/* form section label */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#1f1f1f]">
              Basic Information
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#6a6a6a]">
              Start with a few simple details so the platform can better understand what support you may need.
            </p>
          </div>

          {/* intake form fields */}
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-[#e4d8c4] bg-[#faf8f3] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-[#e4d8c4] bg-[#faf8f3] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Branch of Service
              </label>
              <select className="w-full rounded-2xl border border-[#e4d8c4] bg-[#faf8f3] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]">
                <option>Select Branch</option>
                <option>Army</option>
                <option>Air Force</option>
                <option>Navy</option>
                <option>Marines</option>
                <option>Coast Guard</option>
                <option>Space Force</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                Career Interest
              </label>
              <input
                type="text"
                placeholder="ex: Logistics, tech, healthcare"
                className="w-full rounded-2xl border border-[#e4d8c4] bg-[#faf8f3] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#1f1f1f]">
                What kind of support are you looking for?
              </label>
              <textarea
                rows="4"
                placeholder="Share anything that would be helpful here..."
                className="w-full rounded-2xl border border-[#e4d8c4] bg-[#faf8f3] px-4 py-3 text-sm text-[#1f1f1f] outline-none transition focus:border-[#9b7a46]"
              />
            </div>
          </div>

          {/* modal footer */}
          <div className="mt-8 flex flex-col gap-3 border-t border-[#efe5d6] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[#7a7a7a]">
              This is the first step in the intake process.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-[#d6c6a8] bg-white px-5 py-2.5 text-sm font-medium text-[#5a4a2f] transition hover:bg-[#f4f1eb]"
              >
                Cancel
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#9b7a46] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}