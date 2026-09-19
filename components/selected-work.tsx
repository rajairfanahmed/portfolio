"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState, type PointerEvent } from "react";

import { site, type Project } from "@/data";
import { springPhysics } from "@/lib/motion";

const linkClassName =
  "inline-flex min-h-11 min-w-11 items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] active:scale-95";

function isFinePointer(event: PointerEvent<HTMLElement>) {
  return event.pointerType === "mouse" || event.pointerType === "pen";
}

function FlagshipCard({
  project,
  className,
}: {
  project: Project;
  className: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [glow, setGlow] = useState({ x: 0, y: 0, active: false });

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (!isFinePointer(event)) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setHovered(true);
    setGlow({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      active: true,
    });
  }

  function onPointerLeave() {
    setHovered(false);
    setGlow({ x: 0, y: 0, active: false });
  }

  return (
    <article
      className={`milled relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
    >
      {glow.active ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(240px circle at ${glow.x}px ${glow.y}px, var(--accent-glow), transparent 40%)`,
          }}
        />
      ) : null}

      <div className="relative aspect-video overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={springPhysics}
        >
          <Image
            src={project.imageSrc}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      <div className="relative z-20 flex flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--text-main)]">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono text-xs text-[var(--text-muted)]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Github className="h-4 w-4" strokeWidth={2} aria-hidden />
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden />
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export function SelectedWork() {
  const flagship = site.projects.filter((project) => project.flagship);

  return (
    <section aria-labelledby="selected-work-heading">
      <h2
        id="selected-work-heading"
        className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]"
      >
        Selected Work
      </h2>
      {flagship.length === 0 ? (
        <p className="mt-4 text-[var(--text-muted)]">No flagship projects yet.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
          {flagship.map((project, index) => (
            <FlagshipCard
              key={project.title}
              project={project}
              className={index === 0 ? "xl:col-span-7" : "xl:col-span-5"}
            />
          ))}
        </div>
      )}
    </section>
  );
}
