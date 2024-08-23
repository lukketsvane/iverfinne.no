import { MDXRemote } from "next-mdx-remote";
import { GetStaticPropsContext, NextPageWithLayout } from "next";
import { Heading, Flex, Box, Text } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../../components/layout";
import { getAllSlugs, getPost, Post as PostMetadata } from "../../lib/writing";
import { Content } from "../../lib/mdx";
import { NextSeo } from "next-seo";

interface PostProps { post: Content<PostMetadata>; }

const Post: NextPageWithLayout<PostProps> = ({ post }) => {
  if (!post || !post.metadata) {
    return <Box>Post not found</Box>;
  }

  return (
    <>
      <NextSeo 
        title={post.metadata.title || 'Untitled Post'} 
        description={post.metadata.description || ''} 
        openGraph={{ 
          title: post.metadata.title || 'Untitled Post', 
          description: post.metadata.description || '', 
          images: post.metadata.image ? [{ url: post.metadata.image }] : [], 
        }} 
      />
      <Flex direction="column" gap={2}>
        <Heading size="lg">{post.metadata.title || 'Untitled Post'}</Heading>
        <Text>{post.metadata.date}</Text>
        <Prose>
          {post.source && <MDXRemote {...post.source} />}
        </Prose>
      </Flex>
    </>
  );
};

export default Post;

Post.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || !params.slug || typeof params.slug !== "string") { 
    return { notFound: true }; 
  }
  const post = await getPost(params.slug as string);
  if (!post) { 
    return { notFound: true }; 
  }
  return { props: { post } };
}