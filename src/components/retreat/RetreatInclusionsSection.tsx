import { retreatContent, retreatInclusions, retreatMedia } from "../../data/retreat";

export function RetreatInclusionsSection() {
  const content = retreatContent.inclusions;
  return (
    <section className="retreat-section retreat-inclusions">
      <div className="shell retreat-inclusions-grid">
        <div className="retreat-inclusions-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.heading}<br /><em>{content.headingEmphasis}</em></h2>
          <p className="retreat-body-copy">
            {content.description}
          </p>
          <div className="retreat-inclusions-image">
            <img
              src={retreatMedia.interior.src}
              alt={retreatMedia.interior.alt}
              width={retreatMedia.interior.width}
              height={retreatMedia.interior.height}
              loading="lazy"
            />
          </div>
        </div>
        <div className="retreat-inclusions-list">
          {retreatInclusions.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
          <p className="retreat-small-note">{content.note}</p>
        </div>
      </div>
    </section>
  );
}
