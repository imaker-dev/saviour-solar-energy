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

      <ContactSection />

      <PageWrapper>
        <div className=" relative overflow-hidden bg-gray-100 border border-gray-100 min-h-[340px] lg:min-h-0">
          {/* Map embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5842719726197!2d72.6193187!3d23.1853685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bc02ffc0d29%3A0x5f563d37810cb33c!2sSavior%20Solar%20Energy!5e0!3m2!1sen!2sin!4v1776510641599!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              minHeight: "500px",
              display: "block",
              filter: "grayscale(20%) contrast(1.02)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </PageWrapper>
    </>
  );
}
