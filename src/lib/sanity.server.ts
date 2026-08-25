import { createClient, type SanityClient } from "@sanity/client";
import type {
  BlogPortableTextImage,
  BlogPost,
  BlogPostSummary,
} from "./blog";

const projectId = process.env.SANITY_PROJECT_ID?.trim();
const dataset = process.env.SANITY_DATASET?.trim() || "production";
const apiVersion = process.env.SANITY_API_VERSION?.trim() || "2026-08-20";

const summaryProjection = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "updatedAt": _updatedAt,
  "featuredImage": {
    "url": featuredImage.asset->url,
    "alt": featuredImage.alt,
    "lqip": featuredImage.asset->metadata.lqip,
    "width": featuredImage.asset->metadata.dimensions.width,
    "height": featuredImage.asset->metadata.dimensions.height
  },
  seo {
    title,
    description
  }
`;

let client: SanityClient | null | undefined;
let warnedAboutMissingConfig = false;

function getClient() {
  if (client !== undefined) return client;

  if (!projectId) {
    if (process.env.VERCEL === "1" || process.env.CI === "true") {
      throw new Error(
        "SANITY_PROJECT_ID is required for production and CI builds.",
      );
    }

    if (!warnedAboutMissingConfig) {
      console.warn(
        "SANITY_PROJECT_ID is not configured; blog routes will build with no posts locally.",
      );
      warnedAboutMissingConfig = true;
    }

    client = null;
    return client;
  }

  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: "published",
  });

  return client;
}

function validateSummary(post: BlogPostSummary) {
  const missingFields = [
    !post._id && "_id",
    !post.title?.trim() && "title",
    !post.slug?.trim() && "slug",
    !post.excerpt?.trim() && "excerpt",
    !post.publishedAt && "publishedAt",
    !post.updatedAt && "updatedAt",
    !post.featuredImage?.url && "featuredImage",
    !post.featuredImage?.alt?.trim() && "featuredImage.alt",
    !Number.isFinite(post.featuredImage?.width) && "featuredImage.width",
    !Number.isFinite(post.featuredImage?.height) && "featuredImage.height",
  ].filter(Boolean);

  if (missingFields.length > 0) {
    throw new Error(
      `Published post ${post._id || "(unknown)"} is missing required fields: ${missingFields.join(", ")}`,
    );
  }

  if (Number.isNaN(Date.parse(post.publishedAt))) {
    throw new Error(`Published post ${post._id} has an invalid publishedAt value.`);
  }

  if (Number.isNaN(Date.parse(post.updatedAt))) {
    throw new Error(`Published post ${post._id} has an invalid updatedAt value.`);
  }
}

function validatePosts(posts: BlogPostSummary[]) {
  const slugs = new Set<string>();

  posts.forEach((post) => {
    validateSummary(post);

    if (slugs.has(post.slug)) {
      throw new Error(`Duplicate published blog slug: ${post.slug}`);
    }

    slugs.add(post.slug);
  });

  return posts;
}

export async function getPublishedPosts(limit?: number) {
  const sanity = getClient();
  if (!sanity) return [];

  const range = typeof limit === "number" ? `[0...${limit}]` : "";
  const posts = await sanity.fetch<BlogPostSummary[]>(
    `*[
      _type == "post" &&
      !(_id in path("drafts.**"))
    ] | order(publishedAt desc) ${range} {${summaryProjection}}`,
    {},
    { tag: "published-posts" },
  );

  return validatePosts(posts);
}

export async function getPostSlugs() {
  const posts = await getPublishedPosts();
  return posts.map((post) => post.slug);
}

export async function getPublishedPost(slug: string) {
  const sanity = getClient();
  if (!sanity) return null;

  const post = await sanity.fetch<BlogPost | null>(
    `*[
      _type == "post" &&
      !(_id in path("drafts.**")) &&
      slug.current == $slug
    ][0] {
      ${summaryProjection},
      body[] {
        ...,
        _type == "image" => {
          "url": asset->url,
          "alt": alt,
          "caption": caption,
          "lqip": asset->metadata.lqip,
          "width": asset->metadata.dimensions.width,
          "height": asset->metadata.dimensions.height
        }
      }
    }`,
    { slug },
    { tag: "published-post" },
  );

  if (!post) return null;
  validateSummary(post);

  if (!Array.isArray(post.body) || post.body.length === 0) {
    throw new Error(`Published post ${post._id} has no body content.`);
  }

  post.body.forEach((block, index) => {
    if (block._type !== "image") return;

    const image = block as BlogPortableTextImage;
    const missingFields = [
      !image.url && "asset",
      !image.alt?.trim() && "alt",
      !Number.isFinite(image.width) && "width",
      !Number.isFinite(image.height) && "height",
    ].filter(Boolean);

    if (missingFields.length > 0) {
      throw new Error(
        `Published post ${post._id} has an invalid inline image at body index ${index}: ${missingFields.join(", ")}`,
      );
    }
  });

  return post;
}
