import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eef3f8] font-sans text-slate-900">
      <header className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between bg-[#142b56] border-b-2 border-[#911b1d] px-6 text-white shadow-[0_16px_40px_rgba(8,18,51,0.18)]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#f1c40f] text-xl">★</span>
            <span
              className="text-lg font-semibold tracking-[0.02em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              VetBridge
            </span>
            <span className="rounded-full bg-[#911b1d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em]">
              ADMIN
            </span>
          </div>
          <div className="h-6 w-px bg-white/15" />
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9c7f8]">
            Dashboard
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden rounded-2xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10 sm:inline-flex">
            🔔
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm font-semibold text-white transition hover:text-slate-200"
          >
            Sign Out →
          </button>
        </div>
      </header>

      <div className="pt-16">
        <div className="flex min-h-[calc(100vh-4rem)]">
          <aside className="w-72 shrink-0 bg-[#132753] text-white border-r border-white/10 px-5 py-6">
            <nav className="space-y-8 text-sm font-medium">
              <div>
                <p className="px-3 text-[10px] uppercase tracking-[0.32em] text-[gold] mb-3">
                  Overview
                </p>
                <NavLink
                  to=""
                  end
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-3xl px-4 py-3 shadow-sm ${
                      isActive
                        ? "bg-[#1b315e] text-white"
                        : "text-slate-200 hover:bg-white/5"
                    }`
                  }
                >
                  <span>Dashboard</span>
                </NavLink>
              </div>

              <div>
                <p className="px-3 text-[10px] uppercase tracking-[0.32em] text-[gold] mb-3">
                  Donations
                </p>
                <div className="space-y-1">
                  <NavLink
                    to="donations"
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-200 hover:bg-white/5"
                      }`
                    }
                  >
                    <span>Donations</span>
                    <span className="rounded-full bg-[#911b1d] px-2 py-0.5 text-[10px] font-semibold text-white">
                      12
                    </span>
                  </NavLink>
                  <NavLink
                    to="donors"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Donors
                  </NavLink>
                </div>
              </div>

              <div>
                <p className="px-3 text-[10px] uppercase tracking-[0.32em] text-[gold] mb-3">
                  Job Board
                </p>
                <div className="space-y-1">
                  <NavLink
                    to="map-pins"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Map Pins
                  </NavLink>
                  <NavLink
                    to="job-listings"
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    <span>Job Listings</span>
                    <span className="rounded-full bg-[#911b1d] px-2 py-0.5 text-[10px] font-semibold text-white">
                      2.4k
                    </span>
                  </NavLink>
                </div>
              </div>

              <div>
                <p className="px-3 text-[10px] uppercase tracking-[0.32em] text-[gold] mb-3">
                  Content
                </p>
                <div className="space-y-1">
                  <NavLink
                    to="testimonials"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Testimonials
                  </NavLink>
                  <NavLink
                    to="success-stories"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Success Stories
                  </NavLink>
                  <NavLink
                    to="pages-content"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Pages & Content
                  </NavLink>
                </div>
              </div>

              <div>
                <p className="px-3 text-[10px] uppercase tracking-[0.32em] text-[gold] mb-3">
                  Admin
                </p>
                <div className="space-y-1">
                  <NavLink
                    to="admin-users"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Admin Users
                  </NavLink>
                  <NavLink
                    to="settings"
                    className={({ isActive }) =>
                      `block rounded-3xl px-4 py-3 ${
                        isActive
                          ? "bg-[#1b315e] text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }`
                    }
                  >
                    Settings
                  </NavLink>
                </div>
              </div>
            </nav>
          </aside>

          <main className="flex-1 bg-[#eef3f8] p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
