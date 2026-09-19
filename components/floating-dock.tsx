"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/data";
import { springPhysics } from "@/lib/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const dockItemClassName =
  "relative z-10 flex min-h-11 min-w-11 items-center justify-center gap-1.5 px-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] active:scale-95 md:px-3";

function isFinePointer(event: PointerEvent<HTMLElement>) {
  return event.pointerType === "mouse" || event.pointerType === "pen";
}

function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!isFinePointer(event) || !ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    setOffset({
      x: Math.max(-6, Math.min(6, x * 0.2)),
      y: Math.max(-6, Math.min(6, y * 0.2)),
    });
  }

  function onPointerLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      className="relative"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={springPhysics}
    >
      {children}
    </motion.div>
  );
}

export function FloatingDock() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 flex justify-center md:bottom-auto md:top-6">
      <nav
        className="milled pointer-events-auto flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center justify-center gap-0.5 rounded-2xl bg-[var(--bg-surface)]/80 p-1.5 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Magnetic key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={dockItemClassName}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activePill"
                    className="milled pointer-events-none absolute inset-0 rounded-xl bg-[var(--bg-surface-hover)]"
                    transition={springPhysics}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </Link>
            </Magnetic>
          );
        })}

        <Magnetic>
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={dockItemClassName}
            aria-label="Open resume in a new tab"
          >
            <FileText className="h-4 w-4" strokeWidth={2} aria-hidden />
            <span className="relative z-10">Resume</span>
          </a>
        </Magnetic>

        <Magnetic>
          <ThemeToggle />
        </Magnetic>
      </nav>
    </div>
  );
}
