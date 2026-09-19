"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 p-2 rounded-md bg-bg-surface border border-border-default text-text-primary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary active:scale-95 transition-transform"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </button>
  );
}
