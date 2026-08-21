import type { PortableTextBlock } from "@portabletext/types";

export const siteUrl = "https://workspacewellness.ie";

export type BlogImage = {
  url: string;
  alt: string;
  lqip?: string;
  width?: number;
  height?: number;
};

export type BlogPortableTextImage = BlogImage & {
  _key: string;
  _type: "image";
  caption?: string;
};

export type BlogPostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage: BlogImage;
  seo?: {
    title?: string;
    description?: string;
  };
};

export type BlogPost = BlogPostSummary & {
  body: Array<PortableTextBlock | BlogPortableTextImage>;
};

export function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Dublin",
  }).format(new Date(value));
}

export function optimizedImageUrl(url: string, width: number) {
  const imageUrl = new URL(url);
  imageUrl.searchParams.set("auto", "format");
  imageUrl.searchParams.set("fit", "max");
  imageUrl.searchParams.set("w", String(width));
  return imageUrl.toString();
}

export function imageSrcSet(url: string, widths: number[]) {
  return widths
    .map((width) => `${optimizedImageUrl(url, width)} ${width}w`)
    .join(", ");
}
