// lib/projects.ts
import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";

export interface Project {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
  source: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  tags: string[];
  type: "public" | "private" | "prototype";
  category: string;
  url: string;
}

export function getAllProjectData(): Project[] {
  const projectsPath = path.join(process.cwd(), "content", "projects", "index.json");
  const fileContents = fs.readFileSync(projectsPath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllSlugs(): { params: { slug: string } }[] {
  const data = getAllProjectData();
  return data.map((item) => ({
    params: { slug: item.url.replace(/^\/projects\//, '').replace(/\\/g, '/') }
  }));
}

export async function getProject(slug: string): Promise<MaybeContent<Project>> {
  return getMdxContent<Project>("projects", `${slug}.mdx`);
}

export function getTimelineData(): TimelineItem[] {
  const timelinePath = path.join(process.cwd(), "content", "timeline", "index.json");
  const fileContents = fs.readFileSync(timelinePath, "utf8");
  return JSON.parse(fileContents);
}