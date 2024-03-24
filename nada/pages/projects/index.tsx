import { Flex, Heading, Input, Stack, Text, Image, Link, SimpleGrid, Box } from "@chakra-ui/react";
import { getAllProjectData, Project } from "../../lib/projects";
import type { NextPageWithLayout } from "next";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";

interface ProjectsProps {
  projects: Project[];
}

const Projects: NextPageWithLayout<ProjectsProps> = ({ projects }) => {
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
        <Input placeholder="Type here to search" mb={12} />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%">
          {projects.map((project) => (
            <Link key={project.title} href={project.url}>
              <Stack
                borderWidth={1}
                borderRadius="lg"
                _hover={{ shadow: "md" }}
                overflow="hidden"
              >
                <Box height="200px" overflow="hidden">
                  <Image src={project.image} alt={project.title} objectFit="cover" width="100%" height="100%" />
                </Box>
                <Stack p={6}>
                  <Heading as="h3" size="md" noOfLines={1}>
                    {project.title}
                  </Heading>
                  <Text noOfLines={2}>{project.description}</Text>
                </Stack>
              </Stack>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Projects;

Projects.getLayout = (page) => <Layout>{page}</Layout>;

export async function getStaticProps() {
  const projects = getAllProjectData();
  return { props: { projects } };
}