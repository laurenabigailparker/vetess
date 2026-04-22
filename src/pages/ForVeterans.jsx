export default function ForVeterans() {
  return (
    <section className="bg-[#f7f4ef] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">

        {/* hero section (already built by jacob) */}
        {/* this is the top intro area with the main heading and text.
            i didn’t touch this since it was already assigned */}

        {/* services / next steps section */}
        {/* this section follows the figma design.
            even though it says "our services", it also works as
            a way to guide the user on what they can do next */}

        <div className="rounded-[1.5rem] bg-[#f3eee3] px-6 py-14 md:px-10">

          {/* section header */}
          {/* this is just the label, main title, and short description.
              kept it centered and spaced out to match the figma */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9a6b4a]">
              OUR SERVICES
            </p>

            <h2 className="mb-4 text-3xl font-bold leading-tight text-[#1f2f6b] md:text-5xl">
              Everything You Need to Land Your Next Role
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-[#6a6a6a] md:text-base">
              Comprehensive support designed to guide veterans, active duty,
              and military families toward the right resources.
            </p>
          </div>

          {/* cards section */}
          {/* using a grid so everything lines up evenly and stacks on mobile */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* card 1 - job board */}
            {/* this lets users go look at open jobs */}
            <article className="rounded-[1.25rem] border border-[#e4d8c4] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold text-[#1f2f6b]">
                Explore Opportunities
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#555]">
                Browse open roles and see what opportunities line up with your goals,
                experience, and next move.
              </p>

              <a
                href="/job-board"
                className="inline-flex rounded-full bg-[#9b7a46] px-5 py-2.5 text-sm font-medium text-white"
              >
                View Job Board
              </a>
            </article>

            {/* card 2 - about */}
            {/* this is for learning more about the platform */}
            <article className="rounded-[1.25rem] border border-[#e4d8c4] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold text-[#1f2f6b]">
                Learn More About Vetess
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#555]">
                Get a better understanding of the mission behind the platform
                and how it is built to support veterans.
              </p>

              <a
                href="/about"
                className="inline-flex rounded-full border border-[#9b7a46] px-5 py-2.5 text-sm font-medium text-[#5a4a2f]"
              >
                Learn More
              </a>
            </article>

            {/* card 3 - donate */}
            {/* this lets users support the mission */}
            <article className="rounded-[1.25rem] border border-[#e4d8c4] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-2xl font-semibold text-[#1f2f6b]">
                Support the Mission
              </h3>

              <p className="mb-6 text-sm leading-7 text-[#555]">
                Help support the work being done to connect veterans with better
                opportunities, guidance, and resources.
              </p>

              <a
                href="/donate"
                className="inline-flex rounded-full bg-[#9b7a46] px-5 py-2.5 text-sm font-medium text-white"
              >
                Donate
              </a>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
}