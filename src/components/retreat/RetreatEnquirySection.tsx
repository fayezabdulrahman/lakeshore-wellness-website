import { ArrowRight, Mail, Phone } from "lucide-react";
import { retreat, retreatContent, retreatLinks } from "../../data/retreat";

export function RetreatEnquirySection() {
  const content = retreatContent.enquiry;
  const labels = retreatContent.details;
  return (
    <section className="retreat-section retreat-enquiry" id="retreat-enquiry">
      <div className="shell retreat-enquiry-grid">
        <div>
          <p className="eyebrow">{retreat.name}</p>
          <h2>{content.heading}<br /><em>{content.headingEmphasis}</em></h2>
          <p>
            {content.description}
          </p>
          <a className="button retreat-button-light" href={retreatLinks.enquiry}>
            {content.buttonLabel} <ArrowRight size={17} />
          </a>
        </div>
        <div className="retreat-enquiry-details">
          <h3>{content.detailsHeading}</h3>
          <dl>
            <div><dt>{labels.datesLabel}</dt><dd>{retreat.dates}</dd></div>
            <div><dt>{labels.arrivalLabel}</dt><dd>{retreat.arrival}</dd></div>
            <div><dt>{labels.departureLabel}</dt><dd>{retreat.departure}</dd></div>
            <div><dt>{labels.venueLabel}</dt><dd>{retreat.venue}</dd></div>
          </dl>
          <p className="retreat-small-note">
            {content.note}
          </p>
          <div className="retreat-contact-links">
            <a href={retreatLinks.enquiry}><Mail size={17} /><span>{retreat.email}</span></a>
            <a href={retreatLinks.phone}><Phone size={17} /><span>{retreat.phone}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
