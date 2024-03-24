import { Box, Flex, Heading, Text, Link, Tag, TagLabel, TagLeftIcon, Circle, Stack, useBreakpointValue } from "@chakra-ui/react";
import { TimelineItem } from "../lib/projects";
import { FaLock, FaGlobe } from "react-icons/fa";

interface TimelineProps {
  items: TimelineItem[];
  searchQuery: string;
  typeFilter: string;
  onTypeFilterChange: (type: string) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ items, searchQuery, typeFilter, onTypeFilterChange }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const timelineWidth = useBreakpointValue({ base: "100%", md: "calc(100% - 150px)" });

  const filteredItems = items.filter((item) =>
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (typeFilter === "" || item.type === typeFilter)
  );

  return (
    <Flex direction={isMobile ? "column" : "row"} width="100%" gap={4}>
      <Stack direction="column" spacing={2} width={isMobile ? "100%" : "150px"} mb={isMobile ? 4 : 0}>
        <Heading as="h4" size="sm" minWidth="80px">Type</Heading>
        <Flex direction="column" gap={1}>
          <Link
            color={typeFilter === "" ? "blue.500" : "gray.500"}
            onClick={() => onTypeFilterChange("")}
            fontWeight={typeFilter === "" ? "bold" : "normal"}
            fontSize="sm"
          >
            All
          </Link>
          <Link
            color={typeFilter === "public" ? "blue.500" : "gray.500"}
            onClick={() => onTypeFilterChange("public")}
            fontWeight={typeFilter === "public" ? "bold" : "normal"}
            fontSize="sm"
          >
            Public
          </Link>
          <Link
            color={typeFilter === "private" ? "blue.500" : "gray.500"}
            onClick={() => onTypeFilterChange("private")}
            fontWeight={typeFilter === "private" ? "bold" : "normal"}
            fontSize="sm"
          >
            Private
          </Link>
          <Link
            color={typeFilter === "prototype" ? "blue.500" : "gray.500"}
            onClick={() => onTypeFilterChange("prototype")}
            fontWeight={typeFilter === "prototype" ? "bold" : "normal"}
            fontSize="sm"
          >
            Prototype
          </Link>

        </Flex>
      </Stack>
      <Flex direction="column" width={timelineWidth} position="relative">
        <Box position="absolute" top="12px" left="120px" bottom="0" width="2px" bg="gray.200" zIndex={-1} />
        {filteredItems.map((item, index) => (
          <Flex key={item.title} mb={8} alignItems="center" position="relative">
            <Text fontSize="lg" fontWeight="bold" color="black" ml={-12} mr={3} minWidth="120px" textAlign="right" whiteSpace="nowrap">
              {item.date}
            </Text>
            <Circle size="9px" bg="gray.700" ml={8} mr={14} />
            <Box>
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
    </Flex>
  );
};