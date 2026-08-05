export function FounderPerspective() {
  return (
    <section className="section perspective-section" id="about">
      <div className="shell perspective-grid">
        <div className="perspective-media gsap-image-reveal">
          <div className="perspective-image">
            <img
              src="/images/yvonne-skelly.jpg"
              alt="Yvonne Skelly, founder of Workspace Wellness"
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
            Workspace Wellness was founded by Yvonne Skelly, an Experienced Wellness Entrepreneur,
            International Speaker and Facilitator. With a diverse background spanning pharmaceuticals,
            project management, media and entrepreneurship, Yvonne has delivered events across Ireland, the UK, Europe, the USA and Canada
            for organisations including Deloitte, Fidelity Investments, Tusla, TU Dublin and ISG.
          </p>
          <br></br>
          <p>
            Driven by a passion for helping people and organisations reach their potential, 
            Yvonne has spent more than 12 years building a trusted team of professional wellness facilitators and therapists, 
            each carefully selected for their expertise, professionalism and dedication.
          </p>
        </div>
      </div>
    </section>
  );
}
