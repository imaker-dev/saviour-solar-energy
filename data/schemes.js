export const schemes = [
{
  id: "solar-subsidy",
  category: "government-subsidy",

  seo: {
    title: "Solar Subsidy | Get Up to ₹78,000 on Rooftop Solar",
    description:
      "Learn about PM Surya Ghar rooftop solar subsidy benefits, eligibility, subsidy amounts by system size, application process, and how to receive up to ₹78,000 in central financial assistance.",
    keywords: [
      "solar subsidy",
      "rooftop solar subsidy",
      "PM Surya Ghar subsidy",
      "PM Surya Ghar Muft Bijli Yojana",
      "solar subsidy India",
      "government solar subsidy",
      "rooftop solar subsidy India",
      "solar panel subsidy",
      "solar installation subsidy",
      "residential solar subsidy",
      "home solar subsidy",
      "3 kW solar subsidy",
      "₹78000 solar subsidy",
      "solar financial assistance",
      "government subsidy for solar panels",
    ],
  },

  listing: {
    label: "Solar Subsidy",
    summary:
      "Central financial assistance that can cover up to ₹78,000 of a residential rooftop solar system.",
  },

  hero: {
    eyebrow: "Solar Subsidy · PM Surya Ghar",

    title: {
      prefix: "Get up to",
      highlight: "₹78,000",
      suffix: "back on rooftop solar",
    },

    description:
      "The central government covers part of the cost of a residential rooftop solar system. Check if you're eligible, apply through the national portal, and get the subsidy after installation is verified.",

    // Real photo of an installed residential rooftop system — replace src with
    // an actual asset before shipping. Keeps the hero from feeling abstract.
    image: {
      src: "/Images/Schemes/solar-subsidy-hero.webp",
      alt: "Rooftop solar panels installed on an Indian residential home",
    },

    // Single CTA — the old page pointed two buttons at the same URL, which
    // is confusing. Secondary CTA now jumps to the eligibility section instead.
    actions: {
      primary: {
        label: "Apply for Subsidy",
        href: "https://pmsuryaghar.gov.in/",
        external: true,
      },
      secondary: {
        label: "Check Eligibility",
        href: "#eligibility",
        external: false,
      },
    },

    benefits: {
      title: "What you get",
      items: [
        "Central financial assistance up to ₹78,000",
        "Lower monthly electricity bills",
        "Surplus power can be exported to the grid (subject to your DISCOM's rules)",
      ],
    },

    highlights: [
      { value: "₹78K", label: "Max central subsidy" },
      { value: "3 kW", label: "Subsidy cap" },
      { value: "1 Cr", label: "Households targeted" },
    ],
  },

  // NEW — the single most-asked question on a subsidy page ("do I qualify?")
  // had no answer anywhere on the old page.
  eligibility: {
    title: "Who's eligible",
    items: [
      "You own the residential property where the system will be installed",
      "The property has an active, valid electricity connection",
      "No rooftop solar subsidy has been claimed on this connection before",
      "Your roof has enough shadow-free space for the system size you want",
    ],
  },

  details: {
    title: "Subsidy by system size",
    caption: "Central Financial Assistance · PM Surya Ghar",
    // 3 kW+ is the headline number from the hero — the UI should default to
    // showing this card active, not the smallest one.
    defaultActive: "3 kW+",

    columns: [
      {
        label: "System Size",
        value: "1 kW",
        metric: { label: "Central subsidy", value: "₹30,000" },
        note: "₹30,000 per kW for the first 2 kW",
      },
      {
        label: "System Size",
        value: "2 kW",
        metric: { label: "Central subsidy", value: "₹60,000" },
        note: "₹30,000 per kW for the first 2 kW",
      },
      {
        label: "System Size",
        value: "3 kW+",
        metric: { label: "Central subsidy", value: "₹78,000" },
        note: "₹18,000 for the extra 1 kW between 2–3 kW",
      },
    ],

    // Promoted out of a footnote into a visible callout — this is the detail
    // people most often miss and then get confused about later.
    capNotice:
      "₹78,000 is the maximum. Systems larger than 3 kW don't receive extra central subsidy beyond this cap.",
  },

  process: {
    title: "How it works",
    steps: [
      {
        title: "Register",
        body: "Register on the PM Surya Ghar portal using your electricity connection details.",
      },
      {
        title: "Choose a vendor",
        body: "Pick an eligible vendor and decide the system size for your home.",
      },
      {
        title: "Install",
        body: "The vendor installs the system and completes DISCOM net-metering.",
      },
      {
        title: "Receive subsidy",
        body: "Once installation is verified, the subsidy is credited to your account — this typically takes a few weeks, but timing depends on your DISCOM.",
      },
    ],
  },

  // NEW — short, essential FAQ. Kept to the questions that actually block
  // someone from applying; not padded with marketing copy.
  faq: [
    {
      question: "Does this cover rented or commercial properties?",
      answer:
        "No — this subsidy is for residential properties that the applicant owns.",
    },
    {
      question: "Can I get a state subsidy on top of this?",
      answer:
        "Some states offer additional subsidies alongside the central one. Check your state's renewable energy department for local schemes.",
    },
    {
      question: "What if I install a system larger than 3 kW?",
      answer:
        "You can, but the central subsidy stays capped at ₹78,000 — it does not increase past 3 kW.",
    },
    {
      question: "How long does the subsidy take to arrive?",
      answer:
        "It's credited after installation and DISCOM verification are complete, generally within a few weeks. Exact timing varies by DISCOM.",
    },
  ],
},

{
  id: "solar-financing",
  category: "solar-financing",

  seo: {
    title: "Solar Financing & Loans | Collateral-Free Rooftop Solar Loans",
    description:
      "Explore financing options for residential rooftop solar under PM Surya Ghar. Learn about collateral-free solar loans, concessional interest rates, repayment tenure, eligibility, and the application process.",
    keywords: [
      "solar financing",
      "solar loan",
      "rooftop solar loan",
      "solar loan India",
      "solar financing India",
      "PM Surya Ghar loan",
      "PM Surya Ghar financing",
      "collateral free solar loan",
      "solar panel loan",
      "solar installation loan",
      "home solar loan",
      "residential solar loan",
      "rooftop solar financing",
      "government solar loan",
      "solar loan interest rate",
      "solar loan 5.75 percent",
    ],
  },

  listing: {
    label: "Solar Financing",
    summary:
      "Collateral-free financing for eligible residential rooftop solar systems through participating banks.",
  },

  hero: {
    eyebrow: "Solar Financing · PM Surya Ghar",

    title: {
      prefix: "Collateral-free loans from",
      highlight: "5.75%",
      suffix: "p.a. for systems up to 3 kW",
    },

    description:
      "Eligible households can get collateral-free financing for residential rooftop solar through participating nationalized banks — currently 5.75% p.a., linked to the repo rate, with up to 10 years to repay.",

    // Real photo slot — replace src with an actual asset before shipping.
    image: {
      src: "/Images/Schemes/solar-financing-hero.webp",
      alt: "Homeowner reviewing a rooftop solar loan application on a laptop",
    },

    // Single CTA — secondary now jumps to eligibility instead of duplicating
    // the primary's destination.
    actions: {
      primary: {
        label: "Explore Solar Loan",
        href: "https://www.jansamarth.in/",
        external: true,
      },
      secondary: {
        label: "Check Eligibility",
        href: "#eligibility",
        external: false,
      },
    },

    benefits: {
      title: "What you get",
      items: [
        "Collateral-free financing for eligible systems up to 3 kW",
        "Concessional interest rate, currently 5.75% p.a.",
        "Up to 10 years to repay",
      ],
    },

    highlights: [
      { value: "5.75%", label: "Current concessional rate" },
      { value: "10 Yrs", label: "Maximum tenure" },
      { value: "3 kW", label: "Eligible system size" },
    ],
  },

  // NEW — same gap as the subsidy page: nothing told the user whether they
  // could actually get this loan.
  eligibility: {
    title: "Who's eligible",
    items: [
      "You're a residential applicant installing a system up to 3 kW",
      "You've registered your installation through the PM Surya Ghar portal",
      "You meet the participating bank's standard KYC and credit checks",
      "The loan is taken through a participating nationalized bank or approved digital lending channel",
    ],
  },

  details: {
    title: "Financing terms",
    caption: "Current PM Surya Ghar financing provision",
    defaultActive: "Up to 3 kW",

    columns: [
      {
        label: "System Size",
        value: "Up to 3 kW",
        metric: { label: "Loan type", value: "Collateral-free" },
        note: "Concessional rate currently 5.75% p.a.",
      },
      {
        label: "Repayment",
        value: "Up to 10 Yrs",
        metric: { label: "Current rate", value: "5.75% p.a." },
        note: "Rate is linked to the repo rate + 50 bps",
      },
    ],

    // Promoted out of the footnote — the rate is variable and time-stamped,
    // which is easy to miss as small print but matters a lot to a borrower.
    capNotice:
      "5.75% p.a. was the rate at the July 2026 announcement and moves with the repo rate. Confirm the current rate and exact terms with your bank before applying.",
  },

  process: {
    title: "How it works",
    steps: [
      {
        title: "Register",
        body: "Start your rooftop solar application on the PM Surya Ghar portal.",
      },
      {
        title: "Choose financing",
        body: "Apply through a participating bank or approved digital lending channel.",
      },
      {
        title: "Get approved",
        body: "The lender sets your loan amount, rate and repayment terms.",
      },
      {
        title: "Install & repay",
        body: "Proceed with installation and repay according to the lender's schedule.",
      },
    ],
  },

  // NEW — essential questions only; nothing that just restates the hero.
  faq: [
    {
      question: "Do I need collateral or a guarantor?",
      answer:
        "No — eligible systems up to 3 kW qualify for collateral-free financing from participating banks.",
    },
    {
      question: "Does the loan cover the full installation cost?",
      answer:
        "It's meant to help cover the cost that remains after your subsidy is applied — check with your bank on the exact loan amount they'll offer.",
    },
    {
      question: "Will 5.75% p.a. stay the same for my whole loan?",
      answer:
        "The rate is linked to the repo rate, so it can change over time. Confirm the current rate and how it's applied with your bank.",
    },
    {
      question: "Can I apply through any bank?",
      answer:
        "Only through participating nationalized banks or the approved digital lending channel — not every bank offers this scheme.",
    },
  ],
}
];

export function getAllSchemes() {
  return schemes;
}

export function getSchemeById(id) {
  return schemes.find((scheme) => scheme.id === id);
}