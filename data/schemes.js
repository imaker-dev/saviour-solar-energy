export const schemes = [
  {
    id: "solar-subsidy",
    tabLabel: "Solar Subsidy",
    eyebrow: "Solar Subsidy",
    headlinePrefix: "Get up to",
    headlineHighlight: "₹78,000",
    headlineSuffix: "subsidy on rooftop solar",
    summary:
      "Central subsidy credited directly to your account after installation.",
    description:
      "The central government covers a significant portion of your solar installation cost. Apply once — save on electricity for 25 years.",
    primaryCta: {
      label: "Apply for Subsidy",
      href: "https://consumer.pmsuryaghar.gov.in/consumer/#/login",
    },
    secondaryCta: {
      label: "Official Scheme Info",
      href: "https://pmsuryaghar.gov.in/#/",
    },
    perksTitle: "What you get",
    perks: [
      "300 units free electricity per month",
      "Sell surplus units back to the grid",
      "25-year manufacturer warranty",
      "No hidden charges or commissions",
    ],
    stats: [
      { val: "4 Yrs", label: "Avg. payback" },
      { val: "25 Yrs", label: "Panel warranty" },
      { val: "1 Cr+", label: "Homes targeted" },
    ],
    detailsTitle: "Subsidy by system size",
    detailsCaption: "Central Govt. figures · 2025–26",
    detailCards: [
      {
        tag: "System Size",
        tagValue: "1 kW",
        metricLabel: "Govt. subsidy",
        metricValue: "₹30,000",
        note: "Save ~₹1,200 / month on bills",
      },
      {
        tag: "System Size",
        tagValue: "2 kW",
        metricLabel: "Govt. subsidy",
        metricValue: "₹60,000",
        note: "Save ~₹2,400 / month on bills",
      },
      {
        tag: "System Size",
        tagValue: "3 kW",
        metricLabel: "Govt. subsidy",
        metricValue: "₹78,000",
        note: "Save ~₹3,600 / month on bills",
      },
    ],
    detailsFootnote:
      "Systems above 3 kW up to 10 kW receive ₹18,000/kW. Additional state subsidies may apply in Gujarat.",
    stepsTitle: "How it works",
    steps: [
      {
        title: "Register",
        body: "Sign up on the PM Surya Ghar portal using your electricity consumer number.",
      },
      {
        title: "Apply",
        body: "Submit documents online. Choose your installer and panel capacity.",
      },
      {
        title: "Install",
        body: "We complete the rooftop installation with net meter setup.",
      },
      {
        title: "Receive",
        body: "Subsidy is credited directly to your bank account within 30 days.",
      },
    ],
  },
  {
    id: "financing-subsidy",
    tabLabel: "Financing Subsidy",
    eyebrow: "Financing Subsidy",
    headlinePrefix: "Collateral-free loans from",
    headlineHighlight: "6.75%",
    headlineSuffix: "interest, no property paperwork",
    summary:
      "Collateral-free bank loans that cover whatever the subsidy doesn't.",
    description:
      "Public sector banks finance the rest of your system through the same PM Surya Ghar application. No collateral, fast disbursal, and your subsidy is adjusted straight against the loan principal.",
    primaryCta: {
      label: "Apply for a Solar Loan",
      href: "https://www.jansamarth.in/",
    },
    secondaryCta: {
      label: "Official Scheme Info",
      href: "https://pmsuryaghar.gov.in/#/",
    },
    perksTitle: "What you get",
    perks: [
      "Collateral-free loans, up to ₹2,00,000",
      "Rates from 6.75% p.a. — well below personal loan rates",
      "Repayment tenure of up to 10 years",
      "Subsidy auto-adjusts against your loan principal",
    ],
    stats: [
      { val: "6.75%", label: "Starting interest" },
      { val: "10 Yrs", label: "Max tenure" },
      { val: "12 Banks", label: "PSU partners" },
    ],
    detailsTitle: "Loan limits by system size",
    detailsCaption: "PSU bank guidelines · 2025–26",
    detailCards: [
      {
        tag: "System Size",
        tagValue: "Up to 3 kW",
        metricLabel: "Loan up to",
        metricValue: "₹2,00,000",
        note: "Collateral-free · from 6.75% p.a.",
      },
      {
        tag: "System Size",
        tagValue: "3–10 kW",
        metricLabel: "Loan up to",
        metricValue: "₹6,00,000",
        note: "System hypothecated · from 9% p.a.",
      },
    ],
    detailsFootnote:
      "Rates are floating and linked to each bank's benchmark lending rate, so they vary by lender and credit profile. Confirm current pricing with your chosen PSU bank before applying.",
    stepsTitle: "How it works",
    steps: [
      {
        title: "Register",
        body: "Get your installation approved on the PM Surya Ghar portal first.",
      },
      {
        title: "Apply for a loan",
        body: "Pick a PSU bank on the Jan Samarth portal. No income proof needed up to ₹2,00,000.",
      },
      {
        title: "Get disbursed",
        body: "The bank pays your registered installer directly once sanctioned.",
      },
      {
        title: "Repay & adjust",
        body: "Your subsidy is credited and adjusted against the principal, lowering your EMI.",
      },
    ],
  },

];


export function getAllSchemes() {
  return schemes;
}

export function getSchemeById(id) {
  return schemes.find((scheme) => scheme.id === id);
}