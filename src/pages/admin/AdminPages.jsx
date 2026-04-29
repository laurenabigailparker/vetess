import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function AdminDashboardPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data, error } = await supabase
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching submissions:", error);
      } else {
        setSubmissions(data);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <header>
        <h1 className="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">
          Dashboard Overview
        </h1>
      </header>

      {/* EXISTING CARDS */}
      <section className="grid gap-6 xl:grid-cols-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Total Donations YTD
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">$487,234</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Active Job Pins
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">18</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Veterans Registered
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">47,234</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Open Tasks
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">4</p>
        </div>
      </section>

      {/* 🔥 NEW SECTION (YOUR FEATURE) */}
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-[#1f3057] mb-4">
          Contact Submissions
        </h2>

        {submissions.length === 0 ? (
          <p className="text-sm text-gray-500">No submissions yet.</p>
        ) : (
          <div className="space-y-4">
            {submissions.map((item) => (
              <div key={item.id} className="border rounded-lg p-4">
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
      </section>
    </div>
  );
}

/* ⬇️ EVERYTHING BELOW = UNTOUCHED */

export function AdminDonationsPage() {
  return <div>Donations Page</div>;
}

export function AdminDonorsPage() {
  return <div>Donors Page</div>;
}

export function AdminMapPinsPage() {
  return <div>Map Pins Page</div>;
}

export function AdminJobListingsPage() {
  return <div>Job Listings Page</div>;
}

export function AdminTestimonialsPage() {
  return <div>Testimonials Page</div>;
}

export function AdminSuccessStoriesPage() {
  return <div>Success Stories Page</div>;
}

export function AdminPagesContentPage() {
  return <div>Pages Content</div>;
}

export function AdminUsersPage() {
  return <div>Users Page</div>;
}

export function AdminSettingsPage() {
  return <div>Settings Page</div>;
}