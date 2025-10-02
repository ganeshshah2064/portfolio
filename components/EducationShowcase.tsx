"use client";

import { GraduationCap, BookOpenText } from "lucide-react";

export function EducationShowcase() {
  return (
    <section className="rounded-2xl border bg-card/60 backdrop-blur p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="grid place-items-center size-14 rounded-xl border bg-lime-400/80 text-black">
          <GraduationCap className="size-6" />
        </div>
        <div className="h-px flex-1 bg-muted" />
        <div className="grid place-items-center size-14 rounded-xl border bg-muted/50">
          <BookOpenText className="size-6" />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">
          Education <span className="italic text-lime-400">Journey</span>
        </h3>
        <p className="mt-2 text-muted-foreground">A glimpse into my educational journey.</p>

        <div className="mt-6 grid gap-4">
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
    <div className="border rounded-xl p-4 bg-card/40">
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold">{title}</span>
        <span className="text-muted-foreground">{subtitle}</span>
        <span className="ml-auto text-xs text-lime-400">{period}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}


