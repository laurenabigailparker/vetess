import { useMemo, useState } from "react";
import JobCard from "../components/JobCard";
import JobCenterMap from "../components/JobCenterMap";
const [submittedLocation, setSubmittedLocation] = useState("");

const jobs = [];

/* fake city cards for map view */


export default function JobBoard() {
  const [activeView, setActiveView] = useState("list");
  const [keyword, setKeyword] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [displayCount, setDisplayCount] = useState(6);

  /* front-end only filtering for now */
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesKeyword =
        keyword.trim() === "" ||
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(keyword.toLowerCase()) ||
        job.tags.join(" ").toLowerCase().includes(keyword.toLowerCase());

      const matchesLocation =
        locationSearch.trim() === "" ||
        job.location.toLowerCase().includes(locationSearch.toLowerCase());

      return matchesKeyword && matchesLocation;
    });
  }, [keyword, locationSearch]);

  const displayedJobs = filteredJobs.slice(0, displayCount);
  const savedJobs = jobs.filter((job) => job.saved);

  return (
    <section
      className="min-h-screen bg-[#f5f1e8] px-4 py-6 sm:px-6 lg:px-8"
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
        `}
      </style>

      <div className="mx-auto max-w-[1240px]">
        <div className="overflow-hidden rounded-[28px] border border-[#e3ddd2] bg-[#f3eee4] shadow-[0_1px_6px_rgba(70,52,24,0.04)]">
          {/* top section */}
          <div className="border-b border-[#e6e0d5] px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8d2227]">
              Veteran Job Board
            </p>

            <h1
              className="w-full text-[36px] leading-[1.04] text-[#1f2f63] sm:text-[48px] lg:text-[56px]"
              style={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                letterSpacing: "-0.015em",
              }}
            >
              Find Jobs That Value Your Service
            </h1>

            <p className="mt-4 text-[15px] font-normal leading-6 text-[#7b746c] sm:text-[16px]">
              2,447 openings from employers committed to hiring veterans ·
              Updated daily
            </p>

            {/* search area */}
            <div className="mt-7 overflow-hidden rounded-[16px] border border-[#d8d1c3] bg-white shadow-[0_4px_12px_rgba(27,31,59,0.06)]">
              <div className="flex flex-col lg:flex-row">
                <div className="flex min-h-[72px] flex-1 items-center gap-3 border-b border-[#e7e0d4] px-5 lg:border-b-0 lg:border-r">
                  <span className="text-[#7b766f]">🔍</span>
                  <input
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Job title, MOS code, or skill..."
                    className="w-full bg-transparent text-[15px] font-medium text-[#5f5a54] outline-none placeholder:text-[#9a948b]"
                  />
                </div>

                <div className="flex min-h-[72px] flex-1 items-center gap-3 border-b border-[#e7e0d4] px-5 lg:border-b-0 lg:border-r">
                  <span className="text-[#8d2227]">📍</span>
                  <input
                    type="text"
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    placeholder="City, State, or ZIP"
                    className="w-full bg-transparent text-[15px] font-medium text-[#5f5a54] outline-none placeholder:text-[#9a948b]"
                  />
                </div>

               <button
  onClick={() => setSubmittedLocation(locationSearch)}
  className="flex min-h-[72px] items-center justify-center bg-[#9f1d20] px-8 text-[15px] text-white transition hover:bg-[#8d181b] lg:min-w-[220px]"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Find Jobs
                </button>
              </div>
            </div>

            {/* tabs */}
            <div className="mt-6 flex items-center gap-8 border-b border-[#e4ddd2] pb-4">
              <button
                onClick={() => setActiveView("map")}
                className="relative pb-[2px] text-[15px]"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: activeView === "map" ? 500 : 400,
                  color: activeView === "map" ? "#2b355f" : "#8a847c",
                }}
              >
                🗺️ Map View
                {activeView === "map" && (
                  <span className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-[#8d2227]" />
                )}
              </button>

              <button
                onClick={() => setActiveView("list")}
                className="relative pb-[2px] text-[15px]"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: activeView === "list" ? 600 : 400,
                  color: activeView === "list" ? "#2b355f" : "#8a847c",
                }}
              >
                ☰ List View
                {activeView === "list" && (
                  <span className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-[#8d2227]" />
                )}
              </button>

              <button
                onClick={() => setActiveView("saved")}
                className="relative pb-[2px] text-[15px]"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: activeView === "saved" ? 500 : 400,
                  color: activeView === "saved" ? "#2b355f" : "#8a847c",
                }}
              >
                🏷️ Saved Jobs ({savedJobs.length})
                {activeView === "saved" && (
                  <span className="absolute -bottom-[17px] left-0 h-[2px] w-full bg-[#8d2227]" />
                )}
              </button>
            </div>
          </div>

          {/* map view */}
          {activeView === "map" && (
            <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
              <div className="overflow-hidden rounded-[20px] border border-[#e2ddd2] bg-[#f3eee4] shadow-sm">
                <div className="p-4 sm:p-6">
 <JobCenterMap searchLocation={submittedLocation} />
</div>
              </div>

              
            </div>
          )}

          {/* list view */}
          {activeView === "list" && (
            <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
               <p className="text-[15px] font-normal text-[#7a746c]">
  Official job listings coming soon
</p>

                <div className="h-[44px] w-full max-w-[128px] rounded-[10px] border border-[#e3ddd2] bg-white" />
              </div>

             {displayedJobs.length > 0 ? (
  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {displayedJobs.map((job) => (
      <JobCard key={job.id} job={job} />
    ))}
  </div>
) : (
  <div className="rounded-[20px] border border-dashed border-[#ddd4c8] bg-white px-6 py-14 text-center">
    <h2
      className="text-2xl text-[#2a3560]"
      style={{
        fontFamily: '"Playfair Display", serif',
        fontWeight: 600,
      }}
    >
      Official veteran job listings coming soon
    </h2>

    <p className="mt-3 text-sm leading-7 text-[#726d66]">
      Vetess is currently integrating official workforce and employment APIs
      to provide real-time veteran-friendly job opportunities.
    </p>
  </div>
)}

              {displayCount < filteredJobs.length && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() =>
                      setDisplayCount((prev) =>
                        Math.min(prev + 6, filteredJobs.length)
                      )
                    }
                    className="rounded-[14px] border-2 border-[#25386e] bg-white px-8 py-4 text-[18px] font-medium text-[#25386e] transition hover:bg-[#f7f5ef]"
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    Load More Jobs
                  </button>
                </div>
              )}
            </div>
          )}

          {/* saved jobs view */}
          {activeView === "saved" && (
            <div className="px-5 py-12 text-center sm:px-8 lg:px-10">
              <div className="mx-auto max-w-xl rounded-[20px] border border-dashed border-[#ddd4c8] bg-white px-6 py-12">
                <h2
                  className="text-2xl text-[#2a3560]"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 600,
                  }}
                >
                  Your saved jobs will show up here
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#726d66]">
                  Saved jobs will appear here so you can easily revisit them
                  later.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}