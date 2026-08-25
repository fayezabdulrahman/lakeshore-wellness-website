import { index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("services", "./routes/services.tsx"),
  route("privacy", "./routes/privacy.tsx"),
  route("blog", "./routes/blog-index.tsx"),
  route("blog/:slug", "./routes/blog-post.tsx"),
  route("sitemap.xml", "./routes/sitemap.ts"),
  route("*", "./routes/not-found.tsx"),
];
