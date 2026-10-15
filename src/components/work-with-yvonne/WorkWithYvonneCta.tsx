import { CalendarDays } from "lucide-react";
import { BookingLink } from "../shared/BookingLink";

export function WorkWithYvonneCta() {
  return (
    <section className="yvonne-section yvonne-final-cta">
      <img
        className="yvonne-cta-mark"
        src="/images/lakeshore-mark.png"
        alt=""
        aria-hidden="true"
      />
      <div className="shell yvonne-final-grid">
        <div>
          <p className="eyebrow">Your next chapter can feel different</p>
          <h2>
            Stop operating from depletion. Start leading from an unshakeable
            foundation.
          </h2>
        </div>
        <div className="yvonne-final-copy">
          <p>
            You do not have to choose between your ambition and your health.
            Let us start with a free, no-obligation conversation.
          </p>
          <BookingLink className="button yvonne-button-light">
            <CalendarDays size={17} aria-hidden="true" />
            Book a free 15-minute call
          </BookingLink>
        </div>
      </div>
    </section>
  );
}
