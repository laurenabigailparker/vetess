import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


const cardClass =
  "rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm";

const inputClass =
  "w-full rounded-xl border border-[#eadfca] bg-white px-4 py-3 text-sm outline-none focus:border-[#911b1d]";

const _redButton =
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
donations: 0,
donors: 0,
amountRaised: 0,
adminUsers: 0,
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
      donationsResult,
      usersResult,
    ] = await Promise.all([
      supabase.from("submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("job_listings").select("*"),
      supabase.from("testimonials").select("*"),
      supabase.from("success_stories").select("*"),
      supabase.from("job_map_pins").select("*"),
      supabase.from("donations").select("*"),
      supabase.from("admin_users").select("*"),
    ]);

    if (!isMounted) return;

    const submissionsData = submissionsResult.data || [];
    const jobsData = jobsResult.data || [];
    const testimonialsData = testimonialsResult.data || [];
    const storiesData = storiesResult.data || [];
    const pinsData = pinsResult.data || [];
    const donationsData = donationsResult.data || [];
    const usersData = usersResult.data || [];

    setSubmissions(submissionsData);

    setStats({
      submissions: submissionsData.length,
      jobs: jobsData.length,
      activeJobs: jobsData.filter((job) => job.status === "Active").length,
      draftJobs: jobsData.filter((job) => job.status === "Draft").length,
      testimonials: testimonialsData.length,
      successStories: storiesData.length,
      mapPins: pinsData.length,
      donations: donationsData.length,
      donors: new Set(donationsData.map((d) => d.email || d.donor_name)).size,
      amountRaised: donationsData.reduce(
        (sum, d) => sum + Number(d.amount || 0),
        0
      ),
      adminUsers: usersData.length,
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
        <StatCard
  label="Contact Submissions"
  value={stats.submissions}
  sub="From submissions table"
/>

<StatCard
  label="Total Donations"
  value={stats.donations}
  sub="Website donations"
/>

<StatCard
  label="Total Donors"
  value={stats.donors}
  sub="Unique donors"
/>

<StatCard
  label="Amount Raised"
  value={`$${stats.amountRaised.toLocaleString()}`}
  sub="Donation total"
/>
      </section>

      <section className="grid gap-6 xl:grid-cols-4">
  <StatCard label="Job Listings" value={stats.jobs} />
  <StatCard label="Active Jobs" value={stats.activeJobs} />
  <StatCard label="Testimonials" value={stats.testimonials} />
  <StatCard label="Success Stories" value={stats.successStories} />
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
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const loadDonations = async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading donations:", error);
        return;
      }

      setDonations(data || []);
    };

    loadDonations();
  }, []);

  const totalRaised = donations.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <PageTitle
        title="Donations"
        subtitle="Track all donations submitted through the Vetess website."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <StatCard label="Total Donations" value={donations.length} />
        <StatCard
          label="Amount Raised"
          value={`$${totalRaised.toLocaleString()}`}
        />
      </section>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        {donations.length === 0 ? (
          <p className="text-gray-500">No donations found.</p>
        ) : (
          <div className="space-y-4">
            {donations.map((donation) => (
              <div
                key={donation.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <p>
                  <strong>Donor:</strong> {donation.donor_name}
                </p>
                <p>
                  <strong>Email:</strong> {donation.email}
                </p>
                <p>
                  <strong>Amount:</strong> ${donation.amount}
                </p>
                <p>
                  <strong>Type:</strong> {donation.type}
                </p>
                <p>
                  <strong>Status:</strong> {donation.status}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(donation.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

 export function AdminDonorsPage() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const loadDonors = async () => {
      const { data, error } = await supabase
        .from("donations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading donors:", error);
        return;
      }

      const grouped = (data || []).reduce((acc, donation) => {
        const key = donation.email || donation.donor_name;

        if (!acc[key]) {
          acc[key] = {
            donor_name: donation.donor_name,
            email: donation.email,
            total_amount: 0,
            donation_count: 0,
            last_donation: donation.created_at,
          };
        }

        acc[key].total_amount += Number(donation.amount || 0);
        acc[key].donation_count += 1;

        return acc;
      }, {});

      setDonors(Object.values(grouped));
    };

    loadDonors();
  }, []);

  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <PageTitle
        title="Donors"
        subtitle="Grouped donor records based on submitted donations."
      />

      <section className="grid gap-6 md:grid-cols-3">
        <StatCard label="Total Donors" value={donors.length} />
        <StatCard
          label="Total Gifts"
          value={donors.reduce((sum, donor) => sum + donor.donation_count, 0)}
        />
        <StatCard
          label="Total Given"
          value={`$${donors
            .reduce((sum, donor) => sum + donor.total_amount, 0)
            .toLocaleString()}`}
        />
      </section>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        {donors.length === 0 ? (
          <p className="text-gray-500">No donors found.</p>
        ) : (
          <div className="space-y-4">
            {donors.map((donor) => (
              <div
                key={donor.email || donor.donor_name}
                className="rounded-xl border border-slate-200 p-4"
              >
                <p>
                  <strong>Donor:</strong> {donor.donor_name}
                </p>
                <p>
                  <strong>Email:</strong> {donor.email}
                </p>
                <p>
                  <strong>Total Given:</strong> ${donor.total_amount}
                </p>
                <p>
                  <strong>Donation Count:</strong> {donor.donation_count}
                </p>
                <p className="text-xs text-gray-400">
                  Last donation:{" "}
                  {new Date(donor.last_donation).toLocaleString()}
                </p>
              </div>
            ))}
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

export function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const loadSubmissions = async () => {
      const { data, error } = await supabase
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading submissions:", error);
        return;
      }

      setSubmissions(data || []);
    };

    loadSubmissions();
  }, []);

  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <PageTitle
        title="Contact Submissions"
        subtitle="Messages submitted through the Vetess contact form."
      />

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions found.</p>
        ) : (
          <div className="space-y-4">
            {submissions.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex flex-col gap-2">
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>

                  <p>
                    <strong>Email:</strong> {item.email}
                  </p>

                  <p>
                    <strong>Message:</strong>
                  </p>

                  <div className="rounded-lg bg-slate-50 p-3">
                    {item.message}
                  </div>

                  <p className="text-xs text-gray-400">
                    {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
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
  const [settingsId, setSettingsId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    setting_key: "site_config",
    setting_value: "Vetess",
    executive_director: "Raelyn Balfour",
    contact_email: "rbalfour@vetess.org",
    contact_phone: "",
    linkedin_url: "",
    facebook_url: "",
    instagram_url: "",
    youtube_url: "",
    mission_statement:
      "Connecting veterans, military spouses, and employers through meaningful career opportunities and workforce success.",
    footer_text:
      "Vetess empowers veterans and military families through career resources, employment opportunities, and community support.",
    copyright_text: "© 2026 Vetess. All rights reserved.",
  });

  useEffect(() => {
    const loadSettings = async () => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*")
        .eq("setting_key", "site_config")
        .maybeSingle();

      if (error) {
        console.error("Error loading settings:", error);
        setLoading(false);
        return;
      }

      if (data) {
        setSettingsId(data.id);
        setForm((prev) => ({
          ...prev,
          ...data,
          contact_email: data.contact_email || "rbalfour@vetess.org",
          setting_value: data.setting_value || "Vetess",
          executive_director: data.executive_director || "Raelyn Balfour",
        }));
      }

      setLoading(false);
    };

    loadSettings();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);

    const payload = {
      setting_key: "site_config",
      setting_value: form.setting_value,
      executive_director: form.executive_director,
      contact_email: form.contact_email,
      contact_phone: form.contact_phone,
      linkedin_url: form.linkedin_url,
      facebook_url: form.facebook_url,
      instagram_url: form.instagram_url,
      youtube_url: form.youtube_url,
      mission_statement: form.mission_statement,
      footer_text: form.footer_text,
      copyright_text: form.copyright_text,
    };

    let response;

    if (settingsId) {
      response = await supabase
        .from("site_settings")
        .update(payload)
        .eq("id", settingsId);
    } else {
      response = await supabase
        .from("site_settings")
        .insert([payload])
        .select()
        .single();
    }

    setSaving(false);

    if (response.error) {
      console.error("Error saving settings:", response.error);
      alert("Settings did not save. Check console.");
      return;
    }

    if (response.data?.id) {
      setSettingsId(response.data.id);
    }

    alert("Settings saved.");
  };

  if (loading) {
    return (
      <div className="bg-[#FEFCF8] px-6 py-8">
        <PageTitle title="Settings" subtitle="Loading site settings..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFCF8] px-6 py-8">
      <PageTitle
        title="Settings"
        subtitle="Manage Vetess organization info, public contact details, footer content, and social links."
      />

      <form onSubmit={handleSave} className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-[1.5rem] border border-[#eadfca] bg-white p-8 shadow-sm">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#911b1d]">
            General Site Info
          </p>

          <div className="space-y-7">
            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Organization Name
              </span>
              <input
                name="setting_value"
                value={form.setting_value}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Executive Director
              </span>
              <input
                name="executive_director"
                value={form.executive_director}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Contact Email
              </span>
              <input
                name="contact_email"
                value={form.contact_email}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Contact Phone
              </span>
              <input
                name="contact_phone"
                value={form.contact_phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-[#eadfca] bg-white p-8 shadow-sm">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#911b1d]">
            Mission & Footer
          </p>

          <div className="space-y-7">
            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Mission Statement
              </span>
              <textarea
                name="mission_statement"
                value={form.mission_statement}
                onChange={handleChange}
                className="min-h-36 w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Footer Text
              </span>
              <textarea
                name="footer_text"
                value={form.footer_text}
                onChange={handleChange}
                className="min-h-28 w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                Copyright Text
              </span>
              <input
                name="copyright_text"
                value={form.copyright_text}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
              />
            </label>
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-[#eadfca] bg-white p-8 shadow-sm">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#911b1d]">
            Social Links
          </p>

          <div className="space-y-7">
            {[
              ["LinkedIn URL", "linkedin_url"],
              ["Facebook URL", "facebook_url"],
              ["Instagram URL", "instagram_url"],
              ["YouTube URL", "youtube_url"],
            ].map(([label, name]) => (
              <label className="block" key={name}>
                <span className="mb-3 block text-xs uppercase tracking-[0.32em] text-slate-500">
                  {label}
                </span>
                <input
                  name={name}
                  value={form[name] || ""}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#eadfca] bg-[#FEFCF8] px-6 py-5 text-[#1f3057] outline-none focus:border-[#911b1d]"
                />
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-[#eadfca] bg-white p-8 shadow-sm">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#911b1d]">
            Preview
          </p>

          <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
            Organization
          </p>

          <h2 className="mt-4 text-3xl font-black text-[#1f3057]">
            {form.setting_value || "Vetess"}
          </h2>

          <p className="mt-6 max-w-3xl italic leading-7 text-slate-600">
            {form.mission_statement ||
              "Mission statement preview will appear here."}
          </p>

          <div className="mt-6 space-y-1 text-sm text-slate-600">
            <p>
              <span className="font-bold text-[#1f3057]">Executive Director:</span>{" "}
              {form.executive_director || "Raelyn Balfour"}
            </p>

            <p>
              <span className="font-bold text-[#1f3057]">Email:</span>{" "}
              {form.contact_email || "rbalfour@vetess.org"}
            </p>

            {form.contact_phone && (
              <p>
                <span className="font-bold text-[#1f3057]">Phone:</span>{" "}
                {form.contact_phone}
              </p>
            )}
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-[#eadfca] bg-white p-8 shadow-sm">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#911b1d]">
            Publish
          </p>

          <p className="mb-8 text-sm leading-7 text-slate-500">
            These settings can power footer text, contact email, organization
            information, and social links across the public site.
          </p>

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-xl bg-[#911b1d] px-8 py-5 text-xs font-black uppercase tracking-[0.32em] text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </section>
      </form>
    </div>
  );
}