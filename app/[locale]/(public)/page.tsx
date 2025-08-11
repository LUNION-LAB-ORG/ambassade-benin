import ActionsRapides from "@/components/home/ActionsRapides";
import ActualitesSection from "@/components/home/ActualitesSection";
import ConsulatBenin from "@/components/home/ConsulatBenin";
import SectionContactConsul from "@/components/home/contact-consul/section-contact-consul";
import SectionGalerie from "@/components/home/galerie/section-galerie";
import IndependanceBanner from "@/components/home/IndependanceBanner";

import ServicesSection from "@/components/home/ServicesSection";
import TropicalHero from "@/components/home/TropicalHero";

export default async function HomePage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative z-0">
        <TropicalHero />
      </div>

      {/* CONSULAT BENIN - chevauche le hero proprement */}
      <div className="relative z-10 sm:-mt-[50px] -mt-[20px] ">
        <ConsulatBenin />
      </div>

      {/* AUTRES SECTIONS */}
      <div className="">
        <IndependanceBanner />
        <ActionsRapides />
        <ServicesSection />
        <ActualitesSection />
          {/* <SectionGalerie/> */}
        <SectionContactConsul/>
      </div>
    </>
  );
}
