import { site } from "@/data";
import { Mail, Linkedin, Github, FileText, Terminal } from "lucide-react";

export const metadata = {
  title: "Contact",
  description: "Start a conversation.",
};

export default function ContactPage() {
  const links = [
    {
      name: "Email",
      url: site.email ? `mailto:${site.email}` : null,
      icon: <Mail className="h-5 w-5" />,
      subtext: site.email || "Not provided",
    },
    {
      name: "LinkedIn",
      url: site.linkedinUrl,
      icon: <Linkedin className="h-5 w-5" />,
      subtext: "Connect professionally",
    },
    {
      name: "GitHub",
      url: site.githubUrl,
      icon: <Github className="h-5 w-5" />,
      subtext: "View the source code",
    },
    {
      name: "Dev.to",
      url: site.devtoUrl,
      icon: <Terminal className="h-5 w-5" />,
      subtext: "Read my articles",
    },
    {
      name: "Resume / CV",
      url: site.cvUrl,
      icon: <FileText className="h-5 w-5" />,
      subtext: "Download PDF",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-16 py-16 md:space-y-24 md:py-24">
      <header className="space-y-6">
        <h1 className="text-4xl font-black tracking-tighter text-primary sm:text-6xl md:text-7xl">
          Let&apos;s build something.
        </h1>
        <p className="max-w-xl text-lg text-muted md:text-xl">
          Whether you&apos;re looking to scale an application or build one from scratch, my inbox is open.
        </p>
      </header>

      <div className="flex flex-col gap-2">
        {links.map((link) => {
          const isDisabled = !link.url;
          
          if (isDisabled) {
            return (
              <div
                key={link.name}
                className="flex min-h-[64px] items-center gap-4 py-4 opacity-50"
              >
                <div className="text-muted">{link.icon}</div>
                <span className="text-xl font-medium text-muted md:text-2xl">{link.name}</span>
              </div>
            );
          }

          return (
            <a
              key={link.name}
              href={link.url!}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              className="group flex min-h-[64px] items-center gap-4 py-4 transition-all active:scale-95"
            >
              <div className="text-muted transition-colors group-hover:text-accent-primary">
                {link.icon}
              </div>
              <span className="text-xl font-medium text-primary decoration-accent-primary decoration-2 underline-offset-8 transition-all group-hover:text-accent-primary group-hover:underline group-hover:[text-shadow:0_0_12px_var(--color-accent-muted)] md:text-2xl">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
