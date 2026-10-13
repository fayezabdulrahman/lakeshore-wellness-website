import { Plus } from "lucide-react";
import { retreatContent, retreatDays } from "../../data/retreat";

export function RetreatProgrammeSection() {
  const content = retreatContent.programme;
  return (
    <section className="retreat-section retreat-programme" id="retreat-programme">
      <div className="shell retreat-programme-grid">
        <div className="retreat-programme-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.heading}<br /><em>{content.headingEmphasis}</em></h2>
          <p className="retreat-body-copy">
            {content.description}
          </p>
          <p className="retreat-small-note">
            {content.note}
          </p>
        </div>
        <div className="retreat-day-list">
          {retreatDays.map((day, index) => (
            <details key={day.day} className="retreat-day" open={index === 0}>
              <summary>
                <span className="retreat-day-date">{day.day}<small>{day.date}</small></span>
                <span><strong>{day.title}</strong><small>{day.subtitle}</small></span>
                <Plus className="retreat-day-plus" size={21} />
              </summary>
              <div className="retreat-day-copy">
                <p>{day.description}</p>
                <p>{day.detail}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
