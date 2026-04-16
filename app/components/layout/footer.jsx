"use client";

import { Mail, Phone } from "lucide-react";
import PageWrapper from "../page-wrapper";
import Link from "next/link";

const EXPLORE_LINKS = [
  { label: "About", href: "#" },
  { label: "Leadership Team", href: "#" },
  { label: "Our Services", href: "#" },
  { label: "Recent Projects", href: "#" },
  { label: "Contact", href: "#" },
];

const SERVICE_LINKS = [
  { label: "Solar Technology", href: "#" },
  { label: "Solar Installation", href: "#" },
  { label: "Battery Materials", href: "#" },
  { label: "Solar Equipment", href: "#" },
  { label: "Charge Controllers", href: "#" },
];

// const SOCIAL_LINKS = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Youtube, href: "#", label: "YouTube" },
//   { icon: Instagram, href: "#", label: "Instagram" },
// ];

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
              We Offer a Wide Range of Quality Solar Panel Installation
              Services.
            </p>
            <div className="space-y-3 pt-1">
              <a
                href="mailto:needhelp@company.com"
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  <Mail
                    size={16}
                    className="text-primary-500 group-hover:scale-110 transition-transform"
                  />
                </span>
                <span className="text-gray-300 text-[14px] group-hover:text-white transition-colors">
                  needhelp@company.com
                </span>
              </a>
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 group"
              >
                <span className="w-7 h-7 flex items-center justify-center">
                  <Phone
                    size={16}
                    className="text-primary-500 group-hover:scale-110 transition-transform"
                  />
                </span>
                <span className="text-gray-300 text-[14px] group-hover:text-white transition-colors">
                  (123) 456-7890
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
                  <a
                    href={link.href}
                    className="text-gray-400 text-[14.5px] hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-gray-400 text-[14.5px] hover:text-primary-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
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
              60 Brooklyn Golden Street
              <br />
              New York 8800 United States
            </p>
            <div className="flex items-center gap-3">
              {/* {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-primary-500 hover:bg-primary-600 flex items-center justify-center transition-colors duration-200 group"
                >
                  <Icon
                    size={15}
                    className="text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
              ))} */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-400 py-6">
        <div className="text-center">
          <p className="text-gray-400 text-[13px]">
            © {new Date().getFullYear()} Solam. All rights reserved.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
