import Link from "next/link";

import { HomeHero } from "@/components/home-hero";
import { SelectedWork } from "@/components/selected-work";
import { TimelineSnapshot } from "@/components/timeline-snapshot";
import { site } from "@/data";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-24 pb-8 md:gap-32">
      <HomeHero />
      <SelectedWork />
      <TimelineSnapshot />
      <section aria-labelledby="current-focus-heading">
        <h2
          id="current-focus-heading"
          className="text-sm font-medium uppercase tracking-wide text-[var(--text-muted)]"
        >
          Current Focus
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-main)]">
          {site.currentFocus}
        </p>
      </section>
      <section aria-labelledby="quick-conversion-heading">
        <h2 id="quick-conversion-heading" className="sr-only">
          Contact
        </h2>
        <Link
          href="/contact"
          className="milled inline-flex min-h-11 min-w-11 items-center justify-center rounded-2xl bg-[var(--bg-surface)] px-6 font-medium text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] active:scale-95"
        >
          Contact
        </Link>
      </section>
    </div>
  );
}
