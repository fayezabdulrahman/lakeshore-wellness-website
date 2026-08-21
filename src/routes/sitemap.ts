import { getPublishedPosts } from "../lib/sanity.server";
import { siteUrl } from "../lib/blog";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function loader() {
  const posts = await getPublishedPosts();
  const staticUrls = ["", "/services", "/blog", "/privacy"];
  const urls: Array<{ loc: string; lastmod?: string }> = [
    ...staticUrls.map((path) => ({ loc: `${siteUrl}${path}` })),
    ...posts.map((post) => ({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: post.updatedAt.slice(0, 10),
    })),
  ];
  const body = urls
    .map(
      ({ loc, lastmod }) =>
        `  <url><loc>${escapeXml(loc)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
