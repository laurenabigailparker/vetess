export default function JobCard({ job }) {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">

      <p className="text-sm text-gray-500">{job.company}</p>

      <h2 className="text-lg font-semibold mt-1">
        {job.title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {job.location} · Full-time
      </p>

      <p className="text-sm mt-1">{job.salary}</p>

      {/* the tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-gray-100 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* apply button */}
      <button className="mt-4 text-red-700 font-medium">
        Apply →
      </button>
    </div>
  );
}