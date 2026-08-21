import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { formatPublishedDate, type BlogPostSummary } from "../lib/blog";
import { BlogImage } from "./BlogImage";

export function BlogPreview({ posts }: { posts: BlogPostSummary[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section blog-preview">
      <div className="shell">
        <div className="blog-preview-heading">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2>Practical ideas for healthier ways to work.</h2>
          </div>
          <Link className="text-link" to="/blog">
            View all articles <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="blog-preview-grid">
          {posts.map((post) => (
            <article className="blog-preview-card gsap-stack-card" key={post._id}>
              <Link className="blog-card-image" to={`/blog/${post.slug}`}>
                <BlogImage
                  image={post.featuredImage}
                  sizes="(max-width: 767px) calc(100vw - 40px), 33vw"
                />
              </Link>
              <div>
                <time dateTime={post.publishedAt}>
                  {formatPublishedDate(post.publishedAt)}
                </time>
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
