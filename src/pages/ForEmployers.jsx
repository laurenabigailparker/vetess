import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ForEmployers() {
  const navigate = useNavigate();

  const [jobCount, setJobCount] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadEmployerData = async () => {
      const { data: jobData, error: jobError } = await supabase
        .from("job_listings")
        .select("*")
        .eq("status", "Active");

      if (jobError) {
        console.error("Error loading jobs:", jobError);
      } else {
        setJobCount(jobData?.length || 0);
      }

      const { data: testimonialData, error: testimonialError } = await supabase
        .from("testimonials")
        .select("*")
        .eq("status", "Published")
        .order("created_at", { ascending: false })
        .limit(3);

      if (testimonialError) {
        console.error("Error loading testimonials:", testimonialError);
      } else {
        setTestimonials(testimonialData || []);
      }
    };

    loadEmployerData();
  }, []);

  const veteranServices = [
    "Resume Services",
    "Career Coaching",
    "Mentorship",
    "Placement",
  ];

  const employerServices = [
    "Talent Database",
    "Career Fairs",
    "Direct Placement",
    "Tools",
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-10">
      <div className="flex flex-col items-center p-4 text-center">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-700">
          For Employers
        </p>

        <h1 className="font-display text-5xl font-black text-navy-700">
          Hire Veterans
        </h1>

        <p className="mt-4 max-w-[680px] text-center text-lg text-ink-body">
          Connect with talented veterans ready to bring discipline, leadership,
          and commitment to your organization.
        </p>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-sand-200 bg-white p-5 shadow-card">
            <p className="text-3xl font-bold text-navy-700">{jobCount}</p>
            <p className="mt-1 text-sm text-ink-muted">Active Jobs</p>
          </div>

          <div className="rounded-2xl border border-sand-200 bg-white p-5 shadow-card">
            <p className="text-3xl font-bold text-navy-700">
              {testimonials.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">Success Proofs</p>
          </div>

          <div className="rounded-2xl border border-sand-200 bg-white p-5 shadow-card">
            <p className="text-3xl font-bold text-navy-700">100%</p>
            <p className="mt-1 text-sm text-ink-muted">Mission Focused</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card lg:flex-row">
        <div className="bg-navy-700 p-10 lg:w-1/2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-500">
            For Veterans & Military Spouses
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold text-white">
            Translate Your Service Into Success
          </h2>

          <p className="mt-4 text-steel-300">
            Access tools and support designed specifically for veterans making
            the transition to civilian careers.
          </p>

          <ul className="mt-6 space-y-3 text-white/85">
            {veteranServices.map((item) => (
              <li key={item}>
                <span className="font-bold text-gold-500">✓</span> {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => navigate("/for-veterans")}
            className="mt-8 w-full rounded-md bg-crimson-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-500 sm:w-auto"
          >
            Start Your Journey →
          </button>
        </div>

        <div className="p-10 lg:w-1/2">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-crimson-700">
            For Employers & Companies
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold text-navy-700">
            Hire Leaders Who Are Mission-Proven
          </h2>

          <p className="mt-4 text-ink-body">
            Connect with talented veterans ready to bring discipline,
            leadership, and commitment to your team.
          </p>

          <ul className="mt-6 space-y-3">
            {employerServices.map((item) => (
              <li key={item}>
                <span className="font-bold text-crimson-800">✓</span> {item}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => navigate("/job-board")}
            className="mt-8 w-full rounded-md bg-navy-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-500 sm:w-auto"
          >
            View Active Jobs →
          </button>
        </div>
      </div>

      <section className="mt-14 rounded-2xl bg-sand-100 px-6 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-crimson-700">
            Employer Confidence
          </p>

          <h2 className="mt-3 font-display text-3xl font-black text-navy-700">
            Veteran talent is already succeeding through Vetess
          </h2>
        </div>

        {testimonials.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card"
              >
                <p className="mb-4 text-gold-500">★★★★★</p>
                <p className="text-sm leading-7 text-ink-body">
                  “{item.quote}”
                </p>

                <div className="mt-5 border-t pt-4">
                  <p className="font-bold text-navy-700">{item.name}</p>
                  <p className="text-xs text-ink-muted">
                    {item.title || item.branch}
                  </p>
                  {item.placed_company && (
                    <p className="mt-1 text-xs font-semibold text-gold-700">
                      Placed: {item.placed_company}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-dashed border-sand-200 bg-white p-8 text-center">
            <p className="font-semibold text-navy-700">
              Employer stories will appear here soon.
            </p>
            
          </div>
        )}
      </section>
    </div>
  );
}