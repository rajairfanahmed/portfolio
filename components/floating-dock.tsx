"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { springPhysics } from "@/lib/motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function FloatingDock() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 mx-auto flex justify-center md:bottom-auto md:top-6">
      <nav
        className="pointer-events-auto flex items-center gap-1 rounded-2xl bg-black/5 p-1.5 shadow-md dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-xl dark:bg-white/5"
        aria-label="Main Navigation"
      >
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className="relative flex min-h-[44px] items-center justify-center px-4 text-sm font-medium transition-colors hover:text-accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1] active:scale-95"
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-xl bg-black/5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1)] dark:bg-white/10"
                  transition={springPhysics}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
