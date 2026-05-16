import React, { useState } from "react";
import { supabase } from "../lib/supabase.js"

const donationAmounts = [
  { amount: "$50", label: "Resume Review" },
  { amount: "$100", label: "Mock Interview" },
  { amount: "$250", label: "2 Coaching Sessions" },
  { amount: "$500", label: "Full Career Program" },
  { amount: "$1000", label: "Sponsor 2 Veterans" },
  { amount: "Other", label: "" },
];

const supportOptions = [
  {
    icon: "🏢",
    title: "Corporate Matching",
    text: "Many employers match charitable donations. Check if your company participates.",
    link: "Learn More →",
  },
  {
    icon: "📋",
    title: "Planned Giving",
    text: "Include VetBridge in your estate planning to create lasting impact.",
    link: "Learn More →",
  },
  {
    icon: "🤝",
    title: "Volunteer",
    text: "Share your expertise as a mentor or career coach for veterans.",
    link: "Get Involved →",
  },
];

export default function Donate() {
  const [frequency, setFrequency] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState("$100");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  };

  const handleDonation = async () => {
    // Step 1: Form validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill out all required feilds.")
      return;
    }
    // Step 2: send donation info to supabase
    /*
    const { data, error } = await SupabaseClient.from("donations").insert([
      {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      amount: selectedAmount,
      frequency: frequency,
      },
    ]);

    if(error) {
      console.error("Supabase error:", error);
      return;
    }
      */

    // Step 3: Initiate Stripe payment
    /*
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    const { error: stripeError } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1}],
      mode: frequency === "monthly" ? "subscription" : "payment",
      successUrl: window.location.origin + "/donate/success",
      cancleUrl: window.location.origin + "/donate",
    });

    if (stripeError) {
      console.error("Stripe Error:", stripeError);
    }
      */

    console.log("Form submitted:", {
      ...formData,
      amount: selectedAmount,
      frequency,
    });
  };

  return (
    <main className="min-h-screen bg-[#FEFCF8]">
      <section className="relative flex h-[370px] items-center justify-center overflow-hidden text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-donate.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#1E3060]/70" />

        <div className="relative z-10 max-w-[1029px] px-6">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-[#D4A91E]/40 bg-[#D4A91E]/20 px-6 py-2 text-[14px] font-semibold text-[#F6D46B]">
            ❤️ 501(C)(3) NONPROFIT ORGANIZATION
          </div>

          <h1 className="font-serif text-[52px] font-black leading-[65px] text-white">
            Help Veterans Find Their Next Mission
          </h1>

          <p className="mx-auto mt-4 max-w-[768px] text-[18px] leading-[29px] text-white/80">
            Every contribution helps a veteran successfully transition to a rewarding civilian career.
            <br />
            100% of donations go directly to program services.
          </p>
        </div>
      </section>

      <section className="relative z-20 mx-auto mt-[120px] max-w-[720px] rounded-[20px] border border-[#EDE0C8] bg-white px-8 py-10 shadow-xl md:mt-[140px]">
        <h2 className="text-center font-serif text-[30px] font-bold text-[#1E3060]">
          Make Your Impact Today
        </h2>

        <div className="mt-6 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setFrequency("one-time")}
            className={`h-[48px] rounded-[12px] px-6 font-semibold ${
              frequency === "one-time"
                ? "bg-[#8B1A1F] text-white"
                : "bg-[#F7F0E4] text-[#1E3060]"
            }`}
          >
            One-Time
          </button>

          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`h-[48px] rounded-[12px] px-6 font-semibold ${
              frequency === "monthly"
                ? "bg-[#8B1A1F] text-white"
                : "bg-[#F7F0E4] text-[#1E3060]"
            }`}
          >
            Monthly
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {donationAmounts.map((item) => (
            <button
              key={item.amount}
              type="button"
              onClick={() => setSelectedAmount(item.amount)}
              className={`flex h-[88px] flex-col items-center justify-center rounded-[16px] border-2 transition ${
                selectedAmount === item.amount
                  ? "border-[#8B1A1F] bg-[#F7F0E4]"
                  : "border-[#EDE0C8] bg-white hover:border-[#8B1A1F]"
              }`}
            >
              <p className="text-[24px] font-bold text-[#1E3060]">
                {item.amount}
              </p>
              <p className="text-[12px] text-[#7A6E60]">{item.label}</p>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-[16px] border border-[#D4A91E]/30 bg-[#D4A91E]/10 p-6">
          <div className="flex gap-4">
            <span className="text-[28px]">🎯</span>

            <div>
              <p className="text-[16px] font-semibold text-[#1E3060]">
                Your {selectedAmount} donation provides:
              </p>

              <ul className="mt-2 space-y-1">
                <li className="text-[14px] text-[#3D3529]">
                  ✓ Professional resume review and optimization
                </li>
                <li className="text-[14px] text-[#3D3529]">
                  ✓ One mock interview session with feedback
                </li>
                <li className="text-[14px] text-[#3D3529]">
                  ✓ Access to our veteran mentorship network
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
            name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="h-[48px] rounded-[12px] border-2 border-[#EDE0C8] px-4 placeholder:text-[#3D3529]/50"
            />
            <input
            name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="h-[48px] rounded-[12px] border-2 border-[#EDE0C8] px-4 placeholder:text-[#3D3529]/50"
            />
          </div>

          <input
          name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="mt-4 h-[48px] w-full rounded-[12px] border-2 border-[#EDE0C8] px-4 placeholder:text-[#3D3529]/50"
          />

          <input
          name="phone"
            placeholder="Phone Number (Optional)"
            onChange={handleChange}
            className="mt-4 h-[48px] w-full rounded-[12px] border-2 border-[#EDE0C8] px-4 placeholder:text-[#3D3529]/50"
          />

          <button
            type="button"
            onClick={handleDonation}
            className="mt-6 h-[56px] w-full rounded-[12px] bg-[#8B1A1F] font-semibold text-white"
          >
            Continue to Payment →
          </button>

          <p className="mt-3 text-center text-[12px] text-[#7A6E60]">
            Secure payment processing · Tax-deductible · EIN: 12-3456789
          </p>
        </form>
      </section>

      <section className="mb-20 mt-20 text-center">
        <h2 className="mb-10 font-serif text-[30px] font-bold text-[#1E3060]">
          Other Ways to Support
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {supportOptions.map((card) => (
            <div
              key={card.title}
              className="rounded-[16px] border border-[#EDE0C8] bg-white p-6"
            >
              <div className="mb-3 text-[36px]">{card.icon}</div>

              <h3 className="mb-2 text-[16px] font-semibold text-[#1E3060]">
                {card.title}
              </h3>

              <p className="mb-4 text-[14px] text-[#3D3529]">{card.text}</p>

              <button className="text-[14px] font-semibold text-[#8B1A1F]">
                {card.link}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}