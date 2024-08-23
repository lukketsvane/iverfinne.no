import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export interface Book {
  title: string;
  author: string;
  date: string;
  rating: number;
  coverImage: string;
  spineColor: string;
  textColor: string;
  slug: string;
  summary: string;
}

export function getAllBooks(): Book[] {
  const booksPath = path.join(process.cwd(), 'content', 'books');
  const bookFiles = fs.readdirSync(booksPath).filter(file => file.endsWith('.mdx'));
  
  return bookFiles.map(file => {
    const filePath = path.join(booksPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: `/books/${file.replace('.mdx', '')}`,
    } as Book;
  });
}

export function getAllSlugs(): { params: { slug: string[] } }[] {
  const books = getAllBooks();
  return books.map(book => ({
    params: { slug: [book.slug.replace(/^\/books\//, '')] }
  }));
}

export async function getBook(slug: string): Promise<(Book & { content: MDXRemoteSerializeResult }) | undefined> {
  const books = getAllBooks();
  const book = books.find(b => b.slug.replace(/^\/books\//, '') === slug);
  if (!book) {
    return undefined;
  }
  const fullPath = path.join(process.cwd(), 'content', 'books', `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);
  return { ...book, ...data, content: mdxSource };
}