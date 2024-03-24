nada                               
├─ components                      
│  ├─ Bookshelf.tsx                
│  └─ Layout.tsx                   
├─ content                         
│  ├─ books                        
│  │  ├─ a-thousand-brains.mdx     
│  │  ├─ antkind.mdx               
│  │  ├─ children-of-time.mdx      
│  │  ├─ empire-of-things.mdx      
│  │  ├─ index.json                
│  │  └─ three-body-problem.mdx    
│  ├─ engineering                  
│  │  ├─ external.json             
│  │  └─ index.json                
│  ├─ projects                     
│  │  ├─ index.json                
│  │  ├─ ygdrasyl.mdx             
│  │  ├─ project-2.mdx             
│  │  └─ project-3.mdx             
│  └─ writing                      
│     ├─ ai-novel-generation.mdx   
│     ├─ big-compute.mdx           
│     ├─ external.json             
│     ├─ index.json                
│     ├─ person-of-compute.mdx     
│     └─ post-labour.mdx           
├─ lib                             
│  ├─ books.ts                     
│  ├─ engineering.ts               
│  ├─ mdx.ts                       
│  ├─ projects.ts                  
│  └─ writing.ts                   
├─ pages                           
│  ├─ books                        
│  │  └─ [[...slug]].tsx           
│  ├─ engineering                  
│  │  └─ index.tsx                 
│  ├─ projects                     
│  │  ├─ [slug].tsx                
│  │  └─ index.tsx                 
│  ├─ writing                      
│  │  ├─ [slug].tsx                
│  │  └─ index.tsx                 
│  ├─ 404.tsx                      
│  ├─ _app.tsx                     
│  ├─ _document.tsx                
│  └─ index.mdx                    
├─ public                          
│  ├─ books                        
│  │  └─ steal-like-an-artist.png  
│  ├─ images                       
│  │  ├─ ygdrasyl_1.png            
│  │  ├─ ygdrasyl_2.png            
│  │  ├─ ygdrasyl_3.jpeg           
│  │  └─ ygdrasyl_4.jpeg           
│  ├─ favicon-dark.ico             
│  ├─ favicon.ico                  
│  ├─ og-image-dark.jpg            
│  ├─ og-image-paper.jpg           
│  ├─ og-image.jpg                 
│  └─ sitemap.xml                  
├─ scripts                         
│  ├─ generate-content.mjs         
│  └─ generate-sitemap.mjs         
├─ next-env.d.ts                   
├─ next.config.js                  
├─ next.d.ts                       
├─ package-lock.json               
├─ package.json                    
├─ tsconfig.json                   
└─ yarn.lock                       
           



// nada/pages/_app.tsx //
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { DefaultSeo } from "next-seo";
import posthog from "posthog-js";
import React from "react";
import { useRouter } from "next/router";
import { Lora } from "@next/font/google";

const lora = Lora({ subsets: ["latin"], display: "swap" });

const theme = extendTheme(
  {
    fonts: {
      heading: lora.style.fontFamily,
      body: lora.style.fontFamily,
    },
  },
  withProse({
    baseStyle: {
      "h1, h2, h3, h4, h5, h6": {
        mt: 4,
        mb: 4,
      },
      p: {
        my: 3,
      },
      a: {
        color: "blue.500",
      },
    },
  })
);

const getDefaultLayout = (page: ReactElement) => (
  <Layout>
    <Prose>{page}</Prose>
  </Layout>
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const getLayout = Component.getLayout || getDefaultLayout;

  React.useEffect(() => {
    posthog.init("phc_jFlJqpi333LZJJRxwjiFTkKI2Ufv3Pgf0hnbrPuZdLL", {
      api_host: "https://app.posthog.com",
    });

    const handleRouteChange = () => posthog.capture("$pageview");
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Iver Finne"
        description="I'm a constant learner and aspiring technical generalist. I'm also a founding enginer at thirdweb and on gap year from the University of Pennsylvania."
        openGraph={{
          title: "Iver Finne",
          description:
            "I'm a constant learner and aspiring technical generalist. I'm also a founding enginer at thirdweb and on gap year from the University of Pennsylvania.",
          images: [
            {
              url: "https://lukketsvane.com/og-image-dark.jpg",
              type: "image/jpeg",
            },
          ],
          siteName: "Iver Finne",
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}

// nada/pages/_document.tsx = //
import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M61FCSRJR9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M61FCSRJR9');
        `}
        </Script>
      </Head>
      <body>
        <ColorModeScript initialColorMode="light" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// nada/pages/writing/index.tsx //
import {
  Heading,
  Link,
  Flex,
  Text,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { getAllPostData, Post } from "../../lib/writing";
import type { NextPageWithLayout } from "next";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";

interface WritingProps {
  posts: Post[];
}

const Writing: NextPageWithLayout<WritingProps> = ({ posts }) => {
  return (
    <>
      <NextSeo title="Writing | Iver Finne" />
      <Flex direction="column" align="flex-start" width="100%" gap={3}>
        <Divider width="100%" />
        {posts.map((post) => (
          <>
            <Stack width="100%" align="flex-start" spacing={1}>
              <Link
                href={post.url}
                target={post.external ? "_blank" : "_self"}
                color="blue.600"
              >
                <Text>{post.title}</Text>
              </Link>
              <Text fontSize="sm" textAlign={"right"} color="gray.500">
                {post.date}
              </Text>
            </Stack>
            <Divider width="100%" />
          </>
        ))}
      </Flex>
    </>
  );
};

export default Writing;

Writing.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps() {
  const posts = getAllPostData();
  return { props: { posts } };
}

// nada/pages/writing/[slug].tsx //
import { MDXRemote } from "next-mdx-remote";
import { GetStaticPropsContext, NextPageWithLayout } from "next";
import { Heading, Flex } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../../components/Layout";
import { getAllSlugs, getPost, Post as PostMetadata } from "../../lib/writing";
import { Content } from "../../lib/mdx";
import { NextSeo } from "next-seo";

interface PostProps {
  post: Content<PostMetadata>;
}

const Post: NextPageWithLayout<PostProps> = ({ post }) => {
  return (
    <>
      <NextSeo
        title={post.metadata.title}
        description={post.metadata.description}
        openGraph={{
          title: post.metadata.title,
          description: post.metadata.description,
          images: [
            {
              url:
                post.metadata.image || "https://lukketsvane.com/og-image-dark.jpg",
            },
          ],
        }}
      />
      <Flex direction="column" gap={2}>
        <Heading size="lg">{post.metadata.title}</Heading>
        <Prose>
          <MDXRemote compiledSource={post.source} />
        </Prose>
      </Flex>
    </>
  );
};

export default Post;

Post.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticPaths() {
  const paths = getAllSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || !params.slug || typeof params.slug !== "string") {
    return { redirect: { destination: "/" } };
  }

  const post = await getPost(params.slug as string);
  if (!post) {
    return { redirect: { destination: "/" } };
  }

  return { props: { post } };
}

// nada/pages/engineering/index.tsx //
import {
    Heading,
    Stack,
    Flex,
    Text,
    Divider,
    HStack,
    Image,
  } from "@chakra-ui/react";
  import type { NextPageWithLayout } from "next";
  import Layout from "../../components/Layout";
  import Link from "next/link";
  import { Build, getAllBuildData } from "../../lib/engineering";
  import { NextSeo } from "next-seo";
  
  interface EngineeringProps {
    builds: Build[];
  }
  
  const Engineering: NextPageWithLayout<EngineeringProps> = ({ builds }) => {
    return (
      <>
        <NextSeo title="Engineering | Iver Finne" />
        <Flex direction="column" align="flex-start">
          {builds.map((build) => (
            <Stack width="100%" key={build.title}>
              <Link href={build.url} target={build.external ? "_blank" : "_self"}>
                <Stack mb={4} width="100%">
                  <Divider margin="8px 0 !important" width="100%" />
                  <HStack gap={5} display="grid" gridTemplateColumns={"2fr 5fr"}>
                    <Image
                      src={build.image}
                      alt={build.title}
                      gridColumn={"span 1"}
                      objectFit="cover"
                    />
  
                    <Stack gridColumnStart={1} gridColumn="span 1">
                      <Heading
                        as="h2"
                        size="md"
                        marginTop="8px !important"
                        mb="0px !important"
                      >
                        {build.title}
                      </Heading>
                      <Text my={0}>{build.description}</Text>
                      <Text color="gray.500" mt={0}>
                        {build.date}
                      </Text>
                    </Stack>
                  </HStack>
                </Stack>
              </Link>
            </Stack>
          ))}
        </Flex>
      </>
    );
  };
  
  export default Engineering;
  
  Engineering.getLayout = (page) => <Layout>{page}</Layout>;
  
  export async function getStaticProps() {
    const builds = getAllBuildData();
    return { props: { builds } };
  }

  import {
    Flex,
    Heading,
    Image,
    Stack,
    VStack,
    Text,
    Divider,
    Link,
  } from "@chakra-ui/react";
  import { GetStaticPropsContext, NextPageWithLayout } from "next";
  import Layout from "../../components/Layout";
  import { Prose } from "@nikolovlazar/chakra-ui-prose";
  import { MDXRemote } from "next-mdx-remote";
  import { Book, getAllBooks, getAllSlugs, getBook } from "../../lib/books";
  import { Bookshelf } from "../../components/Bookshelf";
  import { Content } from "../../lib/mdx";
  import { NextSeo } from "next-seo";
  
  interface BooksProps {
    books: Book[];
    book?: Content<Book>;
  }
  
  const Books: NextPageWithLayout<BooksProps> = ({ books, book }) => {
    if (book) {
      return (
        <>
          <NextSeo
            title={book.metadata.title}
            description={`By: ${book.metadata.author} - Read: ${book.metadata.date} - Rating: ${book.metadata.rating}/10`}
            openGraph={{
              title: book.metadata.title,
              description: `By: ${book.metadata.author} - Read: ${book.metadata.date} - Rating: ${book.metadata.rating}/10`,
            }}
          />
          <Stack spacing={3}>
            <Flex direction="row" align="flex-start" gap={6}>
              <VStack align="flex-start" flexGrow={1}>
                <Heading size="xl">{book.metadata.title}</Heading>
                <Text color="gray.400" fontSize="xl">
                  By: {book.metadata.author} - Read: {book.metadata.date} -
                  Rating: {book.metadata.rating}/10
                </Text>
              </VStack>
            </Flex>
            <Prose>
              <MDXRemote compiledSource={book.source} />
            </Prose>
          </Stack>
        </>
      );
    }
  
    return (
      <>
        <NextSeo title="Books | Iver Finne" />
        <Stack spacing={5}>
          {books
            .slice()
            .sort((a, b) => b.rating - a.rating)
            .map((book, index) => (
              <Stack key={book.title} scrollMarginTop={20}>
                <Stack>
                  {index > 0 && <Divider mb={3} width="100%" />}
                  <Flex direction="row" align="flex-start" gap={6}>
                    <Image
                      border="1px solid"
                      borderColor="gray.200"
                      src={book.coverImage}
                      alt={book.title}
                      height={{ base: "100px", sm: "140px", md: "160px" }}
                    />
  
                    <VStack align="flex-start" flexGrow={1}>
                      <Link href={book.slug}>
                        <Heading size="md">{book.title}</Heading>
                      </Link>
                      <Text color="#999" size="md">
                        {book.author}
                      </Text>
                      <Text color="#666">
                        Read: {book.date} • Rating: {book.rating}/10
                      </Text>
                      <Prose>
                        <MDXRemote compiledSource={book.summary} />
                      </Prose>
                    </VStack>
                  </Flex>
                </Stack>
              </Stack>
            ))}
        </Stack>
      </>
    );
  };
  
  export default Books;
  
  Books.getLayout = (page: JSX.Element) => (
    <Layout>
      <Flex direction="column" gap={8}>
        <Bookshelf books={page.props.books} />
        <Divider />
        {page}
      </Flex>
    </Layout>
  );
  
  export async function getStaticPaths() {
    const paths = getAllSlugs();
  
    return {
      paths: [{ params: { slug: undefined } }, ...paths],
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }: GetStaticPropsContext) {
    if (params && params.slug && params.slug.length > 1) {
      return {
        redirect: {
          destination: "/books",
        },
      };
    }
  
    const books = getAllBooks();
  
    if (!params || !params.slug || params.slug.length === 0) {
      return {
        props: {
          books,
        },
      };
    }
  
    const book = await getBook(params.slug[0] as string);
    if (!book) {
      return {
        redirect: {
          destination: "/books",
        },
      };
    }
  
    return {
      props: { books, book },
    };
  }
  

// nada/pages/books/[[...slug]].tsx //
import {
    Flex,
    Heading,
    Image,
    Stack,
    VStack,
    Text,
    Divider,
    Link,
  } from "@chakra-ui/react";
  import { GetStaticPropsContext, NextPageWithLayout } from "next";
  import Layout from "../../components/Layout";
  import { Prose } from "@nikolovlazar/chakra-ui-prose";
  import { MDXRemote } from "next-mdx-remote";
  import { Book, getAllBooks, getAllSlugs, getBook } from "../../lib/books";
  import { Bookshelf } from "../../components/Bookshelf";
  import { Content } from "../../lib/mdx";
  import { NextSeo } from "next-seo";
  
  interface BooksProps {
    books: Book[];
    book?: Content<Book>;
  }
  
  const Books: NextPageWithLayout<BooksProps> = ({ books, book }) => {
    if (book) {
      return (
        <>
          <NextSeo
            title={book.metadata.title}
            description={`By: ${book.metadata.author} - Read: ${book.metadata.date} - Rating: ${book.metadata.rating}/10`}
            openGraph={{
              title: book.metadata.title,
              description: `By: ${book.metadata.author} - Read: ${book.metadata.date} - Rating: ${book.metadata.rating}/10`,
            }}
          />
          <Stack spacing={3}>
            <Flex direction="row" align="flex-start" gap={6}>
              <VStack align="flex-start" flexGrow={1}>
                <Heading size="xl">{book.metadata.title}</Heading>
                <Text color="gray.400" fontSize="xl">
                  By: {book.metadata.author} - Read: {book.metadata.date} -
                  Rating: {book.metadata.rating}/10
                </Text>
              </VStack>
            </Flex>
            <Prose>
              <MDXRemote compiledSource={book.source} />
            </Prose>
          </Stack>
        </>
      );
    }
  
    return (
      <>
        <NextSeo title="Books | Iver Finne" />
        <Stack spacing={5}>
          {books
            .slice()
            .sort((a, b) => b.rating - a.rating)
            .map((book, index) => (
              <Stack key={book.title} scrollMarginTop={20}>
                <Stack>
                  {index > 0 && <Divider mb={3} width="100%" />}
                  <Flex direction="row" align="flex-start" gap={6}>
                    <Image
                      border="1px solid"
                      borderColor="gray.200"
                      src={book.coverImage}
                      alt={book.title}
                      height={{ base: "100px", sm: "140px", md: "160px" }}
                    />
  
                    <VStack align="flex-start" flexGrow={1}>
                      <Link href={book.slug}>
                        <Heading size="md">{book.title}</Heading>
                      </Link>
                      <Text color="#999" size="md">
                        {book.author}
                      </Text>
                      <Text color="#666">
                        Read: {book.date} • Rating: {book.rating}/10
                      </Text>
                      <Prose>
                        <MDXRemote compiledSource={book.summary} />
                      </Prose>
                    </VStack>
                  </Flex>
                </Stack>
              </Stack>
            ))}
        </Stack>
      </>
    );
  };
  
  export default Books;
  
  Books.getLayout = (page: JSX.Element) => (
    <Layout>
      <Flex direction="column" gap={8}>
        <Bookshelf books={page.props.books} />
        <Divider />
        {page}
      </Flex>
    </Layout>
  );
  
  export async function getStaticPaths() {
    const paths = getAllSlugs();
  
    return {
      paths: [{ params: { slug: undefined } }, ...paths],
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }: GetStaticPropsContext) {
    if (params && params.slug && params.slug.length > 1) {
      return {
        redirect: {
          destination: "/books",
        },
      };
    }
  
    const books = getAllBooks();
  
    if (!params || !params.slug || params.slug.length === 0) {
      return {
        props: {
          books,
        },
      };
    }
  
    const book = await getBook(params.slug[0] as string);
    if (!book) {
      return {
        redirect: {
          destination: "/books",
        },
      };
    }
  
    return {
      props: { books, book },
    };
  }

  
// nada/lib/books.ts //
import { getMdxContent, MaybeContent } from "./mdx";
import path from "path";
import fs from "fs";

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
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "books", "index.json"),
      "utf8"
    )
  );
}

export function getAllSlugs(): string[] {
  const data = getAllBooks();
  return data.map((item) => item.slug);
}

export async function getBook(slug: string): Promise<MaybeContent<Book>> {
  const book = await getMdxContent<Book>("books", `${slug}.mdx`);
  if (!book) {
    return undefined;
  }

  return {
    ...book,
  };
}


// nada/lib/engineering.ts //
import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";

export interface Build {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
  external: boolean;
  source: string;
}

export function getAllBuildData(): Build[] {
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "engineering", "index.json"),
      "utf8"
    )
  );
}

export function getAllSlugs(): string[] {
  const data = getAllBuildData();

  return data.filter((item) => !item.external).map((item) => item.url);
}

export async function getBuil(slug: string): Promise<MaybeContent<Build>> {
  return getMdxContent<Build>("engineering", `${slug}.mdx`);
}


// nada/lib/mdx.ts //
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";

export interface Content<TMetadata = { [key: string]: any }> {
  metadata: TMetadata;
  source: string;
}

export type MaybeContent<TMetadata> = Content<TMetadata> | undefined;

export async function getMdxContent<TMetadata>(
  ...paths: string[]
): Promise<MaybeContent<TMetadata>> {
  const contentPath = path.join(process.cwd(), "content", ...paths);
  if (!fs.existsSync(contentPath)) {
    return undefined;
  }

  const content = fs.readFileSync(contentPath, "utf8");
  const source = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: { development: false },
  });

  return {
    metadata: source.frontmatter as TMetadata,
    source: source.compiledSource,
  };
}


// nada/lib/writing.ts //

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
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "writing", "index.json"),
      "utf8"
    )
  );
}

export function getAllSlugs(): string[] {
  const data = getAllPostData();

  return data.filter((item) => !item.external).map((item) => item.url);
}

export async function getPost(slug: string): Promise<MaybeContent<Post>> {
  return getMdxContent<Post>("writing", `${slug}.mdx`);
}


// nada/scripts/generate-content.mjs //
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";

async function writing() {
  const metadata = [];
  const basePath = path.join(process.cwd(), "content", "writing");

  const external = JSON.parse(
    fs.readFileSync(path.join(basePath, "external.json"), "utf8")
  ).map((item) => ({ ...item, external: true }));
  const postPaths = fs.readdirSync(basePath, "utf8");
  const posts = await Promise.all(
    postPaths
      .filter((fileName) => fileName.includes(".mdx"))
      .map(async (fileName) => {
        const contentPath = path.join(basePath, fileName);
        const fileContents = fs.readFileSync(contentPath, "utf8");
        const source = await serialize(fileContents, {
          parseFrontmatter: true,
          mdxOptions: { development: false },
        });

        return {
          ...source.frontmatter,
          url: "/" + path.join("writing", fileName.split(".")[0]),
          external: false,
        };
      })
  );

  metadata.push(...posts);
  metadata.push(...external);
  metadata.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  fs.writeFileSync(
    path.join(basePath, "index.json"),
    JSON.stringify(metadata, undefined, 2)
  );
}

async function books() {
  const basePath = path.join(process.cwd(), "content", "books");

  const bookPaths = fs.readdirSync(basePath, "utf8");
  const books = await Promise.all(
    bookPaths
      .filter((fileName) => fileName.includes(".mdx"))
      .map(async (fileName) => {
        const contentPath = path.join(basePath, fileName);
        const fileContents = fs
          .readFileSync(contentPath, "utf8")
          .split("## My Notes")[0];
        const source = await serialize(fileContents, {
          parseFrontmatter: true,
          mdxOptions: { development: false },
        });

        return {
          ...source.frontmatter,
          slug: "/" + path.join("books", fileName.split(".")[0]),
          summary: source.compiledSource,
        };
      })
  );

  books.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  fs.writeFileSync(
    path.join(basePath, "index.json"),
    JSON.stringify(books, undefined, 2)
  );
}

async function engineering() {
  const metadata = [];
  const basePath = path.join(process.cwd(), "content", "engineering");

  const external = JSON.parse(
    fs.readFileSync(path.join(basePath, "external.json"), "utf8")
  ).map((item) => ({ ...item, external: true }));
  const postPaths = fs.readdirSync(basePath, "utf8");
  const posts = await Promise.all(
    postPaths
      .filter((fileName) => fileName.includes(".mdx"))
      .map(async (fileName) => {
        const contentPath = path.join(basePath, fileName);
        const fileContents = fs.readFileSync(contentPath, "utf8");
        const source = await serialize(fileContents, {
          parseFrontmatter: true,
          mdxOptions: { development: false },
        });

        return {
          ...source.frontmatter,
          url: "/" + path.join("engineering", fileName.split(".")[0]),
          external: false,
        };
      })
  );

  metadata.push(...posts);
  metadata.push(...external);
  metadata.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  fs.writeFileSync(
    path.join(basePath, "index.json"),
    JSON.stringify(metadata, undefined, 2)
  );
}

async function main() {
  await writing();
  await books();
  await engineering();
}

main();



// nada/scripts/generate-sitemap.mjs //
import fs from "fs";
import path from "path";

function getAllBookSlugs() {
  const data = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "books", "index.json"),
      "utf8"
    )
  );
  return data.map((item) => item.slug);
}

function getAllWritingSlugs() {
  const data = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "writing", "index.json"),
      "utf8"
    )
  );

  return data.filter((item) => !item.external).map((item) => item.url);
}

function getAllEngineeringSlugs() {
  const data = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "engineering", "index.json"),
      "utf8"
    )
  );

  return data.filter((item) => !item.external).map((item) => item.url);
}

async function main() {
  const bookSlugs = getAllBookSlugs();
  const writingSlugs = getAllWritingSlugs();
  const engineeringSlugs = getAllEngineeringSlugs();
  const allSlugs = [...bookSlugs, ...writingSlugs, ...engineeringSlugs];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lukketsvane.com</loc>
  </url>
  <url>
    <loc>https://lukketsvane.com/writing</loc>
  </url>
  <url>
    <loc>https://lukketsvane.com/engineering</loc>
  </url>
  <url>
    <loc>https://lukketsvane.com/books</loc>
  </url>
  <url>
    <loc>https://lukketsvane.com/notes</loc>
  </url>${allSlugs
    .map((slug) => {
      return `
  <url>
    <loc>${`https://lukketsvane.com${slug}`}</loc>
  </url>`;
    })
    .join("")}
</urlset>`;

  if (fs.existsSync("public/sitemap.xml")) {
    fs.unlinkSync("public/sitemap.xml");
  }

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

main();
