import { retreatSeo } from "../data/retreat";
import { siteUrl } from "../lib/blog";
import { RetreatPage } from "../pages/RetreatPage";
import stylesheet from "../styles/retreat.css?url";
import type { Route } from "./+types/retreat";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function meta(): Route.MetaDescriptors {
  const { title, description } = retreatSeo;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: new URL(retreatSeo.image, siteUrl).href },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: `${siteUrl}/retreat` },
  ];
}

export default function Retreat() {
  return <RetreatPage />;
}
