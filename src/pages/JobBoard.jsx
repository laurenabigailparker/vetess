import JobCard from "../components/JobCard";

const fakeJobs = [
  {
    id: 1,
    title: "Cybersecurity Analyst",
    company: "ERA Solutions",
    location: "Washington, DC",
    salary: "$85k – $120k",
    tags: ["Veteran Preferred", "Security Clearance", "Remote OK"],
  },
  {
    id: 2,
    title: "Operations Manager",
    company: "ERA Solutions",
    location: "Seattle, WA",
    salary: "$95k – $135k",
    tags: ["Veteran Preferred", "Leadership"],
  },
  {
    id: 3,
    title: "Project Manager",
    company: "ERA Solutions",
    location: "Austin, TX",
    salary: "$80k – $110k",
    tags: ["Remote", "Military Spouse OK"],
  },
];

export default function JobBoard() {
  return (
    <section className="min-h-screen bg-[#f8f6f2] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Veteran Job Board
          </p>

          <h1 className="mb-2 mt-2 text-4xl font-bold">
            Find Jobs That Value Your Service
          </h1>

          <p className="text-gray-600">
            2,447 openings from employers committed to hiring veterans · Updated
            daily
          </p>
        </div>

        {/* search bar here */}
        <div className="mb-8 flex flex-col gap-3 rounded-xl bg-white p-3 shadow md:flex-row">
          <input
            type="text"
            placeholder="Job title, MOS code, or skill..."
            className="flex-1 rounded-lg border px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="City, State, or ZIP"
            className="flex-1 rounded-lg border px-4 py-3 outline-none"
          />

          <button className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white">
            Find Jobs
          </button>
        </div>

        {/* tabs here */}
        <div className="mb-6 flex gap-6 border-b pb-3 text-sm">
          <button className="font-semibold">List View</button>
          <button className="text-gray-500">Map View</button>
          <button className="text-gray-500">Saved Jobs (0)</button>
        </div>

        {/* results count */}
        <p className="mb-6 text-sm text-gray-600">Showing 2,447 jobs</p>

        {/* job grid here */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fakeJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}