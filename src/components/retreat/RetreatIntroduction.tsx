import { retreat, retreatContent } from "../../data/retreat";

export function RetreatIntroduction() {
  const content = retreatContent.introduction;
  const labels = retreatContent.details;
  return (
    <>
      <div className="retreat-details-band">
        <dl className="shell retreat-details-grid">
          <div>
            <dt>{labels.datesLabel}</dt>
            <dd>{retreat.dates}</dd>
          </div>
          <div>
            <dt>{labels.settingLabel}</dt>
            <dd>{retreat.venueShort}</dd>
          </div>
          <div>
            <dt>{labels.durationLabel}</dt>
            <dd>{retreat.duration}</dd>
          </div>
        </dl>
      </div>
      <section className="retreat-section retreat-introduction">
        <div className="shell retreat-introduction-grid">
          <h2>{content.heading} <em>{content.headingEmphasis}</em></h2>
          <div className="retreat-body-copy">
            <p className="retreat-lead">
              {content.lead}
            </p>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
