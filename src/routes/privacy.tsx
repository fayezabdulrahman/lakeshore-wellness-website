import { siteUrl } from "../lib/blog";
import { PrivacyPage } from "../pages/PrivacyPage";
import type { Route } from "./+types/privacy";

export function meta(): Route.MetaDescriptors {
  const title = "Privacy — Workspace Wellness";
  const description =
    "How Workspace Wellness handles personal information and external booking links.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { tagName: "link", rel: "canonical", href: `${siteUrl}/privacy` },
  ];
}

export default function Privacy() {
  return <PrivacyPage />;
}
