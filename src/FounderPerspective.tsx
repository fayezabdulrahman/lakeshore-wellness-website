export function FounderPerspective() {
  return (
    <section className="section perspective-section" id="about">
      <div className="shell perspective-grid">
        <div className="perspective-media gsap-image-reveal">
          <div className="perspective-image">
            <img
              src="/images/yvonne-skelly.jpg"
              alt="Yvonne Skelly, founder of Lakeshore Wellness"
              loading="lazy"
            />
          </div>
          <span className="perspective-caption">
            Yvonne Skelly · Founder
          </span>
        </div>

        <div className="perspective-copy">
          <p className="eyebrow">Meet Yvonne</p>
          <div className="perspective-statement">
            <h2>Wellbeing should feel human — and work in the real world.</h2>
          </div>
          <p>
            Yvonne Skelly is a wellness entrepreneur, international speaker and
            facilitator whose career has moved from project management and
            broadcasting into full-time entrepreneurship.
          </p>
          <p>
            Over the past twelve years, she has built a trusted community of
            passionate facilitators and therapists. Together, they create
            thoughtful experiences grounded in co-creation, collaboration,
            community and connection.
          </p>
        </div>
      </div>
    </section>
  );
}
