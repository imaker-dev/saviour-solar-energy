"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import PageWrapper from "../page-wrapper";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Navbar Header - Sticky */}
      <PageWrapper
        as="header"
        paddingY="py-0"
        className="w-full sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "white",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #F0EEE9" : "1px solid #F5F4F0",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            style={{ textDecoration: "none" }}
          >
            <img src="/Images/logo.png" alt="" className="w-20 " />
          </Link>

          {/* Desktop Nav */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label,
                      )
                    }
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-[14.5px] font-normal text-[#555] bg-transparent border-none cursor-pointer  tracking-[-0.1px]"
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ease ${openDropdown === link.label ? "rotate-180" : ""}`}
                      style={{ opacity: 0.5, marginTop: 1 }}
                    />
                  </button>
                  <div
                    className={`
                      absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 
                      transition-all duration-200 ease-out
                      min-w-[160px] bg-white border border-[#F0EEE9] rounded-[14px] 
                      shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] 
                      overflow-hidden z-[100]
                      ${openDropdown === link.label ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1.5"}
                    `}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="flex items-center justify-between px-4 py-2.5 text-[13.5px] text-[#555] no-underline transition-all duration-150 hover:bg-[#FFF8EE] hover:text-[#F5A623] group/dropdown"
                      >
                        {child.label}
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition-all duration-150 group-hover/dropdown:opacity-100 group-hover/dropdown:translate-x-0.5 group-hover/dropdown:-translate-y-0.5"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    relative px-3 py-2 rounded-lg text-[14.5px] no-underline tracking-[-0.1px] transition-colors duration-150
                    after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:right-1/2 after:h-[2px] after:bg-[#F5A623] after:rounded-full 
                    after:transition-[left,right] after:duration-250 after:ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:after:left-0 hover:after:right-0
                    ${
                      pathname === link.href
                        ? "after:left-0 after:right-0 text-[#1A1A1A] font-medium"
                        : "text-[#555] font-normal"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Right side — CTA + Hamburger */}
          <div className="flex items-center gap-3">

            <Link href="#" className="btn btn-primary btn-shine hidden lg:flex">
              <Mail size={14} strokeWidth={2.2} />
              Get a Quote
            </Link>
            {/* Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 bg-[#F7F6F2] border-none cursor-pointer relative"
              style={{ color: mobileOpen ? "#F5A623" : "#555" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div
                className="absolute transition-all duration-300 ease"
                style={{
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                <Menu size={19} />
              </div>
              <div
                className="absolute transition-all duration-300 ease"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "rotate(0deg)" : "rotate(-90deg)",
                }}
              >
                <X size={19} />
              </div>
            </button>
          </div>
        </div>
      </PageWrapper>

      {/* Mobile Menu Overlay - Fixed: Positioned absolutely, doesn't push content */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
          style={{ top: "70px" }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute left-0 right-0 bg-white shadow-xl overflow-y-auto max-h-[calc(100vh-70px)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 pb-6 pt-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`
                        flex-1 block py-3 text-[15px] no-underline  tracking-[-0.2px] transition-all duration-150
                        ${
                          pathname === link.href
                            ? "text-[#F5A623] font-medium"
                            : "text-[#333] font-normal"
                        }
                        hover:text-[#F5A623] hover:pl-1.5
                      `}
                      onClick={
                        link.hasDropdown
                          ? (e) => e.preventDefault()
                          : () => setMobileOpen(false)
                      }
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ease text-[#999] ${openDropdown === link.label ? "rotate-180" : ""}`}
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label,
                          )
                        }
                      />
                    )}
                  </div>

                  {link.hasDropdown && (
                    <div
                      className={`
                        overflow-hidden transition-all duration-250 ease
                        ${openDropdown === link.label ? "max-h-[200px]" : "max-h-0"}
                      `}
                    >
                      <div className="pl-3 pb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-[13.5px] text-[#777] no-underline  transition-all duration-150 hover:text-[#F5A623] hover:pl-1.5"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="h-px bg-[#F5F4F0]" />
                </div>
              ))}

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 bg-primary-500 text-white text-[14px] font-medium px-5 py-2.5 no-underline  tracking-[-0.1px] mt-4 relative overflow-hidden transition-all duration-200 hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(245,166,35,0.35)] active:translate-y-0 active:shadow-none before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[60%] before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-[left] before:duration-500 before:ease hover:before:left-[150%]"
                onClick={() => setMobileOpen(false)}
              >
                <Mail size={14} strokeWidth={2.2} />
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
