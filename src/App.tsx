import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  calendlyUrl,
  clients,
  offers,
  serviceCategories,
} from "./data";
import { FounderPerspective } from "./FounderPerspective";
import { useGsapPolish } from "./useGsapPolish";

function PageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [description, title]);
  return null;
}

function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Lakeshore Wellness home">
      <img src="/images/lakeshore-mark.png" alt="" />
      <span>
        Lakeshore
        <small>Wellness</small>
      </span>
    </Link>
  );
}

function BookingLink({
  children = "Book a free consultation",
  className = "button button-primary",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={calendlyUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.hash, location.pathname]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive && !location.hash ? "active" : ""
            }
          >
            Home
          </NavLink>
          <Link
            to="/#about"
            className={
              location.pathname === "/" && location.hash === "#about"
                ? "active"
                : undefined
            }
          >
            About
          </Link>
          <NavLink to="/services">Services</NavLink>
          <BookingLink className="button button-small" />
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p>
            Thoughtful wellbeing experiences for people, teams and communities.
          </p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
        <div className="footer-links">
          <strong>Contact</strong>
          <a href="mailto:yvonne@lakeshorewellness.ie">
            <Mail size={16} /> yvonne@lakeshorewellness.ie
          </a>
          <a href="tel:+353870528191">
            <Phone size={16} /> +353 87 052 8191
          </a>
          <div className="socials">
            <a
              href="https://www.instagram.com/lakeshorewellnesscentre"
              target="_blank"
              rel="noreferrer"
              aria-label="Lakeshore Wellness on Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yvonne-skelly-1ba00b247/"
              target="_blank"
              rel="noreferrer"
              aria-label="Yvonne Skelly on LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Lakeshore Wellness</span>
        <span>West Wicklow, Ireland</span>
      </div>
    </footer>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-title ${align === "center" ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function HomePage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);

  return (
    <>
      <PageMeta
        title="Lakeshore Wellness — Wellness built for your team"
        description="Bespoke workplace wellness programmes, masterclasses and experiences for teams across Ireland."
      />
      <main className="page-canvas" ref={pageRef}>
        <section className="hero">
          <div className="shell hero-stage">
            <div className="hero-copy">
              <p className="eyebrow motion-intro">
                Workplace wellness · Ireland
              </p>
              <h1 className="motion-intro">
                Wellness built
                <br />
                <em>for your team.</em>
              </h1>
              <p className="hero-lead motion-intro">
                Bespoke programmes and uplifting experiences that help people
                feel supported, connected and ready to thrive.
              </p>
              <div className="hero-actions motion-intro">
                <BookingLink />
                <Link className="text-link" to="/services">
                  Explore our services <ChevronRight size={17} />
                </Link>
              </div>
            </div>
            <div className="hero-media gsap-image-reveal">
              <img
                src="/images/team-wellness.avif"
                alt="A workplace team taking part in a group wellness session"
              />
              <div className="hero-media-note">
                <span>In person · Online · Hybrid</span>
                <span>Creating healthier ways to work since 2014</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Selected clients and partners">
          <div className="shell trust-inner">
            <p>Trusted by teams at</p>
            <div className="logo-marquee">
              <div className="logo-track">
                {[false, true].map((duplicate) => (
                  <div
                    className="logo-group"
                    key={duplicate ? "duplicate" : "primary"}
                    aria-hidden={duplicate || undefined}
                  >
                    {clients.map((client) => (
                      <div
                        className="client-logo"
                        key={`${client.name}-${duplicate}`}
                      >
                        {client.logo ? (
                          <img
                            src={client.logo}
                            alt={duplicate ? "" : client.name}
                          />
                        ) : (
                          <span className="client-wordmark">{client.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section intro">
          <div className="shell intro-grid">
            <div className="section-title intro-title">
              <p className="eyebrow">A considered approach</p>
              <h2>
                Wellbeing that feels{" "}
                <span
                  className="inline-heading-image"
                  role="img"
                  aria-label="People sharing a wellness experience"
                />
                human.
              </h2>
            </div>
            <div className="rich-copy">
              <p>
                Lakeshore Wellness curates experiences around your organisation,
                your people and the outcomes that matter to you. From one
                memorable session to a year-long programme, every detail is
                thoughtfully shaped with your team.
              </p>
              <p>
                Our trusted network of specialist facilitators brings practical
                expertise across mental, physical and emotional wellbeing —
                reducing the workload for the people organising it.
              </p>
            </div>
          </div>
        </section>

        <section className="section offers-section" id="services-preview">
          <div className="shell">
            <SectionTitle
              eyebrow="What we offer"
              title="Wellness, shaped around you."
              copy="Flexible support for a single moment, a sustained programme or time away together."
              align="center"
            />
            <div className="offer-grid">
              {offers.map((offer, index) => (
                <article
                  className={`offer-card offer-card-${index + 1}`}
                  key={offer.title}
                >
                  <p className="eyebrow">{offer.eyebrow}</p>
                  <h3>{offer.title}</h3>
                  <p>{offer.description}</p>
                  <Link to="/services">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section impact">
          <div className="shell impact-grid">
            <div className="impact-image gsap-image-reveal">
              <img
                src="/images/group-discussion.jpg"
                alt="A team taking part in a facilitated group discussion"
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
        </section>

        <FounderPerspective />

        <CallToAction />
      </main>
    </>
  );
}

function CallToAction() {
  return (
    <section className="section cta-section">
      <div className="shell cta">
        <div>
          <p className="eyebrow">Let’s begin</p>
          <h2>What could wellbeing look like for your team?</h2>
        </div>
        <div>
          <p>
            Tell us what you are working towards. We’ll help you shape a
            thoughtful experience that fits your people, priorities and budget.
          </p>
          <BookingLink>
            <CalendarDays size={17} aria-hidden="true" />
            Book your free consultation
          </BookingLink>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  const pageRef = useRef<HTMLElement>(null);
  useGsapPolish(pageRef);

  return (
    <>
      <PageMeta
        title="Wellness Services — Lakeshore Wellness"
        description="Explore bespoke workplace wellness programmes, specialist masterclasses, experiences and private retreats."
      />
      <main className="page-canvas" ref={pageRef}>
        <section className="page-hero">
          <div className="shell page-hero-grid">
            <div>
              <p className="eyebrow">Our services</p>
              <h1>
                Flexible support.
                <br />
                <em>Real human impact.</em>
              </h1>
            </div>
            <div className="page-hero-copy">
              <p>
                From an energising hour to a programme that unfolds across the
                year, we make workplace wellbeing easy to organise and
                meaningful to experience.
              </p>
              <BookingLink />
            </div>
          </div>
        </section>

        <section className="section core-offers">
          <div className="shell">
            <div className="wide-offer-grid">
              {offers.map((offer) => (
                <article
                  className="gsap-stack-card"
                  key={offer.title}
                >
                  <p className="eyebrow">{offer.eyebrow}</p>
                  <h2>{offer.title}</h2>
                  <p>{offer.description}</p>
                  <p className="muted">{offer.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="delivery-band">
          <div className="shell">
            <span>Designed around your team</span>
            <strong>In person</strong>
            <i />
            <strong>Online</strong>
            <i />
            <strong>Hybrid</strong>
          </div>
        </section>

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

        <section className="section process">
          <div className="shell">
            <SectionTitle
              eyebrow="How it works"
              title="Simple to organise. Personal by design."
              align="center"
            />
            <div className="process-grid">
              {[
                [
                  "01",
                  "Listen",
                  "We begin with your people, priorities, timing and budget.",
                ],
                [
                  "02",
                  "Curate",
                  "We bring together the right format, facilitators and flow.",
                ],
                [
                  "03",
                  "Deliver",
                  "Your team experiences thoughtful, professional support.",
                ],
              ].map(([number, title, copy]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Privacy — Lakeshore Wellness"
        description="How Lakeshore Wellness handles personal information and external booking links."
      />
      <main className="legal-page">
        <div className="shell legal-shell">
          <p className="eyebrow">Privacy</p>
          <h1>Your privacy matters.</h1>
          <p className="legal-intro">
            This website is designed to provide information about Lakeshore
            Wellness without collecting personal information through forms or
            user accounts.
          </p>
          <section>
            <h2>Contacting us</h2>
            <p>
              If you contact us by email or telephone, the information you
              provide will be used only to respond to your enquiry and arrange
              services where requested.
            </p>
          </section>
          <section>
            <h2>Booking consultations</h2>
            <p>
              Consultation links open Calendly, an external service with its own
              privacy and cookie policies. Please review those policies before
              submitting your details.
            </p>
          </section>
          <section>
            <h2>External links</h2>
            <p>
              This website links to Instagram, LinkedIn and Calendly. Lakeshore
              Wellness is not responsible for the privacy practices of external
              websites.
            </p>
          </section>
          <section>
            <h2>Questions</h2>
            <p>
              For privacy questions, email{" "}
              <a href="mailto:yvonne@lakeshorewellness.ie">
                yvonne@lakeshorewellness.ie
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page has wandered off.</h1>
      <Link className="button button-primary" to="/">
        Return home
      </Link>
    </main>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
