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

  const filteredItems = items.filter((item) =>
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (typeFilter === "" || item.type === typeFilter)
  );

  return (
    <Flex direction={isMobile ? "column" : "row"} width="100%" gap={8} >
      <Stack direction={isMobile ? "row" : "column"} spacing={4} width={isMobile ? "100%" : "200px"} mb={isMobile ? 8 : 0} overflowX={isMobile ? "auto" : "visible"}>
        <Heading as="h4" size="md"  minWidth="80px">Type</Heading>
        <Flex direction={isMobile ? "row" : "column"} gap={2 }>
          <Link color={typeFilter === "" ? "blue.500" : "gray.500"} onClick={() => onTypeFilterChange("")}>All</Link>
          <Link color={typeFilter === "public" ? "blue.500" : "gray.500"} onClick={() => onTypeFilterChange("public")}>Public</Link>
          <Link color={typeFilter === "private" ? "blue.500" : "gray.500"} onClick={() => onTypeFilterChange("private")}>Private</Link>
          <Link color={typeFilter === "prototype" ? "blue.500" : "gray.500"} onClick={() => onTypeFilterChange("prototype")}>Prototype</Link>
          <Link color={typeFilter === "personal" ? "blue.500" : "gray.500"} onClick={() => onTypeFilterChange("personal")}>Personal</Link>
        </Flex>
      </Stack>
      <Flex direction="column" width="100%" position="relative" left="-12"px>
        <Box position="absolute" top="12px" left="164px" bottom="0" width="2px" bg="gray.200" zIndex={-1} />
        {filteredItems.map((item, index) => (
          <Flex key={item.title} mb={8} alignItems="center" position="relative">
            <Text fontSize="lg" fontWeight="bold" color="gray.700" mr={4} minWidth="120px" textAlign="right">
              {item.date}
            </Text>
            <Circle ml="26px" size="6px" bg="black" zIndex={1} />
            <Box pl={18}>
              <Link href={item.url}>
                <Heading as="h3" size="md" mb={2}>
                  {item.title}
                </Heading>
              </Link>
              <Text mb={2}>{item.description}</Text>
              <Flex>
                {item.tags.map((tag) => (
                  <Tag key={tag} size="sm" variant="subtle" colorScheme="gray" mr={12}>
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