import PageWrapper from "@/app/components/page-wrapper";
import { Phone, Mail, MapPin, ArrowUpRight, Clock } from "lucide-react";
import PageHeader from "../../components/page-header";
import SectionHeader from "../../components/section-header";
import { SITE_CONFIG } from "../../const";
import ContactSection from "../../views/home/components/contact-section";
const contacts = [
  {
    icon: Phone,
    label: "Phone",
    values: [SITE_CONFIG.contact.phone],
    href: `tel:${SITE_CONFIG.contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    values: [SITE_CONFIG.contact.email],
    href: `mailto:${SITE_CONFIG.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    values: [SITE_CONFIG.address.full],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    values: ["Mon - Sat, 9am - 8pm"],
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title={"Contact Us"} />

      <PageWrapper className="bg-white">
        {/* ── Header ── */}
        <SectionHeader
          badge={"Contact Us"}
          title={`Let's start a conversation`}
          description={
            " Our team typically responds within 2 hours on working days."
          }
        />

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {contacts.map(({ icon: Icon, label, values, href }) => (
            <a
              key={label}
              href={href ?? undefined}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group bg-white flex flex-col gap-3 p-6 transition-colors duration-150 ${href ? "hover:bg-gray-50 cursor-pointer" : "cursor-default"}`}
            >
              {/* Icon */}
              <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-amber-300 group-hover:bg-amber-50 transition-colors duration-150">
                <Icon
                  size={15}
                  className="text-gray-400 group-hover:text-amber-500 transition-colors duration-150"
                />
              </div>

              {/* Label */}
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.13em]">
                {label}
              </p>

              {/* Values */}
              <div className="flex flex-col gap-0.5">
                {values.map((v, i) => (
                  <p
                    key={i}
                    className={`leading-snug ${i === 0 ? "text-[13.5px] font-semibold text-gray-950" : "text-[12px] text-gray-400"}`}
                  >
                    {v}
                  </p>
                ))}
              </div>
            </a>
          ))}
        </div>

        <ContactSection />

        <div className=" relative overflow-hidden bg-gray-100 border border-gray-100 min-h-[340px] lg:min-h-0">
          {/* Map embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5842719726197!2d72.6193187!3d23.1853685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bc02ffc0d29%3A0x5f563d37810cb33c!2sSavior%20Solar%20Energy!5e0!3m2!1sen!2sin!4v1776510641599!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              minHeight: "400px",
              display: "block",
              filter: "grayscale(20%) contrast(1.02)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Address overlay chip */}
          <div className="absolute bottom-5 left-5 bg-white border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <MapPin size={13} className="text-amber-500" />
            </div>
            <div>
              <p className="text-[12px] font-semibold text-gray-950 leading-snug">
                Solar House, SG Highway
              </p>
              <p className="text-[11px] text-gray-400">Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>

        {/* ── Bottom strip ── */}
      </PageWrapper>
    </>
  );
}
