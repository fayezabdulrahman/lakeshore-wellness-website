export function ImpactSection() {
  return (
    <section className="section impact">
      <div className="shell impact-grid">
        <div className="impact-image gsap-image-reveal">
          <img
            src="/images/group-wellness-session.jpg"
            alt="A facilitator leading a workplace group wellness session"
            loading="lazy"
          />
        </div>
        <div className="impact-copy">
          <p className="eyebrow">At a glance</p>
          <h2>Small shifts. Meaningful impact.</h2>
          <p>
            Experiences designed to fit the way your team works — practical,
            inclusive and easy to engage with.
          </p>
          <div className="stat-grid">
            <div>
              <strong>12+</strong>
              <span>years creating wellness experiences</span>
            </div>
            <div>
              <strong>3</strong>
              <span>flexible delivery formats</span>
            </div>
            <div>
              <strong>6–20</strong>
              <span>guests for private retreats</span>
            </div>
            <div>
              <strong>1</strong>
              <span>programme designed around your team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shell investment-case">
        <div className="investment-heading">
          <p className="eyebrow">Why invest in wellbeing?</p>
          <h3>
            Better for people. <em>Better for business.</em>
          </h3>
        </div>

        <div className="business-impact-grid">
          <article>
            <strong>1.5–1.8</strong>
            <h4>fewer days lost to absence</h4>
            <p>
              Reducing sick leave can save an organisation €250–€350 per
              employee each year.
            </p>
          </article>
          <article>
            <strong>11%</strong>
            <h4>lower voluntary staff turnover</h4>
            <p>
              Replacing one mid-level employee can cost up to €15K — so
              stronger retention saves money and time.
            </p>
          </article>
          <article>
            <strong>10%</strong>
            <h4>increase in staff productivity</h4>
            <p>
              Wellbeing and performance are closely linked. When people feel
              better, they often work better.
            </p>
          </article>
        </div>

        <aside className="roi-panel" aria-label="Wellness return on investment">
          <div className="roi-figure">
            <span>Average return</span>
            <strong>€4.70</strong>
            <small>for every €1 invested</small>
          </div>
          <div className="roi-copy">
            <p className="eyebrow">Return on investment</p>
            <h4>Investment that can pay its way.</h4>
            <p>
              A Deloitte Ireland review found that workplace wellness
              initiatives can deliver an average return of €4.70 for every €1
              invested, driven by productivity gains and cost reductions.
            </p>
          </div>
        </aside>

        <p className="impact-source">Source: Deloitte Ireland review</p>
      </div>
    </section>
  );
}
