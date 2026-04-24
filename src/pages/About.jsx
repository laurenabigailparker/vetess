import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="px-6 py-16 sm:px-8 lg:px-12">
      {/* about hero section */}
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8d2227]">
          About Vetess
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#1f2f63] sm:text-5xl">
          Empowering Veterans Through Opportunity, Support, and Community
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#6f6a63] sm:text-lg">
          Vetess exists to support veterans by connecting them with meaningful
          opportunities, practical resources, and a community that understands
          their journey. Our goal is to help veterans move forward with clarity,
          confidence, and real support.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/donate"
            className="rounded-[12px] bg-[#9f1d20] px-6 py-3 text-sm font-semibold !text-white transition hover:bg-[#8d181b]"
          >
            Donate Now
          </Link>

          <Link
            to="/for-veterans"
            className="rounded-[12px] border border-[#d8d1c3] bg-white px-6 py-3 text-sm font-semibold text-[#2a3560] transition hover:bg-[#f7f3ea]"
          >
            For Veterans
          </Link>
        </div>
      </section>
    </main>
  );
}