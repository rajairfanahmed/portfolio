import Image from "next/image";
import { projects } from "@/data";
import { ExternalLink } from "lucide-react";

function Github(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 space-y-12 border-t border-border-default" id="projects">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Featured Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[400px]">
        {projects.map((project) => {
          const isFlagship = project.isFlagship;
          
          return (
            <div 
              key={project.id}
              className={`group flex flex-col rounded-2xl overflow-hidden bg-bg-surface border border-border-default hover:border-accent-primary transition-all duration-300 ${
                isFlagship ? "md:col-span-2 lg:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              {/* Image Section (60%) */}
              <div className={`relative w-full ${isFlagship ? "h-[60%] md:h-[65%]" : "h-[55%]"} overflow-hidden bg-bg-base`}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* Content Section (40%) */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-text-primary line-clamp-1">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                  {project.problemStatement}
                </p>
                
                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-md bg-bg-base border border-border-default text-text-muted font-mono text-xs tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
