import Link from "next/link";
import { Sun, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import PageWrapper from "../page-wrapper";

// Social Media SVG Icons
const FacebookIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const quickLinks = [
  { label: "Help Center", href: "/help-center" },
  {
    label: "Solar Panel Installation",
    href: "/services/solar-panel-installation",
  },
  { label: "Inverter & Battery", href: "/services/inverter-battery" },
  {
    label: "Residential & Commercial",
    href: "/services/residential-commercial",
  },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Help Center", href: "/help-center" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "X", href: "https://x.com", icon: TwitterIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookies Policy", href: "/cookies-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <PageWrapper className="relative overflow-hidden bg-secondary-500" topEdge edgeClassName="text-secondary-500">
      <div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[35%_1fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#71B843]/15 ring-1 ring-[#71B843]/30">
                <Sun className="h-5 w-5 text-[#71B843]" strokeWidth={2} />
              </span>
              <span className="text-xl font-semibold tracking-tight text-white">
                Savior
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-200">
              We provide modern and reliable solar energy solutions to help you
              reduce electricity costs and build a sustainable future.
            </p>

            <div className="mt-6 flex items-start gap-2.5 text-sm text-slate-200">
              <MapPin
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#71B843]"
                strokeWidth={1.75}
              />
              <span>
                123 Sunrise Boulevard, Bopal, Ahmedabad, Gujarat 380058
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/90 transition-all duration-200 hover:border-[#71B843]/40 hover:bg-[#71B843]/10 hover:text-[#71B843]"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-200 transition-colors duration-200 hover:text-[#71B843]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-200 transition-colors duration-200 hover:text-[#71B843]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="max-w-md">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-3 text-sm text-slate-200 transition-colors duration-200 hover:text-[#71B843]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  +880 1234-567890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@savior.com"
                  className="flex items-center gap-3 text-sm text-slate-200 transition-colors duration-200 hover:text-[#71B843]"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  info@savior.com
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#71B843] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#71B843]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a free quote
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/15 sm:mt-16" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="order-2 text-xs text-slate-400 sm:order-1">
            © {year} Savior. All rights reserved.
          </p>
          <ul className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:order-2">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-xs text-slate-400 transition-colors duration-200 hover:text-white/80"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Watermark wordmark */}
      <div className="relative select-none overflow-hidden">
        <p className="translate-y-[0.18em] text-center text-[18vw] font-extrabold leading-none tracking-tight text-white/[0.04] sm:text-[16vw] lg:text-[13vw]">
          SAVIOR
        </p>
      </div>
    </PageWrapper>
  );
}
