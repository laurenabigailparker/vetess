export default function ForVeterans() {
  return (
    
    
    <section className="min-h-screen bg-[#f8f5f1] px-4 py-12 md:px-8">
      
       {/* my page container */}   

      <div className="mx-auto max-w-6xl">
       
       
       {/* hero section */}
       
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
            Support for Veterans
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#1f1f1f] md:text-5xl">
            Built to support your next step
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#5f5f5f] md:text-lg">
            Vetess is here to help you transition into civilian life with real
            support, better job preparation, and opportunities that actually make sense for you.
          </p>
        </div>

            {/* here are the support cards */}


        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-[#1f1f1f]">
              Transition Support
            </h2>
            <p className="text-sm leading-6 text-[#555]">
              Moving out of the military can feel like a lot. This helps you understand
              what comes next and how to navigate it without feeling lost.
            </p>
          </article>

          <article className="rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-[#1f1f1f]">
              Job Readiness
            </h2>
            <p className="text-sm leading-6 text-[#555]">
              Get your resume right, understand what employers are looking for,
              and feel more confident going into interviews.
            </p>
          </article>

          <article className="rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold text-[#1f1f1f]">
              Career Growth
            </h2>
            <p className="text-sm leading-6 text-[#555]">
              This isn’t just about getting a job. It’s about building something long-term
              that actually works for your life.
            </p>
          </article>
        </div>
    

            {/* how it works section */}


        <div className="mb-16 rounded-3xl border border-[#e7dfd4] bg-white p-6 shadow-sm md:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b6f47]">
              How it works
            </p>
            <h2 className="text-3xl font-bold text-[#1f1f1f]">
              Simple steps to get started
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#fcfbf8] p-5">
              <p className="mb-2 text-sm font-semibold text-[#8b6f47]">01</p>
              <h3 className="mb-2 text-lg font-semibold text-[#1f1f1f]">
                Tell us what you need
              </h3>
              <p className="text-sm leading-6 text-[#555]">
                Start with your goals and what kind of support you’re looking for.
              </p>
            </div>
        
            <div className="rounded-2xl bg-[#fcfbf8] p-5">
              <p className="mb-2 text-sm font-semibold text-[#8b6f47]">02</p>
              <h3 className="mb-2 text-lg font-semibold text-[#1f1f1f]">
                Explore your options
              </h3>
              <p className="text-sm leading-6 text-[#555]">
                Look through opportunities and resources that actually fit your background.
              </p>
            </div>

            <div className="rounded-2xl bg-[#fcfbf8] p-5">
              <p className="mb-2 text-sm font-semibold text-[#8b6f47]">03</p>
              <h3 className="mb-2 text-lg font-semibold text-[#1f1f1f]">
                Take the next step
              </h3>
              <p className="text-sm leading-6 text-[#555]">
                Move forward with more direction and confidence in what you’re doing.
              </p>
            </div>
          </div>
        </div>

               {/* tried to make call to action section */}
        <div className="rounded-3xl border border-[#e7dfd4] bg-white p-8 text-center shadow-sm md:p-10">
          <h2 className="mb-4 text-3xl font-bold text-[#1f1f1f]">
            Ready to see what’s out there?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-[#555] md:text-base">
            Check out available opportunities and start figuring out what your next move looks like.
          </p>

          <a
            href="/job-board"
            className="inline-flex rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            View Job Board
          </a>
        </div>
      </div>
    </section>
  );
}