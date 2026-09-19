import { site } from "@/data";
import { TerminalFrame } from "@/components/terminal-frame";
import { Code2, Database, Layout, Cpu, Terminal, Layers } from "lucide-react";

export const metadata = {
  title: "About",
  description: "Background, mindset, and technical stack.",
};

function getSkillIcon(skill: string) {
  const s = skill.toLowerCase();
  if (s.includes("react") || s.includes("next")) return <Code2 className="h-5 w-5" />;
  if (s.includes("css") || s.includes("tailwind")) return <Layout className="h-5 w-5" />;
  if (s.includes("sql") || s.includes("node") || s.includes("postgre")) return <Database className="h-5 w-5" />;
  if (s.includes("ai") || s.includes("machine")) return <Cpu className="h-5 w-5" />;
  if (s.includes("type") || s.includes("java")) return <Layers className="h-5 w-5" />;
  return <Terminal className="h-5 w-5" />;
}

export default function AboutPage() {
  return (
    <div className="space-y-16 py-16 md:space-y-24 md:py-24">
      {/* Mindset / Bio */}
      <section aria-label="Biography">
        <h1 className="sr-only">About {site.name}</h1>
        <TerminalFrame command="cat bio.txt">
          <p>{site.bio}</p>
        </TerminalFrame>
      </section>

      {/* Stack Bento */}
      <section aria-label="Technical Stack">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">Core Stack</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {site.skills.map((skill) => (
            <div
              key={skill}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-default bg-surface p-6 transition-colors hover:border-accent-primary/50 hover:shadow-[0_0_15px_var(--color-accent-muted)]"
            >
              <div className="text-muted transition-colors group-hover:text-accent-primary">
                {getSkillIcon(skill)}
              </div>
              <span className="text-sm font-medium text-primary">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
        <section aria-label="Experience">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">Experience</h2>
          {(!site.experience || site.experience.length === 0) ? (
            <p className="text-sm text-muted">Experience details will be added soon.</p>
          ) : (
            <ul className="space-y-8">
              {site.experience.map((exp, i) => (
                <li key={i} className="flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-semibold text-primary">{exp.title}</h3>
                    <span className="mt-1 font-mono text-sm text-muted md:mt-0">{exp.dates}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted">{exp.org}</div>
                  <p className="mt-4 text-sm leading-relaxed text-primary/80">{exp.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section aria-label="Education">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-primary">Education</h2>
          {(!site.education || site.education.length === 0) ? (
            <p className="text-sm text-muted">Education details will be added soon.</p>
          ) : (
            <ul className="space-y-8">
              {site.education.map((edu, i) => (
                <li key={i} className="flex flex-col">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-lg font-semibold text-primary">{edu.title}</h3>
                    <span className="mt-1 font-mono text-sm text-muted md:mt-0">{edu.dates}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted">{edu.org}</div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
