"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  Hash,
  Download,
  Eye
} from "lucide-react";
import { Card } from "@/components/card";
import { Button } from "@/components/ui/button";
import MenuFab from "@/components/MenuFab";
import { Karla, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Image from "next/image";

// Import certificate images
import sqlCert from "@/assets/E354811C2C31.png";
import cCert from "@/assets/7952B9E32BF7.png";

const display = Playfair_Display({ subsets: ["latin"], weight: ["700", "800"] });
const karla = Karla({ subsets: ["latin"], weight: ["400", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"] });

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId: string;
  skills: string[];
  imageUrl?: string;
  credentialUrl?: string;
  description?: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "sql-basics",
    title: "Learn SQL Basics",
    issuer: "Programiz",
    issuedDate: "Oct 2025",
    credentialId: "E354811C2C31",
    skills: ["SQL", "Database", "Data Management"],
    imageUrl: sqlCert,
    credentialUrl: "#",
    description: "Comprehensive course covering SQL fundamentals, database design, and data manipulation techniques."
  },
  {
    id: "c-recursion",
    title: "Learn Recursion With C",
    issuer: "Programiz",
    issuedDate: "Sep 2025",
    credentialId: "7952B9E32BF7",
    skills: ["C Programming", "Recursion", "Algorithms"],
    imageUrl: cCert,
    credentialUrl: "#",
    description: "Advanced C programming course focusing on recursion concepts, algorithm design, and problem-solving techniques."
  }
];

export default function CertificationsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cert-hero", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" });
      gsap.from(".cert-stagger", {
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
        <div className="cert-hero mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="grid place-items-center size-16 rounded-2xl bg-yellow-500/10 border">
              <Award className="size-8 text-yellow-500" />
            </div>
            <div>
              <h1 className={`text-4xl md:text-5xl bg-clip-text text-transparent bg-linear-to-b from-foreground via-foreground/80 to-muted-foreground/60 font-bold ${display.className}`}>
                Certifications
              </h1>
              <p className={`text-muted-foreground ${karla.className}`}>
                Professional certifications and achievements in programming and technology
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 cert-stagger">
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-yellow-500">{CERTIFICATIONS.length}</div>
            <div className="text-sm text-muted-foreground">Total Certificates</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">Programiz</div>
            <div className="text-sm text-muted-foreground">Platform</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2025</div>
            <div className="text-sm text-muted-foreground">Year</div>
          </div>
          <div className="rounded-xl border bg-card/60 backdrop-blur p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">2</div>
            <div className="text-sm text-muted-foreground">Skills</div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 cert-stagger">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      </div>
      <MenuFab />
    </div>
  );
}

function CertificationCard({ certification, index }: { certification: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-xl transition-all duration-300">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="grid place-items-center size-16 rounded-xl bg-yellow-500/10 border">
                <Award className="size-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-yellow-500 transition-colors">
                  {certification.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-lg font-medium text-muted-foreground">
                    {certification.issuer}
                  </span>
                  <div className="size-1 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {certification.issuedDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-yellow-600">
              <Award className="size-4" />
              <span className="text-sm font-medium">Verified</span>
            </div>
          </div>

          {/* Description */}
          {certification.description && (
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {certification.description}
            </p>
          )}

          {/* Certificate Image */}
          {certification.imageUrl && (
            <div className="mb-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border bg-muted/20 group cursor-pointer">
                <Image
                  src={certification.imageUrl}
                  alt={`${certification.title} Certificate`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Skills Covered</h4>
            <div className="flex flex-wrap gap-2">
              {certification.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs border bg-muted/40 ${mono.className}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Credential Details */}
          <div className="mb-6 p-4 rounded-lg bg-muted/20 border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Issued:</span>
                <span className="text-sm font-medium">{certification.issuedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Hash className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Credential ID:</span>
                <span className={`text-sm font-mono ${mono.className}`}>
                  {certification.credentialId}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            {certification.credentialUrl && (
              <Button asChild variant="default">
                <a 
                  href={certification.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="size-4" />
                  Show Credential
                </a>
              </Button>
            )}
            {certification.imageUrl && (
              <Button variant="outline" className="flex items-center gap-2">
                <Eye className="size-4" />
                View Certificate
              </Button>
            )}
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="size-4" />
              Download
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
