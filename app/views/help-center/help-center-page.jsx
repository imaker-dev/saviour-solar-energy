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
        q: "How does a solar panel system actually generate electricity?",
        a: "Panels convert sunlight into direct current (DC) electricity through photovoltaic cells. An inverter then changes that DC power into alternating current (AC), the type your home's outlets and appliances use. Any excess production is sent back to the grid or stored in a battery, depending on your setup.",
      },
      {
        q: "How long does a typical residential installation take?",
        a: "Once your design and permits are approved, physical installation usually takes one to three days. The full process, including site assessment, permitting, and utility interconnection, typically runs six to ten weeks from signed agreement to system activation.",
      },
      {
        q: "Will solar panels still work if my roof doesn't face south?",
        a: "Yes. East- and west-facing roofs are common and still produce strong results, generally 10-20% less than a true south-facing array in the northern hemisphere. Our design team models your specific roof angle, shading, and orientation before recommending a layout.",
      },
      {
        q: "What size system do I need for my household?",
        a: "Sizing depends on your annual usage, roof space, and shading. As a starting point, most homes need between 15 and 25 panels to offset the majority of their electricity bill. We calculate an exact figure using twelve months of your utility data.",
      },
    ],
  },
  {
    id: "install",
    label: "Installation & Equipment",
    items: [
      {
        q: "What's the difference between monocrystalline and polycrystalline panels?",
        a: "Monocrystalline panels are cut from a single silicon crystal, giving them higher efficiency and a uniform black appearance in a smaller footprint. Polycrystalline panels use multiple crystal fragments, which lowers cost slightly but requires more roof space for the same output. We install monocrystalline panels as standard.",
      },
      {
        q: "Do I need a battery, or can I stay grid-tied without one?",
        a: "A battery is optional. Grid-tied systems without storage are less expensive and still reduce your bill significantly, but you lose power during an outage. Adding a battery keeps essential circuits running when the grid goes down and lets you use stored solar power in the evening.",
      },
      {
        q: "Can the panels handle hail, high winds, or heavy snow?",
        a: "Our panels are rated for wind loads over 140 mph and impact from one-inch hail at terminal velocity, and they carry a 30-year performance guarantee under normal weather conditions. Racking is engineered to your local building code and snow load requirements.",
      },
      {
        q: "What happens to my roof warranty after installation?",
        a: "Roof penetrations are flashed and sealed using manufacturer-approved methods, and we carry a workmanship warranty covering any roof leak related to our mounting hardware for as long as the system warranty is active. We'll also confirm compatibility with your existing roof warranty before work begins.",
      },
    ],
  },
  {
    id: "financing",
    label: "Savings & Financing",
    items: [
      {
        q: "How much can I expect to save on my electricity bill?",
        a: "Most homeowners offset 70-100% of their current usage, depending on system size and local utility rates. Your proposal includes a year-by-year savings estimate based on your actual billing history and projected utility rate inflation.",
      },
      {
        q: "What financing and incentive options are available?",
        a: "We offer cash purchase, solar loans, and lease or power purchase agreement (PPA) options with no money down. Available incentives vary by state and utility, and may include rebates, performance payments, or net metering credits, all of which we walk through during your proposal.",
      },
      {
        q: "Is the federal solar tax credit still available?",
        a: "A federal residential tax credit is currently in place for qualifying purchased systems, though the percentage and eligibility rules can change with new legislation. Because this affects your net cost, we confirm the current rate with you directly rather than relying on a fixed number here.",
      },
      {
        q: "Do you offer a $0-down lease or PPA option?",
        a: "Yes. With a lease or PPA, you pay either a fixed monthly amount or a per-kilowatt-hour rate for the power your system produces, typically lower than your current utility rate, with no upfront cost and maintenance included for the contract term.",
      },
    ],
  },
  {
    id: "monitoring",
    label: "Maintenance & Monitoring",
    items: [
      {
        q: "How often do solar panels need to be cleaned or serviced?",
        a: "Panels are largely self-cleaning thanks to rain and their tilt angle. Most homeowners never need a professional cleaning; in low-rainfall regions or after heavy pollen or dust, a light rinse once or twice a year is enough to maintain peak output.",
      },
      {
        q: "How do I track my system's energy production?",
        a: "Every install includes access to a monitoring app that shows real-time and historical production, down to the individual panel. You can check daily output, compare it against your usage, and see estimated savings from your phone at any time.",
      },
      {
        q: "What happens to my output on a cloudy day?",
        a: "Panels still produce power in overcast conditions, typically 10-25% of clear-sky output, since they capture diffused as well as direct sunlight. Your system's annual production estimate already accounts for your local weather patterns across all four seasons.",
      },
      {
        q: "Will I be alerted if a panel or inverter stops working?",
        a: "Yes. The monitoring platform flags underperformance automatically and our support team is notified directly, often before you would notice a change in your bill. Most issues are diagnosed remotely, and a technician is dispatched only when a physical repair is needed.",
      },
    ],
  },
  {
    id: "warranty",
    label: "Warranty & Support",
    items: [
      {
        q: "What is covered under the equipment and workmanship warranty?",
        a: "Panels carry a 25-year manufacturer warranty covering both product defects and power output. Inverters are covered for 10-25 years depending on the model. Our workmanship warranty covers installation-related issues, including roof penetrations, for 10 years from activation.",
      },
      {
        q: "How long do solar panels typically last?",
        a: "Panels are built to produce meaningful power for 30 years or more. Manufacturers guarantee at least 85-90% of original output at the 25-year mark, and most systems continue operating well beyond their warranty period with only minor efficiency loss.",
      },
      {
        q: "Who do I contact if something goes wrong after installation?",
        a: "Our support team handles every warranty claim directly, even for equipment made by a third-party manufacturer, so you never have to coordinate between multiple companies. You can reach us through the monitoring app, phone, or email listed below.",
      },
      {
        q: "Can I transfer my warranty if I sell my home?",
        a: "Yes. Both the equipment and workmanship warranties transfer to the new homeowner at no cost. For financed, leased, or PPA systems, the buyer typically needs to qualify to assume the remaining agreement, and our team assists with that transfer during closing.",
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

const HelpCenterPage = () => {
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
          <div className="relative mt-14 overflow-hidden rounded-2xl bg-secondary-500 px-8 py-10 sm:px-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 [background:radial-gradient(circle,#F5A623_0%,transparent_70%)]"
              aria-hidden="true"
            />
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
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-5 py-3  text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]">
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

export default HelpCenterPage;
