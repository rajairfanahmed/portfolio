import { site } from "@/data";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: `Projects | ${site.name}`,
  description: "Featured technical projects and side pursuits.",
};

export default function ProjectsPage() {
  if (!site.projects || site.projects.length === 0) {
    return (
      <div className="py-16 md:py-24">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-primary">Projects</h1>
        <p className="text-muted">New projects are currently being developed. Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-primary">Projects</h1>
        <p className="text-muted">Featured technical work and public evidence.</p>
      </header>

      {/* High-density asymmetric CSS Grid */}
      <section 
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="List of featured projects"
      >
        {site.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
