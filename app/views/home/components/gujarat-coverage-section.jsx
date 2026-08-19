import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { ArrowRight, MapPin, ShieldCheck, Sun } from "lucide-react";
import Link from "next/link";

export default function GujaratCoverageSection() {
  return (
    <PageWrapper>
      {/* Background Glow */}

      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Left */}
        <div>
          <SectionHeader
            badge="Gujarat Wide Coverage"
            title="Powering Every Corner of Gujarat"
            highlight={"Gujarat"}
            description="From Kutch to Valsad, we design, install, maintain, and support premium solar solutions across every district of Gujarat."
            align="start"
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn btn-lg btn-primary"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/projects"
              className="btn btn-lg btn-secondary"
            >
              View Projects
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="mt-10 grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="text-primary-500" size={22} />
              <div>
                <h4 className="font-bold">33</h4>
                <p className="text-sm text-gray-500">Districts</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sun className="text-primary-500" size={22} />
              <div>
                <h4 className="font-bold">500+</h4>
                <p className="text-sm text-gray-500">Installations</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary-500" size={22} />
              <div>
                <h4 className="font-bold">24/7</h4>
                <p className="text-sm text-gray-500">Support</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-primary-500/10 blur-[120px]" />

          <img
            src="/Images/gujarat.png"
            alt="Gujarat Coverage"
            className="relative w-full max-w-[650px] animate-float drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
