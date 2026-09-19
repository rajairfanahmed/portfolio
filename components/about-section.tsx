import { skills } from "@/data";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 space-y-8" id="about">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
        About & Skills
      </h2>
      <div className="max-w-3xl space-y-6">
        <p className="text-lg text-text-muted leading-relaxed">
          I specialize in building high-performance, user-centric web applications. My focus is on robust architectures, clean code, and creating seamless user experiences. Below are the primary technologies I use to bring ideas to life.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-md bg-bg-surface border border-border-default text-text-muted font-mono text-sm tracking-tight hover:text-accent-primary hover:border-accent-primary transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
