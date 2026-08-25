import { useRef } from "react";
import { BlogPreview } from "../components/BlogPreview";
import { ApproachSection } from "../components/home/ApproachSection";
import { FounderPerspective } from "../components/home/FounderPerspective";
import { HeroSection } from "../components/home/HeroSection";
import { ImpactSection } from "../components/home/ImpactSection";
import { OffersSection } from "../components/home/OffersSection";
import { TrustedClientsSection } from "../components/home/TrustedClientsSection";
import { CallToAction } from "../components/shared/CallToAction";
import type { BlogPostSummary } from "../lib/blog";
import { useGsapPolish } from "../useGsapPolish";

export function HomePage({
  latestPosts,
}: {
  latestPosts: BlogPostSummary[];
}) {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);

  return (
    <main className="page-canvas" ref={pageRef}>
      <HeroSection />
      <TrustedClientsSection />
      <ApproachSection />
      <OffersSection />
      <ImpactSection />
      <FounderPerspective />
      <BlogPreview posts={latestPosts} />
      <CallToAction />
    </main>
  );
}
