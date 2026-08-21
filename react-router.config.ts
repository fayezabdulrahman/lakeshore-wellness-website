import type { Config } from "@react-router/dev/config";
import { getPostSlugs } from "./src/lib/sanity.server";

export default {
  appDirectory: "src",
  buildDirectory: "build",
  ssr: false,
  async prerender() {
    const slugs = await getPostSlugs();
    const postPaths =
      slugs.length > 0
        ? slugs.map((slug) => `/blog/${slug}`)
        : ["/blog/__empty"];

    return [
      "/",
      "/services",
      "/privacy",
      "/blog",
      "/sitemap.xml",
      ...postPaths,
    ];
  },
} satisfies Config;
