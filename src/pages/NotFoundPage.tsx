import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page has wandered off.</h1>
      <Link className="button button-primary" to="/">
        Return home
      </Link>
    </main>
  );
}
