import { ArrowUpRight } from "lucide-react";
import { retreatContent, retreatLinks, retreatMedia } from "../../data/retreat";

export function RetreatVenueSection() {
  const content = retreatContent.venue;
  return (
    <section className="retreat-section retreat-venue">
      <div className="shell">
        <div className="retreat-venue-heading">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.heading}<br /><em>{content.headingEmphasis}</em></h2>
          </div>
          <div className="retreat-body-copy">
            <p>
              {content.description}
            </p>
            <a className="text-link" href={retreatLinks.venue} target="_blank" rel="noreferrer">
              {content.linkLabel} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="retreat-venue-gallery">
          <figure className="retreat-venue-main gsap-image-reveal">
            <img
              src={retreatMedia.estate.src}
              alt={retreatMedia.estate.alt}
              width={retreatMedia.estate.width}
              height={retreatMedia.estate.height}
              loading="lazy"
            />
            <figcaption>{retreatMedia.estate.caption}</figcaption>
          </figure>
          <figure className="retreat-venue-secondary">
            <img
              src={retreatMedia.sittingRoom.src}
              alt={retreatMedia.sittingRoom.alt}
              width={retreatMedia.sittingRoom.width}
              height={retreatMedia.sittingRoom.height}
              loading="lazy"
            />
            <figcaption>{retreatMedia.sittingRoom.caption}</figcaption>
          </figure>
        </div>
        <div className="retreat-venue-note">
          <span>{content.location}</span>
          <span>{content.travelNote}</span>
        </div>
      </div>
    </section>
  );
}
