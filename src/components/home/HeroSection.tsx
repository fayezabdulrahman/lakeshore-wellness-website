import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { BookingLink } from "../shared/BookingLink";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="shell hero-stage">
        <div className="hero-copy">
          <p className="eyebrow motion-intro">
            Workplace wellness · Ireland
          </p>
          <h1 className="motion-intro">
            Wellness built
            <br />
            <em>for your team.</em>
          </h1>
          <p className="hero-lead motion-intro">
            Bespoke programmes and uplifting experiences that help people feel
            supported, connected and ready to thrive.
          </p>
          <div className="hero-actions motion-intro">
            <BookingLink />
            <Link className="text-link" to="/services">
              Explore our services <ChevronRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-media gsap-image-reveal">
          <img
            src="/images/workplace-wellness-event.jpg"
            alt="A workplace wellness session taking place at a live event"
          />
          <div className="hero-media-note">
            <span>In person · Online · Hybrid</span>
            <span>Creating healthier ways to work since 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
}
