import { Link } from "react-router";

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Workspace Wellness home">
      <img src="/images/lakeshore-mark.png" alt="" />
      <span>
        Workspace
        <small>Wellness</small>
      </span>
    </Link>
  );
}
