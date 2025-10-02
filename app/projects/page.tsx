"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { 
  ExternalLink, 
  Github, 
  Code, 
  Gamepad2, 
  Globe, 
  Smartphone,
  Award,
  Users,
  Calendar,
  Tag
} from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPhp, 
  SiLaravel, 
  SiMysql, 
  SiMongodb, 
  SiTailwindcss, 
  SiBootstrap, 
  SiHtml5, 
  SiCss3, 
  SiOpenjdk, 
  SiAndroid, 
  SiFirebase, 
  SiSocketdotio, 
  SiVite, 
  SiVercel, 
  SiExpress, 
  SiFramer, 
  SiPython, 
  SiDiscord, 
  SiTelegram, 
  SiGoogle, 
  SiOpenai,
  SiUnrealengine,
  SiCplusplus,
  SiThreedotjs
} from "react-icons/si";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import MenuFab from "@/components/MenuFab";
import { Karla, JetBrains_Mono, Playfair_Display } from "next/font/google";

const display = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const karla = Karla({ subsets: ["latin"], weight: ["400", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  technologies: string[];
  category: "web" | "game" | "mobile" | "other";
  status: "completed" | "in-progress" | "planned";
  year: string;
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
  highlights?: string[];
  team?: string;
  awards?: string[];
}

const PROJECTS: Project[] = [
  {
    id: "tictactoe-multiplayer",
    title: "Tic Tac Toe Multiplayer Game",
    description: "Real-time multiplayer Tic Tac Toe game with live chat and beautiful animations",
    longDescription: "A fully-featured real-time multiplayer Tic Tac Toe game built with React, TypeScript, and Socket.io. Features live chat, confetti effects, responsive design, and random room generation for seamless multiplayer experience.",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Socket.io", "Node.js", "Express", "Lucide React", "Sonner", "Magic UI"],
    category: "web",
    status: "completed",
    year: "2024",
    links: {
      live: "https://tictactoe-ganesh.vercel.app",
      github: "https://github.com/ganeshshah2064/tictactoe"
    },
    highlights: [
      "Real-time multiplayer gameplay",
      "Live chat functionality",
      "Beautiful UI with animations",
      "Confetti effects on winning",
      "Responsive design",
      "Random username and room generation"
    ]
  },
  {
    id: "crackzone-gaming",
    title: "CrackZone - Gaming Tournament Platform",
    description: "Modern gaming platform focused on Free Fire tournaments with comprehensive features",
    longDescription: "CrackZone is a comprehensive gaming tournament platform specifically designed for Free Fire tournaments. Features include match creation, wallet management, digital store, team communication, referral system, odds system, and leaderboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Framer Motion", "Socket.io", "NextAuth.js"],
    category: "web",
    status: "completed",
    year: "2024",
    links: {
      github: "https://github.com/ganeshshah2064/crackzone"
    },
    highlights: [
      "Tournament System (Free Fire Focused)",
      "Wallet & Top-Up System",
      "Digital Store for Products",
      "Team & Communication System",
      "Referral System",
      "Odds System",
      "Leaderboard System",
      "Blog Section",
      "Web Admin Panel"
    ]
  },
  {
    id: "task-management-php",
    title: "Task Management System",
    description: "PHP-based task management system for efficient project tracking and organization",
    longDescription: "A comprehensive task management system built with PHP and MySQL that facilitates creation, assignment, and tracking of tasks. Features include task categorization, status management, deadline tracking, and responsive dashboard.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap", "JavaScript"],
    category: "web",
    status: "completed",
    year: "2023",
    links: {
      github: "https://github.com/ganeshshah2064/task-management-system"
    },
    highlights: [
      "Add/Edit/Delete tasks",
      "Task categorization and priorities",
      "Status tracking (Pending/In Progress/Completed)",
      "Due date management",
      "Dashboard with statistics",
      "Mobile-friendly responsive design"
    ]
  },
  {
    id: "nepali-career-guide",
    title: "Nepali Student AI Career Guide",
    description: "AI-powered career guidance system for Nepali students using Mistral model",
    longDescription: "An intelligent AI-powered career suggestion system specifically designed for Nepali students. Uses Mistral model via OpenRouter to provide faculty suggestions, career paths, job roles with salary info, and location-based college recommendations.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "OpenRouter API", "Mistral AI", "JavaScript"],
    category: "web",
    status: "completed",
    year: "2024",
    links: {
      github: "https://github.com/ganeshshah2064/nepali-career-guide"
    },
    highlights: [
      "AI-powered guidance using Mistral model",
      "Faculty suggestion after SEE",
      "Career path steps and job roles",
      "Salary information (Nepal & abroad)",
      "Free learning resources",
      "Location-based college suggestions",
      "Bilingual support (English/Nepali)"
    ]
  },
  {
    id: "career-guru-gemini",
    title: "Nepali Student AI Career Guru",
    description: "Web application using Google's Gemini API for comprehensive career guidance",
    longDescription: "A sophisticated career guidance web application that uses Google's Gemini API to provide personalized career advice to Nepali students. Features include student form collection, AI-powered suggestions, faculty recommendations, and admin panel for management.",
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Google Gemini API"],
    category: "web",
    status: "completed",
    year: "2024",
    links: {
      github: "https://github.com/ganeshshah2064/career-guru-gemini"
    },
    highlights: [
      "Google Gemini API integration",
      "Student information collection",
      "AI-powered career suggestions",
      "Faculty recommendations",
      "Career roadmap suggestions",
      "College recommendations",
      "Admin panel for management",
      "Bilingual support"
    ]
  },
  {
    id: "eclectica-website",
    title: "Eclectica TMSL Official Website",
    description: "Official website and blog for Eclectica TMSL with matching aesthetics and 3D elements",
    longDescription: "Developed the complete official website for Eclectica TMSL including a blog system with modern design aesthetics. Implemented 3D interactive elements and managed the entire tech team for the project.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    category: "web",
    status: "completed",
    year: "2023-2024",
    links: {
      live: "https://eclectica-tmsl.com",
      github: "https://github.com/ganeshshah2064/eclectica-website"
    },
    highlights: [
      "Modern responsive design",
      "3D interactive elements",
      "Blog management system",
      "Team collaboration platform"
    ],
    team: "Eclectica TMSL Tech Team"
  },
  {
    id: "wiperspace-games",
    title: "Wiperspace Game Development",
    description: "Game development projects with Unreal Engine 5, including hackathon winners",
    longDescription: "Collaborated with Wiperspace team to develop multiple games using Unreal Engine 5. Participated in various game jams and hackathons, including winning the Game Jam at Daydream Biratnagar.",
    technologies: ["Unreal Engine 5", "C++", "Blueprints", "3D Modeling", "Game Design"],
    category: "game",
    status: "completed",
    year: "2023-2024",
    links: {
      demo: "https://wiperspace.itch.io"
    },
    highlights: [
      "Won Game Jam at Daydream Biratnagar",
      "Multiple game prototypes",
      "Team collaboration in game development",
      "3D environment design"
    ],
    team: "Wiperspace",
    awards: ["Winner - Daydream Biratnagar Game Jam"]
  },
  {
    id: "dialedweb-projects",
    title: "DialedWeb Frontend Projects",
    description: "Frontend development work at DialedWeb - building modern web applications",
    longDescription: "Working as Frontend Developer at DialedWeb, creating modern and responsive web applications with focus on user experience and performance optimization.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "web",
    status: "in-progress",
    year: "2024-Present",
    links: {
      live: "https://dialedweb.com"
    },
    highlights: [
      "Modern web applications",
      "Performance optimization",
      "Responsive design",
      "User experience focus"
    ],
    team: "DialedWeb"
  },
  {
    id: "groweasy-platform",
    title: "GrowEasy Platform Development",
    description: "Full-stack development for GrowEasy platform with improved UI/UX and new features",
    longDescription: "Working as Full-Stack Intern at GrowEasy, shipping new projects and applications. Improved user interface, SEO optimization, and added numerous features to enhance platform functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS"],
    category: "web",
    status: "in-progress",
    year: "2024-Present",
    highlights: [
      "Full-stack development",
      "UI/UX improvements",
      "SEO optimization",
      "Feature development",
      "Performance enhancements"
    ],
    team: "GrowEasy"
  },
  {
    id: "android-apps",
    title: "Android Mobile Applications",
    description: "Native Android applications built with Java, focusing on user-friendly interfaces",
    longDescription: "Developed multiple Android applications using Java, focusing on clean architecture and user-friendly interfaces. Created apps for various purposes including productivity and entertainment.",
    technologies: ["Java", "Android SDK", "XML", "SQLite", "Firebase"],
    category: "mobile",
    status: "completed",
    year: "2023-2024",
    links: {
      github: "https://github.com/ganeshshah2064/android-projects"
    },
    highlights: [
      "Native Android development",
      "Clean architecture",
      "User-friendly interfaces",
      "Database integration"
    ]
  },
  {
    id: "php-backend-apis",
    title: "PHP Backend APIs & Web Services",
    description: "Scalable backend APIs and web services built with PHP and Laravel",
    longDescription: "Developed robust backend APIs and web services using PHP and Laravel framework. Focused on scalability, security, and efficient data management for various web applications.",
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Authentication", "Database Design"],
    category: "web",
    status: "completed",
    year: "2023-2024",
    links: {
      github: "https://github.com/ganeshshah2064/php-backend-projects"
    },
    highlights: [
      "RESTful API development",
      "Database optimization",
      "Authentication systems",
      "Scalable architecture"
    ]
  },
  {
    id: "automation-tools",
    title: "Automation Tools & Chatbots",
    description: "Custom automation tools and intelligent chatbots for various platforms",
    longDescription: "Built automation tools and chatbots to streamline workflows and improve user engagement. Created intelligent bots that can handle customer queries and automate repetitive tasks.",
    technologies: ["Python", "Node.js", "Discord.js", "Telegram Bot API", "Webhooks", "AI/ML"],
    category: "other",
    status: "completed",
    year: "2023-2024",
    links: {
      github: "https://github.com/ganeshshah2064/automation-tools"
    },
    highlights: [
      "Workflow automation",
      "Intelligent chatbots",
      "Multi-platform integration",
      "AI-powered responses"
    ]
  }
];

const CATEGORY_ICONS = {
  web: Globe,
  game: Gamepad2,
  mobile: Smartphone,
  other: Code
};

const STATUS_COLORS = {
  completed: "bg-green-500/20 text-green-600 border-green-500/30",
  "in-progress": "bg-blue-500/20 text-blue-600 border-blue-500/30",
  planned: "bg-yellow-500/20 text-yellow-600 border-yellow-500/30"
};

const TECH_ICONS: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "React": SiReact,
  "React 18": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Node.js": SiNodedotjs,
  "PHP": SiPhp,
  "Laravel": SiLaravel,
  "MySQL": SiMysql,
  "MongoDB": SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": SiBootstrap,
  "Bootstrap 5": SiBootstrap,
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "Java": SiOpenjdk,
  "Android SDK": SiAndroid,
  "Firebase": SiFirebase,
  "Socket.io": SiSocketdotio,
  "Vite": SiVite,
  "Vercel": SiVercel,
  "Express": SiExpress,
  "Framer Motion": SiFramer,
  "Python": SiPython,
  "Discord.js": SiDiscord,
  "Telegram Bot API": SiTelegram,
  "Google Gemini API": SiGoogle,
  "OpenRouter API": SiOpenai,
  "Mistral AI": SiOpenai,
  "Unreal Engine 5": SiUnrealengine,
  "C++": SiCplusplus,
  "Three.js": SiThreedotjs,
  "Lucide React": SiReact,
  "Sonner": SiReact,
  "Magic UI": SiReact,
  "NextAuth.js": SiNextdotjs,
  "Webhooks": SiNodedotjs,
  "AI/ML": SiOpenai,
  "3D Modeling": SiThreedotjs,
  "Game Design": SiUnrealengine,
  "Blueprints": SiUnrealengine,
  "XML": SiHtml5,
  "SQLite": SiMysql,
  "REST APIs": SiNodedotjs,
  "Authentication": SiNodedotjs,
  "Database Design": SiMysql
};

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".project-hero", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" });
      gsap.from(".project-stagger", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.1,
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
        <div className="project-hero mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid place-items-center size-16 rounded-2xl bg-primary/10 border">
              <Code className="size-8 text-primary" />
            </div>
            <div>
              <h1 className={`text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-muted-foreground/60 font-bold ${display.className}`}>
                My Projects
              </h1>
              <p className={`text-muted-foreground ${karla.className}`}>
                A showcase of my development journey across web, mobile, and game development
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 project-stagger">
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-primary">{PROJECTS.length}</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{PROJECTS.filter(p => p.status === 'completed').length}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{PROJECTS.filter(p => p.status === 'in-progress').length}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{new Set(PROJECTS.flatMap(p => p.technologies)).size}</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 project-stagger">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
      <MenuFab />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const CategoryIcon = CATEGORY_ICONS[project.category];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="grid place-items-center size-12 rounded-xl bg-primary/10 border">
                <CategoryIcon className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${STATUS_COLORS[project.status]}`}>
                    <div className="size-2 rounded-full bg-current" />
                    {project.status.replace('-', ' ')}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </div>
            {project.awards && project.awards.length > 0 && (
              <div className="flex items-center gap-1 text-yellow-600">
                <Award className="size-4" />
                <span className="text-sm font-medium">Award Winner</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                <Tag className="size-4" />
                Key Highlights
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="size-1.5 rounded-full bg-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Team Info */}
          {project.team && (
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="size-4" />
              <span>Team: {project.team}</span>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => {
                const IconComponent = TECH_ICONS[tech];
                return (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs border bg-muted/40 flex items-center gap-2 ${mono.className}`}
                  >
                    {IconComponent && <IconComponent className="size-3" />}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3">
              {project.links.live && (
                <Button asChild variant="default" size="sm">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="size-4" />
                    Source Code
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Gamepad2 className="size-4" />
                    Play Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
