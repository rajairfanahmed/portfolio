import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-default bg-surface transition-all active:scale-95 shadow-md dark:border-none dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(255,255,255,0.05)] group-hover:border-accent-primary/50 group-hover:shadow-[0_0_15px_var(--color-accent-muted)] group-hover:dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),0_0_0_1px_var(--color-accent-primary),0_0_15px_var(--color-accent-muted)] ${
        project.flagship ? "md:col-span-2" : ""
      }`}
    >
      {/* Edge-to-edge mockup with inner scale on hover */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-default bg-elevated">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-2 text-xl font-bold text-primary">{project.title}</h2>
        <p className="mb-6 text-sm text-muted">{project.description}</p>

        {/* Badges and Links forced to the bottom */}
        <div className="mt-auto flex flex-col gap-6">
          <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-elevated px-2.5 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] min-w-[44px] items-center gap-2 text-sm font-medium text-primary transition-all hover:text-accent-primary active:scale-95"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] min-w-[44px] items-center gap-2 text-sm font-medium text-primary transition-all hover:text-accent-primary active:scale-95"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
