import { MDXRemote } from "next-mdx-remote";
import { GetStaticPropsContext, NextPageWithLayout } from "next";
import { Heading, Flex, Box, Text, Image } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../../components/layout";
import { getAllSlugs, getPost, PostContent } from "../../lib/writing";
import { NextSeo } from "next-seo";

interface PostProps { post: PostContent; }

const Post: NextPageWithLayout<PostProps> = ({ post }) => {
  if (!post) {
    return <Box>Post not found</Box>;
  }

  return (
    <>
      <NextSeo 
        title={post.title || 'Untitled Post'} 
        description={post.description || ''} 
        openGraph={{ 
          title: post.title || 'Untitled Post', 
          description: post.description || '', 
          images: post.image ? [{ url: post.image }] : [], 
        }} 
      />
      <Flex direction="column" gap={4}>
        <Heading size="xl">{post.title || 'Untitled Post'}</Heading>
        <Text fontSize="md" color="gray.500">{post.date}</Text>
        {post.image && <Image src={post.image} alt={post.title} />}
        <Prose>
          <MDXRemote {...post.content} />
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
  if (!params?.slug || typeof params.slug !== "string") { 
    return { notFound: true }; 
  }
  const post = await getPost(params.slug);
  if (!post) { 
    return { notFound: true }; 
  }
  return { props: { post } };
}