import React from "react";

export function AdminDashboardPage() {
  return (
    <div className="space-y-8 bg-[#FEFCF8] px-6 py-8">
      <header>
        <h1 className="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">
          Dashboard Overview
        </h1>
      </header>

      <section className="grid gap-6 xl:grid-cols-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Total Donations YTD
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">$487,234</p>
          <p className="mt-3 text-sm font-semibold text-emerald-600">+12.5%</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Active Job Pins
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">18</p>
          <p className="mt-3 text-sm text-[#4d6a98]">2 pending review</p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Veterans Registered
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">47,234</p>
          <p className="mt-3 text-sm font-semibold text-emerald-600">
            +234 this month
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#7d8fb7]">
            Open Tasks
          </p>
          <p className="mt-4 text-3xl font-semibold text-[#1f3057]">4</p>
          <p className="mt-3 text-sm text-[#4d6a98]">3 overdue</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1f3057]">
                Recent Donations
              </h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#33507a]">
              Live
            </span>
          </div>

          <div className="mt-6 divide-y divide-slate-200">
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  John Smith
                </p>
                <p className="text-xs text-[#4d6a98]">2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1f3057]">$500</p>
                <p className="text-xs text-emerald-600">Cleared</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  Sarah Johnson
                </p>
                <p className="text-xs text-[#4d6a98]">5 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1f3057]">$100</p>
                <p className="text-xs text-emerald-600">Cleared</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  Mike Brown
                </p>
                <p className="text-xs text-[#4d6a98]">1 day ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1f3057]">$250</p>
                <p className="text-xs text-amber-600">Pending</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  Lisa Davis
                </p>
                <p className="text-xs text-[#4d6a98]">2 days ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1f3057]">$1,000</p>
                <p className="text-xs text-emerald-600">Cleared</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1f3057]">
                Recent Activity
              </h2>
            </div>
          </div>

          <div className="mt-6 divide-y divide-slate-200">
            <div className="flex items-start gap-3 px-4 py-4">
              <span className="mt-1 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-[#4d6a98] shadow-sm">
                📝
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  New testimonial added
                </p>
                <p className="text-xs text-[#4d6a98]">Admin • 1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 px-4 py-4">
              <span className="mt-1 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-[#4d6a98] shadow-sm">
                📍
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  Job pin updated: Seattle, WA
                </p>
                <p className="text-xs text-[#4d6a98]">Admin • 3 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 px-4 py-4">
              <span className="mt-1 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-[#4d6a98] shadow-sm">
                💰
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  Donation received
                </p>
                <p className="text-xs text-[#4d6a98]">System • 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 px-4 py-4">
              <span className="mt-1 rounded-2xl bg-white px-3 py-2 text-xs font-semibold text-[#4d6a98] shadow-sm">
                👤
              </span>
              <div>
                <p className="text-sm font-semibold text-[#1f3057]">
                  User invited: jane@example.com
                </p>
                <p className="text-xs text-[#4d6a98]">
                  Super Admin • 1 day ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-[#1f3057]">
                Donations by Month
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {[
              { label: "Jan", amount: "$32k", width: "w-4/5" },
              { label: "Feb", amount: "$28k", width: "w-3/5" },
              { label: "Mar", amount: "$45k", width: "w-full" },
              { label: "Apr", amount: "$38k", width: "w-4/5" },
              { label: "May", amount: "$52k", width: "w-full" },
              { label: "Jun", amount: "$41k", width: "w-4/5" },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-[#4d6a98]">
                  <span>{item.label}</span>
                  <span>{item.amount}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full bg-[#911b1d] ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1f3057]">
            Quick Actions
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Add Job Pin", icon: "+" },
              { label: "New Testimonial", icon: "📝" },
              { label: "Invite Admin", icon: "👤" },
              { label: "Export Data", icon: "📤" },
            ].map((action) => (
              <button
                key={action.label}
                className="flex min-h-[110px] flex-col items-start justify-between rounded-[1.75rem] border border-gold-400 bg-white p-5 text-left transition hover:border-gold-500 hover:bg-sand-50"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-lg shadow-sm">
                  {action.icon}
                </span>
                <span className="mt-4 text-sm font-semibold text-[#1f3057]">
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function AdminDonationsPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-8 font-sans text-[#1A1A1A]">
  
  <div class="mb-8 flex items-center justify-between">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Donations</h1>
    <button class="rounded-md bg-[#8B2323] px-4 py-2 text-sm font-medium text-white transition hover:bg-red-900">
      Export CSV
    </button>
  </div>

  
  <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
   
    <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <p class="text-sm text-gray-400">This Month</p>
      <h2 class="mt-1 text-2xl font-bold">$52,234</h2>
      <p class="mt-1 text-xs font-medium text-green-500">↑ +12%</p>
    </div>

   
    <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <p class="text-sm text-gray-400">Monthly Recurring</p>
      <h2 class="mt-1 text-2xl font-bold">$8,450</h2>
      <p class="mt-1 text-xs text-gray-400">45 subscribers</p>
    </div>

   
    <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <p class="text-sm text-gray-400">Avg. Donation</p>
      <h2 class="mt-1 text-2xl font-bold text-[#2D336B]">$187</h2>
    </div>

   
    <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <p class="text-sm text-gray-400">Failed Payments</p>
      <h2 class="mt-1 text-2xl font-bold">3</h2>
    </div>
  </div>

  
  <div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
    
    <div class="mb-6 flex gap-4">
      <input type="text" placeholder="Search donations..." class="w-full max-w-md rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-200" />
      <div class="h-10 w-24 rounded-full border border-gray-100 bg-gray-50"></div>
      <div class="h-10 w-24 rounded-full border border-gray-100 bg-gray-50"></div>
    </div>

    
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="bg-[#F9F1E7] text-gray-500">
            <th class="px-4 py-3 font-medium">Donor</th>
            <th class="px-4 py-3 font-medium">Email</th>
            <th class="px-4 py-3 font-medium">Amount</th>
            <th class="px-4 py-3 font-medium">Type</th>
            <th class="px-4 py-3 font-medium">Date</th>
            <th class="px-4 py-3 font-medium">Status</th>
            <th class="px-4 py-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
         
          <tr>
            <td class="px-4 py-4 font-semibold">John Smith</td>
            <td class="px-4 py-4 text-gray-400 text-xs">john@email.com</td>
            <td class="px-4 py-4 font-bold text-[#2D336B]">$500</td>
            <td class="px-4 py-4 text-gray-400 text-xs">One-Time</td>
            <td class="px-4 py-4 text-gray-400 text-xs">2 hours ago</td>
            <td class="px-4 py-4"><span class="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-600">Cleared</span></td>
            <td class="px-4 py-4 text-right text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-4 py-4 font-semibold">Sarah Johnson</td>
            <td class="px-4 py-4 text-gray-400 text-xs">sarah@email.com</td>
            <td class="px-4 py-4 font-bold text-[#2D336B]">$100</td>
            <td class="px-4 py-4 text-gray-400 text-xs">Monthly</td>
            <td class="px-4 py-4 text-gray-400 text-xs">5 hours ago</td>
            <td class="px-4 py-4"><span class="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-600">Cleared</span></td>
            <td class="px-4 py-4 text-right text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-4 py-4 font-semibold">Mike Brown</td>
            <td class="px-4 py-4 text-gray-400 text-xs">mike@email.com</td>
            <td class="px-4 py-4 font-bold text-[#2D336B]">$250</td>
            <td class="px-4 py-4 text-gray-400 text-xs">One-Time</td>
            <td class="px-4 py-4 text-gray-400 text-xs">1 day ago</td>
            <td class="px-4 py-4"><span class="rounded-full bg-orange-100 px-3 py-1 text-[10px] font-bold text-orange-500">Pending</span></td>
            <td class="px-4 py-4 text-right text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-4 py-4 font-semibold">Lisa Davis</td>
            <td class="px-4 py-4 text-gray-400 text-xs">lisa@email.com</td>
            <td class="px-4 py-4 font-bold text-[#2D336B]">$1000</td>
            <td class="px-4 py-4 text-gray-400 text-xs">One-Time</td>
            <td class="px-4 py-4 text-gray-400 text-xs">2 days ago</td>
            <td class="px-4 py-4"><span class="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold text-green-600">Cleared</span></td>
            <td class="px-4 py-4 text-right text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
    
          <tr>
            <td class="px-4 py-4 font-semibold">Tom Wilson</td>
            <td class="px-4 py-4 text-gray-400 text-xs">tom@email.com</td>
            <td class="px-4 py-4 font-bold text-[#2D336B]">$50</td>
            <td class="px-4 py-4 text-gray-400 text-xs">Monthly</td>
            <td class="px-4 py-4 text-gray-400 text-xs">3 days ago</td>
            <td class="px-4 py-4"><span class="rounded-full bg-red-100 px-3 py-1 text-[10px] font-bold text-red-500">Failed</span></td>
            <td class="px-4 py-4 text-right text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}

export function AdminDonorsPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">
 
  <div class="mb-8">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Donor Database</h1>
  </div>

 
  <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
    
    <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <p class="text-sm font-medium text-gray-400">Total Donors</p>
      <h2 class="mt-2 text-4xl font-bold text-[#2D336B]">1,847</h2>
    </div>

   
    <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <p class="text-sm font-medium text-gray-400">Monthly Donors</p>
      <h2 class="mt-2 text-4xl font-bold text-[#2D336B]">234</h2>
    </div>

   
    <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <p class="text-sm font-medium text-gray-400">Avg. Lifetime Value</p>
      <h2 class="mt-2 text-4xl font-bold text-[#2D336B]">$542</h2>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    
    <div class="mb-8">
      <input 
        type="text" 
        placeholder="Search donors..." 
        class="w-full rounded-xl border border-gray-100 bg-gray-50/50 px-6 py-3 text-sm text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200" 
      />
    </div>

   
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="bg-[#F9F1E7] text-gray-600">
            <th class="px-6 py-4 font-semibold">Name</th>
            <th class="px-6 py-4 font-semibold">Email</th>
            <th class="px-6 py-4 font-semibold">Total Given</th>
            <th class="px-6 py-4 font-semibold">Last Gift</th>
            <th class="px-6 py-4 font-semibold">Type</th>
            <th class="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
         
          <tr>
            <td class="px-6 py-6 font-bold text-gray-800">John Smith</td>
            <td class="px-6 py-6 text-gray-400">john@email.com</td>
            <td class="px-6 py-6 font-bold text-[#2D336B]">$2,500</td>
            <td class="px-6 py-6 text-gray-400">2 hours ago</td>
            <td class="px-6 py-6 text-gray-400">Individual</td>
            <td class="px-6 py-6 text-right font-medium text-[#2D336B] hover:underline cursor-pointer">View</td>
          </tr>
         
          <tr>
            <td class="px-6 py-6 font-bold text-gray-800">Acme Corp</td>
            <td class="px-6 py-6 text-gray-400">contact@acme.com</td>
            <td class="px-6 py-6 font-bold text-[#2D336B]">$10,000</td>
            <td class="px-6 py-6 text-gray-400">1 week ago</td>
            <td class="px-6 py-6 text-gray-400">Corporate</td>
            <td class="px-6 py-6 text-right font-medium text-[#2D336B] hover:underline cursor-pointer">View</td>
          </tr>
         
          <tr>
            <td class="px-6 py-6 font-bold text-gray-800">Sarah Johnson</td>
            <td class="px-6 py-6 text-gray-400">sarah@email.com</td>
            <td class="px-6 py-6 font-bold text-[#2D336B]">$850</td>
            <td class="px-6 py-6 text-gray-400">2 weeks ago</td>
            <td class="px-6 py-6 text-gray-400">Individual</td>
            <td class="px-6 py-6 text-right font-medium text-[#2D336B] hover:underline cursor-pointer">View</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}

export function AdminMapPinsPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">
 
  <div class="mb-8 flex items-center justify-between">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Job Map Pins</h1>
    <button class="rounded-lg bg-[#8B1A1A] px-4 py-2 text-sm font-medium text-white transition hover:bg-red-900">
      + Add Pin
    </button>
  </div>

 
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    
   
    <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <h2 class="mb-6 text-sm font-bold text-[#2D336B]">Active Pins</h2>
      <div class="space-y-4">
       
        <div class="flex items-center justify-between rounded-xl border border-gray-100 p-4">
          <div class="flex items-center gap-3">
            <div class="h-2 w-2 rounded-full bg-red-700"></div>
            <div>
              <p class="text-sm font-bold">Washington, DC</p>
              <p class="text-[10px] text-gray-400">Government, Cyber</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-bold text-[#2D336B]">389</p>
            <p class="text-[10px] text-gray-400">jobs</p>
          </div>
        </div>
       
        <div class="flex items-center justify-between rounded-xl border border-gray-100 p-4">
          <div class="flex items-center gap-3">
            <div class="h-2 w-2 rounded-full bg-red-700"></div>
            <div>
              <p class="text-sm font-bold">New York, NY</p>
              <p class="text-[10px] text-gray-400">Finance, Tech</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-bold text-[#2D336B]">412</p>
            <p class="text-[10px] text-gray-400">jobs</p>
          </div>
        </div>
      
        <div class="flex items-center justify-between rounded-xl border border-gray-100 p-4">
          <div class="flex items-center gap-3">
            <div class="h-2 w-2 rounded-full bg-blue-900"></div>
            <div>
              <p class="text-sm font-bold">Seattle, WA</p>
              <p class="text-[10px] text-gray-400">Tech, Aerospace</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-bold text-[#2D336B]">289</p>
            <p class="text-[10px] text-gray-400">jobs</p>
          </div>
        </div>
      
        <div class="flex items-center justify-between rounded-xl border border-gray-100 p-4">
          <div class="flex items-center gap-3">
            <div class="h-2 w-2 rounded-full bg-blue-900"></div>
            <div>
              <p class="text-sm font-bold">Houston, TX</p>
              <p class="text-[10px] text-gray-400">Defense, Energy</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-sm font-bold text-[#2D336B]">234</p>
            <p class="text-[10px] text-gray-400">jobs</p>
          </div>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
      <h2 class="mb-6 text-sm font-bold text-[#2D336B]">Add/Edit Pin</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-[11px] font-semibold text-[#2D336B] mb-1">City Name</label>
          <input type="text" placeholder="e.g., Austin, TX" class="w-full rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none" />
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-[11px] font-semibold text-[#2D336B] mb-1">X Coordinate</label>
            <input type="text" placeholder="460" class="w-full rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none" />
          </div>
          <div>
            <label class="block text-[11px] font-semibold text-[#2D336B] mb-1">Y Coordinate</label>
            <input type="text" placeholder="395" class="w-full rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none" />
          </div>
        </div>

        <div>
          <label class="block text-[11px] font-semibold text-[#2D336B] mb-1">Job Count</label>
          <input type="text" placeholder="231" class="w-full rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none" />
        </div>

        <div>
          <label class="block text-[11px] font-semibold text-[#2D336B] mb-1">Top Industries</label>
          <input type="text" placeholder="Tech, Government" class="w-full rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2 text-sm placeholder:text-gray-300 focus:outline-none" />
        </div>

        <button class="mt-4 w-full rounded-xl bg-[#1E2B58] py-3 text-sm font-bold text-white transition hover:bg-[#162044]">
          Save Pin
        </button>
      </form>
    </div>

  </div>
</div>
  );
}

export function AdminJobListingsPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">
  
  <div class="mb-8 flex items-center justify-between">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Job Listings</h1>
    <button class="rounded-xl bg-[#8B1A1A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-900 shadow-sm">
      + Add Job
    </button>
  </div>

 
  <div class="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
    
    <div class="flex gap-8 border-b border-gray-50 px-8 py-4 text-xs font-bold text-gray-400">
      <span class="text-[#2D336B] border-b-2 border-[#2D336B] pb-4 -mb-[17px] cursor-pointer">All</span>
      <span class="hover:text-[#2D336B] cursor-pointer">Active</span>
      <span class="hover:text-[#2D336B] cursor-pointer">Draft</span>
      <span class="hover:text-[#2D336B] cursor-pointer">Expired</span>
    </div>

    
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="bg-[#F9F1E7] text-[11px] font-bold uppercase tracking-wider text-gray-500">
            <th class="px-8 py-4">Title</th>
            <th class="px-4 py-4">Company</th>
            <th class="px-4 py-4">Location</th>
            <th class="px-4 py-4">Type</th>
            <th class="px-4 py-4">Posted</th>
            <th class="px-4 py-4">Status</th>
            <th class="px-8 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          
          <tr>
            <td class="px-8 py-6 font-bold text-[#1E2B58]">Cybersecurity Analyst</td>
            <td class="px-4 py-6 text-gray-400">Booz Allen</td>
            <td class="px-4 py-6 text-gray-400">DC</td>
            <td class="px-4 py-6 text-gray-400">Full-time</td>
            <td class="px-4 py-6 text-gray-400">2d ago</td>
            <td class="px-4 py-6">
              <span class="rounded-lg bg-green-100 px-3 py-1 text-[10px] font-bold text-green-500 border border-green-200">Active</span>
            </td>
            <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-8 py-6 font-bold text-[#1E2B58]">Operations Manager</td>
            <td class="px-4 py-6 text-gray-400">Boeing</td>
            <td class="px-4 py-6 text-gray-400">Seattle</td>
            <td class="px-4 py-6 text-gray-400">Full-time</td>
            <td class="px-4 py-6 text-gray-400">5d ago</td>
            <td class="px-4 py-6">
              <span class="rounded-lg bg-green-100 px-3 py-1 text-[10px] font-bold text-green-500 border border-green-200">Active</span>
            </td>
            <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-8 py-6 font-bold text-[#1E2B58]">Project Manager</td>
            <td class="px-4 py-6 text-gray-400">Dell</td>
            <td class="px-4 py-6 text-gray-400">Austin</td>
            <td class="px-4 py-6 text-gray-400">Full-time</td>
            <td class="px-4 py-6 text-gray-400">1w ago</td>
            <td class="px-4 py-6">
              <span class="rounded-lg bg-green-100 px-3 py-1 text-[10px] font-bold text-green-500 border border-green-200">Active</span>
            </td>
            <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}

export function AdminTestimonialsPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">

  <div class="mb-8 flex items-center justify-between">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Testimonials</h1>
    <button class="rounded-xl bg-[#8B1A1A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-900 shadow-sm">
      + Add Testimonial
    </button>
  </div>


  <div class="space-y-6">

    <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div class="flex items-start justify-between">
        <div class="flex gap-4">

          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E2B58] text-xs font-bold text-white">SMR</div>
          <div>
            <h2 class="text-sm font-bold text-[#1E2B58]">Sgt. Marcus Reed</h2>
            <p class="text-[10px] text-gray-400">US Army</p>
          </div>
        </div>
        <span class="rounded-lg bg-green-50 px-3 py-1 text-[10px] font-bold text-green-500">Published</span>
      </div>
      <div class="mt-4">
        <p class="text-xs text-gray-500 italic">"VetBridge coach translated 8 years..."</p>
        <p class="mt-2 text-[10px] font-bold text-[#B8860B]">Placed: <span class="font-medium text-[#B8860B]">Booz Allen Hamilton</span></p>
      </div>
      <div class="mt-6 flex gap-6 text-[11px] font-bold text-[#1E2B58]">
        <button class="hover:underline">Edit</button>
        <button class="hover:underline text-gray-800">Delete</button>
      </div>
    </div>

    <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div class="flex items-start justify-between">
        <div class="flex gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E2B58] text-xs font-bold text-white">JW</div>
          <div>
            <h2 class="text-sm font-bold text-[#1E2B58]">Jennifer Walsh</h2>
            <p class="text-[10px] text-gray-400">Military Spouse</p>
          </div>
        </div>
        <span class="rounded-lg bg-green-50 px-3 py-1 text-[10px] font-bold text-green-500">Published</span>
      </div>
      <div class="mt-4">
        <p class="text-xs text-gray-500 italic">"As a military spouse who moved 4 times..."</p>
        <p class="mt-2 text-[10px] font-bold text-[#B8860B]">Placed: <span class="font-medium text-[#B8860B]">Dell Technologies</span></p>
      </div>
      <div class="mt-6 flex gap-6 text-[11px] font-bold text-[#1E2B58]">
        <button class="hover:underline">Edit</button>
        <button class="hover:underline text-gray-800">Delete</button>
      </div>
    </div>

    <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div class="flex items-start justify-between">
        <div class="flex gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E2B58] text-xs font-bold text-white">CDT</div>
          <div>
            <h2 class="text-sm font-bold text-[#1E2B58]">Cpl. Devon Torres</h2>
            <p class="text-[10px] text-gray-400">USMC</p>
          </div>
        </div>
        <span class="rounded-lg bg-orange-50 px-3 py-1 text-[10px] font-bold text-orange-400">Draft</span>
      </div>
      <div class="mt-4">
        <p class="text-xs text-gray-500 italic">"Mock interviews were game-changing..."</p>
        <p class="mt-2 text-[10px] font-bold text-[#B8860B]">Placed: <span class="font-medium text-[#B8860B]">FedEx</span></p>
      </div>
      <div class="mt-6 flex gap-6 text-[11px] font-bold text-[#1E2B58]">
        <button class="hover:underline">Edit</button>
        <button class="hover:underline text-gray-800">Delete</button>
      </div>
    </div>
  </div>
</div>
  );
}

export function AdminSuccessStoriesPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">

  <div class="mb-8">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Success Stories</h1>
  </div>

  <div class="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white py-20 px-8 shadow-sm text-center">

    <div class="mb-4 text-4xl">
      📖
    </div>

    <h2 class="mb-2 text-sm font-bold text-[#1E2B58]">Manage Success Stories</h2>
    <p class="mb-8 text-xs text-gray-400 max-w-xs leading-relaxed">
      Create detailed veteran success stories for the website
    </p>

    <button class="rounded-xl bg-[#8B1A1A] px-10 py-3 text-sm font-bold text-white transition hover:bg-red-900 shadow-md">
      Add Story
    </button>
  </div>
</div>
  );
}

export function AdminPagesContentPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">
  
  <div class="mb-8">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Pages & Content</h1>
  </div>

  
  <div class="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr class="bg-[#F9F1E7] text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            <th class="px-8 py-4">Page</th>
            <th class="px-4 py-4">URL</th>
            <th class="px-4 py-4">Last Edited</th>
            <th class="px-4 py-4">Status</th>
            <th class="px-8 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
         
          <tr>
            <td class="px-8 py-6 font-bold text-[#1E2B58]">Homepage</td>
            <td class="px-4 py-6 text-gray-400 font-mono text-xs">/</td>
            <td class="px-4 py-6 text-gray-400">2 days ago</td>
            <td class="px-4 py-6">
              <span class="rounded-lg bg-green-100 px-3 py-1 text-[10px] font-bold text-green-500 border border-green-200">Published</span>
            </td>
            <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-8 py-6 font-bold text-[#1E2B58]">About Us</td>
            <td class="px-4 py-6 text-gray-400 font-mono text-xs">/about</td>
            <td class="px-4 py-6 text-gray-400">1 week ago</td>
            <td class="px-4 py-6">
              <span class="rounded-lg bg-green-100 px-3 py-1 text-[10px] font-bold text-green-500 border border-green-200">Published</span>
            </td>
            <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
          
          <tr>
            <td class="px-8 py-6 font-bold text-[#1E2B58]">For Veterans</td>
            <td class="px-4 py-6 text-gray-400 font-mono text-xs">/veterans</td>
            <td class="px-4 py-6 text-gray-400">3 days ago</td>
            <td class="px-4 py-6">
              <span class="rounded-lg bg-orange-100 px-3 py-1 text-[10px] font-bold text-orange-400 border border-orange-200">Draft</span>
            </td>
            <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  );
}

export function AdminUsersPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">
  
  <div class="mb-8 flex items-center justify-between">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Admin Users</h1>
    <button class="rounded-xl bg-[#8B1A1A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-red-900 shadow-sm">
      + Invite User
    </button>
  </div>

  <div class="mb-8 rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
    <table class="w-full text-left text-sm">
      <thead>
        <tr class="bg-[#F9F1E7] text-[11px] font-bold text-gray-500 uppercase tracking-wider">
          <th class="px-8 py-4">Name</th>
          <th class="px-4 py-4">Email</th>
          <th class="px-4 py-4 text-center">Role</th>
          <th class="px-4 py-4">Last Active</th>
          <th class="px-8 py-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        
        <tr>
          <td class="px-8 py-6 font-bold text-[#1E2B58]">Admin User</td>
          <td class="px-4 py-6 text-gray-400">admin@vetess.org</td>
          <td class="px-4 py-6 text-center">
            <span class="rounded-full bg-[#1E2B58] px-3 py-1 text-[9px] font-bold text-white">Super Admin</span>
          </td>
          <td class="px-4 py-6 text-gray-400 italic">Just now</td>
          <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
        </tr>
        
        <tr>
          <td class="px-8 py-6 font-bold text-[#1E2B58]">Jane Smith</td>
          <td class="px-4 py-6 text-gray-400">jane@vetess.org</td>
          <td class="px-4 py-6 text-center">
            <span class="rounded-lg bg-blue-50 px-3 py-1 text-[9px] font-bold text-blue-500 border border-blue-100">Admin</span>
          </td>
          <td class="px-4 py-6 text-gray-400">2 hours ago</td>
          <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
        </tr>
        
        <tr>
          <td class="px-8 py-6 font-bold text-[#1E2B58]">Bob Johnson</td>
          <td class="px-4 py-6 text-gray-400">bob@vetess.org</td>
          <td class="px-4 py-6 text-center">
            <span class="rounded-lg bg-green-50 px-3 py-1 text-[9px] font-bold text-green-500 border border-green-100">Editor</span>
          </td>
          <td class="px-4 py-6 text-gray-400">1 day ago</td>
          <td class="px-8 py-6 text-right font-medium text-gray-500 hover:underline cursor-pointer">Edit</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
    <h2 class="mb-6 text-sm font-bold text-[#2D336B]">Permission Levels</h2>
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      
      <div class="space-y-10">
        <div>
          <h3 class="mb-2 text-xs font-bold text-[#2D336B]">Super Admin</h3>
          <ul class="space-y-1 text-[11px] text-gray-500">
            <li>✓ Full access to all features</li>
            <li>✓ Manage all admin users</li>
            <li>✓ Access financial data</li>
          </ul>
        </div>
        <div>
          <h3 class="mb-2 text-xs font-bold text-[#2D336B]">Editor</h3>
          <ul class="space-y-1 text-[11px] text-gray-500">
            <li>✓ Edit content and testimonials</li>
            <li>✓ Manage job listings</li>
            <li>✗ No financial access</li>
          </ul>
        </div>
      </div>
      
      <div class="space-y-10">
        <div>
          <h3 class="mb-2 text-xs font-bold text-[#2D336B]">Admin</h3>
          <ul class="space-y-1 text-[11px] text-gray-500">
            <li>✓ Manage content and jobs</li>
            <li>✓ View donations</li>
            <li>✗ Cannot manage super admins</li>
          </ul>
        </div>
        <div>
          <h3 class="mb-2 text-xs font-bold text-[#2D336B]">Viewer</h3>
          <ul class="space-y-1 text-[11px] text-gray-500">
            <li>✓ Read-only access</li>
            <li>✗ Cannot edit content</li>
            <li>✗ Cannot export data</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export function AdminSettingsPage() {
  return (
    <div class="min-h-screen bg-[#FDFBF7] p-10 font-sans text-[#1A1A1A]">
  <div class="mb-8">
    <h1 class="text-4xl font-display font-black tracking-tight text-[#1f3057] sm:text-5xl">Settings</h1>
  </div>

  <div class="mb-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <h2 class="mb-6 text-sm font-bold text-[#2D336B]">General Settings</h2>
    
    <form class="max-w-2xl space-y-5">
      <div>
        <label class="block text-[11px] font-bold text-[#2D336B] mb-2">Site Name</label>
        <input 
          type="text" 
          value="Vetess" 
          class="w-full rounded-xl border border-gray-100 bg-gray-50/30 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200" 
        />
      </div>

      <div>
        <label class="block text-[11px] font-bold text-[#2D336B] mb-2">Contact Email</label>
        <input 
          type="email" 
          value="info@vetess.org" 
          class="w-full rounded-xl border border-gray-100 bg-gray-50/30 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200" 
        />
      </div>

      <div>
        <label class="block text-[11px] font-bold text-[#2D336B] mb-2">Nonprofit EIN</label>
        <input 
          type="text" 
          value="12-3456789" 
          class="w-full rounded-xl border border-gray-100 bg-gray-50/30 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200" 
        />
      </div>

      <button class="mt-4 rounded-xl bg-[#1E2B58] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#162044] shadow-md">
        Save Changes
      </button>
    </form>
  </div>

  <div class="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <h2 class="mb-6 text-sm font-bold text-[#2D336B]">Admin Portal Settings</h2>
    
    <ul class="space-y-4">
      <li class="flex items-center gap-4 text-xs text-gray-500">
        <div class="h-4 w-4 rounded border border-gray-200 bg-gray-50"></div>
        Show admin link in footer
      </li>
      <li class="flex items-center gap-4 text-xs text-gray-500">
        <div class="h-4 w-4 rounded border border-gray-200 bg-gray-50"></div>
        Require 2FA for all admins
      </li>
      <li class="flex items-center gap-4 text-xs text-gray-500">
        <div class="h-4 w-4 rounded border border-gray-200 bg-gray-50"></div>
        Email alerts for new donations
      </li>
      <li class="flex items-center gap-4 text-xs text-gray-500">
        <div class="h-4 w-4 rounded border border-gray-200 bg-gray-50"></div>
        Weekly summary email
      </li>
    </ul>
  </div>
</div>
  );
}
