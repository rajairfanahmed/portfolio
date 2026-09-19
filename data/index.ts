export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
  flagship: boolean;
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
  positioning: "Building Applications That Scale Brands.",
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
  // Placeholder projects until Raja replaces them with ThreatChain (FYP), Aura Gemstones, and any other locked titles. image files land in job 04.
  projects: [
    {
      title: "ThreatChain (FYP)",
      description: "A blockchain-based threat intelligence sharing platform.",
      tags: ["Next.js", "Solidity", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      image: "/projects/threatchain.svg",
      flagship: true,
    },
    {
      title: "Aura Gemstones",
      description: "An elegant e-commerce surface for premium gemstones.",
      tags: ["React", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      image: "/projects/aura-gemstones.svg",
      flagship: false,
    },
    {
      title: "Portfolio Kit",
      description: "A static bento-grid kit for developer portfolios.",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      image: "/projects/portfolio-kit.svg",
      flagship: false,
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
