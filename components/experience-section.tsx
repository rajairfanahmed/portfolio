import { experience, education } from "@/data";
import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-24 space-y-16 border-t border-border-default" id="experience">
      <div className="space-y-12">
        <div className="flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-accent-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Experience</h2>
        </div>
        
        <div className="space-y-12 border-l-2 border-border-default pl-6 ml-3">
          {experience.map((item, i) => (
            <div key={i} className="relative group">
              <span className="absolute -left-[35px] top-1.5 h-4 w-4 rounded-full bg-bg-base border-2 border-border-default group-hover:border-accent-primary transition-colors" />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h3 className="text-xl font-semibold text-text-primary">{item.role}</h3>
                  <span className="font-mono text-sm text-text-muted">{item.year}</span>
                </div>
                <p className="text-lg text-text-primary font-medium">{item.company}</p>
                <p className="text-text-muted leading-relaxed max-w-2xl">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-accent-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Education</h2>
        </div>
        
        <div className="space-y-12 border-l-2 border-border-default pl-6 ml-3">
          {education.map((item, i) => (
            <div key={i} className="relative group">
              <span className="absolute -left-[35px] top-1.5 h-4 w-4 rounded-full bg-bg-base border-2 border-border-default group-hover:border-accent-primary transition-colors" />
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <h3 className="text-xl font-semibold text-text-primary">{item.degree}</h3>
                  <span className="font-mono text-sm text-text-muted">{item.year}</span>
                </div>
                <p className="text-lg text-text-muted">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
