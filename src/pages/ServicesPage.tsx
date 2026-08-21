import { useRef } from "react";
import { CoreOffersSection } from "../components/services/CoreOffersSection";
import { DeliveryBand } from "../components/services/DeliveryBand";
import { ProcessSection } from "../components/services/ProcessSection";
import { ServiceLibrarySection } from "../components/services/ServiceLibrarySection";
import { ServicesHeroSection } from "../components/services/ServicesHeroSection";
import { CallToAction } from "../components/shared/CallToAction";
import { useGsapPolish } from "../useGsapPolish";

export function ServicesPage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);

  return (
    <main className="page-canvas" ref={pageRef}>
      <ServicesHeroSection />
      <CoreOffersSection />
      <DeliveryBand />
      <ServiceLibrarySection />
      <ProcessSection />
      <CallToAction />
    </main>
  );
}
