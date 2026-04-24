import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="px-6 py-16 sm:px-8 lg:px-12">
      {/* hero section */}
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8d2227]">
          About Vetess
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#1f2f63] sm:text-5xl">
          Supporting Veterans Beyond Service
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#6f6a63] sm:text-lg">
          Vetess is dedicated to supporting veterans, transitioning service
          members, and the communities around them by connecting them with
          meaningful resources, opportunities, and long-term support.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/donate"
            className="inline-block rounded-[12px] bg-[#9f1d20] px-6 py-3 text-sm font-semibold !text-white no-underline transition hover:bg-[#8d181b]"
          >
            Donate Now
          </Link>

          <Link
            to="/for-veterans"
            className="inline-block rounded-[12px] border border-[#d8d1c3] bg-white px-6 py-3 text-sm font-semibold text-[#2a3560] no-underline transition hover:bg-[#f7f3ea]"
          >
            For Veterans
          </Link>
        </div>
      </section>

      {/* mission section */}
      <section className="mx-auto mt-20 max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d2227]">
            Our Mission
          </p>

          <h2 className="text-3xl font-bold text-[#1f2f63] sm:text-4xl">
            Supporting veterans through access, guidance, and opportunity
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6f6a63] sm:text-lg">
            Our mission is to help veterans move forward with confidence by
            providing access to practical support, meaningful opportunities, and
            a stronger sense of direction after service.
          </p>
        </div>
      </section>

      {/* story + who we serve */}
      <section className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* story */}
        <div className="rounded-[20px] border border-[#e3ddd2] bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d2227]">
            Our Story
          </p>

          <h3 className="text-2xl font-bold text-[#1f2f63]">
            Built to close the gap between service and what comes next
          </h3>

          <p className="mt-4 text-base leading-7 text-[#6f6a63]">
            Vetess was created from the belief that veterans deserve more than
            gratitude. They deserve clear pathways, reliable support, and
            resources that help them successfully transition into the next stage
            of life.
          </p>
        </div>

        {/* who we serve */}
        <div className="rounded-[20px] border border-[#e3ddd2] bg-white p-6 shadow-sm sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d2227]">
            Who We Serve
          </p>

          <h3 className="text-2xl font-bold text-[#1f2f63]">
            Veterans, service members, families, and supporters
          </h3>

          <p className="mt-4 text-base leading-7 text-[#6f6a63]">
            Vetess serves veterans and transitioning service members while also
            supporting the families, communities, and organizations committed to
            helping them build stable and successful futures.
          </p>
        </div>
      </section>

      {/* values */}
      <section className="mx-auto mt-16 max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8d2227]">
          What We Stand For
        </p>

        <h2 className="text-3xl font-bold text-[#1f2f63] sm:text-4xl">
          The values that guide our work
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[18px] border border-[#e3ddd2] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1f2f63]">Access</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f6a63]">
              We work to make opportunities, resources, and support easier to
              reach for the people who need them most.
            </p>
          </div>

          <div className="rounded-[18px] border border-[#e3ddd2] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1f2f63]">Community</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f6a63]">
              We believe strong communities create stronger outcomes for veterans
              and the people supporting them.
            </p>
          </div>

          <div className="rounded-[18px] border border-[#e3ddd2] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#1f2f63]">Impact</h3>
            <p className="mt-3 text-sm leading-7 text-[#6f6a63]">
              Our focus is on meaningful support that creates real progress,
              long-term stability, and lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* bottom CTA */}
      <section className="mx-auto mt-20 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-[#1f2f63] sm:text-4xl">
          Help us keep building something meaningful for veterans
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6f6a63]">
          Whether you want to support the mission or explore resources created
          for veterans, Vetess is here to make that connection possible.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/donate"
            className="inline-block rounded-[12px] bg-[#9f1d20] px-6 py-3 text-sm font-semibold !text-white no-underline transition hover:bg-[#8d181b]"
          >
            Support the Mission
          </Link>

          <Link
            to="/for-veterans"
            className="inline-block rounded-[12px] border border-[#d8d1c3] bg-white px-6 py-3 text-sm font-semibold text-[#2a3560] no-underline transition hover:bg-[#f7f3ea]"
          >
            Explore Resources
          </Link>
        </div>
      </section>
    </main>
  );
}