import Link from "next/link";
import { site } from "@/data";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="rounded-2xl border border-default bg-surface p-6 shadow-sm md:p-12">
        {/* Window Chrome */}
        <div className="mb-12 flex gap-2" aria-hidden="true">
          <div className="h-3 w-3 rounded-full bg-window-close" />
          <div className="h-3 w-3 rounded-full bg-window-min" />
          <div className="h-3 w-3 rounded-full bg-window-max" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6">
          <h1 className="font-sans text-[clamp(3rem,12vw,8rem)] font-black leading-none tracking-[-0.05em] text-primary">
            {site.name}
          </h1>
          <p className="text-xl text-muted md:text-2xl">
            {site.positioning}
          </p>

          {/* Skill Capsules */}
          <div className="mt-4 flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <span
                key={skill}
                className="flex min-h-[32px] items-center rounded-md bg-accent-primary/10 px-3 py-1 text-sm font-semibold text-accent-primary"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="flex min-h-[44px] items-center justify-center rounded-md bg-accent-primary px-8 font-medium text-white transition-transform active:scale-95"
            >
              View Projects
            </Link>
            <a
              href={site.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center justify-center rounded-md border border-default bg-transparent px-8 font-medium text-primary transition-colors hover:border-accent-primary hover:text-accent-primary active:scale-95"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
