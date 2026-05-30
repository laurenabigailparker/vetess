import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const cardClass =
  "rounded-[1.5rem] border border-[#eadfca] bg-white p-6 shadow-sm";

const redButton =
  "rounded-2xl bg-[#911b1d] px-5 py-3 text-sm font-bold text-white hover:opacity-90";

function PageTitle({ title, button }) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <h1 className="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">
        {title}
      </h1>
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

export function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data, error } = await supabase
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error("Error fetching submissions:", error);
      else setSubmissions(data || []);
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Dashboard Overview" />

      <section className="grid gap-6 xl:grid-cols-4">
        <StatCard label="Total Donations YTD" value="$487,234" sub="+12.5%" />
        <StatCard label="Active Job Pins" value="18" sub="2 pending review" />
        <StatCard label="Veterans Registered" value="47,234" sub="+234 this month" />
        <StatCard label="Open Tasks" value="7" sub="3 overdue" />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className={cardClass}>
          <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">
            Recent Donations
          </h2>
          {[
            ["John Smith", "$500", "Cleared"],
            ["Sarah Johnson", "$100", "Cleared"],
            ["Mike Brown", "$250", "Pending"],
            ["Lisa Davis", "$1,000", "Cleared"],
          ].map(([name, amount, status]) => (
            <div key={name} className="flex justify-between border-b py-4 last:border-0">
              <div>
                <p className="font-bold text-[#1f3057]">{name}</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#1f3057]">{amount}</p>
                <p className="text-xs text-green-600">{status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={cardClass}>
          <h2 className="mb-5 text-2xl font-bold text-[#1f3057]">
            Contact Submissions
          </h2>

          {submissions.length === 0 ? (
            <p className="text-sm text-gray-500">No submissions yet.</p>
          ) : (
            <div className="space-y-4">
              {submissions.map((item) => (
                <div key={item.id} className="rounded-xl border p-4">
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Email:</strong> {item.email}</p>
                  <p><strong>Message:</strong> {item.message}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(item.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function AdminDonationsPage() {
  const rows = [
    ["John Smith", "john@email.com", "$500", "One-Time", "2 hours ago", "Cleared"],
    ["Sarah Johnson", "sarah@email.com", "$100", "Monthly", "5 hours ago", "Cleared"],
    ["Mike Brown", "mike@email.com", "$250", "One-Time", "1 day ago", "Pending"],
    ["Lisa Davis", "lisa@email.com", "$1000", "One-Time", "2 days ago", "Cleared"],
    ["Tom Wilson", "tom@email.com", "$50", "Monthly", "3 days ago", "Failed"],
  ];

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Donations" button={<button className={redButton}>Export CSV</button>} />

      <section className="mb-8 grid gap-6 xl:grid-cols-4">
        <StatCard label="This Month" value="$52,234" sub="+18%" />
        <StatCard label="Monthly Recurring" value="$8,450" sub="45 subscribers" />
        <StatCard label="Avg. Donation" value="$187" />
        <StatCard label="Failed Payments" value="3" />
      </section>

      <div className={cardClass}>
        <input className="mb-5 w-full rounded-xl border border-[#eadfca] px-4 py-3" placeholder="Search donations..." />
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f4eddd] text-[#1f3057]">
            <tr>{["Donor", "Email", "Amount", "Type", "Date", "Status", "Actions"].map(h => <th className="p-4" key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr className="border-b last:border-0" key={r[1]}>
                {r.map((cell, i) => (
                  <td className="p-4" key={i}>
                    {i === 5 ? (
                      <StatusBadge type={cell === "Failed" ? "red" : cell === "Pending" ? "yellow" : "green"}>{cell}</StatusBadge>
                    ) : cell}
                  </td>
                ))}
                <td className="p-4 text-[#1f3057] font-semibold">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminDonorsPage() {
  const rows = [
    ["John Smith", "john@email.com", "$2,500", "2 hours ago", "Individual"],
    ["Acme Corp", "contact@acme.com", "$10,000", "1 week ago", "Corporate"],
    ["Sarah Johnson", "sarah@email.com", "$850", "2 weeks ago", "Individual"],
  ];

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Donor Database" />
      <section className="mb-8 grid gap-6 xl:grid-cols-3">
        <StatCard label="Total Donors" value="1,847" />
        <StatCard label="Monthly Donors" value="234" />
        <StatCard label="Avg. Lifetime Value" value="$542" />
      </section>

      <div className={cardClass}>
        <input className="mb-5 w-full rounded-xl border border-[#eadfca] px-4 py-3" placeholder="Search donors..." />
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f4eddd] text-[#1f3057]">
            <tr>{["Name", "Email", "Total Given", "Last Gift", "Type", "Actions"].map(h => <th className="p-4" key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr className="border-b last:border-0" key={r[1]}>
                {r.map((cell) => <td className="p-4" key={cell}>{cell}</td>)}
                <td className="p-4 text-[#1f3057] font-semibold">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminMapPinsPage() {
  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Job Map Pins" button={<button className={redButton}>+ Add Pin</button>} />

      <div className="grid gap-6 xl:grid-cols-2">
        <div className={cardClass}>
          <h2 className="mb-5 text-xl font-bold text-[#1f3057]">Active Pins</h2>
          {[
            ["Washington, DC", "Government, Cyber", "389"],
            ["New York, NY", "Finance, Tech", "412"],
            ["Seattle, WA", "Tech, Aerospace", "289"],
            ["Houston, TX", "Defense, Energy", "234"],
          ].map(([city, industries, count]) => (
            <div key={city} className="mb-4 flex items-center justify-between rounded-xl border border-[#eadfca] p-4">
              <div>
                <p className="font-bold text-[#1f3057]">{city}</p>
                <p className="text-sm text-gray-500">{industries}</p>
              </div>
              <p className="font-bold text-[#1f3057]">{count} jobs</p>
            </div>
          ))}
        </div>

        <div className={cardClass}>
          <h2 className="mb-5 text-xl font-bold text-[#1f3057]">Add/Edit Pin</h2>
          <div className="space-y-4">
            {["City Name", "X Coordinate", "Y Coordinate", "Job Count", "Top Industries"].map((label) => (
              <label className="block" key={label}>
                <span className="mb-2 block text-sm font-bold text-[#1f3057]">{label}</span>
                <input className="w-full rounded-xl border border-[#eadfca] px-4 py-3" />
              </label>
            ))}
            <button className="w-full rounded-xl bg-[#1f3057] py-3 font-bold text-white">Save Pin</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdminJobListingsPage() {
  const jobs = [
    ["Cybersecurity Analyst", "Booz Allen", "DC", "Full-time", "2d ago", "Active"],
    ["Operations Manager", "Boeing", "Seattle", "Full-time", "5d ago", "Active"],
    ["Project Manager", "Dell", "Austin", "Full-time", "1w ago", "Active"],
  ];

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Job Listings" button={<button className={redButton}>+ Add Job</button>} />

      <div className={cardClass}>
        <div className="mb-4 flex gap-6 text-sm font-bold text-[#1f3057]">
          <span>All</span><span>Active</span><span>Draft</span><span>Expired</span>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f4eddd] text-[#1f3057]">
            <tr>{["Title", "Company", "Location", "Type", "Posted", "Status", "Actions"].map(h => <th className="p-4" key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {jobs.map((r) => (
              <tr className="border-b last:border-0" key={r[0]}>
                {r.map((cell, i) => (
                  <td className="p-4" key={i}>
                    {i === 5 ? <StatusBadge>{cell}</StatusBadge> : cell}
                  </td>
                ))}
                <td className="p-4 text-[#1f3057] font-semibold">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminTestimonialsPage() {
  const items = [
    ["SMR", "Sgt. Marcus Reed", "US Army", "Vetess coach translated 8 years...", "Booz Allen Hamilton", "Published"],
    ["JW", "Jennifer Walsh", "Military Spouse", "As a military spouse who moved 4 times...", "Dell Technologies", "Published"],
    ["CDT", "Cpl. Devon Torres", "USMC", "Mock interviews were game-changing...", "FedEx", "Draft"],
  ];

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Testimonials" button={<button className={redButton}>+ Add Testimonial</button>} />

      <div className="space-y-6">
        {items.map(([initials, name, branch, text, placed, status]) => (
          <div className={cardClass} key={name}>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#1f3057] font-bold text-white">{initials}</div>
                <div>
                  <p className="font-bold text-[#1f3057]">{name}</p>
                  <p className="text-sm text-gray-500">{branch}</p>
                </div>
              </div>
              <StatusBadge type={status === "Draft" ? "yellow" : "green"}>{status}</StatusBadge>
            </div>
            <p className="mt-5 text-gray-700">{text}</p>
            <p className="mt-4 text-sm font-bold text-[#9a6b00]">Placed: {placed}</p>
            <div className="mt-5 flex gap-8 text-sm font-bold text-[#1f3057]">
              <button>Edit</button><button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdminSuccessStoriesPage() {
  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Success Stories" />
      <div className={`${cardClass} text-center py-16`}>
        <div className="text-5xl">📖</div>
        <h2 className="mt-5 text-xl font-bold text-[#1f3057]">Manage Success Stories</h2>
        <p className="mt-3 text-gray-500">Create detailed veteran success stories for the website</p>
        <button className={`${redButton} mt-8`}>Add Story</button>
      </div>
    </div>
  );
}

export function AdminPagesContentPage() {
  const rows = [
    ["Homepage", "/", "2 days ago", "Published"],
    ["About Us", "/about", "1 week ago", "Published"],
    ["For Veterans", "/for-veterans", "3 days ago", "Draft"],
  ];

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Pages & Content" />
      <div className={cardClass}>
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f4eddd] text-[#1f3057]">
            <tr>{["Page", "URL", "Last Edited", "Status", "Actions"].map(h => <th className="p-4" key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr className="border-b last:border-0" key={r[0]}>
                {r.map((cell, i) => (
                  <td className="p-4" key={i}>
                    {i === 3 ? <StatusBadge type={cell === "Draft" ? "yellow" : "green"}>{cell}</StatusBadge> : cell}
                  </td>
                ))}
                <td className="p-4 text-[#1f3057] font-semibold">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminUsersPage() {
  const rows = [
    ["Admin User", "admin@vetess.org", "Super Admin", "Just now"],
    ["Jane Smith", "jane@vetess.org", "Admin", "2 hours ago"],
    ["Bob Johnson", "bob@vetess.org", "Editor", "1 day ago"],
  ];

  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Admin Users" button={<button className={redButton}>+ Invite User</button>} />
      <div className={cardClass}>
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f4eddd] text-[#1f3057]">
            <tr>{["Name", "Email", "Role", "Last Active", "Actions"].map(h => <th className="p-4" key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr className="border-b last:border-0" key={r[1]}>
                {r.map((cell) => <td className="p-4" key={cell}>{cell}</td>)}
                <td className="p-4 text-[#1f3057] font-semibold">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AdminSettingsPage() {
  return (
    <div className="bg-[#FEFCF8] px-6 py-8">
      <PageTitle title="Settings" />
      <div className="space-y-6">
        <div className={cardClass}>
          <h2 className="mb-5 text-xl font-bold text-[#1f3057]">General Settings</h2>
          {["Site Name", "Contact Email", "Nonprofit EIN"].map((label) => (
            <label className="mb-4 block" key={label}>
              <span className="mb-2 block text-sm font-bold text-[#1f3057]">{label}</span>
              <input className="w-full rounded-xl border border-[#eadfca] px-4 py-3" defaultValue={label === "Site Name" ? "Vetess" : label === "Contact Email" ? "info@vetess.org" : "12-3456789"} />
            </label>
          ))}
          <button className="rounded-xl bg-[#1f3057] px-6 py-3 font-bold text-white">Save Changes</button>
        </div>

        <div className={cardClass}>
          <h2 className="mb-5 text-xl font-bold text-[#1f3057]">Admin Portal Settings</h2>
          <div className="space-y-3 text-sm text-[#1f3057]">
            <p>Show admin link in footer</p>
            <p>Require 2FA for all admins</p>
            <p>Email alerts for new donations</p>
            <p>Weekly summary email</p>
          </div>
        </div>
      </div>
    </div>
  );
}