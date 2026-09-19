"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Fixed top-right control that switches light and dark theme.
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
      className="flex h-11 w-11 items-center justify-center rounded-md text-primary transition-transform active:scale-95"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      disabled={!mounted}
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? (
        <Sun className="h-5 w-5" strokeWidth={2} aria-hidden />
      ) : (
        <Moon className="h-5 w-5" strokeWidth={2} aria-hidden />
      )}
    </button>
  );
}
