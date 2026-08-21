import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);

  return null;
}
