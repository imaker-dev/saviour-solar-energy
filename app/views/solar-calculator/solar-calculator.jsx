"use client";

import { useMemo, useState } from "react";
import {
  Zap,
  IndianRupee,
  TrendingDown,
  Clock3,
  Gauge,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";

/* ================================================================== */
/*  ASSUMPTIONS — everything the math depends on lives here, so       */
/*  updating a tariff, a subsidy slab, or a cost benchmark next year   */
/*  means editing one constant, not hunting through JSX.               */
/* ================================================================== */

// Gujarat DISCOM (UGVCL/DGVCL/MGVCL/PGVCL) urban domestic telescopic
// slabs — approximate, GERC tariff order. Each slab's rate applies
// only to units inside that band.
const TARIFF_SLABS = [
  { upto: 50, rate: 3.05 },
  { upto: 100, rate: 3.5 },
  { upto: 250, rate: 4.15 },
  { upto: Infinity, rate: 5.2 },
];
const FIXED_CHARGE = 90; // ₹/month
const DUTY_RATE = 0.15; // electricity duty on (energy + fixed)

// Generation & cost benchmarks
const UNITS_PER_KW_PER_DAY = 4; // conservative avg. yield for Gujarat's sun hours
const COST_PER_KW = 60000; // ₹, indicative installed cost before subsidy
const DAYS_PER_MONTH = 30;

const SLIDER_MIN = 500;
const SLIDER_MAX = 15000;

// PM Surya Ghar subsidy — ₹30,000/kW for the first 2 kW, ₹18,000 for
// the 3rd kW, capped at ₹78,000 for individual homes.
function subsidyFor(systemKw) {
  const first2 = Math.min(systemKw, 2) * 30000;
  const third = Math.max(0, Math.min(systemKw, 3) - 2) * 18000;
  return Math.min(first2 + third, 78000);
}

// Bill for a given number of monthly units, walking the telescopic slabs.
function billForUnits(units) {
  let energyCharge = 0;
  let remaining = units;
  let bandFloor = 0;
  for (const slab of TARIFF_SLABS) {
    const bandUnits = Math.max(0, Math.min(remaining, slab.upto - bandFloor));
    energyCharge += bandUnits * slab.rate;
    remaining -= bandUnits;
    bandFloor = slab.upto;
    if (remaining <= 0) break;
  }
  const subtotal = energyCharge + FIXED_CHARGE;
  return subtotal + subtotal * DUTY_RATE;
}

// Invert bill → units via binary search (billForUnits is monotonic).
function unitsForBill(bill) {
  const minBill = FIXED_CHARGE * (1 + DUTY_RATE);
  if (bill <= minBill) return 0;
  let lo = 0;
  let hi = 3000;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (billForUnits(mid) < bill) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

const inr = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;
const formatDigits = (raw) => {
  const digits = raw.replace(/[^0-9]/g, "");
  return digits ? Number(digits).toLocaleString("en-IN") : "";
};

const PRESETS = [1500, 3000, 5000, 8000];

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

export default function SolarCalculator() {
  // Empty by default — the person types or taps a preset.
  const [billInput, setBillInput] = useState("");
  const bill = Number(billInput) || 0;

  const result = useMemo(() => {
    if (bill <= 0) return null;

    const monthlyUnits = unitsForBill(bill);
    const dailyUnits = monthlyUnits / DAYS_PER_MONTH;

    // Recommended system size — round to nearest 0.5 kW, minimum 1 kW.
    const rawKw = dailyUnits / UNITS_PER_KW_PER_DAY;
    const systemKw = Math.max(1, Math.round(rawKw * 2) / 2);

    const systemCost = systemKw * COST_PER_KW;
    const subsidy = subsidyFor(systemKw);
    const netCost = systemCost - subsidy;

    const monthlyGeneration = systemKw * UNITS_PER_KW_PER_DAY * DAYS_PER_MONTH;
    const unitsStillBilled = Math.max(0, monthlyUnits - monthlyGeneration);
    const newMonthlyBill = billForUnits(unitsStillBilled);

    const monthlySavings = Math.max(0, bill - newMonthlyBill);
    const annualSavings = monthlySavings * 12;
    const paybackYears = annualSavings > 0 ? netCost / annualSavings : null;
    const offsetPct = Math.min(
      100,
      Math.round((monthlyGeneration / Math.max(monthlyUnits, 1)) * 100),
    );

    return {
      monthlyUnits,
      systemKw,
      systemCost,
      subsidy,
      netCost,
      monthlySavings,
      annualSavings,
      paybackYears,
      offsetPct,
    };
  }, [bill]);

  return (
    <>
      <PageHeader title="Solar Calculator" />

      <PageWrapper>
        <div className="grid lg:grid-cols-5 gap-5 lg:gap-6 items-start">
          {/* ---------------------------------------------------- */}
          {/* Input panel                                          */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
            <label
              htmlFor="monthly-bill"
              className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3"
            >
              Monthly electricity bill
            </label>

            <div className="relative mb-4">
              <span
                className={`absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold transition-colors ${
                  bill > 0 ? "text-gray-950" : "text-gray-300"
                }`}
              >
                ₹
              </span>
              <input
                id="monthly-bill"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={formatDigits(billInput)}
                onChange={(e) =>
                  setBillInput(e.target.value.replace(/[^0-9]/g, ""))
                }
                placeholder="0"
                className="w-full bg-white rounded-xl border border-gray-200 pl-9 pr-16 py-4 text-2xl sm:text-3xl font-bold text-gray-950 outline-none transition-colors focus:border-primary-500 placeholder:text-gray-300"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                / month
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {PRESETS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setBillInput(String(p))}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    bill === p
                      ? "bg-gray-950 border-gray-950 text-white"
                      : "border-gray-200 text-gray-500 hover:border-gray-300 bg-white"
                  }`}
                >
                  ₹{p.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            <input
              type="range"
              min={0}
              max={SLIDER_MAX}
              step={100}
              value={Math.min(bill, SLIDER_MAX)}
              onChange={(e) => setBillInput(e.target.value)}
              aria-label="Monthly electricity bill slider"
              className="w-full h-1.5 rounded-full accent-primary-500 mb-2 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mb-8">
              <span>₹{SLIDER_MIN.toLocaleString("en-IN")}</span>
              <span>₹{SLIDER_MAX.toLocaleString("en-IN")}+</span>
            </div>

            {/* Evergreen "how it works" — keeps this panel informative      */}
            {/* whether or not a bill has been entered yet.                 */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                How we calculate this
              </p>
              <HowStep
                icon={Gauge}
                text="Your bill is converted to units using Gujarat's actual slab-wise electricity rates."
              />
              <HowStep
                icon={Sparkles}
                text="System size is sized to your daily usage, then rounded to the nearest 0.5 kW."
              />
              <HowStep
                icon={IndianRupee}
                text="Subsidy is applied per the official PM Surya Ghar slabs, up to ₹78,000."
              />
            </div>

            <p className="mt-6 text-xs text-gray-400 leading-relaxed">
              Estimates use indicative Gujarat DISCOM urban domestic tariff
              slabs and an average yield of {UNITS_PER_KW_PER_DAY} units/kW/day.
              Actual results vary by DISCOM, tariff category, roof shading,
              orientation and system design.
            </p>
          </div>

          {/* ---------------------------------------------------- */}
          {/* Results panel                                        */}
          {/* ---------------------------------------------------- */}
          <div className="lg:col-span-3">
            {result ? (
              <div className="flex flex-col gap-4">
                {/* Headline stat */}
                <div className="relative overflow-hidden bg-gray-950 rounded-2xl p-6 sm:p-8">
                  <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-primary-500/10 blur-3xl" />
                  <div className="relative grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Recommended system
                      </p>
                      <p className="text-4xl sm:text-5xl font-bold text-white leading-none">
                        {result.systemKw}
                        <span className="text-xl sm:text-2xl font-semibold text-gray-400">
                          {" "}
                          kW
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                        Covers ~{result.offsetPct}% of your ~
                        {Math.round(result.monthlyUnits)} units/month
                      </p>
                    </div>
                    <div className="text-right border-l border-white/10 pl-6">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Estimated simple payback
                      </p>
                      <p className="text-4xl sm:text-5xl font-bold text-primary-400 leading-none">
                        {result.paybackYears
                          ? result.paybackYears.toFixed(1)
                          : "—"}
                        <span className="text-xl sm:text-2xl font-semibold text-gray-400">
                          {" "}
                          yrs
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                        Based on current estimated savings
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stat grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <Stat
                    icon={IndianRupee}
                    label="Govt. subsidy"
                    value={inr(result.subsidy)}
                  />
                  <Stat
                    icon={TrendingDown}
                    label="Net investment"
                    value={inr(result.netCost)}
                  />
                  <Stat
                    icon={Zap}
                    label="Monthly savings"
                    value={inr(result.monthlySavings)}
                  />
                  <Stat
                    icon={Clock3}
                    label="Annual savings"
                    value={inr(result.annualSavings)}
                  />
                </div>

                {/* Cost breakdown */}
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                    Cost breakdown
                  </p>
                  <div className="space-y-3.5">
                    <Row
                      label={`System cost (${result.systemKw} kW × ₹${COST_PER_KW.toLocaleString(
                        "en-IN",
                      )}/kW)`}
                      value={inr(result.systemCost)}
                    />
                    <Row
                      label="PM Surya Ghar subsidy"
                      value={`− ${inr(result.subsidy)}`}
                      positive
                    />
                    <div className="border-t border-gray-200 pt-3.5">
                      <Row
                        label="Your net investment"
                        value={inr(result.netCost)}
                        bold
                      />
                    </div>
                  </div>

                  <a
                    href="/schemes"
                    className="btn btn-primary w-full justify-center mt-6"
                  >
                    See subsidy & financing details
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            ) : (
              <EmptyState onPick={(v) => setBillInput(String(v))} />
            )}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

/* ================================================================== */
/*  Sub-components                                                     */
/* ================================================================== */

function HowStep({ icon: Icon, text }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
        <Icon size={12} className="text-primary-500" strokeWidth={2.25} />
      </span>
      <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
    </div>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5">
      <Icon size={16} className="text-primary-500 mb-3" strokeWidth={2.25} />
      <p className="text-base sm:text-lg font-bold text-gray-950 leading-none mb-1.5 tabular-nums">
        {value}
      </p>
      <p className="text-xs text-gray-400">{label}</p>
    </div>
  );
}

function Row({ label, value, positive, bold }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={`text-sm ${
          bold ? "font-semibold text-gray-950" : "text-gray-500"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm tabular-nums ${
          bold
            ? "font-bold text-gray-950 text-lg"
            : positive
              ? "font-semibold text-primary-500"
              : "font-semibold text-gray-950"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function EmptyState({ onPick }) {
  return (
    <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-8 sm:p-12">
      <span className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-5">
        <Zap size={20} className="text-primary-500" strokeWidth={2.25} />
      </span>
      <p className="text-base font-semibold text-gray-950 mb-2">
        Your recommendation will appear here
      </p>
      <p className="text-sm text-gray-500 max-w-xs mb-6 leading-relaxed">
        Enter your monthly electricity bill, or try one of these to see how it
        works.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPick(p)}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-gray-200 bg-white text-gray-700 hover:border-primary-500 hover:text-primary-500 transition-colors"
          >
            ₹{p.toLocaleString("en-IN")}/month
          </button>
        ))}
      </div>
    </div>
  );
}
