import PageWrapper from "@/app/components/page-wrapper";
import SectionHeader from "@/app/components/section-header";
import { getSectorsCards } from "@/data/sectors";
import SectorCard from "./sector-card";

export default function SectorsSection() {
  const sectors = getSectorsCards();

  return (
    <PageWrapper className="bg-white">
      <SectionHeader
        badge="Who We Serve"
        title="Find the Right Solution for You"
        highlight="Right Solution"
      />

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4">
        {sectors.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </PageWrapper>
  );
}
