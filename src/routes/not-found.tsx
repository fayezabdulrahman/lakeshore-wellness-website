import { NotFoundPage } from "../pages/NotFoundPage";
import type { Route } from "./+types/not-found";

export function meta(): Route.MetaDescriptors {
  return [
    { title: "Page not found — Workspace Wellness" },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function NotFound() {
  return <NotFoundPage />;
}
