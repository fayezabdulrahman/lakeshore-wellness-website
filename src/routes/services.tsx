import { siteUrl } from "../lib/blog";
import { ServicesPage } from "../pages/ServicesPage";
import type { Route } from "./+types/services";

export function meta(): Route.MetaDescriptors {
  const title = "Wellness Services — Workspace Wellness";
  const description =
    "Explore bespoke workplace wellness programmes, specialist masterclasses, experiences and private retreats.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/og.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: `${siteUrl}/services` },
  ];
}

export default function Services() {
  return <ServicesPage />;
}
