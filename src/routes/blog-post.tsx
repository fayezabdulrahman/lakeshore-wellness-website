import {
  PortableText,
  type PortableTextComponents,
  type PortableTextMarkComponentProps,
} from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";
import { BlogImage } from "../components/BlogImage";
import { CallToAction } from "../components/shared/CallToAction";
import {
  formatPublishedDate,
  optimizedImageUrl,
  siteUrl,
  type BlogPortableTextImage,
} from "../lib/blog";
import { getPublishedPost } from "../lib/sanity.server";
import { NotFoundPage } from "../pages/NotFoundPage";
import { useGsapPolish } from "../useGsapPolish";
import type { Route } from "./+types/blog-post";

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPublishedPost(params.slug);

  if (params.slug === "__empty") {
    return { post: null };
  }

  if (!post) {
    throw new Response("Article not found", { status: 404 });
  }

  return { post };
}

export function meta({ data }: Route.MetaArgs): Route.MetaDescriptors {
  if (!data?.post) {
    return [
      { title: "Article not found — Workspace Wellness" },
      { name: "robots", content: "noindex, nofollow" },
    ];
  }

  const { post } = data;
  const title = post.seo?.title?.trim() || `${post.title} — Workspace Wellness`;
  const description = post.seo?.description?.trim() || post.excerpt;
  const url = `${siteUrl}/blog/${post.slug}`;
  const image = optimizedImageUrl(post.featuredImage.url, 1200);

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: post.featuredImage.alt },
    { property: "article:published_time", content: post.publishedAt },
    { property: "article:modified_time", content: post.updatedAt },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: url },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: url,
        image,
        author: {
          "@type": "Person",
          name: "Yvonne Skelly",
        },
        publisher: {
          "@type": "Organization",
          name: "Workspace Wellness",
          url: siteUrl,
          logo: `${siteUrl}/images/lakeshore-mark.png`,
        },
      },
    },
  ];
}

function SafeLink({
  children,
  value,
}: PortableTextMarkComponentProps<{ _type: "link"; href?: string }>) {
  const href = value?.href?.trim() || "#";
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: SafeLink,
  },
  types: {
    image: ({ value }) => {
      const image = value as BlogPortableTextImage;

      return (
        <figure>
          <BlogImage
            image={image}
            sizes="(max-width: 767px) calc(100vw - 40px), 760px"
          />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      );
    },
  },
};

export default function BlogPostRoute({ loaderData }: Route.ComponentProps) {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);
  const { post } = loaderData;

  if (!post) return <NotFoundPage />;

  return (
    <main className="page-canvas blog-post-page" ref={pageRef}>
      <article>
        <header className="blog-post-header">
          <div className="shell blog-post-heading">
            <Link className="blog-back-link motion-intro" to="/blog">
              <ArrowLeft size={16} aria-hidden="true" /> Back to the blog
            </Link>
            <p className="eyebrow motion-intro">Workplace wellbeing</p>
            <h1 className="motion-intro">{post.title}</h1>
            <p className="blog-post-excerpt motion-intro">{post.excerpt}</p>
            <div className="blog-post-byline motion-intro">
              <span>By Yvonne Skelly</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>
                {formatPublishedDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </header>

        <div className="shell blog-post-hero gsap-image-reveal">
          <BlogImage
            image={post.featuredImage}
            sizes="(max-width: 767px) calc(100vw - 40px), 1280px"
            eager
          />
        </div>

        <div className="shell blog-post-body">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      </article>

      <CallToAction />
    </main>
  );
}

export function ErrorBoundary() {
  return <NotFoundPage />;
}
