// pages/writing/index.tsx
import { Heading, Link, Flex, Text, Stack, Divider, useColorModeValue } from '@chakra-ui/react';
import { getAllPostData, Post } from '../../lib/writing';
import type { NextPageWithLayout } from 'next';
import Layout from '../../components/layout';
import { NextSeo } from 'next-seo';

interface WritingProps { posts: Post[]; }

const Writing: NextPageWithLayout<WritingProps> = ({ posts }) => {
  const textColor = useColorModeValue("rgba(0, 0, 0, 0.55)", "rgba(255, 255, 255, 0.40)"); // 75% opacity for black in light mode and white in dark mode

  return (<>
    <NextSeo title="Writing | Iver Finne" />
    <Flex direction="column" align="flex-start" width="100%" gap={3}>
      <Heading as="h1" pt={2} size="xl" >Recent Blog Posts</Heading>
      <Text fontSize='0.9em' mb={6}>refuge for my poorly posed conjectures, research still pending.</Text>
      <Divider width="100%" mb={4} />
      {posts.map((post) => (<>
        <Stack width="100%" align="flex-start" spacing={1} key={post.title}>
          <Link href={post.url} target={post.external ? "_blank" : "_self"}>
            <Text>{post.title}</Text>
          </Link>
          <Text fontSize="sm" textAlign={"right"} color={textColor}>{post.date}</Text>
        </Stack>
        <Divider width="100%" />
      </>))}
    </Flex>
  </>);
};

export default Writing;

Writing.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps() {
  const posts = getAllPostData();
  return { props: { posts } };
}
