import { siteUrl } from "../lib/blog";
import { WorkWithYvonnePage } from "../pages/WorkWithYvonnePage";
import stylesheet from "../styles/work-with-yvonne.css?url";
import type { Route } from "./+types/work-with-yvonne";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function meta(): Route.MetaDescriptors {
  const title = "Work with Yvonne — Sovereign Leader Intensive";
  const description =
    "A personalised three-part wellness intensive for high-performing women ready to lead with greater clarity, capacity and calm.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/og.png` },
    { name: "twitter:card", content: "summary_large_image" },
    {
      tagName: "link",
      rel: "canonical",
      href: `${siteUrl}/work-with-yvonne`,
    },
  ];
}

export default function WorkWithYvonne() {
  return <WorkWithYvonnePage />;
}
