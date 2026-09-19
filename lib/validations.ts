import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  tags: z.array(z.string().min(1)),
  githubUrl: z.string().url(),
  demoUrl: z.string().url(),
  imageSrc: z.string().min(1),
  flagship: z.boolean(),
});

export const skillSchema = z.object({
  name: z.string().min(1),
  category: z.enum(["Frontend", "Backend", "Architecture"]),
  indicator: z.string().min(1),
});

export const experienceItemSchema = z.object({
  title: z.string().min(1),
  org: z.string().min(1),
  dates: z.string().min(1),
  summary: z.string().min(1),
});

export const educationItemSchema = z.object({
  title: z.string().min(1),
  org: z.string().min(1),
  dates: z.string().min(1),
});

export const siteContentSchema = z.object({
  name: z.string().min(1),
  positioning: z.string().min(1),
  bio: z.string().min(1),
  currentFocus: z.string().min(1),
  skills: z.array(skillSchema),
  projects: z.array(projectSchema),
  experience: z.array(experienceItemSchema),
  education: z.array(educationItemSchema),
  email: z.string().email(),
  linkedinUrl: z.string().url(),
  githubUrl: z.string().url(),
  devtoUrl: z.string().url(),
  cvUrl: z.string().url(),
});

export type Project = z.infer<typeof projectSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type EducationItem = z.infer<typeof educationItemSchema>;
export type SiteContent = z.infer<typeof siteContentSchema>;
