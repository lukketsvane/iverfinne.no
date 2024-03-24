import { Flex, Heading, Input, Stack, Text, Image, Link, SimpleGrid, Box, AspectRatio } from "@chakra-ui/react";
import { getAllProjectData, Project, getTimelineData, TimelineItem } from "../../lib/projects";
import type { NextPageWithLayout } from "next";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";
import { Timeline } from "../../components/Timeline";

interface ProjectsProps {
  projects: Project[];
  timeline: TimelineItem[];
}

const Projects: NextPageWithLayout<ProjectsProps> = ({ projects, timeline }) => {
  return (
    <>
      <NextSeo title="Projects | Iver Finne" />
      <Flex direction="column" align="center" width="100%">
        <Heading as="h1" size="xl" mb={8}>
          build-in-public log
        </Heading>
        <Text fontSize="xl" mb={8}>
          some of my tools and experiments.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%" mb={12}>
          {projects.map((project) => (
            <Link key={project.title} href={project.url}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden" _hover={{ shadow: "md" }}>
                <AspectRatio ratio={16 / 9}>
                  <Image src={project.image} alt={project.title} objectFit="cover" />
                </AspectRatio>
                <Box p={4}>
                  <Heading as="h3" size="md" mb={2} noOfLines={1}>
                    {project.title}
                  </Heading>
                  <Text noOfLines={2}>{project.description}</Text>
                </Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
        <Input placeholder="Type here to search" mb={12} />

        <Timeline items={timeline} />
      </Flex>
    </>
  );
};

export default Projects;

Projects.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps() {
  const projects = getAllProjectData();
  const timeline = getTimelineData();
  return { props: { projects, timeline } };
}