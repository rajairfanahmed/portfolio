"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { springPhysics } from "@/lib/motion";

const dockControlClassName =
  "relative flex min-h-11 min-w-11 items-center justify-center rounded-xl text-[var(--text-muted)] hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] active:scale-95";

/**
 * Dock control that switches light and dark. Icon cross-fades on the GPU.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={dockControlClassName}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      disabled={!mounted}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={springPhysics}
          className="flex"
        >
          {isDark ? (
            <Sun className="h-4 w-4" strokeWidth={2} aria-hidden />
          ) : (
            <Moon className="h-4 w-4" strokeWidth={2} aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
