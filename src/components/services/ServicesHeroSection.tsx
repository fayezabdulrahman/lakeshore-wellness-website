import { BookingLink } from "../shared/BookingLink";

export function ServicesHeroSection() {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <div>
          <p className="eyebrow">Our services</p>
          <h1>
            Flexible support.
            <br />
            <em>Real human impact.</em>
          </h1>
        </div>
        <div className="page-hero-copy">
          <p>
            From an energising hour to a programme that unfolds across the
            year, we make workplace wellbeing easy to organise and meaningful
            to experience.
          </p>
          <BookingLink />
        </div>
      </div>
    </section>
  );
}
