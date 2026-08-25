import { offers } from "../../data";

export function CoreOffersSection() {
  return (
    <section className="section core-offers">
      <div className="shell">
        <div className="wide-offer-grid">
          {offers.map((offer) => (
            <article className="gsap-stack-card" key={offer.title}>
              <p className="eyebrow">{offer.eyebrow}</p>
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
              <p className="muted">{offer.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
