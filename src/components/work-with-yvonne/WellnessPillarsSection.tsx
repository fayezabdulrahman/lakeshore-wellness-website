const pillars = [
  {
    name: "Connection",
    title: "Reclaim your core vision",
    copy: "Reconnect to yourself, to others and to nature. Strengthen your intuition, widen your perspective and move from reactive leadership to clear, proactive direction.",
    result: "Lead from alignment",
    supportTitle: "One-to-one",
    supportCopy:
      "A private space for honest reflection, fresh perspective and practical change.",
    image: "/images/work-with-yvonne/yvonne-outdoors.jpg",
    imageAlt: "Yvonne enjoying time in the mountains",
    imagePosition: "14% center",
  },
  {
    name: "Movement",
    title: "Release the pressure valve",
    copy: "Understand how strategic movement and somatic release can shift stored tension, restore creative energy and create momentum for your next stage of growth.",
    result: "Create fresh energy",
    supportTitle: "Personalised",
    supportCopy:
      "We begin wherever you are and shape each conversation around what you need now.",
    image: "/images/work-with-yvonne/movement-in-nature.jpg",
    imageAlt: "Walking through an open mountain landscape",
    imagePosition: "center 42%",
  },
  {
    name: "Stillness",
    title: "Make space your advantage",
    copy: "Explore the strategic pause. Deep mental spaciousness makes room for breakthrough thinking, creative innovation and sustainable long-term expansion.",
    result: "Expand with intention",
    supportTitle: "Whole-person",
    supportCopy:
      "Your leadership, nervous system, physical energy and ambition are considered together.",
    image: "/images/work-with-yvonne/stillness-sunset.jpg",
    imageAlt: "A calm ocean horizon at sunset",
    imagePosition: "center 62%",
  },
];

export function WellnessPillarsSection() {
  return (
    <section className="yvonne-section yvonne-pillars-section">
      <div className="shell">
        <div className="yvonne-pillars-heading">
          <div>
            <p className="eyebrow">Three non-negotiable pillars</p>
            <h2>A steadier foundation for the way you lead.</h2>
          </div>
          <p>
            Open each pillar to explore how the intensive brings your energy,
            vision and wellbeing back into alignment.
          </p>
        </div>

        <div className="yvonne-pillars">
          {pillars.map((pillar, index) => (
            <details
              className="yvonne-pillar"
              key={pillar.name}
              name="wellness-pillars"
              open={index === 0 ? true : undefined}
            >
              <summary>
                <span className="yvonne-pillar-name">{pillar.name}</span>
                <span className="yvonne-pillar-toggle" aria-hidden="true" />
              </summary>
              <div className="yvonne-pillar-content">
                <div className="yvonne-pillar-copy">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                  <strong>{pillar.result}</strong>
                </div>
                <aside className="yvonne-pillar-support">
                  <div className="yvonne-pillar-image">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      loading="lazy"
                      style={{ objectPosition: pillar.imagePosition }}
                    />
                  </div>
                  <div>
                    <span>{pillar.supportTitle}</span>
                    <p>{pillar.supportCopy}</p>
                  </div>
                </aside>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
