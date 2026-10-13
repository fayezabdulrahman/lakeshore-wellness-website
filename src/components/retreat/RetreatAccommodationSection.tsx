import { retreatAccommodation } from "../../data/retreat";

export function RetreatAccommodationSection() {
  return (
    <section
      className="retreat-section retreat-accommodation"
      aria-labelledby="retreat-accommodation-heading"
    >
      <div className="shell">
        <div className="retreat-accommodation-heading">
          <h2 id="retreat-accommodation-heading">
            {retreatAccommodation.heading}
            <br />
            <em>{retreatAccommodation.headingEmphasis}</em>
          </h2>
          <p className="retreat-body-copy">
            {retreatAccommodation.description}
          </p>
        </div>
        <div className="retreat-suite-list">
          {retreatAccommodation.suites.map((suite) => (
            <article className="retreat-suite" key={suite.name}>
              <div>
                <h3>{suite.name}</h3>
                <p>{suite.description}</p>
              </div>
              <p className="retreat-suite-price">
                {suite.price} <span>per person</span>
              </p>
            </article>
          ))}
        </div>
        <div className="retreat-payment-terms">
          {retreatAccommodation.paymentTerms.map((term) => (
            <div key={term.title}>
              <h3>{term.title}</h3>
              <p>{term.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
