import {
    Mail,
    Phone,
    MapPin,
    Clock,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#FAF7F1] text-[#14224A]">

            {/* Hero Section */}
            <section className="bg-[#243866] px-6 py-24 text-center text-white">
                <h1 className="font-serif text-5xl font-bold md:text-6xl">
                    Get In Touch
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-sm text-white/80 md:text-base">
                    Have questions? We are here to help veterans and employers connect.
                </p>
            </section>

            {/* Contact Content Section */}
            <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.25fr]">
                {/* Left Card */}
                <div className="rounded-2xl bg-[#243866] p-8 text-white shadow-lg">
                    <h2 className="font-serif text-2xl font-bold">
                        Contact Information
                    </h2>

                    <div className="mt-8 space-y-6">
                        <ContactInfoItem
                        icon={<Mail size={18} />}
                        label="Email"
                        value="info@vetbridge.org"
                        />

                        <ContactInfoItem
                        icon={<Phone size={18} />}
                        label="Phone"
                        value="(800) VET-HELP"
                        />

                        <ContactInfoItem
                        icon={<MapPin size={18} />}
                        label="Address"
                        value={
                            <>
                                1234 Veterans Way
                                <br />
                                Washington, DC 20001
                            </>
                        }
                        />

                        <ContactInfoItem
                        icon={<Clock size={18} />}
                        label="Hours"
                        value={
                            <>
                                Mon-Fri: 8am - 6pm EST
                                <br />
                                Sat-Sun: Closed
                            </>
                        }
                        />
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6">
                        <p className="mb-4 text-sm text-white/60">Follow Us</p>

                        <div className="flex gap-3">
                            <SocialIcon icon={<FaLinkedinIn size={16} />} />
                            <SocialIcon icon={<FaFacebookF size={16} />} />
                            <SocialIcon icon={<FaInstagram size={16} />} />

                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="rounded-2xl border border-[#E6D7BD] bg-white p-8 shadow-lg">
                    <h2 className="font-serif text-2xl font-bold text-[#243866]">
                        Send Us a Message
                    </h2>

                    <form className="mt-8 space-y-5">
                        <div className="grid gap-5 md:grid-cols-2">
                            <FormField label="First Name *" placeholder="John" />
                            <FormField label="Last Name *" placeholder="Smith" />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <FormField label="Email *" placeholder="john@email.com" />
                            <FormField label="Phone" placeholder="(555) 123-4567" />
                        </div>

                        <FormField label="I am a... *" placeholder="" />

                        <FormField label="Subject *" placeholder="How can we help you?" />

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#14224A]">
                                Message *
                            </label>

                            <textarea
                            rows="7"
                            placeholder="Tell us more about your inquiry..."
                            className="w-full resize-none rounded-lg border border-[#D8BE8A] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#9D1C22]"
                            />
                        </div>

                        <button
                        type="submit"
                        className="w-full rounded-lg bg-[#9D1C22] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#7F151A]"
                        >
                            Send Message
                        </button>

                        <p className="text-center text-xs text-gray-500">
                            We typically respond within 24 business hours.
                        </p>
                    </form>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#F2EADB] px-6 py-20">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center font-serif text-4xl font-bold text-[#243866]">
                        Frequently Asked Questions
                    </h2>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        <FAQCard
                        question="Is VetBridge really free?"
                        answer="Yes! All our services are 100% free for veterans, active duty members, and military spouses. We are funded by donations and grants."
                        />

                        <FAQCard
                        question="How quickly can I get started?"
                        answer="You can start immmediately! Fill out our intake form and we will match you with a career coach within 48 hours."
                        />

                        <FAQCard
                        question="Do I need to be separated to use your services?"
                        answer="No! We work with transitioning service members up to 18 months before separation, as well as veterans of all eras."
                        />

                        <FAQCard
                        question="How can employers get involved?"
                        answer="Employers can post jobs for free, attend our career fairs, or partner with us for direct placement programs."
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

function ContactInfoItem({ icon, label, value }) {
    return (
        <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A51E25] text-white">
                {icon}
            </div>

            <div>
                <p className="text-sm text-white/50">{label}</p>
                <div className="mt-1 text-sm font-bold leading-relaxed">{value}</div>
            </div>
        </div>
    );
}

function SocialIcon({ icon }) {
    return (
        <a
        href="#"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
            {icon}
        </a>
    );
}

function FormField({ label, placeholder }) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-[#14224A]">
                {label}
            </label>

            <input
            type="text"
            placeholder={placeholder}
            className="w-full rounded-lg border border-[#D8BE8A] px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#9D1C22]"
            />
        </div>
    );
}

function FAQCard({ question, answer }) {
    return (
        <div className="rounded-xl border border-[#E3D7C3] bg-white p-6 shadow-sm">
            <h3 className="font-bold text-[#243866]">{question}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F2937]">{answer}</p>
        </div>
    );
}