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
    <section className="bg-[#f8f6f2] min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Veteran Job Board
          </p>

          <h1 className="text-4xl font-bold mt-2 mb-2">
            Find Jobs That Value Your Service
          </h1>

          <p className="text-gray-600">
            2,447 openings from employers committed to hiring veterans · Updated daily
          </p>
        </div>

        {/* search bar here */}
        <div className="bg-white rounded-xl shadow p-3 flex flex-col md:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Job title, MOS code, or skill..."
            className="flex-1 px-4 py-3 rounded-lg border outline-none"
          />

          <input
            type="text"
            placeholder="City, State, or ZIP"
            className="flex-1 px-4 py-3 rounded-lg border outline-none"
          />

          <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
            Find Jobs
          </button>
        </div>

        {/* tabs here */}
        <div className="flex gap-6 border-b pb-3 mb-6 text-sm">
          <button className="font-semibold">List View</button>
          <button className="text-gray-500">Map View</button>
          <button className="text-gray-500">Saved Jobs (0)</button>
        </div>

        {/* results count */}
        <p className="text-sm text-gray-600 mb-6">
          Showing 2,447 jobs
        </p>

        {/* job grid here */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
}