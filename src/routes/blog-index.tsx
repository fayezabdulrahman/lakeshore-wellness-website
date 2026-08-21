import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";
import { BlogImage } from "../components/BlogImage";
import { CallToAction } from "../components/shared/CallToAction";
import {
  formatPublishedDate,
  siteUrl,
  type BlogPostSummary,
} from "../lib/blog";
import { getPublishedPosts } from "../lib/sanity.server";
import { useGsapPolish } from "../useGsapPolish";
import type { Route } from "./+types/blog-index";

export async function loader() {
  return { posts: await getPublishedPosts() };
}

export function meta(): Route.MetaDescriptors {
  const title = "Workplace Wellbeing Blog — Workspace Wellness";
  const description =
    "Practical workplace wellbeing ideas, reflections and guidance from Yvonne Skelly and Workspace Wellness.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/og.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { tagName: "link", rel: "canonical", href: `${siteUrl}/blog` },
  ];
}

function FeaturedPost({ post }: { post: BlogPostSummary }) {
  return (
    <article className="blog-featured">
      <Link
        className="blog-featured-media gsap-image-reveal"
        to={`/blog/${post.slug}`}
      >
        <BlogImage
          image={post.featuredImage}
          sizes="(max-width: 767px) calc(100vw - 40px), 58vw"
          eager
        />
      </Link>
      <div className="blog-featured-copy motion-intro">
        <p className="eyebrow">Latest article</p>
        <time dateTime={post.publishedAt}>
          {formatPublishedDate(post.publishedAt)}
        </time>
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <Link className="text-link" to={`/blog/${post.slug}`}>
          Read the article <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function ArchivePost({ post }: { post: BlogPostSummary }) {
  return (
    <article className="blog-archive-card gsap-stack-card">
      <Link className="blog-archive-media" to={`/blog/${post.slug}`}>
        <BlogImage
          image={post.featuredImage}
          sizes="(max-width: 767px) calc(100vw - 40px), 34vw"
        />
      </Link>
      <div>
        <time dateTime={post.publishedAt}>
          {formatPublishedDate(post.publishedAt)}
        </time>
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.excerpt}</p>
        <Link className="text-link" to={`/blog/${post.slug}`}>
          Read article <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);
  const [featuredPost, ...archivePosts] = loaderData.posts;

  return (
    <main className="page-canvas blog-index" ref={pageRef}>
      <section className="blog-index-hero">
        <div className="shell blog-index-heading">
          <p className="eyebrow motion-intro">Ideas for healthier work</p>
          <h1 className="motion-intro">
            The Workspace Wellness <em>blog.</em>
          </h1>
          <p className="motion-intro">
            Thoughtful, practical ideas to help people and teams feel better at
            work — shared by Yvonne Skelly.
          </p>
        </div>
      </section>

      {featuredPost ? (
        <>
          <section className="section blog-featured-section">
            <div className="shell">
              <FeaturedPost post={featuredPost} />
            </div>
          </section>

          {archivePosts.length > 0 && (
            <section className="section blog-archive-section">
              <div className="shell">
                <div className="blog-archive-heading">
                  <p className="eyebrow">More from the blog</p>
                  <h2>Explore every article.</h2>
                </div>
                <div className="blog-archive-grid">
                  {archivePosts.map((post) => (
                    <ArchivePost key={post._id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="section blog-empty-section">
          <div className="shell blog-empty">
            <p className="eyebrow">Coming soon</p>
            <h2>Fresh ideas are taking shape.</h2>
            <p>
              The first Workspace Wellness article will be published here
              shortly.
            </p>
          </div>
        </section>
      )}

      <CallToAction />
    </main>
  );
}
