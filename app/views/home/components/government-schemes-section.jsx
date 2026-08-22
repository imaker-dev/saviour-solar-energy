import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { getAllSchemes } from "../../../../data/schemes";
import SchemeCard from "./scheme-card";

export default function GovernmentSchemesSection() {
  const schemes = getAllSchemes();
  return (
    <PageWrapper className="bg-white border-b border-gray-100">
      <SectionHeader
        badge={"Government Schemes"}
        title={"Solar, backed by the government"}
        highlight={"government"}
        description={
          " Central subsidies and low-interest financing bring your rooftop solar cost down before you pay a single rupee."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {schemes.map((scheme) => (
          <SchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>

      <div className="flex justify-center mt-8 lg:mt-12">
        <Link href={"/schemes"} className="btn btn-lg btn-primary ">
          View all schemes
          <ArrowRight size={16} />
        </Link>
      </div>
    </PageWrapper>
  );
}
