import HeroSection from "@/sections/home/hero-section";
import BrandsSection from "@/sections/home/brands-section";
import CollectionsSection from "@/sections/home/collections-section";
import StoresSection from "@/sections/home/stores-section";
import ExportSection from "@/sections/home/export-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandsSection />
      <CollectionsSection />
      <StoresSection />
      <ExportSection />
    </main>
  );
}
