"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Info, FolderGit2, Menu, X, Image, Award, Settings, Home } from "lucide-react";
import Link from "next/link";

export default function MenuFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 top-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="mb-3 rounded-2xl border bg-background/90 backdrop-blur p-2 shadow-xl"
          >
            <nav className="flex flex-col gap-1 min-w-48">
              <MenuItem href="/" icon={<Home className="size-4" />} label="Home" />
              <MenuItem href="/about" icon={<Info className="size-4" />} label="About" />
              <MenuItem href="/projects" icon={<FolderGit2 className="size-4" />} label="Projects" />
              <MenuItem href="/certifications" icon={<Award className="size-4" />} label="Certifications" />
              <MenuItem href="/gear" icon={<Settings className="size-4" />} label="My Gear" />
              <MenuItem href="/images" icon={<Image className="size-4" />} label="Gallery" />
              <MenuItem href="https://buymeacoffee.com/" icon={<Coffee className="size-4" />} label="Get Coffee" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="size-12 rounded-full bg-primary text-primary-foreground shadow-lg grid place-items-center hover:opacity-90 transition"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="size-6" />
            </motion.span>
          ) : (
            <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <Menu className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

function MenuItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-muted transition"
    >
      <span className="inline-flex items-center justify-center rounded-md bg-muted size-6">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}


