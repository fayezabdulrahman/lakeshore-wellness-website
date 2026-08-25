import { getPublishedPosts } from "../lib/sanity.server";
import { siteUrl } from "../lib/blog";
import { HomePage } from "../pages/HomePage";
import type { Route } from "./+types/home";

export async function loader() {
  return { latestPosts: await getPublishedPosts(3) };
}

export function meta(): Route.MetaDescriptors {
  const title = "Workspace Wellness — Wellness built for your team";
  const description =
    "Bespoke workplace wellness programmes, masterclasses and experiences for teams across Ireland.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/og.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: siteUrl },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <HomePage latestPosts={loaderData.latestPosts} />;
}
