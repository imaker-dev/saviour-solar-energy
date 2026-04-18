"use client";

import { ArrowRight, MapPin, Wrench } from "lucide-react";
import Link from "next/link";
import PageWrapper from "@/app/components/page-wrapper";

const CtaBanner = () => {
  return (
    <PageWrapper className="bg-secondary-500">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left - Content */}
        <div className="max-w-md">
          {/* Headline */}
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-tight tracking-tight mb-4">
            Not sure what fits{" "}
            <span className="font-medium text-primary-500">your space</span>?
          </h2>

          <p className="text-white/60 text-sm mb-5">
            Book a free consultation and site survey. We'll help you choose the
            perfect solar solution.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin size={14} className="text-primary-500" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  Free site survey
                </p>
                <p className="text-white/50 text-xs">At your convenience</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                <Wrench size={14} className="text-primary-500" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  End-to-end installation
                </p>
                <p className="text-white/50 text-xs">We handle everything</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium text-sm px-5 py-2.5 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/consultation"
              className="group inline-flex items-center gap-2 text-white hover:text-primary-500 text-sm font-medium transition-colors"
            >
              Free consultation
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Right - Visual (Hidden on mobile, visible on lg and above) */}
        <div className="hidden lg:block relative bg-gradient-to-br from-primary-500/10 to-transparent">
          {/* Image */}
          <img
            src="/Images/faq.jpg"
            alt="Solar panel installation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default CtaBanner;
