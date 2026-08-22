"use client";
import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Minus,
  Mail,
  PhoneCall,
  ArrowUpRight,
} from "lucide-react";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";

const CATEGORIES = [
  {
    id: "general",
    label: "General",
    items: [
      {
        q: "What does Savior Renewable Energy provide?",
        a: "Savior Renewable Energy Pvt. Ltd. provides complete solar energy solutions for homes, housing societies, commercial properties and industries across Gujarat. Our services include consultation, system design, solar panels, inverters, batteries, installation, maintenance, applicable government-benefit assistance and after-sales support.",
      },
      {
        q: "Is solar energy suitable for my property?",
        a: "Solar can be suitable for most residential, commercial and industrial properties with adequate installation space and suitable electrical infrastructure. Savior evaluates your electricity consumption, available area, shading, roof conditions and requirements before recommending a system.",
      },
      {
        q: "How does a solar panel system generate electricity?",
        a: "Solar panels convert sunlight into DC electricity through photovoltaic cells. A solar inverter converts this electricity into AC power that can be used by your appliances, business equipment or industrial loads. Depending on the system type, surplus electricity can be exported to the grid or stored in batteries.",
      },
      {
        q: "How do I know what size solar system I need?",
        a: "The right solar capacity depends on your electricity consumption, available installation area, desired energy offset, shading and other site conditions. Savior can review your electricity bills and property requirements to recommend a suitable system size.",
      },
      {
        q: "How long does a solar system typically last?",
        a: "Solar systems are designed for long-term operation. Panels, inverters, batteries and other components have different expected service lives and warranty periods depending on the manufacturer and model. Proper installation and regular maintenance can help maintain reliable performance.",
      },
    ],
  },

  {
    id: "systems",
    label: "Solar Systems",
    items: [
      {
        q: "What types of solar systems does Savior provide?",
        a: "Savior provides on-grid, off-grid and hybrid solar systems. The appropriate option depends on your electricity requirements, need for backup power, grid availability, property type and budget.",
      },
      {
        q: "What is the difference between on-grid, off-grid and hybrid solar?",
        a: "An on-grid system works with the electricity grid and can export eligible surplus power. An off-grid system operates independently and generally uses batteries for energy storage. A hybrid system combines solar, grid connectivity and battery storage for greater flexibility and backup.",
      },
      {
        q: "Do I need a battery with my solar system?",
        a: "Not necessarily. Many on-grid systems operate without batteries. Battery storage is generally useful when you need backup power, want to store solar energy for later use or require an off-grid or hybrid system.",
      },
      {
        q: "Can I choose the panels, inverter and battery for my system?",
        a: "Yes, subject to availability and technical compatibility. Savior can help you compare suitable panels, inverters, batteries and other components based on your requirements, preferred brands, performance expectations and budget.",
      },
      {
        q: "Can Savior customize a solar system according to my requirements?",
        a: "Yes. Savior designs solar systems according to electricity consumption, property type, available space, system type, backup requirements, preferred components and budget rather than using the same configuration for every customer.",
      },
    ],
  },

  {
    id: "brands",
    label: "Brands & Products",
    items: [
      {
        q: "Which solar brands does Savior Renewable Energy provide?",
        a: "Savior works with established solar brands and can provide products from manufacturers such as Waaree, Tata Power Solar, Adani Solar, Premier Energies and other suitable brands, subject to current availability and project requirements.",
      },
      {
        q: "Can I choose my preferred solar panel brand?",
        a: "Yes, where the requested brand and model are available and technically suitable for your project. Savior can also recommend alternatives based on specifications, warranty, availability, system compatibility and budget.",
      },
      {
        q: "Which solar inverter brands are available?",
        a: "Savior provides inverter options from established manufacturers based on current availability and project requirements. The suitable inverter depends on system capacity, panel configuration, battery requirements and the overall electrical design.",
      },
      {
        q: "Does Savior provide solar batteries?",
        a: "Yes. Battery storage can be included in suitable solar configurations for customers who require backup power, energy storage or off-grid and hybrid systems.",
      },
      {
        q: "What is included in a complete solar kit?",
        a: "A complete solar solution can include panels, inverter, battery where required, mounting structure, electrical protection, wiring, monitoring equipment and other necessary components. The exact configuration depends on the selected system and project requirements.",
      },
    ],
  },

  {
    id: "services",
    label: "Services",
    items: [
      {
        q: "What solar services does Savior provide?",
        a: "Savior provides complete solar services including consultation, site assessment, system design, equipment supply, installation, applicable government-benefit assistance, maintenance, repairs and after-sales support.",
      },
      {
        q: "Does Savior provide solar installation?",
        a: "Yes. Savior provides complete solar installation according to the agreed project scope, including mounting, electrical work, equipment installation, testing and system handover.",
      },
      {
        q: "Does Savior provide solar maintenance and repair?",
        a: "Yes. Savior provides maintenance and applicable repair services to help customers maintain reliable system performance after installation. Services can include inspection, cleaning, troubleshooting and equipment-related support.",
      },
      {
        q: "Does Savior provide solar solutions for homes, societies and businesses?",
        a: "Yes. Savior provides customized solutions for residential properties, housing societies, commercial properties, businesses and industrial facilities.",
      },
      {
        q: "Does Savior provide solar solutions for factories and industries?",
        a: "Yes. Savior works with industrial customers and can design solar systems according to factory electricity consumption, available installation area, electrical infrastructure and project requirements.",
      },
      {
        q: "Does Savior provide after-sales support?",
        a: "Yes. Savior provides applicable after-sales support including troubleshooting, maintenance and assistance with equipment warranty-related matters after installation.",
      },
    ],
  },

  {
    id: "price",
    label: "Price & Savings",
    items: [
      {
        q: "How much does a solar system cost in Gujarat?",
        a: "Solar system cost depends on system capacity, panel and inverter selection, battery requirements, mounting structure, electrical work, installation conditions and other project-specific factors. Savior provides customized quotations based on your actual requirements.",
      },
      {
        q: "Can I choose a solar system according to my budget?",
        a: "Yes. Savior can discuss different system configurations and component options to help match the solution to your electricity requirements and budget while maintaining a suitable technical design.",
      },
      {
        q: "How much can I save with a solar system?",
        a: "Potential savings depend on system capacity, electricity consumption, tariff, solar generation, system type and applicable utility arrangements. Savior can provide an estimated savings calculation based on your electricity usage and proposed system.",
      },
      {
        q: "Does Savior provide EMI or financing options?",
        a: "Savior can help customers understand available EMI or financing options where offered. Availability and terms depend on the current financing program, lender conditions and customer eligibility.",
      },
      {
        q: "Can I get a customized solar quotation?",
        a: "Yes. Savior prepares project-specific quotations based on electricity consumption, property conditions, system configuration, selected components and customer requirements.",
      },
    ],
  },

  {
    id: "subsidy",
    label: "Subsidy & Support",
    items: [
      {
        q: "Is solar subsidy available in Gujarat?",
        a: "Eligible customers may be able to receive benefits under applicable government rooftop solar schemes. Eligibility, subsidy amounts and procedures can change, so the current applicable scheme should be confirmed before installation.",
      },
      {
        q: "Does Savior help with solar subsidy?",
        a: "Yes. Savior can assist eligible customers with applicable government-benefit procedures and related documentation according to the current scheme requirements.",
      },
      {
        q: "What is PM Surya Ghar Yojana?",
        a: "PM Surya Ghar is a Government of India initiative supporting eligible residential consumers in adopting rooftop solar. Eligibility, subsidy amounts and application procedures are subject to the prevailing government guidelines.",
      },
      {
        q: "Does Savior help with net metering?",
        a: "Yes. Savior can assist customers with applicable net-metering procedures and documentation according to the project scope and prevailing utility requirements.",
      },
      {
        q: "Can I get solar financing along with government benefits?",
        a: "Financing and government benefits are subject to separate eligibility and program conditions. Whether they can be combined depends on the applicable scheme and financing arrangement at the time of installation.",
      },
    ],
  },

  {
    id: "process",
    label: "Process & Support",
    items: [
      {
        q: "How do I get started with Savior Renewable Energy?",
        a: "You can start by sharing your electricity bill, property details and solar requirements. Savior can then understand your needs, assess the site where required, recommend a suitable system and prepare a customized quotation.",
      },
      {
        q: "What information do I need to get a solar quote?",
        a: "Your recent electricity bill, property type, location, approximate electricity consumption, available roof area and backup requirements can help the team prepare a more suitable initial recommendation.",
      },
      {
        q: "What happens after I accept the solar quotation?",
        a: "Once the system configuration and project scope are finalized, the project can proceed through applicable documentation, approvals, equipment procurement, installation, testing and system handover.",
      },
      {
        q: "Does Savior provide solar services across Gujarat?",
        a: "Yes. Savior Renewable Energy is based in Gandhinagar and provides solar solutions across Gujarat, including residential, housing society, commercial and industrial projects, subject to project requirements and service availability.",
      },
      {
        q: "How can I request a customized solar solution?",
        a: "Contact Savior with your electricity bill and basic property details. Our team can understand your requirements, recommend suitable system options and guide you through the quotation and installation process.",
      },
      {
        q: "Why should I choose Savior Renewable Energy?",
        a: "Savior offers a complete solar solution approach, from consultation and customized system design to equipment supply, installation, applicable government-benefit assistance, maintenance and after-sales support. Customers can also evaluate multiple established brands and system configurations based on their requirements.",
      },
    ],
  },
];


const FaqRow = ({ item, isOpen, onToggle, tag }) => (
  <div
    className={`group border-b border-[#E4E7EC] last:border-b-0 ${
      isOpen ? "bg-[#FBF9F4]" : "bg-white hover:bg-[#FAFAFB]"
    } transition-colors`}
  >
    <button
      onClick={onToggle}
      className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:px-7"
      aria-expanded={isOpen}
    >
      <div className="flex flex-col gap-1.5">
        {tag && (
          <span className="w-fit rounded-full bg-[#0B1220]/[0.04] px-2.5 py-0.5  text-[11px] font-medium uppercase tracking-wide text-[#475467]">
            {tag}
          </span>
        )}
        <span className=" text-[15px] font-medium leading-snug text-[#101828] sm:text-base">
          {item.q}
        </span>
      </div>
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
          isOpen
            ? "border-primary-500 bg-primary-500 text-white"
            : "border-[#E4E7EC] bg-white text-[#475467] group-hover:border-primary-500/50"
        }`}
      >
        {isOpen ? (
          <Minus className="h-3.5 w-3.5" />
        ) : (
          <Plus className="h-3.5 w-3.5" />
        )}
      </span>
    </button>
    <div
      className={`grid transition-all duration-300 ease-out ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <p className="px-5 pb-6  text-[14px] leading-relaxed text-[#475467] sm:px-7 sm:pr-16">
          {item.a}
        </p>
      </div>
    </div>
  </div>
);

const FaqsPage = () => {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const [openKeys, setOpenKeys] = useState(
    () => new Set([`${CATEGORIES[0].id}-0`]),
  );
  const [query, setQuery] = useState("");

  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const activeCategory = CATEGORIES.find((c) => c.id === activeId);

  const searchResults = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.trim().toLowerCase();
    const results = [];
    CATEGORIES.forEach((cat) => {
      cat.items.forEach((item, idx) => {
        if (
          item.q.toLowerCase().includes(q) ||
          item.a.toLowerCase().includes(q)
        ) {
          results.push({ item, key: `${cat.id}-${idx}`, tag: cat.label });
        }
      });
    });
    return results;
  }, [query]);

  return (
    <div>
      <PageHeader title={"Help Center"} />
      <PageWrapper>
        <div className="mx-auto  max-w-md mb-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search for a topic, e.g. battery, warranty, savings"
              className="w-full rounded-xl border border-[#E4E7EC] bg-[#F6F7F9] py-3 pl-11 pr-4  text-sm text-[#101828] placeholder:text-[#98A2B3] focus:border-primary-500 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
            />
          </div>
        </div>

        {/* Body */}
        <div>
          {searchResults ? (
            <div>
              <p className="mb-5  text-sm text-[#475467]">
                {searchResults.length} result
                {searchResults.length !== 1 ? "s" : ""} for
                <span className="font-medium text-[#101828]"> "{query}"</span>
              </p>
              {searchResults.length > 0 ? (
                <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  {searchResults.map(({ item, key, tag }) => (
                    <FaqRow
                      key={key}
                      item={item}
                      tag={tag}
                      isOpen={openKeys.has(key)}
                      onToggle={() => toggle(key)}
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-[#E4E7EC] bg-white px-6 py-14 text-center">
                  <p className=" text-base font-medium text-[#101828]">
                    No matches yet
                  </p>
                  <p className="mt-1  text-sm text-[#475467]">
                    Try a different word, or reach out and our team will get you
                    an answer.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-10">
              {/* Sidebar */}
              <nav className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
                {CATEGORIES.map((cat) => {
                  const isActive = cat.id === activeId;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveId(cat.id)}
                      className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-left  text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 md:w-full ${
                        isActive
                          ? "bg-primary-500 text-white"
                          : "text-[#475467] hover:bg-white hover:text-[#101828]"
                      }`}
                    >
                      {cat.label}
                      <span
                        className={`ml-auto rounded-full px-1.5 py-0.5 text-[11px] ${
                          isActive
                            ? "bg-white/15 text-white"
                            : "bg-[#0B1220]/[0.05] text-[#98A2B3]"
                        }`}
                      >
                        {cat.items.length}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* FAQ list */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <h2 className=" text-lg font-semibold text-[#101828]">
                    {activeCategory.label}
                  </h2>
                </div>
                <div className="overflow-hidden rounded-2xl border border-[#E4E7EC] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
                  {activeCategory.items.map((item, idx) => {
                    const key = `${activeCategory.id}-${idx}`;
                    return (
                      <FaqRow
                        key={key}
                        item={item}
                        isOpen={openKeys.has(key)}
                        onToggle={() => toggle(key)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-primary-500 px-8 py-10 sm:px-10">
            
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className=" text-xl font-semibold text-white">
                  Still have questions?
                </p>
                <p className="mt- text-sm leading-relaxed text-white/60">
                  Talk to a solar advisor about your roof, your bill, and what a
                  system would actually look like for your home.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary-500 px-5 py-3  text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]">
                  <PhoneCall className="h-4 w-4" />
                  Talk to an advisor
                  <ArrowUpRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3  text-sm font-semibold text-white transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                  <Mail className="h-4 w-4" />
                  Email support
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default FaqsPage;
