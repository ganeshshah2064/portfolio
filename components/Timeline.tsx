"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

type Item = {
  period: string;
  role: string;
  org: string;
  description: string;
};

const TIMELINE: Item[] = [
  {
    period: "Sep 2023 - Present",
    role: "Tech Team Head",
    org: "Eclectica TMSL",
    description:
      "Developed their Official Website and a Blog with matching aesthetics, made 3D IDs, organized events, and managed the tech team.",
  },
  {
    period: "August 2025 - Present",
    role: "Frontend Dev",
    org: "DialedWeb",
    description: "Cooking cool things :)",
  },
  {
    period: "April 2025 - Present",
    role: "FullStack Intern",
    org: "GrowEasy",
    description:
      "Shipped new projects, apps and lots more. Improved user interface, SEO and added many features.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Progress line fills as you scroll
      gsap.fromTo(
        ".tl-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: ".tl-wrap",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      // Each item reveals on enter
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Soft pulse on active marker
      gsap.utils.toArray<HTMLElement>(".tl-marker").forEach((el) => {
        gsap.to(el, {
          boxShadow: "0 0 24px rgba(190, 242, 100, 0.35)",
          repeat: -1,
          yoyo: true,
          duration: 1.6,
          ease: "sine.inOut",
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="mt-10 md:mt-16">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-foreground/80">Timeline</h2>
      <div className="relative mt-8 md:mt-12 tl-wrap">
        {/* Base line */}
        <div className="absolute left-[34px] md:left-[40px] top-0 bottom-0 w-px bg-muted" />
        {/* Progress line */}
        <div className="absolute left-[34px] md:left-[40px] top-0 bottom-0 w-px bg-lime-400/70 tl-progress" />
        <ul className="space-y-10 md:space-y-14">
          {TIMELINE.map((item, idx) => (
            <li key={idx} className="grid grid-cols-[110px,1fr] md:grid-cols-[160px,1fr] items-start gap-4 tl-item">
              <div className="text-lime-400 md:text-lg leading-snug font-medium">
                {item.period.split(" - ")[0]} <br className="hidden md:block" />
                <span className="text-sm md:text-base text-lime-300/90">- Present</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="tl-marker shrink-0 size-14 grid place-items-center rounded-full bg-muted/50 border">
                  <ArrowUpRight className="size-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                    <span className="font-semibold">{item.role}</span>
                    <span className="text-muted-foreground">{item.org}</span>
                  </div>
                  <div className="mt-3 border border-dashed rounded-xl p-4 md:p-5 bg-card/40">
                    <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


