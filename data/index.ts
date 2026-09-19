export interface Project {
  id: string;
  title: string;
  problemStatement: string;
  techTags: string[];
  githubUrl: string;
  liveDemoUrl: string;
  imageUrl: string;
  isFlagship?: boolean;
}

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  devCommunity: string;
  cv: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  role: string;
  company: string;
  year: string;
  description: string;
}

export const bio = {
  name: "Raja Irfan Ahmed",
  positioningStatement: "Full Stack AI Web Apps Developer",
  profilePhotoUrl: "/profile.jpg", // To be placed in public/
};

export const skills: string[] = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Framer Motion",
  "Node.js",
  "PostgreSQL",
  "AI Integrations"
];

export const socialLinks: SocialLinks = {
  email: "rajairfana551@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajairfanahmed/",
  github: "https://github.com/rajairfanahmed",
  devCommunity: "https://dev.to/rajairfanahmed",
  cv: "https://drive.google.com/file/d/1CRblzPL3j8W6mv06d6FzW-zujSwqs9tN/view?usp=drive_link"
};

export const education: Education[] = [
  {
    degree: "BSCS",
    institution: "National University of Modern Languages, Islamabad",
    year: "2026"
  }
];

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Placeholder Company",
    year: "2025 - Present",
    description: "Placeholder description for current role."
  }
];

export const projects: Project[] = [
  {
    id: "flagship-project",
    title: "AI Agent Workflow Engine",
    problemStatement: "Automates complex multi-step reasoning tasks for enterprise teams.",
    techTags: ["Next.js", "TypeScript", "LangChain", "OpenAI"],
    githubUrl: "https://github.com/rajairfanahmed",
    liveDemoUrl: "https://example.com",
    imageUrl: "/projects/flagship.jpg", // To be placed in public/projects/
    isFlagship: true
  },
  {
    id: "project-2",
    title: "Dev Community Platform",
    problemStatement: "A fast, static community platform with realtime features.",
    techTags: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/rajairfanahmed",
    liveDemoUrl: "https://example.com",
    imageUrl: "/projects/project2.jpg"
  },
  {
    id: "project-3",
    title: "E-Commerce Dashboard",
    problemStatement: "High-performance analytics dashboard for store owners.",
    techTags: ["Next.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/rajairfanahmed",
    liveDemoUrl: "https://example.com",
    imageUrl: "/projects/project3.jpg"
  },
  {
    id: "project-4",
    title: "Portfolio Template",
    problemStatement: "Minimalist bento-grid developer portfolio.",
    techTags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/rajairfanahmed",
    liveDemoUrl: "https://example.com",
    imageUrl: "/projects/project4.jpg"
  }
];
