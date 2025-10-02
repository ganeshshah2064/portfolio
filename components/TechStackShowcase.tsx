"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiDocker, SiMongodb, SiPostgresql, SiTailwindcss, SiAndroid, SiPhp, SiLaravel } from "react-icons/si";

export function TechStackShowcase() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tech-float").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: gsap.utils.random(-8, 8), opacity: 0 },
          {
            opacity: 0.9,
            y: `+=${gsap.utils.random(-8, 8)}`,
            duration: gsap.utils.random(1.8, 2.8),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.06,
          }
        );
      });
    }, boxRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={boxRef}
      className="rounded-2xl border bg-card/60 backdrop-blur relative overflow-hidden p-6 md:p-8"
    >
      <div className="absolute inset-0 pointer-events-none">
        <IconGrid />
      </div>
      <div className="relative">
        <span className="inline-block rounded-md bg-lime-300/70 dark:bg-lime-600/40 px-2 py-1 text-sm italic">
          Multiple Tech Stack
        </span>
        <h3 className="mt-3 text-xl md:text-2xl font-semibold">I work across modern stacks</h3>
        <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
          I have worked with multiple technologies and frameworks to build scalable and efficient
          applications.
        </p>
      </div>
    </div>
  );
}

function IconGrid() {
  const icons = [
    <SiReact key="react" className="text-cyan-400" />, 
    <SiNextdotjs key="next" className="text-white/80" />, 
    <SiNodedotjs key="node" className="text-green-500" />, 
    <SiTypescript key="ts" className="text-sky-500" />, 
    <SiJavascript key="js" className="text-yellow-400" />, 
    <SiDocker key="docker" className="text-sky-400" />, 
    <SiMongodb key="mongo" className="text-green-600" />, 
    <SiPostgresql key="pg" className="text-sky-300" />, 
    <SiTailwindcss key="tw" className="text-cyan-300" />, 
    <SiAndroid key="android" className="text-green-500" />, 
    <SiPhp key="php" className="text-indigo-300" />, 
    <SiLaravel key="laravel" className="text-red-500" />
  ];

  return (
    <div className="grid grid-cols-6 md:grid-cols-8 gap-6 opacity-70">
      {icons.map((Icon, idx) => (
        <div key={idx} className="aspect-square tech-float grid place-items-center">
          {Icon}
        </div>
      ))}
    </div>
  );
}


