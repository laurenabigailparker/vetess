import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

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

const [successStories, setSuccessStories] = useState([]);

useEffect(() => {
  const loadStories = async () => {
    const { data, error } = await supabase
      .from("success_stories")
      .select("*")
      .eq("status", "Published")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading success stories:", error);
      return;
    }

    setSuccessStories(data || []);
  };

  loadStories();
}, []);

  

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

        {/* SERVICES */}
        <section className="mb-10 rounded-[8px] border border-[#ECE7D8] bg-[#FAFAF8] px-5 py-8 sm:px-7 md:mb-12 md:px-8 md:py-12">
          <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#A12E43]">
              Our Services
            </p>

            <h2 className="mx-auto max-w-[860px] text-[2rem] font-semibold text-[#213059] sm:text-[2.6rem] md:text-[3.65rem]">
              Everything You Need to Land Your Next Role
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-[15px] text-[#7A7471] md:text-[17px]">
              Comprehensive support designed specifically for veterans, active
              duty, and military families.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card) => (
              <article key={card.title} className="rounded-[18px] border bg-[#FBFBF9] px-5 py-5">
                <div className="mb-5">{card.icon}</div>
                <h3 className="mb-3 text-[1.85rem] font-semibold text-[#213059]">
                  {card.title}
                </h3>
                <p className="mb-5 text-[15px] text-[#4D4A4A]">{card.text}</p>
                <a href={card.link} className="text-[14px] font-semibold text-[#213059]">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="rounded-[4px] bg-[#EEE9DD] px-5 py-10 sm:px-7 md:px-8 md:py-14">
          <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#A12E43]">
              Success Stories
            </p>

            <h2 className="mx-auto max-w-[900px] text-[2.05rem] font-semibold text-[#213059] sm:text-[2.75rem] md:text-[3.75rem]">
              Veterans Who Found Their Path
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[15px] text-[#7C7470] md:text-[17px]">
              Real stories from service members who successfully transitioned to
              civilian careers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {successStories.map((story) => (
              <article key={story.id} className="rounded-[18px] border bg-white px-5 py-5">
                <p className="mb-5 text-[#CCB12B]">★★★★★</p>
                <p className="text-[15px] text-[#2F2E2E]">{story.summary}</p>

                <div className="mt-6 border-t pt-5">
                  <div className="flex gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#213059] text-white font-bold">
  {story.veteran_name?.charAt(0)}
</div> className="h-12 w-12 rounded-full" 
                    <div>
                      <p className="font-bold">{story.veteran_name}</p>
                      <p className="text-[12px] text-[#7A746E]">{story.company}</p>
                      <p className="text-[12px] text-[#A28625]">Placed Through Vetess</p>
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