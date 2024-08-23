import path from "path";
import fs from "fs";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import matter from 'gray-matter';

export interface Post {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
  external: boolean;
}

export interface PostContent extends Post {
  content: MDXRemoteSerializeResult;
}

export const getAllPostData = (): Post[] => {
  const filePath = path.join(process.cwd(), "content", "writing", "index.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

export const getAllSlugs = () => {
  const posts = getAllPostData();
  return posts
    .filter(item => !item.external)
    .map(item => ({ params: { slug: item.url.replace(/^\/writing\//, '').replace(/\\/g, '/') } }));
}

export const getPost = async (slug: string): Promise<PostContent | null> => {
  const posts = getAllPostData();
  const post = posts.find(p => p.url.replace(/^\/writing\//, '') === slug);

  if (!post || post.external) return null;

  const fullPath = path.join(process.cwd(), 'content', 'writing', `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  return {
    ...post,
    ...data,
    content: mdxSource,
  };
};