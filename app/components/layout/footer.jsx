import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import PageWrapper from "../page-wrapper";
import { BRAND_LOGO, SITE_CONFIG } from "@/app/const";

// Social Media SVG Icons
const FacebookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  {
    label: "Solar Panel Installation",
    href: "/services/solar-panel-installation",
  },
  { label: "Inverter & Battery", href: "/services/inverter-battery" },
  {
    label: "Residential & Commercial",
    href: "/services/residential-commercial",
  },
  { label: "Maintenance & Repair", href: "/services/maintenance-repair" },
  { label: "Solar Consultation", href: "/services/consultation" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Help Center", href: "/help-center" },
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

function FooterHeading({ children }) {
  return (
    <div className="mb-6">
      <h3 className="text-[13px] font-semibold uppercase tracking-widest text-white">
        {children}
      </h3>
      <div className="mt-3 h-0.5 w-9 rounded-full bg-white/15" />
    </div>
  );
}

function FooterNavColumn({ title, links }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-4">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="group inline-flex items-center text-[15px] text-slate-300 transition-colors duration-200 hover:text-[#71B843]"
            >
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <PageWrapper
      className="relative overflow-hidden bg-secondary-500"
      topEdge
      edgeClassName="text-secondary-500"
    >
      <div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-[20rem_9rem_13rem_8rem_17rem] lg:items-start lg:justify-between lg:gap-x-8 lg:gap-y-0">
          {/* Info: logo, description, socials */}
          <div className="max-w-md sm:col-span-2 lg:col-span-1 lg:max-w-[20rem]">
            <Link
              href="/"
              className="inline-flex w-12 items-center gap-2.5 lg:w-16"
            >
              <img src={BRAND_LOGO} alt="logo" />
            </Link>

            <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-300">
              We provide modern and reliable solar energy solutions to help you
              reduce electricity costs and build a sustainable future.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/90 transition-all duration-200 hover:border-[#71B843]/40 hover:bg-[#71B843]/10 hover:text-[#71B843]"
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <FooterNavColumn title="Quick Links" links={quickLinks} />
          <FooterNavColumn title="Services" links={serviceLinks} />
          <FooterNavColumn title="Company" links={companyLinks} />

          {/* Get in Touch */}
          <div className="max-w-md lg:max-w-[17rem]">
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE_CONFIG.map.url}
                  className="flex items-start gap-3 text-[15px] text-slate-300 transition-colors duration-200 hover:text-[#71B843]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <span>
                    {SITE_CONFIG.address.full}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="flex items-center gap-3 text-[15px] text-slate-300 transition-colors duration-200 hover:text-[#71B843]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  +880 1234-567890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@savior.com"
                  className="flex items-center gap-3 text-[15px] text-slate-300 transition-colors duration-200 hover:text-[#71B843]"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  info@savior.com
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 btn btn-primary btn-shine"
            >
              Get a free quote
            </Link>


          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/15 sm:mt-16" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="order-2 text-[13px] text-slate-400 sm:order-1">
            © {year} Savior. All rights reserved.
          </p>
          <ul className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:order-2">
            {legalLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-[13px] text-slate-400 transition-colors duration-200 hover:text-white/80"
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
