// lib/projects.ts
import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";
export interface Project { title: string; description: string; image: string; date: string; url: string; source: string; }
export function getAllProjectData(): Project[] { return JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "projects", "index.json"), "utf8")); }
export function getAllSlugs(): string[] { const data = getAllProjectData(); return data.map((item) => item.url); }
export async function getProject(slug: string): Promise<MaybeContent<Project>> { return getMdxContent<Project>("projects", `${slug}.mdx`); }
export interface TimelineItem { date: string; title: string; description: string; tags: string[]; type: "public" | "private" | "prototype"; category: string; url: string; }
export function getTimelineData(): TimelineItem[] { return JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "timeline", "index.json"), "utf8")); }
