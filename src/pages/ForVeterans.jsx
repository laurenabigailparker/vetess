export default function ForVeterans() {
  const serviceCards = [
    {
      icon: "📄",
      title: "Resume Builder",
      text: "AI-powered MOS translator converts military experience into civilian language employers understand.",
      link: "/about",
    },
    {
      icon: "📗",
      title: "Career Coaching",
      text: "One-on-one guidance from coaches who understand the unique challenges of military transition.",
      link: "/about",
    },
    {
      icon: "💼",
      title: "Veteran Job Board",
      text: "Exclusive access to employers actively seeking veteran talent with preference hiring programs.",
      link: "/job-board",
    },
    {
      icon: "🎤",
      title: "Interview Prep",
      text: "Mock interviews and feedback to help you translate service skills into compelling career stories.",
      link: "/about",
    },
    {
      icon: "🤝",
      title: "Mentorship Network",
      text: "Connect with veterans who have successfully made the transition and built civilian careers.",
      link: "/about",
    },
    {
      icon: "💰",
      title: "Salary Coaching",
      text: "Understand your market value and negotiate compensation that reflects your leadership.",
      link: "/about",
    },
  ];

  const successStories = [
    {
      text: "VetBridge coach translated 8 years as an Army Intelligence Officer into language civilian employers actually understood. Hired in 6 weeks.",
      name: "Sgt. Marcus Reed (Ret.)",
      sub: "US Army 8yr Infantry",
      placed: "Placed: Cybersecurity Analyst @ Booz Allen Hamilton",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    },
    {
      text: "As a military spouse who moved 4 times in 6 years, my resume was a disaster. VetBridge helped me build a career story, not just a job list. Dream job remote.",
      name: "Jennifer Walsh",
      sub: "Military Spouse, Navy Family",
      placed: "Placed: HR Manager @ Dell Technologies",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    },
    {
      text: "Mock interviews were game-changing. Helped me stop answering like a Marine and start answering like a professional. Six-figure offer, 90 days.",
      name: "Cpl. Devon Torres (Ret.)",
      sub: "USMC 12yr Combat Logistics",
      placed: "Placed: Operations Director @ FedEx",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    },
  ];

  return (
    <section className="min-h-screen bg-[#F2F2EF] px-4 py-8 sm:px-5 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1180px]">
        {/* PAGE HERO */}
        <div className="mb-8 text-center md:mb-10">
          <h1
            className="mx-auto max-w-[900px] text-[2.35rem] font-semibold leading-[0.95] tracking-[-0.03em] text-[#213059] sm:text-[3rem] md:text-[4.5rem]"
            style={{
              fontFamily:
                '"Playfair Display", "Times New Roman", Georgia, serif',
            }}
          >
            Services for Veterans
          </h1>

          <p
            className="mx-auto mt-4 max-w-[640px] text-[15px] leading-8 text-[#6F6969] md:mt-5 md:text-[17px]"
            style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
          >
            Comprehensive support designed specifically for veterans and military
            families transitioning to civilian careers.
          </p>
        </div>

        {/* SERVICES SECTION */}
        <section className="mb-10 rounded-[8px] border border-[#ECE7D8] bg-[#FAFAF8] px-5 py-8 sm:px-7 md:mb-12 md:px-8 md:py-12">
          <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
            <p
              className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#A12E43]"
              style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
            >
              Our Services
            </p>

            <h2
              className="mx-auto max-w-[860px] text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#213059] sm:text-[2.6rem] md:text-[3.65rem]"
              style={{
                fontFamily:
                  '"Playfair Display", "Times New Roman", Georgia, serif',
              }}
            >
              Everything You Need to Land Your Next Role
            </h2>

            <p
              className="mx-auto mt-4 max-w-[620px] text-[15px] leading-8 text-[#7A7471] md:text-[17px]"
              style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
            >
              Comprehensive support designed specifically for veterans, active
              duty, and military families.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[18px] border border-[#E6DCC5] bg-[#FBFBF9] px-5 py-5 shadow-[0_4px_16px_rgba(27,25,25,0.04)] transition duration-200 hover:-translate-y-[1px]"
              >
                <div className="mb-5 flex h-[42px] w-[42px] items-center justify-center rounded-[12px] bg-[#EEF0F5] text-[17px]">
                  {card.icon}
                </div>

                <h3
                  className="mb-3 text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#213059]"
                  style={{
                    fontFamily:
                      '"Playfair Display", "Times New Roman", Georgia, serif',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="mb-5 max-w-[280px] text-[15px] leading-8 text-[#4D4A4A]"
                  style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
                >
                  {card.text}
                </p>

                <a
                  href={card.link}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#213059] transition hover:opacity-80"
                  style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="rounded-[4px] bg-[#EEE9DD] px-5 py-10 sm:px-7 md:px-8 md:py-14">
          <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
            <p
              className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#A12E43]"
              style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
            >
              Success Stories
            </p>

            <h2
              className="mx-auto max-w-[900px] text-[2.05rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#213059] sm:text-[2.75rem] md:text-[3.75rem]"
              style={{
                fontFamily:
                  '"Playfair Display", "Times New Roman", Georgia, serif',
              }}
            >
              Veterans Who Found Their Path
            </h2>

            <p
              className="mx-auto mt-4 max-w-[650px] text-[15px] leading-8 text-[#7C7470] md:text-[17px]"
              style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
            >
              Real stories from service members who successfully transitioned to
              civilian careers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {successStories.map((story) => (
              <article
                key={story.name}
                className="rounded-[18px] border border-[#E6DCCB] bg-white px-5 py-5 shadow-[0_6px_18px_rgba(27,25,25,0.05)]"
              >
                <p className="mb-5 text-[14px] tracking-[0.28em] text-[#CCB12B]">
                  ★★★★★
                </p>

                <p
                  className="min-h-[170px] text-[15px] leading-8 text-[#2F2E2E] md:min-h-[182px]"
                  style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
                >
                  {story.text}
                </p>

                <div className="mt-6 border-t border-[#E9E0D4] pt-5">
                  <div className="flex items-start gap-3">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">
                      <p
                        className="text-[15px] font-bold leading-5 text-[#1F2023]"
                        style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
                      >
                        {story.name}
                      </p>

                      <p
                        className="mt-1 text-[12px] leading-4 text-[#7A746E]"
                        style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
                      >
                        {story.sub}
                      </p>

                      <p
                        className="mt-2 text-[12px] leading-5 text-[#A28625]"
                        style={{ fontFamily: '"DM Sans", Arial, sans-serif' }}
                      >
                        {story.placed}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}