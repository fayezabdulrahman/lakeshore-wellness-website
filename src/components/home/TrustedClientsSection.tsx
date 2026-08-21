import { useEffect, useRef } from "react";
import { clients } from "../../data";

function TrustedLogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ scrollLeft: number; x: number } | null>(null);
  const interactionUntilRef = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) {
      return;
    }

    const autoScroll = () => {
      const primaryGroup = marquee.querySelector<HTMLElement>(".logo-group");
      const groupWidth = primaryGroup?.offsetWidth ?? 0;

      if (groupWidth && Date.now() >= interactionUntilRef.current) {
        marquee.scrollLeft += 1;

        if (marquee.scrollLeft >= groupWidth) {
          marquee.scrollLeft -= groupWidth;
        }
      }
    };

    const autoScrollTimer = window.setInterval(autoScroll, 20);

    return () => window.clearInterval(autoScrollTimer);
  }, []);

  const deferAutoScroll = (milliseconds = 700) => {
    interactionUntilRef.current = Date.now() + milliseconds;
  };

  return (
    <div
      className="logo-marquee"
      ref={marqueeRef}
      role="region"
      aria-label="Trusted clients. Scroll horizontally to browse."
      tabIndex={0}
      onWheel={() => deferAutoScroll()}
      onTouchStart={() => deferAutoScroll(1200)}
      onTouchMove={() => deferAutoScroll(1200)}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") return;

        dragStartRef.current = {
          scrollLeft: event.currentTarget.scrollLeft,
          x: event.clientX,
        };
        event.currentTarget.classList.add("is-dragging");
        event.currentTarget.setPointerCapture(event.pointerId);
        deferAutoScroll(1200);
      }}
      onPointerMove={(event) => {
        if (!dragStartRef.current) return;

        event.currentTarget.scrollLeft =
          dragStartRef.current.scrollLeft -
          (event.clientX - dragStartRef.current.x);
        deferAutoScroll(1200);
      }}
      onPointerUp={(event) => {
        dragStartRef.current = null;
        event.currentTarget.classList.remove("is-dragging");
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={(event) => {
        dragStartRef.current = null;
        event.currentTarget.classList.remove("is-dragging");
      }}
      onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

        event.preventDefault();
        event.currentTarget.scrollBy({
          left: event.key === "ArrowLeft" ? -180 : 180,
          behavior: "smooth",
        });
        deferAutoScroll(1200);
      }}
    >
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
                  <img src={client.logo} alt={duplicate ? "" : client.name} />
                ) : (
                  <span className="client-wordmark">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustedClientsSection() {
  return (
    <section className="trust" aria-label="Selected clients and partners">
      <div className="shell trust-inner">
        <p>Trusted by</p>
        <TrustedLogoMarquee />
      </div>
    </section>
  );
}
