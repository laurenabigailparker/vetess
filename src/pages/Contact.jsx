import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#14224A]">
      <section className="bg-[#243866] px-6 py-24 text-center text-white">
        <h1 className="font-serif text-5xl font-bold md:text-6xl">
          Get In Touch
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-white/80 md:text-base">
          Have questions? We are here to help veterans and employers connect.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.25fr]">
        <div className="rounded-2xl bg-[#243866] p-8 text-white shadow-lg">
          <h2 className="font-serif text-2xl font-bold">
            Contact Information
          </h2>

          <div className="mt-8 space-y-6">
            <ContactInfoItem icon={<Mail size={18} />} label="Email" value="info@vetbridge.org" />
            <ContactInfoItem icon={<Phone size={18} />} label="Phone" value="(800) VET-HELP" />
            <ContactInfoItem icon={<MapPin size={18} />} label="Address" value="Washington, DC" />
            <ContactInfoItem icon={<Clock size={18} />} label="Hours" value="Mon-Fri: 8am - 6pm" />
          </div>
        </div>

        <div className="rounded-2xl border border-[#E6D7BD] bg-white p-8 shadow-lg">
          <h2 className="font-serif text-2xl font-bold text-[#243866]">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <FormField name="firstName" label="First Name *" onChange={handleChange} />
              <FormField name="lastName" label="Last Name *" onChange={handleChange} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <FormField name="email" label="Email *" onChange={handleChange} />
              <FormField name="phone" label="Phone" onChange={handleChange} />
            </div>

            <FormField name="subject" label="Subject *" onChange={handleChange} />

            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Message"
              className="w-full rounded-lg border px-4 py-3"
            />

            <button className="w-full bg-[#9D1C22] text-white py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function ContactInfoItem({ icon, label, value }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A51E25] text-white">
        {icon}
      </div>
      <div>
        <p className="text-sm text-white/50">{label}</p>
        <div className="text-sm font-bold">{value}</div>
      </div>
    </div>
  );
}

function FormField({ label, name, onChange }) {
  return (
    <div>
      <label className="block text-sm font-semibold">{label}</label>
      <input
        name={name}
        onChange={onChange}
        className="w-full border rounded-lg px-4 py-2"
      />
    </div>
  );
}