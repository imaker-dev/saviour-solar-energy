"use client";

import { Mail, Phone } from "lucide-react";
import PageWrapper from "../page-wrapper";
import Link from "next/link";
import { SITE_CONFIG } from "@/app/const";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Solar Panel Solutions", href: "/services/solar-panels" },
  { label: "Solar Inverter Systems", href: "/services/inverters" },
  { label: "Installation Services", href: "/services/installation" },
  { label: "Maintenance Services", href: "/services/maintenance" },
  { label: "Complete Solar Solutions", href: "/services" },
];

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

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <PageWrapper
      as="footer"
      className="bg-secondary-500 text-white"
      paddingY=""
    >
      {/* Main Footer Content */}
      <div className="pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-5">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              style={{ textDecoration: "none" }}
            >
              <img src="/Images/logo.png" alt="" className="w-20 lg:w-24" />
            </Link>

            <p className="text-gray-400 text-[14.5px] leading-relaxed max-w-[220px]">
              Complete solar solutions including panels, inverters,
              installation, and maintenance for homes and businesses.
            </p>
            <div className="space-y-3 pt-1">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  <Mail
                    size={16}
                    className="text-primary-500 group-hover:scale-110 transition-transform"
                  />
                </span>
                <span className="text-gray-300 text-[14px] group-hover:text-white transition-colors">
                  {SITE_CONFIG.contact.email}
                </span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  <Phone
                    size={16}
                    className="text-primary-500 group-hover:scale-110 transition-transform"
                  />
                </span>
                <span className="text-gray-300 text-[14px] group-hover:text-white transition-colors">
                  {SITE_CONFIG.contact.phone}
                </span>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-5 tracking-wide">
              Explore
            </h3>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-[14.5px] hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-5 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-[14.5px] hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-[16px] mb-5 tracking-wide">
              Contact
            </h3>
            <p className="text-gray-400 text-[14.5px] leading-relaxed mb-6">
              {SITE_CONFIG.address.full}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200 group"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-400 py-6">
        <div className="text-center">
          <p className="text-gray-400 text-[13px]">
           © Savior Solar Energy. All rights reserved.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
