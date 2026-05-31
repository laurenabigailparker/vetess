import { Link } from "react-router-dom";

const footerSections = [
  {
    heading: "For Veterans",
    links: [
      { label: "Job Board", to: "/job-board" },
      { label: "For Veterans", to: "/for-veterans" },
      { label: "Success Stories", to: "/for-veterans" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "For Employers",
    links: [
      { label: "For Employers", to: "/for-employers" },
      { label: "Job Board", to: "/job-board" },
      { label: "Contact", to: "/contact" },
      { label: "Donate", to: "/donate" },
    ],
  },
  {
    heading: "Organization",
    links: [
      { label: "About Vetess", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Donate", to: "/donate" },
      { label: "Admin Portal", to: "/admin/login" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t-[2.5px] border-crimson-700 bg-navy-900 pb-10 pt-[72px]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="font-display text-2xl font-black text-white">
              <span className="text-gold-500">★</span> Vetess
            </Link>

            <p className="mt-4 max-w-[260px] text-sm leading-6 text-white/65">
              Connecting veterans, military spouses, and employers through
              meaningful career opportunities.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="mailto:rbalfour@vetess.org"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-crimson-700"
                aria-label="Email Vetess"
              >
                ✉️
              </a>

              <Link
                to="/contact"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-crimson-700"
                aria-label="Contact Vetess"
              >
                🌐
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/35">
              Veteran Employment Network
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500">
                {section.heading}
              </h3>

              <div className="space-y-2.5">
                {section.links.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="block text-sm text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vetess. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Accessibility</span>

            <Link
              to="/admin/login"
              className="text-white/35 transition hover:text-white/70"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}