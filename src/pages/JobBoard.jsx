import { useMemo, useState } from "react";
import JobCard from "../components/JobCard";

/* fake jobs for now so the page feels full + real */
const jobs = [
  {
    id: 1,
    title: "Cybersecurity Analyst",
    company: "Booz Allen Hamilton",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$85k – $120k",
    tags: ["Veteran Preferred", "Security Clearance", "Remote OK"],
    saved: false,
  },
  {
    id: 2,
    title: "Operations Manager",
    company: "Boeing",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$95k – $135k",
    tags: ["Veteran Preferred", "Leadership"],
    saved: false,
  },
  {
    id: 3,
    title: "Project Manager",
    company: "Dell Technologies",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$80k – $110k",
    tags: ["Remote", "Military Spouse OK"],
    saved: false,
  },
  {
    id: 4,
    title: "Systems Engineer",
    company: "Lockheed Martin",
    location: "Fort Worth, TX",
    type: "Full-time",
    salary: "$90k – $125k",
    tags: ["Veteran Preferred", "Security Clearance"],
    saved: false,
  },
  {
    id: 5,
    title: "Operations Lead",
    company: "Amazon",
    location: "New York, NY",
    type: "Full-time",
    salary: "$88k – $115k",
    tags: ["Veteran Preferred", "Sign-On Bonus"],
    saved: false,
  },
  {
    id: 6,
    title: "Program Manager",
    company: "Raytheon Technologies",
    location: "Huntsville, AL",
    type: "Full-time",
    salary: "$92k – $130k",
    tags: ["Veteran Preferred", "Security Clearance", "Relocation"],
    saved: false,
  },
  {
    id: 7,
    title: "Cybersecurity Analyst",
    company: "Booz Allen Hamilton",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$85k – $120k",
    tags: ["Veteran Preferred", "Security Clearance", "Remote OK"],
    saved: false,
  },
  {
    id: 8,
    title: "Operations Manager",
    company: "Boeing",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$95k – $135k",
    tags: ["Veteran Preferred", "Leadership"],
    saved: false,
  },
  {
    id: 9,
    title: "Project Manager",
    company: "Dell Technologies",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$80k – $110k",
    tags: ["Remote", "Military Spouse OK"],
    saved: false,
  },
  {
    id: 10,
    title: "Systems Engineer",
    company: "Lockheed Martin",
    location: "Fort Worth, TX",
    type: "Full-time",
    salary: "$90k – $125k",
    tags: ["Veteran Preferred", "Security Clearance"],
    saved: false,
  },
  {
    id: 11,
    title: "Operations Lead",
    company: "Amazon",
    location: "New York, NY",
    type: "Full-time",
    salary: "$88k – $115k",
    tags: ["Veteran Preferred", "Sign-On Bonus"],
    saved: false,
  },
  {
    id: 12,
    title: "Program Manager",
    company: "Raytheon Technologies",
    location: "Huntsville, AL",
    type: "Full-time",
    salary: "$92k – $130k",
    tags: ["Veteran Preferred", "Security Clearance", "Relocation"],
    saved: false,
  },
  {
    id: 13,
    title: "Cybersecurity Analyst",
    company: "Booz Allen Hamilton",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$85k – $120k",
    tags: ["Veteran Preferred", "Security Clearance", "Remote OK"],
    saved: false,
  },
  {
    id: 14,
    title: "Operations Manager",
    company: "Boeing",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$95k – $135k",
    tags: ["Veteran Preferred", "Leadership"],
    saved: false,
  },
  {
    id: 15,
    title: "Project Manager",
    company: "Dell Technologies",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$80k – $110k",
    tags: ["Remote", "Military Spouse OK"],
    saved: false,
  },
  {
    id: 16,
    title: "Systems Engineer",
    company: "Lockheed Martin",
    location: "Fort Worth, TX",
    type: "Full-time",
    salary: "$90k – $125k",
    tags: ["Veteran Preferred", "Security Clearance"],
    saved: false,
  },
  {
    id: 17,
    title: "Operations Lead",
    company: "Amazon",
    location: "New York, NY",
    type: "Full-time",
    salary: "$88k – $115k",
    tags: ["Veteran Preferred", "Sign-On Bonus"],
    saved: false,
  },
  {
    id: 18,
    title: "Program Manager",
    company: "Raytheon Technologies",
    location: "Huntsville, AL",
    type: "Full-time",
    salary: "$92k – $130k",
    tags: ["Veteran Preferred", "Security Clearance", "Relocation"],
    saved: false,
  },
];

/* fake city cards for map view */
const mapCities = [
  { id: 1, city: "Washington, DC", count: 389 },
  { id: 2, city: "New York, NY", count: 412 },
  { id: 3, city: "Seattle, WA", count: 289 },
  { id: 4, city: "Houston, TX", count: 234 },
  { id: 5, city: "San Diego, CA", count: 198 },
];

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
                <div className="relative h-[420px] w-full bg-[#dbe8ec] sm:h-[500px]">
                  <iframe
                    title="United States Job Map"
                    src="https://www.google.com/maps?q=United%20States&z=4&output=embed"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-5 rounded-[20px] border border-[#ebe3d7] bg-[#f7f1e7] p-5 shadow-[0_1px_4px_rgba(70,52,24,0.03)] sm:p-6">
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {mapCities.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-[16px] border border-[#e7dfd2] bg-[#fbf9f4] px-4 py-3 shadow-[0_2px_6px_rgba(27,31,59,0.05)] transition-all duration-200 ease-out hover:-translate-y-[2px] hover:border-[#ded6c8] hover:shadow-[0_6px_14px_rgba(27,31,59,0.08)]"
                    >
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <div>
                          <h3
                            className="text-[15px] text-[#2a3560]"
                            style={{
                              fontFamily: '"DM Sans", sans-serif',
                              fontWeight: 700,
                            }}
                          >
                            {item.city}
                          </h3>
                          <p
                            className="mt-1 text-[14px] text-[#7a756e]"
                            style={{
                              fontFamily: '"DM Sans", sans-serif',
                              fontWeight: 400,
                            }}
                          >
                            {item.count} open positions
                          </p>
                        </div>

                        <span className="text-sm text-[#9f1d20]">📍</span>
                      </div>

                      <button
                        className="w-full rounded-[10px] bg-[#f7f3ea] px-4 py-2 text-[14px] text-[#2f3e6a] transition-all duration-200 ease-out hover:bg-[#efe8dd]"
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontWeight: 700,
                        }}
                      >
                        View Jobs
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* list view */}
          {activeView === "list" && (
            <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[15px] font-normal text-[#7a746c]">
                  Showing 2,447 jobs
                </p>

                <div className="h-[44px] w-full max-w-[128px] rounded-[10px] border border-[#e3ddd2] bg-white" />
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {displayedJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

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