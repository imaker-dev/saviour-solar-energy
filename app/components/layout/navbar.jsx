"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronsRight, Menu, X, Settings2 } from "lucide-react";
import Link from "next/link";
import { generateServiceDropdownMenu } from "@/data/services";
import { usePathname } from "next/navigation";
import { BRAND_LOGO } from "@/app/const";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: generateServiceDropdownMenu(),
  },
  { label: "Projects", href: "/projects" },
  // { label: "Blog", href: "/blogs" },
  // { label: "Contact", href: "/contact" },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Blogs", href: "/blogs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const isItemActive = (item) => {
    if (item.href === "/") return pathname === "/";
    if (pathname === item.href) return true;
    if (item.dropdown) {
      return item.dropdown.some(
        (sub) => pathname === sub.href || pathname.startsWith(sub.href + "/"),
      );
    }
    return pathname.startsWith(item.href + "/");
  };

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu on outside click and on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handlePointer = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(null);
  }, [pathname]);

  return (
    <>
      {/* Backdrop — click to close, blurs the page behind the mobile menu */}
      <div
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-neutral-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white py-0 shadow-sm shadow-neutral-900/5 px-4 sm:px-6"
            : "bg-transparent px-4 sm:px-6 lg:px-8 py-5"
        }`}
      >
        <nav
          className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white py-3 lg:py-4 transition-all duration-500 ease-out ${
            scrolled
              ? "shadow-none"
              : "shadow-[0_0_18px_rgba(15,23,42,0.06)] px-4 sm:px-6"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="w-28 md:w-30 lg:w-36">
            <img src={BRAND_LOGO} alt="logo" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);

              return (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 py-2 text-[16px] font-medium transition-colors ${
                      isActive
                        ? "text-primary-500"
                        : "text-teal-900 hover:text-primary-600"
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        className="h-4.5 w-4.5 text-current opacity-70 transition-transform duration-200 group-hover:rotate-180"
                        strokeWidth={2}
                      />
                    )}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-primary-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {item.dropdown && (
                    <div className="invisible absolute left-0 top-full z-20 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="w-56 rounded-2xl border border-neutral-100 bg-white p-2.5 shadow-lg shadow-neutral-900/10">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            title={sub.label}
                            className="block rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-primary-50 hover:text-neutral-900 truncate"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden btn btn-primary btn-shine lg:flex"
          >
            Get a quote
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-teal-900 lg:hidden"
          >
            <Menu
              className={`absolute h-6 w-6 transition-all duration-300 ${
                mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              className={`absolute h-6 w-6 transition-all duration-300 ${
                mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </button>
        </nav>

        {/* Mobile menu — smooth height animation via grid-rows trick, no JS measuring */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            mobileOpen
              ? "mt-3 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className={`rounded-3xl bg-white ${scrolled ? "" : "p-4"}`}>
              <ul className="flex flex-col divide-y divide-neutral-100">
                {NAV_ITEMS.map((item) => {
                  const isActive = isItemActive(item);

                  return (
                    <li key={item.label} className="py-1">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!item.dropdown) setMobileOpen(false);
                          }}
                          className={`flex-1 py-3 text-left text-[16px] font-semibold ${
                            isActive ? "text-primary-600" : "text-teal-900"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.label} submenu`}
                            onClick={() =>
                              setMobileSubOpen((cur) =>
                                cur === item.label ? null : item.label,
                              )
                            }
                            className="p-3"
                          >
                            <ChevronDown
                              className={`h-5 w-5 text-teal-900/70 transition-transform duration-300 ${
                                mobileSubOpen === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                      {item.dropdown && (
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            mobileSubOpen === item.label
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-1 flex flex-col gap-1 border-l-2 border-neutral-100 pb-2 pl-4">
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  className="block rounded-lg px-3.5 py-2.5 text-[15px] font-medium text-neutral-600 transition-colors hover:bg-primary-50 hover:text-neutral-900"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="py-4">
                <Link href="/contact" className="btn btn-primary w-full">
                  Get a quote
                  <ChevronsRight className="h-4.5 w-4.5" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
