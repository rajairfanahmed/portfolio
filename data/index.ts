export interface Project {
  title: string;
  problem: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageSrc: string;
  isFlagship: boolean;
}

export interface ExperienceItem {
  title: string;
  org: string;
  dates: string;
  summary: string;
}

export interface EducationItem {
  title: string;
  org: string;
  dates: string;
}

export interface SiteContent {
  name: string;
  positioning: string;
  bio: string;
  skills: string[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  devtoUrl: string;
  cvUrl: string;
}

export const site: SiteContent = {
  name: "Raja Irfan Ahmed",
  positioning: "Full Stack AI Web Apps Developer",
  // Placeholder until Raja replaces this bio.
  bio: "I build full stack AI web apps with a focus on speed, clear architecture, and recruiter-ready proof of work.",
  // Placeholder skill list until Raja replaces it.
  skills: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Node.js",
    "PostgreSQL",
    "AI integrations",
  ],
  // Placeholder projects until Raja replaces them. imageSrc files land in later jobs.
  projects: [
    {
      title: "AI Agent Workflow Engine",
      problem: "Automates multi-step reasoning tasks for product teams.",
      tags: ["Next.js", "TypeScript", "LangChain", "OpenAI"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      imageSrc: "/projects/workflow-engine.png",
      isFlagship: true,
    },
    {
      title: "Dev Community Platform",
      problem: "A fast community surface with realtime discussion threads.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      imageSrc: "/projects/dev-community.png",
      isFlagship: false,
    },
    {
      title: "Store Analytics Console",
      problem: "Gives store owners a high-signal view of orders and revenue.",
      tags: ["Next.js", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      imageSrc: "/projects/store-analytics.png",
      isFlagship: false,
    },
    {
      title: "Portfolio Kit",
      problem: "A static bento-grid kit for developer portfolios.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      imageSrc: "/projects/portfolio-kit.png",
      isFlagship: false,
    },
  ],
  // Placeholder experience until Raja replaces it.
  experience: [
    {
      title: "Full Stack Developer",
      org: "Independent projects",
      dates: "2025 — Present",
      summary: "Building full stack AI web apps and shipping public demos.",
    },
  ],
  education: [
    {
      title: "BSCS",
      org: "National University of Modern Languages, Islamabad",
      dates: "2026",
    },
  ],
  email: "rajairfana551@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/rajairfanahmed/",
  githubUrl: "https://github.com/rajairfanahmed",
  devtoUrl: "https://dev.to/rajairfanahmed",
  cvUrl:
    "https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link",
};
