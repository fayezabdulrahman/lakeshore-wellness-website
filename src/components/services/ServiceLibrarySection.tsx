import { serviceCategories } from "../../data";
import { SectionTitle } from "../shared/SectionTitle";

export function ServiceLibrarySection() {
  return (
    <section className="section service-library">
      <div className="shell">
        <SectionTitle
          eyebrow="Specialist sessions"
          title="Expert-led. Practical. Made to engage."
          copy="Choose a focused session or combine complementary topics into a programme. Open each category to explore the possibilities."
        />
        <div className="category-list">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <details
                key={category.title}
                name="service-categories"
                open={index === 0 ? true : undefined}
              >
                <summary>
                  <span className="category-icon">
                    <Icon />
                  </span>
                  <span>
                    <strong>{category.title}</strong>
                    <small>{category.description}</small>
                  </span>
                  <span className="detail-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="service-items">
                  {category.services.map((service) => (
                    <article key={service.name}>
                      <h3>{service.name}</h3>
                      <p>{service.summary}</p>
                    </article>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
