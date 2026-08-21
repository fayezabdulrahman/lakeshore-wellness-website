import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { offers } from "../../data";
import { SectionTitle } from "../shared/SectionTitle";

export function OffersSection() {
  return (
    <section className="section offers-section" id="services-preview">
      <div className="shell">
        <SectionTitle
          eyebrow="What we offer"
          title="Wellness, shaped around you."
          copy="Flexible support for a single moment, a sustained programme or time away together."
          align="center"
        />
        <div className="offer-grid">
          {offers.map((offer, index) => (
            <article
              className={`offer-card offer-card-${index + 1}`}
              key={offer.title}
            >
              <p className="eyebrow">{offer.eyebrow}</p>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <Link to="/services">
                Learn more <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
