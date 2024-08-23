import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";

export interface Post {
  title: string; description: string; image: string;
  date: string; url: string; external: boolean; source: string;
}

const readJsonFile = (filePath: string) => 
  JSON.parse(fs.readFileSync(path.join(process.cwd(), ...filePath.split('/')), "utf8"));

export const getAllPostData = (): Post[] => 
  readJsonFile("content/writing/index.json");

export const getAllSlugs = () => getAllPostData()
  .filter(item => !item.external)
  .map(item => ({ params: { slug: item.url.replace(/^\/writing\//, '').replace(/\\/g, '/') } }));

export const getPost = (slug: string): Promise<MaybeContent<Post>> => 
  getMdxContent<Post>("writing", `${slug}.mdx`);