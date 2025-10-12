"use client";

import { GraduationCap, BookOpenText } from "lucide-react";

export function EducationShowcase() {
  return (
    <section className="rounded-2xl border bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-lime-400/10 backdrop-blur p-4 sm:p-6 md:p-8">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="grid place-items-center size-10 sm:size-12 md:size-14 rounded-xl border bg-gradient-to-br from-lime-400/90 to-lime-500/80 text-black shadow-lg shadow-lime-400/25">
          <GraduationCap className="size-5 sm:size-6" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-lime-400/30 via-muted/50 to-emerald-400/30" />
        <div className="grid place-items-center size-10 sm:size-12 md:size-14 rounded-xl border bg-gradient-to-br from-muted/60 to-muted/40">
          <BookOpenText className="size-5 sm:size-6" />
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Education <span className="italic text-lime-400">Journey</span>
        </h3>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">A glimpse into my educational journey.</p>

        <div className="mt-4 sm:mt-6 grid gap-3 sm:gap-4">
          <EduItem
            title="Sushma Godawari College"
            subtitle="+2 management"
            period="JUL 2024 - APR 2026"
            desc="Currently studying +2 Computer Science at Sushma Godawari College."
          />

          <EduItem
            title="Standard Secondary Boarding School"
            subtitle="Secondary Education"
            period="JUN 2012 - MAR 2024"
            desc="Completed foundational schooling with focus on analytical thinking and discipline."
          />
        </div>
      </div>
    </section>
  );
}

function EduItem({ title, subtitle, period, desc }: { title: string; subtitle: string; period: string; desc: string }) {
  return (
    <div className="border rounded-xl p-3 sm:p-4 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm">
        <span className="font-semibold text-sm sm:text-base">{title}</span>
        <span className="text-muted-foreground text-xs sm:text-sm">{subtitle}</span>
        <span className="text-xs sm:text-sm text-lime-400 font-medium sm:ml-auto">{period}</span>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}


