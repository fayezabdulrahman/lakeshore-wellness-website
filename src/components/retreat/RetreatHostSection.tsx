import { retreatContent, retreatMedia } from "../../data/retreat";

export function RetreatHostSection() {
  const content = retreatContent.host;
  return (
    <section className="retreat-section retreat-host">
      <div className="shell retreat-host-grid">
        <div className="retreat-host-portrait">
          <img
            src={retreatMedia.host.src}
            alt={retreatMedia.host.alt}
            width={retreatMedia.host.width}
            height={retreatMedia.host.height}
            loading="lazy"
          />
        </div>
        <div className="retreat-host-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.heading}<br /><em>{content.headingEmphasis}</em></h2>
          <p className="retreat-lead">{content.lead}</p>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="text-link" href="#retreat-enquiry">{content.enquiryLabel}</a>
        </div>
      </div>
    </section>
  );
}
