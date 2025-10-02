"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { 
  Laptop, 
  Monitor, 
  Keyboard, 
  Smartphone, 
  Battery, 
  Tablet,
  Headphones,
  Settings,
  Code,
  Globe,
  Shield,
  Apple,
  MonitorSpeaker
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiVercel, 
  SiNetlify, 
  SiPrettier, 
  SiGit, 
  SiGithub, 
  SiYarn, 
  SiNpm, 
  SiBun, 
  SiNotion, 
  SiPostman, 
  SiGithubcopilot, 
  SiOpenai, 
  SiGoogle, 
  SiSpotify, 
  SiAdobe, 
  SiCanva, 
  SiGoogledrive, 
  SiTelegram, 
  SiDiscord
} from "react-icons/si";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import MenuFab from "@/components/MenuFab";
import { Karla, JetBrains_Mono, Playfair_Display } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const karla = Karla({ subsets: ["latin"], weight: ["400", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

interface GearItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  brand?: string;
  model?: string;
  specs?: string[];
}

interface SoftwareItem {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  type: string;
}

const HARDWARE_GEAR: GearItem[] = [
  {
    id: "laptop",
    name: "Dell Inspiron 15",
    category: "Laptop",
    description: "My primary development machine for coding, design, and daily work",
    icon: Laptop,
    brand: "Dell",
    model: "Inspiron 15",
    specs: ["15.6\" Display", "Intel/AMD Processor", "8GB+ RAM", "SSD Storage"]
  },
  {
    id: "monitor",
    name: "Hitech 24 Inch Monitor",
    category: "Monitor",
    description: "External monitor for enhanced productivity and dual-screen setup",
    icon: Monitor,
    brand: "Hitech",
    model: "24 Inch",
    specs: ["24\" Display", "Full HD", "Multiple Ports", "Adjustable Stand"]
  },
  {
    id: "keyboard",
    name: "Fantech Keyboard",
    category: "Keyboard",
    description: "Mechanical keyboard for comfortable and efficient typing",
    icon: Keyboard,
    brand: "Fantech",
    specs: ["Mechanical Switches", "RGB Backlight", "Gaming Grade", "Ergonomic Design"]
  },
  {
    id: "android-phone",
    name: "Redmi Note 9 Pro Max",
    category: "Phone",
    description: "Android smartphone for communication and mobile development",
    icon: Smartphone,
    brand: "Xiaomi",
    model: "Redmi Note 9 Pro Max",
    specs: ["6.67\" Display", "64MP Camera", "5020mAh Battery", "Android 10+"]
  },
  {
    id: "iphone",
    name: "iPhone 13",
    category: "Phone",
    description: "iOS device for testing and personal use",
    icon: Apple,
    brand: "Apple",
    model: "iPhone 13",
    specs: ["6.1\" Super Retina XDR", "A15 Bionic", "Dual Camera", "iOS 15+"]
  },
  {
    id: "powerbank",
    name: "Xiaomi 20kmAh Power Bank",
    category: "Accessory",
    description: "High-capacity power bank for extended device usage",
    icon: Battery,
    brand: "Xiaomi",
    model: "20kmAh",
    specs: ["20000mAh Capacity", "Fast Charging", "Multiple Ports", "LED Display"]
  },
  {
    id: "ipad",
    name: "iPad Pro",
    category: "Tablet",
    description: "Professional tablet for design, note-taking, and creative work",
    icon: Tablet,
    brand: "Apple",
    model: "iPad Pro",
    specs: ["Liquid Retina Display", "M1/M2 Chip", "Apple Pencil Support", "iPadOS"]
  },
  {
    id: "airpods",
    name: "AirPods 2nd Generation",
    category: "Audio",
    description: "Wireless earbuds for calls, music, and focus sessions",
    icon: Headphones,
    brand: "Apple",
    model: "AirPods 2nd Gen",
    specs: ["Wireless Charging", "H1 Chip", "Siri Integration", "5+ Hours Battery"]
  }
];

const SOFTWARE_TOOLS: SoftwareItem[] = [
  // Browsers
  {
    id: "chrome",
    name: "Google Chrome",
    category: "Browser",
    description: "Primary web browser for development, testing, and browsing",
    icon: Globe,
    type: "Web Browser"
  },
  {
    id: "brave",
    name: "Brave Browser",
    category: "Browser",
    description: "Privacy-focused browser for secure browsing and development",
    icon: Shield,
    type: "Privacy Browser"
  },
  
  // Code Editors
  {
    id: "vscode",
    name: "Visual Studio Code",
    category: "Code Editor",
    description: "Main code editor for all development projects",
    icon: Code,
    type: "Code Editor"
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "Code Editor",
    description: "AI-powered code editor for enhanced development experience",
    icon: Code,
    type: "AI Code Editor"
  },
  
  // Development Frameworks
  {
    id: "react",
    name: "React.js",
    category: "Framework",
    description: "JavaScript library for building user interfaces",
    icon: SiReact,
    type: "Frontend Framework"
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Framework",
    description: "React framework for production with server-side rendering",
    icon: SiNextdotjs,
    type: "Full-Stack Framework"
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    category: "Styling",
    description: "Utility-first CSS framework for rapid UI development",
    icon: SiTailwindcss,
    type: "CSS Framework"
  },
  
  // Deployment & Hosting
  {
    id: "vercel",
    name: "Vercel",
    category: "Deployment",
    description: "Platform for deploying and hosting web applications",
    icon: SiVercel,
    type: "Hosting Platform"
  },
  {
    id: "netlify",
    name: "Netlify",
    category: "Deployment",
    description: "Web development platform for static sites and serverless functions",
    icon: SiNetlify,
    type: "Hosting Platform"
  },
  
  // Development Tools
  {
    id: "prettier",
    name: "Prettier",
    category: "Code Formatter",
    description: "Code formatter for consistent code style across projects",
    icon: SiPrettier,
    type: "Code Formatter"
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    description: "Distributed version control system for tracking code changes",
    icon: SiGit,
    type: "Version Control"
  },
  {
    id: "github-desktop",
    name: "GitHub Desktop",
    category: "Version Control",
    description: "Desktop application for Git and GitHub workflow",
    icon: SiGithub,
    type: "Git GUI"
  },
  
  // Package Managers
  {
    id: "yarn",
    name: "Yarn",
    category: "Package Manager",
    description: "Fast, reliable, and secure dependency management",
    icon: SiYarn,
    type: "Package Manager"
  },
  {
    id: "npm",
    name: "npm",
    category: "Package Manager",
    description: "Node.js package manager for JavaScript dependencies",
    icon: SiNpm,
    type: "Package Manager"
  },
  {
    id: "bun",
    name: "Bun",
    category: "Package Manager",
    description: "Fast all-in-one JavaScript runtime and package manager",
    icon: SiBun,
    type: "Runtime & Package Manager"
  },
  
  // Productivity & Documentation
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description: "All-in-one workspace for notes, docs, and project management",
    icon: SiNotion,
    type: "Productivity Tool"
  },
  {
    id: "postman",
    name: "Postman",
    category: "API Testing",
    description: "API development and testing platform",
    icon: SiPostman,
    type: "API Tool"
  },
  
  // AI Tools
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "AI Assistant",
    description: "AI pair programmer that helps write code faster",
    icon: SiGithubcopilot,
    type: "AI Code Assistant"
  },
  {
    id: "claude",
    name: "Claude AI",
    category: "AI Assistant",
    description: "AI assistant for coding help and problem solving",
    icon: SiOpenai,
    type: "AI Assistant"
  },
  {
    id: "chatgpt",
    name: "OpenAI ChatGPT",
    category: "AI Assistant",
    description: "AI chatbot for coding assistance and general queries",
    icon: SiOpenai,
    type: "AI Assistant"
  },
  {
    id: "v0",
    name: "v0",
    category: "AI Tool",
    description: "AI-powered UI component generator by Vercel",
    icon: SiVercel,
    type: "AI UI Generator"
  },
  {
    id: "google-ai",
    name: "Google AI Studio",
    category: "AI Tool",
    description: "Google's platform for AI model development and testing",
    icon: SiGoogle,
    type: "AI Development Platform"
  },
  
  // Operating System
  {
    id: "windows",
    name: "Windows 11",
    category: "Operating System",
    description: "Primary operating system for development and daily use",
    icon: MonitorSpeaker,
    type: "OS"
  }
];

const APPLICATIONS: SoftwareItem[] = [
  // Media & Entertainment
  {
    id: "spotify",
    name: "Spotify",
    category: "Music",
    description: "Music streaming service for background music while coding",
    icon: SiSpotify,
    type: "Music Streaming"
  },
  
  // Design & Creative
  {
    id: "photoshop",
    name: "Photoshop",
    category: "Design",
    description: "Professional image editing and graphic design software",
    icon: SiAdobe,
    type: "Image Editor"
  },
  {
    id: "after-effects",
    name: "After Effects",
    category: "Design",
    description: "Motion graphics and visual effects software",
    icon: SiAdobe,
    type: "Motion Graphics"
  },
  {
    id: "canva",
    name: "Canva",
    category: "Design",
    description: "Online design tool for creating graphics and presentations",
    icon: SiCanva,
    type: "Design Tool"
  },
  
  // Cloud & Storage
  {
    id: "google-drive",
    name: "Google Drive",
    category: "Cloud Storage",
    description: "Cloud storage service for files and collaboration",
    icon: SiGoogledrive,
    type: "Cloud Storage"
  },
  
  // Communication
  {
    id: "telegram",
    name: "Telegram",
    category: "Communication",
    description: "Secure messaging app for team communication",
    icon: SiTelegram,
    type: "Messaging App"
  },
  {
    id: "discord",
    name: "Discord",
    category: "Communication",
    description: "Voice and text communication platform for developers",
    icon: SiDiscord,
    type: "Communication Platform"
  }
];

export default function GearPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".gear-hero", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" });
      gsap.from(".gear-stagger", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.05,
        delay: 0.15,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-16 py-12" ref={containerRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="gear-hero mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid place-items-center size-16 rounded-2xl bg-blue-500/10 border">
              <Settings className="size-8 text-blue-500" />
            </div>
            <div>
              <h1 className={`text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-muted-foreground/60 font-bold ${display.className}`}>
                My Gear & Uses
              </h1>
              <p className={`text-muted-foreground ${karla.className}`}>
                A peek into the tools and technologies I use daily
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 gear-stagger">
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-blue-500">{HARDWARE_GEAR.length}</div>
            <div className="text-sm text-muted-foreground">Hardware Items</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{SOFTWARE_TOOLS.length}</div>
            <div className="text-sm text-muted-foreground">Coding Tools</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{APPLICATIONS.length}</div>
            <div className="text-sm text-muted-foreground">Applications</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">Daily</div>
            <div className="text-sm text-muted-foreground">Usage</div>
          </div>
        </div>

        {/* Hardware Section */}
        <div className="mb-12 gear-stagger">
          <div className="flex items-center gap-3 mb-8">
            <div className="grid place-items-center size-12 rounded-xl bg-blue-500/10 border">
              <Laptop className="size-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Hardware</h2>
              <p className="text-muted-foreground">Physical devices and equipment I use</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HARDWARE_GEAR.map((item, index) => (
              <GearCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Coding Tools Section */}
        <div className="mb-12 gear-stagger">
          <div className="flex items-center gap-3 mb-8">
            <div className="grid place-items-center size-12 rounded-xl bg-green-500/10 border">
              <Code className="size-6 text-green-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Coding Tools</h2>
              <p className="text-muted-foreground">Development frameworks, tools, and AI assistants</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFTWARE_TOOLS.map((item, index) => (
              <SoftwareCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="gear-stagger">
          <div className="flex items-center gap-3 mb-8">
            <div className="grid place-items-center size-12 rounded-xl bg-purple-500/10 border">
              <Settings className="size-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Software/Applications</h2>
              <p className="text-muted-foreground">Design tools, communication apps, and productivity software</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APPLICATIONS.map((item, index) => (
              <ApplicationCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
      <MenuFab />
    </div>
  );
}

function GearCard({ item, index }: { item: GearItem; index: number }) {
  const IconComponent = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid place-items-center size-12 rounded-xl bg-blue-500/10 border">
              <IconComponent className="size-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.category}</p>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
          
          {item.brand && (
            <div className="mb-3">
              <span className="text-xs font-medium text-muted-foreground">Brand: </span>
              <span className="text-sm font-medium">{item.brand}</span>
              {item.model && (
                <>
                  <span className="text-xs text-muted-foreground mx-1">•</span>
                  <span className="text-sm">{item.model}</span>
                </>
              )}
            </div>
          )}
          
          {item.specs && (
            <div>
              <h4 className="text-xs font-medium text-muted-foreground mb-2">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {item.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded-full text-xs border bg-muted/40 ${mono.className}`}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

function SoftwareCard({ item, index }: { item: SoftwareItem; index: number }) {
  const IconComponent = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid place-items-center size-12 rounded-xl bg-green-500/10 border">
              <IconComponent className="size-6 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-green-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.type}</p>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              {item.category}
            </span>
            <div className="flex items-center gap-1 text-green-500">
              <div className="size-2 rounded-full bg-green-500" />
              <span className="text-xs font-medium">Active</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function ApplicationCard({ item, index }: { item: SoftwareItem; index: number }) {
  const IconComponent = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="grid place-items-center size-12 rounded-xl bg-purple-500/10 border">
              <IconComponent className="size-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:text-purple-500 transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">{item.type}</p>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">
              {item.category}
            </span>
            <div className="flex items-center gap-1 text-purple-500">
              <div className="size-2 rounded-full bg-purple-500" />
              <span className="text-xs font-medium">Active</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
