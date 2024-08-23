// lib/writing.ts
import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";

export interface Post {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
  external: boolean;
  source: string;
}

export function getAllPostData(): Post[] {
  const postsPath = path.join(process.cwd(), "content", "writing", "index.json");
  const fileContents = fs.readFileSync(postsPath, "utf8");
  return JSON.parse(fileContents);
}

export function getAllSlugs(): { params: { slug: string } }[] {
  const data = getAllPostData();
  return data
    .filter((item) => !item.external)
    .map((item) => ({
      params: { slug: item.url.replace(/^\/writing\//, '').replace(/\\/g, '/') }
    }));
}

export async function getPost(slug: string): Promise<MaybeContent<Post>> {
  return getMdxContent<Post>("writing", `${slug}.mdx`);
}