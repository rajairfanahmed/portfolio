"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
        transition={{ type: "spring", mass: 0.8, stiffness: 250, damping: 24 }}
        className="mx-auto max-w-7xl px-6 pb-32 pt-12 md:px-12 md:pb-24 md:pt-32"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
