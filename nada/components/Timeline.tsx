import { Box, Flex, Heading, Text, Link, Tag, TagLabel, TagLeftIcon, Circle } from "@chakra-ui/react";
import { TimelineItem } from "../lib/projects";
import { FaLock, FaGlobe } from "react-icons/fa";

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <Flex direction="column" width="100%">
      {items.map((item, index) => (
        <Flex key={item.title} mb={8} alignItems="center">
          <Circle size="10px" bg="gray.300" mr={4} />
          <Box ml={4}>
            <Text fontSize="sm" color="gray.500" mb={1}>
              {item.date}
            </Text>
            <Link href={item.url}>
              <Heading as="h3" size="md" mb={2}>
                {item.title}
              </Heading>
            </Link>
            <Text mb={2}>{item.description}</Text>
            <Flex>
              {item.tags.map((tag) => (
                <Tag key={tag} size="sm" variant="subtle" colorScheme="gray" mr={2}>
                  <TagLeftIcon as={tag === "private" ? FaLock : FaGlobe} />
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </Flex>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};