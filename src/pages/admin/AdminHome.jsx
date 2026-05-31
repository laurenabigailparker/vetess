import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function AdminHome() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [jobCount, setJobCount] = useState(0);
  const [donationCount, setDonationCount] = useState(0);
  const [testimonialCount, setTestimonialCount] = useState(0);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const loadSidebarStats = async () => {
    const [submissionsResult, jobsResult, donationsResult, testimonialsResult] =
      await Promise.all([
        supabase.from("submissions").select("*", { count: "exact", head: true }),
        supabase.from("job_listings").select("*", { count: "exact", head: true }),
        supabase.from("donations").select("*", { count: "exact", head: true }),
        supabase.from("testimonials").select("*", { count: "exact", head: true }),
      ]);

    setSubmissionCount(submissionsResult.count || 0);
    setJobCount(jobsResult.count || 0);
    setDonationCount(donationsResult.count || 0);
    setTestimonialCount(testimonialsResult.count || 0);
  };

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/admin/login");
        return;
      }

      loadSidebarStats();
    };

    checkSession();
  }, [navigate]);

  const linkClass = ({ isActive }) =>
    `flex items-center justify-between rounded-3xl px-4 py-3 ${
      isActive ? "bg-[#1b315e] text-white" : "text-slate-300 hover:bg-white/5"
    }`;

  const simpleLinkClass = ({ isActive }) =>
    `block rounded-3xl px-4 py-3 ${
      isActive ? "bg-[#1b315e] text-white" : "text-slate-300 hover:bg-white/5"
    }`;

  const SidebarContent = () => (
    <nav className="space-y-8 text-sm font-medium">
      <div>
        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.32em] text-gold-500">
          Overview
        </p>

        <NavLink to="" end onClick={closeMobileMenu} className={linkClass}>
          <span>Dashboard</span>
        </NavLink>
      </div>

      <div>
        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.32em] text-gold-500">
          Backend
        </p>

        <NavLink to="submissions" onClick={closeMobileMenu} className={linkClass}>
          <span>Contact Submissions</span>
          <span className="rounded-full bg-[#911b1d] px-2 py-0.5 text-[10px] font-semibold text-white">
            {submissionCount}
          </span>
        </NavLink>
      </div>

      <div>
        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.32em] text-gold-500">
          Donations
        </p>

        <div className="space-y-1">
          <NavLink to="donations" onClick={closeMobileMenu} className={linkClass}>
            <span>Donations</span>
            <span className="rounded-full bg-[#911b1d] px-2 py-0.5 text-[10px] font-semibold text-white">
              {donationCount}
            </span>
          </NavLink>

          <NavLink to="donors" onClick={closeMobileMenu} className={simpleLinkClass}>
            Donors
          </NavLink>
        </div>
      </div>

      <div>
        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.32em] text-gold-500">
          Job Board
        </p>

        <div className="space-y-1">
          <NavLink to="map-pins" onClick={closeMobileMenu} className={simpleLinkClass}>
            Map Pins
          </NavLink>

          <NavLink to="job-listings" onClick={closeMobileMenu} className={linkClass}>
            <span>Job Listings</span>
            <span className="rounded-full bg-[#911b1d] px-2 py-0.5 text-[10px] font-semibold text-white">
              {jobCount}
            </span>
          </NavLink>
        </div>
      </div>

      <div>
        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.32em] text-gold-500">
          Content
        </p>

        <div className="space-y-1">
          <NavLink to="testimonials" onClick={closeMobileMenu} className={linkClass}>
            <span>Testimonials</span>
            <span className="rounded-full bg-[#911b1d] px-2 py-0.5 text-[10px] font-semibold text-white">
              {testimonialCount}
            </span>
          </NavLink>

          <NavLink to="success-stories" onClick={closeMobileMenu} className={simpleLinkClass}>
            Success Stories
          </NavLink>

          <NavLink to="pages-content" onClick={closeMobileMenu} className={simpleLinkClass}>
            Pages & Content
          </NavLink>
        </div>
      </div>

      <div>
        <p className="mb-3 px-3 text-[10px] uppercase tracking-[0.32em] text-gold-500">
          Admin
        </p>

        <div className="space-y-1">
          <NavLink to="admin-users" onClick={closeMobileMenu} className={simpleLinkClass}>
            Admin Users
          </NavLink>

          <NavLink to="settings" onClick={closeMobileMenu} className={simpleLinkClass}>
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#FEFCF8] font-sans text-slate-900">
      <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b-2 border-[#911b1d] bg-[#142b56] px-4 text-white shadow-[0_16px_40px_rgba(8,18,51,0.18)] md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-xl text-white xl:hidden"
          >
            {mobileMenuOpen ? "×" : "☰"}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xl text-[#f1c40f]">★</span>
            <span className="text-lg font-semibold tracking-[0.02em]">
              Vetess
            </span>
            <span className="hidden rounded-full bg-[#911b1d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] sm:inline-flex">
              Admin
            </span>
          </div>

          <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white md:inline-flex">
            Submissions: {submissionCount}
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => navigate("/")}
            className="hidden rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            🌐 View Website
          </button>

          <button
            type="button"
            onClick={async () => {
              await supabase.auth.signOut();
              navigate("/admin/login");
            }}
            className="rounded-xl bg-[#911b1d] px-3 py-2 text-xs font-bold text-white transition hover:opacity-90 sm:px-4 sm:text-sm"
          >
            Sign Out
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 xl:hidden"
          onClick={closeMobileMenu}
        />
      )}

 <div className="pt-16">
  <div className="flex min-h-[calc(100vh-4rem)]">
    <aside
      className={`fixed bottom-0 left-0 top-16 z-20 w-80 max-w-[85vw] overflow-y-auto border-r border-white/10 bg-[#132753] px-5 py-6 text-white transition-transform duration-300 xl:static xl:block xl:w-72 xl:max-w-none xl:translate-x-0 ${
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {SidebarContent()}
    </aside>

    <main className="min-w-0 flex-1 overflow-x-hidden bg-[#FEFCF8] px-3 py-4 sm:px-4 md:p-6">
      <Outlet />
    </main>
    </div>
</div>
    </div>
  );
}