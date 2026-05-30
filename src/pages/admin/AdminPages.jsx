import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "../../lib/supabase";

const cardClass =
  "rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm";

const inputClass =
  "w-full rounded-xl border border-[#eadfca] bg-white px-4 py-3 text-sm outline-none focus:border-[#911b1d]";

const redButton =
  "rounded-2xl bg-[#911b1d] px-5 py-3 text-sm font-bold text-white hover:opacity-90";

const _navyButton =
  "rounded-2xl bg-[#1f3057] px-5 py-3 text-sm font-bold text-white hover:opacity-90";

function PageTitle({ title, subtitle, button }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.32em] text-[#911b1d]">
          Vetess Admin
        </p>
        <h1 className="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-3 max-w-2xl text-sm text-slate-600">{subtitle}</p>}
      </div>
      {button}
    </div>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className={cardClass}>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-3 text-3xl font-bold text-[#1f3057]">{value}</p>
      {sub && <p className="mt-1 text-xs text-green-600">{sub}</p>}
    </div>
  );
}

function StatusBadge({ children, type = "green" }) {
  const colors =
    type === "red"
      ? "bg-red-100 text-red-700"
      : type === "yellow"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${colors}`}>
      {children}
    </span>
  );
}

function EmptyState({ title, text }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#eadfca] bg-[#FEFCF8] p-8 text-center">
      <p className="font-bold text-[#1f3057]">{title}</p>
      <p className="mt-2 text-sm text-slate-500">{text}</p>
    </div>
  );
}

function useSupabaseTable(tableName, orderColumn = "created_at") {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadRows = async () => {
      setLoading(true);

      let query = supabase.from(tableName).select("*");

      if (orderColumn) {
        query = query.order(orderColumn, { ascending: false });
      }

      const { data, error } = await query;

      if (!isMounted) return;

      if (error) {
        console.error(`Error loading ${tableName}:`, error);
        setRows([]);
      } else {
        setRows(data || []);
      }

      setLoading(false);
    };

    loadRows();

    return () => {
      isMounted = false;
    };
  }, [tableName, orderColumn]);

  const refreshRows = async () => {
    setLoading(true);

    let query = supabase.from(tableName).select("*");

    if (orderColumn) {
      query = query.order(orderColumn, { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Error loading ${tableName}:`, error);
      setRows([]);
    } else {
      setRows(data || []);
    }

    setLoading(false);
  };

  const insertRow = async (payload) => {
    const { error } = await supabase.from(tableName).insert([payload]);

    if (error) {
      console.error(`Error adding ${tableName}:`, error);
      alert("Save failed. Check console.");
      return false;
    }

    await refreshRows();
    return true;
  };


  const deleteRow = async (id) => {
    const confirmDelete = window.confirm("Delete this item?");
    if (!confirmDelete) return;

    const { error } = await supabase.from(tableName).delete().eq("id", id);

    if (error) {
      console.error(`Error deleting ${tableName}:`, error);
      alert("Delete failed. Check console.");
      return false;
    }

    await refreshRows();
    return true;
  };

   return { rows, loading, refreshRows, insertRow, deleteRow };
}

function TextInput({ label, name, value, onChange, required, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#1f3057]">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

function TextArea({ label, name, value, onChange, required, placeholder }) {
  return (
    <label className="block xl:col-span-2">
      <span className="mb-2 block text-sm font-bold text-[#1f3057]">{label}</span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className={`${inputClass} min-h-28`}
      />
    </label>
  );
}

function SelectInput({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[#1f3057]">{label}</span>
      <select name={name} value={value} onChange={onChange} className={inputClass}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

export function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState([]);
  const [stats, setStats] = useState({
    submissions: 0,
    jobs: 0,
    activeJobs: 0,
    draftJobs: 0,
    testimonials: 0,
    successStories: 0,
    mapPins: 0,
  });

  useEffect(() => {
    let isMounted = true;

    const loadDashboardData = async () => {
      const [
        submissionsResult,
        jobsResult,
        testimonialsResult,
        storiesResult,
        pinsResult,
      ] = await Promise.all([
        supabase.from("submissions").select("*").order("created_at", { ascending: false }),
        supabase.from("job_listings").select("*"),
        supabase.from("testimonials").select("*"),
        supabase.from("success_stories").select("*"),
        supabase.from("job_map_pins").select("*"),
      ]);

      if (!isMounted) return;

      const submissionsData = submissionsResult.data || [];
      const jobsData = jobsResult.data || [];
      const testimonialsData = testimonialsResult.data || [];
      const storiesData = storiesResult.data || [];
      const pinsData = pinsResult.data || [];

      if (submissionsResult.error) console.error("Submissions error:", submissionsResult.error);
      if (jobsResult.error) console.error("Jobs error:", jobsResult.error);
      if (testimonialsResult.error) console.error("Testimonials error:", testimonialsResult.error);
      if (storiesResult.error) console.error("Stories error:", storiesResult.error);
      if (pinsResult.error) console.error("Pins error:", pinsResult.error);

      setSubmissions(submissionsData);
      setStats({
        submissions: submissionsData.length,
        jobs: jobsData.length,
        activeJobs: jobsData.filter((job) => job.status === "Active").length,
        draftJobs: jobsData.filter((job) => job.status === "Draft").length,
        testimonials: testimonialsData.length,
        successStories: storiesData.length,
        mapPins: pinsData.length,
      });
    };

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const recentSubmissions = submissions.slice(0, 5);

  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <PageTitle
        title="Dashboard Overview"
        subtitle="Live admin overview powered by Supabase. No fake dashboard values."
        button={
          <div className="rounded-2xl border border-[#eadfca] bg-white px-5 py-3 text-sm font-semibold text-[#1f3057] shadow-sm">
            Live Supabase Data
          </div>
        }
      />

      <section className="grid gap-6 xl:grid-cols-4">
        <StatCard label="Contact Submissions" value={stats.submissions} sub="From submissions table" />
        <StatCard label="Total Job Listings" value={stats.jobs} sub="From job_listings table" />
        <StatCard label="Active Jobs" value={stats.activeJobs} sub="Visible job listings" />
        <StatCard label="Draft Jobs" value={stats.draftJobs} sub="Pending completion" />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className={`${cardClass} xl:col-span-2`}>
          <h2 className="text-2xl font-bold text-[#1f3057]">Recent Contact Submissions</h2>
          <p className="mt-1 text-sm text-slate-500">
            Latest messages submitted through the Vetess contact form.
          </p>

          <div className="mt-6">
            {recentSubmissions.length === 0 ? (
              <EmptyState
                title="No submissions yet"
                text="New contact form messages will show here automatically."
              />
            ) : (
              <div className="space-y-4">
                {recentSubmissions.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-[#eadfca] bg-[#FEFCF8] p-5">
                    <div className="flex flex-col justify-between gap-3 sm:flex-row">
                      <div>
                        <p className="font-bold text-[#1f3057]">{item.name || "No name provided"}</p>
                        <p className="text-sm text-slate-500">{item.email || "No email provided"}</p>
                      </div>
                      {item.created_at && (
                        <p className="text-xs font-semibold text-slate-400">
                          {new Date(item.created_at).toLocaleString()}
                        </p>
                      )}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-700">
                      {item.message || "No message provided."}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={cardClass}>
          <h2 className="text-2xl font-bold text-[#1f3057]">Admin Modules</h2>
          <p className="mt-2 text-sm text-slate-500">Live modules currently connected.</p>

          <div className="mt-6 space-y-4">
            {[
              ["Supabase Connection", "Live"],
              ["Contact Submissions", "Live"],
              ["Job Listings", "Live"],
              ["Map Pins", stats.mapPins > 0 ? "Live" : "Ready"],
              ["Testimonials", stats.testimonials > 0 ? "Live" : "Ready"],
              ["Success Stories", stats.successStories > 0 ? "Live" : "Ready"],
            ].map(([label, status]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-[#eadfca] bg-[#FEFCF8] px-4 py-3"
              >
                <span className="text-sm font-semibold text-[#1f3057]">{label}</span>
                <StatusBadge type={status === "Ready" ? "yellow" : "green"}>{status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function AdminDonationsPage() {
  const { rows, loading } = useSupabaseTable("donations");
  const total = useMemo(
    () => rows.reduce((sum, item) => sum + Number(item.amount || 0), 0),
    [rows]
  );
  const monthly = rows.filter((item) => item.type === "Monthly").length;

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle
        title="Donations"
        subtitle="Live donation records from Supabase."
        button={<button className={redButton}>Export CSV</button>}
      />

      <section className="mb-8 grid gap-6 xl:grid-cols-4">
        <StatCard label="Total Recorded" value={`$${total.toLocaleString()}`} />
        <StatCard label="Donation Count" value={rows.length} />
        <StatCard label="Monthly Donors" value={monthly} />
        <StatCard label="Failed Payments" value={rows.filter((item) => item.status === "Failed").length} />
      </section>

      <div className={cardClass}>
        {loading ? (
          <p className="text-sm text-slate-500">Loading donations...</p>
        ) : rows.length === 0 ? (
          <EmptyState title="No donations yet" text="Donation records will appear here when added to Supabase." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f4eddd] text-[#1f3057]">
                <tr>
                  {["Donor", "Email", "Amount", "Type", "Date", "Status"].map((h) => (
                    <th className="p-4" key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr className="border-b last:border-0" key={item.id}>
                    <td className="p-4 font-bold text-[#1f3057]">{item.donor_name}</td>
                    <td className="p-4">{item.email}</td>
                    <td className="p-4">${Number(item.amount || 0).toLocaleString()}</td>
                    <td className="p-4">{item.type}</td>
                    <td className="p-4">{item.created_at ? new Date(item.created_at).toLocaleDateString() : "-"}</td>
                    <td className="p-4">
                      <StatusBadge
                        type={
                          item.status === "Failed"
                            ? "red"
                            : item.status === "Pending"
                            ? "yellow"
                            : "green"
                        }
                      >
                        {item.status || "Cleared"}
                      </StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminDonorsPage() {
  const { rows, loading } = useSupabaseTable("donors");
  const totalGiven = useMemo(
    () => rows.reduce((sum, item) => sum + Number(item.total_given || 0), 0),
    [rows]
  );
  const avgValue = rows.length ? Math.round(totalGiven / rows.length) : 0;

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Donor Database" subtitle="Live donor records from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Donors" value={rows.length} />
        <StatCard label="Total Given" value={`$${totalGiven.toLocaleString()}`} />
        <StatCard label="Avg. Lifetime Value" value={`$${avgValue.toLocaleString()}`} />
      </section>

      <div className={cardClass}>
        {loading ? (
          <p className="text-sm text-slate-500">Loading donors...</p>
        ) : rows.length === 0 ? (
          <EmptyState title="No donors yet" text="Donor records will appear here when added to Supabase." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f4eddd] text-[#1f3057]">
                <tr>
                  {["Name", "Email", "Total Given", "Last Gift", "Type"].map((h) => (
                    <th className="p-4" key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr className="border-b last:border-0" key={item.id}>
                    <td className="p-4 font-bold text-[#1f3057]">{item.name}</td>
                    <td className="p-4">{item.email}</td>
                    <td className="p-4">${Number(item.total_given || 0).toLocaleString()}</td>
                    <td className="p-4">{item.last_gift_at ? new Date(item.last_gift_at).toLocaleDateString() : "-"}</td>
                    <td className="p-4">{item.type || "Individual"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminMapPinsPage() {
  const { rows, loading, insertRow, deleteRow } = useSupabaseTable("job_map_pins");
  const [form, setForm] = useState({
    city: "",
    industries: "",
    job_count: "",
    x_coordinate: "",
    y_coordinate: "",
    status: "Active",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = await insertRow({
      ...form,
      job_count: Number(form.job_count || 0),
      x_coordinate: Number(form.x_coordinate || 0),
      y_coordinate: Number(form.y_coordinate || 0),
    });

    if (saved) {
      setForm({
        city: "",
        industries: "",
        job_count: "",
        x_coordinate: "",
        y_coordinate: "",
        status: "Active",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Job Map Pins" subtitle="Live map pin data from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Pins" value={rows.length} />
        <StatCard label="Active Pins" value={rows.filter((pin) => pin.status === "Active").length} />
        <StatCard label="Total Jobs Mapped" value={rows.reduce((sum, pin) => sum + Number(pin.job_count || 0), 0)} />
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className={cardClass}>
          <h2 className="mb-5 text-xl font-bold text-[#1f3057]">Active Pins</h2>
          {loading ? (
            <p className="text-sm text-slate-500">Loading pins...</p>
          ) : rows.length === 0 ? (
            <EmptyState title="No pins yet" text="Add your first map pin using the form." />
          ) : (
            rows.map((pin) => (
              <div key={pin.id} className="mb-4 flex items-center justify-between rounded-xl border border-[#eadfca] p-4">
                <div>
                  <p className="font-bold text-[#1f3057]">{pin.city}</p>
                  <p className="text-sm text-gray-500">{pin.industries}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1f3057]">{pin.job_count || 0} jobs</p>
                  <button onClick={() => deleteRow(pin.id)} className="text-xs font-bold text-[#911b1d]">
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={cardClass}>
          <h2 className="mb-5 text-xl font-bold text-[#1f3057]">Add Pin</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput label="City Name" name="city" value={form.city} onChange={handleChange} required />
            <TextInput label="Industries" name="industries" value={form.industries} onChange={handleChange} />
            <TextInput label="Job Count" name="job_count" value={form.job_count} onChange={handleChange} type="number" />
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput label="X Coordinate" name="x_coordinate" value={form.x_coordinate} onChange={handleChange} type="number" />
              <TextInput label="Y Coordinate" name="y_coordinate" value={form.y_coordinate} onChange={handleChange} type="number" />
            </div>
            <SelectInput label="Status" name="status" value={form.status} onChange={handleChange} options={["Active", "Draft"]} />
            <button className="w-full rounded-xl bg-[#1f3057] py-3 font-bold text-white">Save Pin</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function AdminJobListingsPage() {
  const { rows: jobs, loading, insertRow, deleteRow } = useSupabaseTable("job_listings");
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    status: "Active",
    description: "",
    apply_url: "",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleAddJob = async (e) => {
    e.preventDefault();
    const saved = await insertRow(form);

    if (saved) {
      setForm({
        title: "",
        company: "",
        location: "",
        type: "Full-time",
        status: "Active",
        description: "",
        apply_url: "",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Job Listings" subtitle="Live job board records from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Jobs" value={jobs.length} />
        <StatCard label="Active Jobs" value={jobs.filter((job) => job.status === "Active").length} />
        <StatCard label="Draft Jobs" value={jobs.filter((job) => job.status === "Draft").length} />
      </section>

      <div className="mb-8 rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Add New Job</h2>

        <form onSubmit={handleAddJob} className="grid gap-4 xl:grid-cols-2">
          <TextInput label="Job Title" name="title" value={form.title} onChange={handleChange} required />
          <TextInput label="Company" name="company" value={form.company} onChange={handleChange} required />
          <TextInput label="Location" name="location" value={form.location} onChange={handleChange} required />
          <SelectInput label="Type" name="type" value={form.type} onChange={handleChange} options={["Full-time", "Part-time", "Contract", "Remote", "Hybrid"]} />
          <SelectInput label="Status" name="status" value={form.status} onChange={handleChange} options={["Active", "Draft", "Expired"]} />
          <TextInput label="Apply URL" name="apply_url" value={form.apply_url} onChange={handleChange} />
          <TextArea label="Description" name="description" value={form.description} onChange={handleChange} />
          <button type="submit" className="rounded-xl bg-[#911b1d] px-6 py-4 font-bold text-white hover:opacity-90 xl:col-span-2">
            Add Job Listing
          </button>
        </form>
      </div>

      <div className="rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Manage Job Listings</h2>

        {loading ? (
          <p className="text-sm text-slate-500">Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <EmptyState title="No job listings yet" text="Add a job above to populate this table." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f4eddd] text-[#1f3057]">
                <tr>
                  {["Title", "Company", "Location", "Type", "Status", "Actions"].map((h) => (
                    <th className="p-4" key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr className="border-b last:border-0" key={job.id}>
                    <td className="p-4 font-bold text-[#1f3057]">{job.title}</td>
                    <td className="p-4">{job.company}</td>
                    <td className="p-4">{job.location}</td>
                    <td className="p-4">{job.type}</td>
                    <td className="p-4">
                      <StatusBadge type={job.status === "Expired" ? "red" : job.status === "Draft" ? "yellow" : "green"}>
                        {job.status || "Active"}
                      </StatusBadge>
                    </td>
                    <td className="p-4">
                      <button onClick={() => deleteRow(job.id)} className="font-bold text-[#911b1d] hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminTestimonialsPage() {
  const { rows, loading, insertRow, deleteRow } = useSupabaseTable("testimonials");
  const [form, setForm] = useState({
    initials: "",
    name: "",
    title: "",
    branch: "",
    quote: "",
    placed_company: "",
    status: "Published",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = await insertRow(form);

    if (saved) {
      setForm({
        initials: "",
        name: "",
        title: "",
        branch: "",
        quote: "",
        placed_company: "",
        status: "Published",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Testimonials" subtitle="Live testimonial content from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Testimonials" value={rows.length} />
        <StatCard label="Published" value={rows.filter((item) => item.status === "Published").length} />
        <StatCard label="Drafts" value={rows.filter((item) => item.status === "Draft").length} />
      </section>

      <div className="mb-8 rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Add Testimonial</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 xl:grid-cols-2">
          <TextInput label="Initials" name="initials" value={form.initials} onChange={handleChange} required />
          <TextInput label="Name" name="name" value={form.name} onChange={handleChange} required />
          <TextInput label="Title" name="title" value={form.title} onChange={handleChange} />
          <TextInput label="Branch" name="branch" value={form.branch} onChange={handleChange} />
          <TextInput label="Placed Company" name="placed_company" value={form.placed_company} onChange={handleChange} />
          <SelectInput label="Status" name="status" value={form.status} onChange={handleChange} options={["Published", "Draft"]} />
          <TextArea label="Quote" name="quote" value={form.quote} onChange={handleChange} required />
          <button className="rounded-xl bg-[#911b1d] px-6 py-4 font-bold text-white hover:opacity-90 xl:col-span-2">
            Add Testimonial
          </button>
        </form>
      </div>

      <div className="space-y-6">
        {loading ? (
          <p className="text-sm text-slate-500">Loading testimonials...</p>
        ) : rows.length === 0 ? (
          <div className={cardClass}>
            <EmptyState title="No testimonials yet" text="Add a testimonial above to populate this section." />
          </div>
        ) : (
          rows.map((item) => (
            <div className={cardClass} key={item.id}>
              <div className="flex justify-between gap-4">
                <div className="flex gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#1f3057] font-bold text-white">
                    {item.initials || "VT"}
                  </div>
                  <div>
                    <p className="font-bold text-[#1f3057]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.title || item.branch}</p>
                  </div>
                </div>
                <StatusBadge type={item.status === "Draft" ? "yellow" : "green"}>
                  {item.status || "Published"}
                </StatusBadge>
              </div>

              <p className="mt-5 text-gray-700">{item.quote}</p>
              {item.placed_company && (
                <p className="mt-4 text-sm font-bold text-[#9a6b00]">
                  Placed: {item.placed_company}
                </p>
              )}

              <button onClick={() => deleteRow(item.id)} className="mt-5 text-sm font-bold text-[#911b1d]">
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export function AdminSuccessStoriesPage() {
  const { rows, loading, insertRow, deleteRow } = useSupabaseTable("success_stories");
  const [form, setForm] = useState({
    title: "",
    veteran_name: "",
    summary: "",
    company: "",
    status: "Published",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = await insertRow(form);

    if (saved) {
      setForm({
        title: "",
        veteran_name: "",
        summary: "",
        company: "",
        status: "Published",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Success Stories" subtitle="Live veteran success stories from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Stories" value={rows.length} />
        <StatCard label="Published" value={rows.filter((item) => item.status === "Published").length} />
        <StatCard label="Drafts" value={rows.filter((item) => item.status === "Draft").length} />
      </section>

      <div className="mb-8 rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Add Story</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 xl:grid-cols-2">
          <TextInput label="Story Title" name="title" value={form.title} onChange={handleChange} required />
          <TextInput label="Veteran Name" name="veteran_name" value={form.veteran_name} onChange={handleChange} />
          <TextInput label="Company" name="company" value={form.company} onChange={handleChange} />
          <SelectInput label="Status" name="status" value={form.status} onChange={handleChange} options={["Published", "Draft"]} />
          <TextArea label="Summary" name="summary" value={form.summary} onChange={handleChange} required />
          <button className="rounded-xl bg-[#911b1d] px-6 py-4 font-bold text-white hover:opacity-90 xl:col-span-2">
            Add Story
          </button>
        </form>
      </div>

      <div className={cardClass}>
        {loading ? (
          <p className="text-sm text-slate-500">Loading stories...</p>
        ) : rows.length === 0 ? (
          <EmptyState title="No success stories yet" text="Add a story above to populate this section." />
        ) : (
          <div className="space-y-4">
            {rows.map((story) => (
              <div key={story.id} className="rounded-2xl border border-[#eadfca] bg-[#FEFCF8] p-5">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold text-[#1f3057]">{story.title}</p>
                    <p className="text-sm text-slate-500">{story.veteran_name} {story.company ? `• ${story.company}` : ""}</p>
                  </div>
                  <StatusBadge type={story.status === "Draft" ? "yellow" : "green"}>{story.status}</StatusBadge>
                </div>
                <p className="mt-4 text-sm text-slate-700">{story.summary}</p>
                <button onClick={() => deleteRow(story.id)} className="mt-4 text-sm font-bold text-[#911b1d]">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminPagesContentPage() {
  const { rows, loading, insertRow, deleteRow } = useSupabaseTable("pages_content", "updated_at");
  const [form, setForm] = useState({
    page_title: "",
    url: "",
    status: "Published",
    content: "",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = await insertRow(form);

    if (saved) {
      setForm({
        page_title: "",
        url: "",
        status: "Published",
        content: "",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Pages & Content" subtitle="Live page metadata and content notes from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Pages" value={rows.length} />
        <StatCard label="Published" value={rows.filter((item) => item.status === "Published").length} />
        <StatCard label="Drafts" value={rows.filter((item) => item.status === "Draft").length} />
      </section>

      <div className="mb-8 rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Add Page Record</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 xl:grid-cols-2">
          <TextInput label="Page Title" name="page_title" value={form.page_title} onChange={handleChange} required />
          <TextInput label="URL" name="url" value={form.url} onChange={handleChange} required />
          <SelectInput label="Status" name="status" value={form.status} onChange={handleChange} options={["Published", "Draft"]} />
          <TextArea label="Content Notes" name="content" value={form.content} onChange={handleChange} />
          <button className="rounded-xl bg-[#911b1d] px-6 py-4 font-bold text-white hover:opacity-90 xl:col-span-2">
            Add Page Record
          </button>
        </form>
      </div>

      <div className={cardClass}>
        {loading ? (
          <p className="text-sm text-slate-500">Loading pages...</p>
        ) : rows.length === 0 ? (
          <EmptyState title="No pages yet" text="Add a page record above to populate this table." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f4eddd] text-[#1f3057]">
                <tr>
                  {["Page", "URL", "Last Edited", "Status", "Actions"].map((h) => (
                    <th className="p-4" key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((page) => (
                  <tr className="border-b last:border-0" key={page.id}>
                    <td className="p-4 font-bold text-[#1f3057]">{page.page_title}</td>
                    <td className="p-4">{page.url}</td>
                    <td className="p-4">{page.updated_at ? new Date(page.updated_at).toLocaleDateString() : "-"}</td>
                    <td className="p-4">
                      <StatusBadge type={page.status === "Draft" ? "yellow" : "green"}>{page.status}</StatusBadge>
                    </td>
                    <td className="p-4">
                      <button onClick={() => deleteRow(page.id)} className="font-bold text-[#911b1d]">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminUsersPage() {
  const { rows, loading, insertRow, deleteRow } = useSupabaseTable("admin_users");
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Admin",
    status: "Active",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = await insertRow(form);

    if (saved) {
      setForm({
        name: "",
        email: "",
        role: "Admin",
        status: "Active",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Admin Users" subtitle="Live admin user records from Supabase." />

      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Admins" value={rows.length} />
        <StatCard label="Super Admins" value={rows.filter((item) => item.role === "Super Admin").length} />
        <StatCard label="Editors" value={rows.filter((item) => item.role === "Editor").length} />
      </section>

      <div className="mb-8 rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Invite User</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 xl:grid-cols-2">
          <TextInput label="Name" name="name" value={form.name} onChange={handleChange} required />
          <TextInput label="Email" name="email" value={form.email} onChange={handleChange} required type="email" />
          <SelectInput label="Role" name="role" value={form.role} onChange={handleChange} options={["Super Admin", "Admin", "Editor", "Viewer"]} />
          <SelectInput label="Status" name="status" value={form.status} onChange={handleChange} options={["Active", "Invited", "Disabled"]} />
          <button className="rounded-xl bg-[#911b1d] px-6 py-4 font-bold text-white hover:opacity-90 xl:col-span-2">
            Add Admin User
          </button>
        </form>
      </div>

      <div className={cardClass}>
        {loading ? (
          <p className="text-sm text-slate-500">Loading admin users...</p>
        ) : rows.length === 0 ? (
          <EmptyState title="No admin users yet" text="Add admin user records above." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f4eddd] text-[#1f3057]">
                <tr>
                  {["Name", "Email", "Role", "Status", "Actions"].map((h) => (
                    <th className="p-4" key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((user) => (
                  <tr className="border-b last:border-0" key={user.id}>
                    <td className="p-4 font-bold text-[#1f3057]">{user.name}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.role}</td>
                    <td className="p-4">
                      <StatusBadge type={user.status === "Disabled" ? "red" : user.status === "Invited" ? "yellow" : "green"}>
                        {user.status}
                      </StatusBadge>
                    </td>
                    <td className="p-4">
                      <button onClick={() => deleteRow(user.id)} className="font-bold text-[#911b1d]">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminSettingsPage() {
  const { rows, loading, insertRow, deleteRow } = useSupabaseTable("site_settings", "created_at");
  const [form, setForm] = useState({
    setting_key: "",
    setting_value: "",
    description: "",
  });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saved = await insertRow(form);

    if (saved) {
      setForm({
        setting_key: "",
        setting_value: "",
        description: "",
      });
    }
  };

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Settings" subtitle="Live site settings from Supabase." />

      <div className="mb-8 rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">Add Setting</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 xl:grid-cols-2">
          <TextInput label="Setting Key" name="setting_key" value={form.setting_key} onChange={handleChange} required placeholder="site_name" />
          <TextInput label="Setting Value" name="setting_value" value={form.setting_value} onChange={handleChange} required placeholder="Vetess" />
          <TextArea label="Description" name="description" value={form.description} onChange={handleChange} />
          <button className="rounded-xl bg-[#911b1d] px-6 py-4 font-bold text-white hover:opacity-90 xl:col-span-2">
            Add Setting
          </button>
        </form>
      </div>

      <div className={cardClass}>
        <h2 className="mb-5 text-xl font-bold text-[#1f3057]">Current Settings</h2>

        {loading ? (
          <p className="text-sm text-slate-500">Loading settings...</p>
        ) : rows.length === 0 ? (
          <EmptyState title="No settings yet" text="Add site settings above to populate this section." />
        ) : (
          <div className="space-y-4">
            {rows.map((setting) => (
              <div key={setting.id} className="flex flex-col justify-between gap-4 rounded-2xl border border-[#eadfca] bg-[#FEFCF8] p-5 md:flex-row md:items-center">
                <div>
                  <p className="font-bold text-[#1f3057]">{setting.setting_key}</p>
                  <p className="text-sm text-slate-600">{setting.setting_value}</p>
                  {setting.description && (
                    <p className="mt-1 text-xs text-slate-400">{setting.description}</p>
                  )}
                </div>
                <button onClick={() => deleteRow(setting.id)} className="text-sm font-bold text-[#911b1d]">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
