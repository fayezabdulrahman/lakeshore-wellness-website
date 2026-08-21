import { SectionTitle } from "../shared/SectionTitle";

const processSteps = [
  ["01", "Listen", "We begin with your people, priorities, timing and budget."],
  ["02", "Curate", "We bring together the right format, facilitators and flow."],
  [
    "03",
    "Deliver",
    "Your team experiences thoughtful, professional support.",
  ],
];

export function ProcessSection() {
  return (
    <section className="section process">
      <div className="shell">
        <SectionTitle
          eyebrow="How it works"
          title="Simple to organise. Personal by design."
          align="center"
        />
        <div className="process-grid">
          {processSteps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
