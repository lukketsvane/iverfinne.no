import { GetStaticPropsContext, NextPageWithLayout } from "next";
import { Heading, Flex, Image, Box } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../../components/layout";
import { MDXRemote } from "next-mdx-remote";
import { getAllSlugs, getProject, Project } from "../../lib/projects";
import { Content } from "../../lib/mdx";
import { NextSeo } from "next-seo";

interface ProjectProps { project: Content<Project>; }

const ProjectPage: NextPageWithLayout<ProjectProps> = ({ project }) => (
  <>
    <NextSeo title={project.metadata.title} description={project.metadata.description} 
      openGraph={{ title: project.metadata.title, description: project.metadata.description, 
        images: [{ url: project.metadata.image, alt: project.metadata.title }] }} />
    <Flex direction="column">
      <Heading as="h1" size="2xl" mb={8}>{project.metadata.title}</Heading>
      <Box mb={8}><Image src={project.metadata.image} alt={project.metadata.title} /></Box>
      <Prose><MDXRemote {...project.source} /></Prose>
    </Flex>
  </>
);

ProjectPage.getLayout = (page) => <Layout>{page}</Layout>;

export const getStaticPaths = async () => ({ paths: getAllSlugs(), fallback: false });

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params?.slug || typeof params.slug !== "string") return { redirect: { destination: "/projects" } };
  const project = await getProject(params.slug as string);
  return project ? { props: { project } } : { redirect: { destination: "/projects" } };
};

export default ProjectPage;