import { BookingLink } from "../shared/BookingLink";

export function SovereignIntensiveSection() {
  return (
    <section
      className="yvonne-section yvonne-intensive"
      id="sovereign-intensive"
    >
      <div className="shell yvonne-intensive-grid">
        <div>
          <p className="eyebrow">Introducing</p>
          <h2>
            The Sovereign
            <br />
            <em>Leader Intensive</em>
          </h2>
        </div>
        <div className="yvonne-intensive-copy">
          <p className="yvonne-lead">
            An intimate, three-part wellness collaboration curated for female
            leaders and entrepreneurs carrying the weight of constant
            responsibility.
          </p>
          <p>
            Together, we realign your internal power source so you can move
            beyond reactive firefighting and lead with precision, perspective
            and peace.
          </p>
          <BookingLink>Explore whether it is right for you</BookingLink>
        </div>
      </div>
    </section>
  );
}
