"use client";

import Image from "next/image";
import anish from "@/assets/ganesh.jpeg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Karla, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { TechStackShowcase } from "@/components/TechStackShowcase";
import { DevDesignShowcase } from "@/components/DevDesignShowcase";
import { EducationShowcase } from "@/components/EducationShowcase";
import MenuFab from "@/components/MenuFab";

const display = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const karla = Karla({ subsets: ["latin"], weight: ["400", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-hero", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" });
      gsap.from(".about-stagger", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.15,
        ease: "power2.out",
      });
      gsap.from(".about-pill", {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.2,
        ease: "back.out(1.4)",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-16 py-12" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 about-hero">
          <div className="relative size-24 rounded-full overflow-hidden ring-2 ring-primary/30">
            <Image src={anish} alt="Ganesh Shah" fill className="object-cover" />
          </div>
          <div>
            <h1 className={`text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-muted-foreground/60 font-bold ${display.className}`}>
              👋 Hi, I’m Ganesh.
            </h1>
            <p className={`text-muted-foreground ${karla.className}`}>Developer • Designer • Game Enthusiast</p>
          </div>
        </div>

        <div className={`mt-8 grid gap-6 about-stagger ${karla.className}`}>
          <p>
            I am a passionate developer and designer who loves building games, web applications,
            and mobile apps that bring ideas to life. Technology for me is not just about coding—it’s
            about creating experiences that are functional, creative, and user‑friendly.
          </p>
          <p>
            I am a proud member of <span className="font-semibold">Wiperspace</span>, a talented game
            development team where I collaborate with creators to design and develop games. We’ve
            participated in hackathons and game jams, including Daydream Biratnagar, building engaging
            projects with Unreal Engine 5. Being part of Wiperspace taught me teamwork, innovation, and
            pushing creative boundaries.
          </p>
          <p>
            Beyond games, I work on web and mobile apps—PHP for backends, Java for Android, and I’m
            always exploring new tools. Whether it’s an interactive browser game, a scalable API, or a
            polished Android app, I enjoy solving real problems.
          </p>
          <p>
            I care deeply about UI/UX. Tech should feel natural and intuitive, so I craft clean,
            modern, user‑centered interfaces. It’s not just about making it work—it’s about making it
            enjoyable and memorable.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "🎮 Game Dev • Unreal Engine 5",
              "💻 Web Dev • PHP & APIs",
              "📱 Android • Java",
              "🎨 UI/UX • Prototyping",
              "🤖 Automation & Chatbots",
            ].map((pill) => (
              <span key={pill} className={`about-pill rounded-full border px-3 py-1 text-xs md:text-sm bg-muted/40 ${mono.className}`}>
                {pill}
              </span>
            ))}
          </div>

          <blockquote className={`pl-4 border-l-2 border-muted text-lg ${display.className}`}>
            I live by the spirit: <span className="font-semibold">“Dev. Dream. Dominate.”</span> 🚀
          </blockquote>

          <TechStackShowcase />

          <DevDesignShowcase />

          <EducationShowcase />

        </div>
      </div>
      <MenuFab />
    </div>
  );
}


