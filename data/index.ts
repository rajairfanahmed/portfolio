import { siteContentSchema } from "@/lib/validations";

export type {
  EducationItem,
  ExperienceItem,
  Project,
  SiteContent,
  Skill,
} from "@/lib/validations";

export const site = siteContentSchema.parse({
  name: "Raja Irfan Ahmed",
  positioning: "Building Applications That Scale Brands.",
  // Placeholder until Raja replaces this bio.
  bio: "I build full stack AI web apps with a focus on speed, clear architecture, and recruiter-ready proof of work.",
  // Placeholder until Raja replaces current focus.
  currentFocus:
    "Full stack AI web apps with a focus on speed and clear architecture.",
  // Placeholder skill list until Raja replaces it.
  skills: [
    { name: "Next.js", category: "Frontend", indicator: "Production Ready" },
    { name: "TypeScript", category: "Frontend", indicator: "Production Ready" },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      indicator: "Production Ready",
    },
    { name: "React", category: "Frontend", indicator: "Production Ready" },
    { name: "Node.js", category: "Backend", indicator: "Production Ready" },
    { name: "PostgreSQL", category: "Backend", indicator: "Production Ready" },
    {
      name: "AI integrations",
      category: "Architecture",
      indicator: "Production Ready",
    },
  ],
  // Placeholder projects until Raja replaces problem lines, tags, and URLs.
  // imageSrc files land in a later job.
  projects: [
    {
      title: "ThreatChain (FYP)",
      description: "A blockchain-based threat intelligence sharing platform.",
      tags: ["Next.js", "Solidity", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      imageSrc: "/projects/threatchain.svg",
      flagship: true,
    },
    {
      title: "Aura Gemstones",
      description: "An elegant e-commerce surface for premium gemstones.",
      tags: ["React", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/rajairfanahmed",
      demoUrl: "https://rajairfanahmed.vercel.app/",
      imageSrc: "/projects/aura-gemstones.svg",
      flagship: true,
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
});
