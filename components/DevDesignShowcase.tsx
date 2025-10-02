"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Database, Monitor, Paintbrush } from "lucide-react";

export function DevDesignShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".dev-line", { scaleX: 0, transformOrigin: "left", duration: 0.6, ease: "power2.out" });
      gsap.from(".dev-icon", { opacity: 0, y: 8, duration: 0.4, stagger: 0.1 });
      gsap.fromTo(
        ".dev-center",
        { boxShadow: "0 0 0 rgba(190, 242, 100, 0)" },
        { boxShadow: "0 0 24px rgba(190, 242, 100, 0.45)", repeat: -1, yoyo: true, duration: 1.8, ease: "sine.inOut" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="rounded-2xl border bg-card/60 backdrop-blur p-6 md:p-8">
      <div className="flex items-center justify-between gap-6">
        <IconPill>
          <Database className="dev-icon size-6" />
        </IconPill>

        <div className="h-px flex-1 bg-muted dev-line" />

        <IconPill highlight>
          <Monitor className="dev-center size-6" />
        </IconPill>

        <div className="h-px flex-1 bg-muted dev-line" />

        <IconPill>
          <Paintbrush className="dev-icon size-6" />
        </IconPill>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">
          Dev & <span className="italic text-lime-400">Design</span>
        </h3>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Excels in both development and design to create a seamless and intuitive user experience.
        </p>
      </div>
    </div>
  );
}

function IconPill({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`grid place-items-center size-14 rounded-xl border ${
        highlight ? "bg-lime-400/80 text-black" : "bg-muted/50"
      }`}
    >
      {children}
    </div>
  );
}


