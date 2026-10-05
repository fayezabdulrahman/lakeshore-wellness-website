import { useRef } from "react";
import { RetreatAccommodationSection } from "../components/retreat/RetreatAccommodationSection";
import { RetreatEnquirySection } from "../components/retreat/RetreatEnquirySection";
import { RetreatHeroSection } from "../components/retreat/RetreatHeroSection";
import { RetreatHostSection } from "../components/retreat/RetreatHostSection";
import { RetreatInclusionsSection } from "../components/retreat/RetreatInclusionsSection";
import { RetreatIntroduction } from "../components/retreat/RetreatIntroduction";
import { RetreatProgrammeSection } from "../components/retreat/RetreatProgrammeSection";
import { RetreatVenueSection } from "../components/retreat/RetreatVenueSection";
import { useGsapPolish } from "../useGsapPolish";

export function RetreatPage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);

  return (
    <main className="page-canvas retreat-page" ref={pageRef}>
      <RetreatHeroSection />
      <RetreatIntroduction />
      <RetreatProgrammeSection />
      <RetreatVenueSection />
      <RetreatInclusionsSection />
      <RetreatHostSection />
      <RetreatAccommodationSection />
      <RetreatEnquirySection />
    </main>
  );
}
