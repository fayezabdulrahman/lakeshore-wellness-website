import { CalendarDays } from "lucide-react";
import { BookingLink } from "./BookingLink";

export function CallToAction() {
  return (
    <section className="section cta-section">
      <img
        className="cta-brand-mark"
        src="/images/lakeshore-mark.png"
        alt=""
        aria-hidden="true"
      />
      <div className="shell cta">
        <div>
          <p className="eyebrow">Let’s begin</p>
          <h2>What could wellbeing look like for your team?</h2>
        </div>
        <div>
          <p>
            Tell us what you are working towards and we’ll help you develop a
            tailored experience aligned with your people, priorities, and
            budget.
          </p>
          <BookingLink>
            <CalendarDays size={17} aria-hidden="true" />
            Book your free consultation
          </BookingLink>
        </div>
      </div>
    </section>
  );
}
