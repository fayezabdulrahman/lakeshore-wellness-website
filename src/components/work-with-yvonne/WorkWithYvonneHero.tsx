import { ArrowDown } from "lucide-react";
import { BookingLink } from "../shared/BookingLink";

export function WorkWithYvonneHero() {
  return (
    <section className="yvonne-hero">
      <div className="shell yvonne-hero-grid">
        <div className="yvonne-hero-copy">
          <p className="eyebrow motion-intro">One-to-one with Yvonne</p>
          <h1 className="motion-intro">
            Your ambition should not cost you <em>your wellbeing.</em>
          </h1>
          <p className="yvonne-hero-lead motion-intro">
            A focused three-part intensive for high-performing women who are
            ready to step out of survival mode and lead from clarity.
          </p>
          <div className="yvonne-hero-actions motion-intro">
            <BookingLink>Book a free 15-minute call</BookingLink>
            <a className="yvonne-text-link" href="#sovereign-intensive">
              Discover the intensive
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="yvonne-portrait gsap-image-reveal">
          <div className="yvonne-portrait-frame">
            <img
              src="/images/work-with-yvonne/yvonne-editorial.jpg"
              alt="Yvonne Skelly outdoors in a reflective moment"
              width="1536"
              height="2048"
            />
          </div>
          <div className="yvonne-portrait-note">
            <span>Clarity</span>
            <span>Capacity</span>
            <span>Peace</span>
          </div>
        </div>
      </div>
    </section>
  );
}
