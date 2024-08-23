import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";

export interface Project {
  title: string; description: string; image: string;
  date: string; url: string; source: string;
}

export interface TimelineItem {
  date: string; title: string; description: string;
  tags: string[]; type: "public" | "private" | "prototype";
  category: string; url: string;
}

const readJsonFile = (filePath: string) => 
  JSON.parse(fs.readFileSync(path.join(process.cwd(), ...filePath.split('/')), "utf8"));

export const getAllProjectData = (): Project[] => 
  readJsonFile("content/projects/index.json");

export const getAllSlugs = () => getAllProjectData()
  .map(item => ({ params: { slug: item.url.replace(/^\/projects\//, '').replace(/\\/g, '/') } }));

export const getProject = (slug: string): Promise<MaybeContent<Project>> => 
  getMdxContent<Project>("projects", `${slug}.mdx`);

export const getTimelineData = (): TimelineItem[] => 
  readJsonFile("content/timeline/index.json");