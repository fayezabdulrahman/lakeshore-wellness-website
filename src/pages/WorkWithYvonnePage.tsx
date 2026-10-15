import { useRef } from "react";
import { SovereignIntensiveSection } from "../components/work-with-yvonne/SovereignIntensiveSection";
import { WellnessPillarsSection } from "../components/work-with-yvonne/WellnessPillarsSection";
import { WorkWithYvonneCta } from "../components/work-with-yvonne/WorkWithYvonneCta";
import { WorkWithYvonneHero } from "../components/work-with-yvonne/WorkWithYvonneHero";
import { useGsapPolish } from "../useGsapPolish";

export function WorkWithYvonnePage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);

  return (
    <main className="page-canvas yvonne-page" ref={pageRef}>
      <WorkWithYvonneHero />
      <SovereignIntensiveSection />
      <WellnessPillarsSection />
      <WorkWithYvonneCta />
    </main>
  );
}
