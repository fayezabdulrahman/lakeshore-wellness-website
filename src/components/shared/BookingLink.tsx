import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { calendlyUrl } from "../../data";

export function BookingLink({
  children = "Book a free consultation",
  className = "button button-primary",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={calendlyUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}
