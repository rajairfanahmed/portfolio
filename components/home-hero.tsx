"use client";

import { motion } from "framer-motion";

import { site } from "@/data";
import { springPhysics } from "@/lib/motion";

export function HomeHero() {
  return (
    <section aria-label="Introduction">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springPhysics}
      >
        <h1 className="font-sans text-[clamp(3rem,12vw,8rem)] font-black leading-none tracking-[-0.05em] text-[var(--text-main)]">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[var(--text-muted)] md:text-2xl">
          {site.positioning}
        </p>
      </motion.div>
    </section>
  );
}
