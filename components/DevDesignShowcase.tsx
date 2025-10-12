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
    <div ref={ref} className="rounded-2xl border bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-lime-400/10 backdrop-blur p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto">
          <IconPill>
            <Database className="dev-icon size-5 sm:size-6" />
          </IconPill>

          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-blue-500/50 to-transparent dev-line" />

          <IconPill highlight>
            <Monitor className="dev-center size-5 sm:size-6" />
          </IconPill>

          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-lime-400/50 dev-line" />

          <IconPill>
            <Paintbrush className="dev-icon size-5 sm:size-6" />
          </IconPill>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Dev & <span className="italic text-lime-400">Design</span>
        </h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
          Excels in both development and design to create a seamless and intuitive user experience.
        </p>
      </div>
    </div>
  );
}

function IconPill({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`grid place-items-center size-10 sm:size-12 md:size-14 rounded-xl border ${
        highlight ? "bg-gradient-to-br from-lime-400/90 to-lime-500/80 text-black shadow-lg shadow-lime-400/25" : "bg-gradient-to-br from-muted/60 to-muted/40"
      }`}
    >
      {children}
    </div>
  );
}


