import { useEffect, type RefObject } from "react";

export function useGsapPolish(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let dispose: (() => void) | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollTriggerModule]) => {
        if (cancelled || !scope.current) return;

        const gsap = gsapModule.default;
        const { ScrollTrigger } = scrollTriggerModule;
        gsap.registerPlugin(ScrollTrigger);

        const context = gsap.context(() => {
          const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

          if (reducedMotion) {
            return;
          }

          const introElements =
            gsap.utils.toArray<HTMLElement>(".motion-intro");

          if (introElements.length > 0) {
            gsap.from(introElements, {
              y: 42,
              opacity: 0,
              duration: 1.05,
              stagger: 0.1,
              ease: "power3.out",
            });
          }

          gsap.utils
            .toArray<HTMLElement>(".gsap-image-reveal")
            .forEach((element) => {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: element,
                    start: "top 92%",
                    end: "bottom -10%",
                    scrub: 0.9,
                  },
                })
                .fromTo(
                  element,
                  {
                    scale: 0.86,
                    opacity: 0.58,
                    filter: "brightness(0.82) saturate(0.78)",
                  },
                  {
                    scale: 1,
                    opacity: 1,
                    filter: "brightness(1) saturate(1)",
                    ease: "none",
                    duration: 0.58,
                  },
                )
                .to(element, {
                  scale: 1.035,
                  opacity: 0.28,
                  filter: "brightness(0.62) saturate(0.7)",
                  ease: "none",
                  duration: 0.42,
                });
            });

          const stackCards =
            gsap.utils.toArray<HTMLElement>(".gsap-stack-card");

          stackCards.forEach((card, index) => {
            gsap.fromTo(
              card,
              {
                y: 90,
                scale: 0.96,
              },
              {
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 42%",
                  scrub: 0.8,
                },
              },
            );

            const nextCard = stackCards[index + 1];
            if (nextCard) {
              gsap.to(card, {
                scale: 0.955,
                filter: "brightness(0.88)",
                ease: "none",
                scrollTrigger: {
                  trigger: nextCard,
                  start: "top 78%",
                  end: "top 30%",
                  scrub: 0.8,
                },
              });
            }
          });
        }, scope);

        dispose = () => context.revert();
      },
    );

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [scope]);
}
