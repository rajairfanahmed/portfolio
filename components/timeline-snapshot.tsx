"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { site } from "@/data";

export function TimelineSnapshot() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.2"],
  });
  const scaleY = useSpring(scrollYProgress, {
    mass: 0.8,
    stiffness: 250,
    damping: 24,
  });

  const items = [
    ...site.experience.map((item) => ({
      title: item.title,
      org: item.org,
      dates: item.dates,
      summary: item.summary,
    })),
    ...site.education.map((item) => ({
      title: item.title,
      org: item.org,
      dates: item.dates,
      summary: undefined as string | undefined,
    })),
  ];

  return (
    <section aria-labelledby="timeline-heading">
      <h2
        id="timeline-heading"
        className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]"
      >
        Experience &amp; Education
      </h2>
      {items.length === 0 ? (
        <p className="mt-4 text-[var(--text-muted)]">No timeline items yet.</p>
      ) : (
        <ol ref={ref} className="relative mt-8 space-y-8 pl-6">
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-[var(--accent-primary)]"
            style={{ scaleY }}
          />
          {items.map((item) => (
            <li key={`${item.title}-${item.org}-${item.dates}`}>
              <h3 className="text-lg font-semibold tracking-tight text-[var(--text-main)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.org}</p>
              <time
                className="mt-1 block font-mono text-sm tabular-nums text-[var(--text-muted)]"
                dateTime={item.dates}
              >
                {item.dates}
              </time>
              {item.summary ? (
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-main)]">
                  {item.summary}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
