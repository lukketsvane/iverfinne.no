// components/Timeline.tsx
import { Box, Flex, Heading, Text, Link, Tag, TagLabel, TagLeftIcon, Circle, Stack, useBreakpointValue, Wrap, WrapItem, useColorModeValue } from "@chakra-ui/react";
import { TimelineItem } from "../lib/projects";
import { FaLock, FaGlobe } from "react-icons/fa";
import { BiCode } from "react-icons/bi";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { RiArtboardLine } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";

interface TimelineProps {
  items: TimelineItem[];
  searchQuery: string;
  typeFilter: string;
  categoryFilter: string;
  onTypeFilterChange: (type: string) => void;
  onCategoryFilterChange: (category: string) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ items, searchQuery, typeFilter, categoryFilter, onTypeFilterChange, onCategoryFilterChange }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const timelineWidth = useBreakpointValue({ base: "100%", md: "calc(100% - 150px)" });
  const circleColor = useColorModeValue("black", "white");

  const filteredItems = items.filter((item) =>
    (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (typeFilter === "" || item.type === typeFilter) &&
    (categoryFilter === "" || item.category === categoryFilter)
  );

  return (
    <Flex direction={isMobile ? "column" : "row"} width="100%" gap={4}>
      <Stack direction="column" spacing={2} width={isMobile ? "100%" : "150px"} mb={isMobile ? 4 : 0}>
        <Heading as="h4" size="sm" minWidth="80px">Type</Heading>
        <Wrap>
          <WrapItem>
            <Tag
              size="sm"
              variant={typeFilter === "" ? "solid" : "outline"}
              colorScheme="blue"
              cursor="pointer"
              onClick={() => onTypeFilterChange("")}
            >
              <TagLeftIcon as={FaGlobe} />
              <TagLabel>All</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={typeFilter === "public" ? "solid" : "outline"}
              colorScheme="green"
              cursor="pointer"
              onClick={() => onTypeFilterChange("public")}
            >
              <TagLeftIcon as={FaGlobe} />
              <TagLabel>Public</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={typeFilter === "private" ? "solid" : "outline"}
              colorScheme="red"
              cursor="pointer"
              onClick={() => onTypeFilterChange("private")}
            >
              <TagLeftIcon as={FaLock} />
              <TagLabel>Private</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={typeFilter === "prototype" ? "solid" : "outline"}
              colorScheme="orange"
              cursor="pointer"
              onClick={() => onTypeFilterChange("prototype")}
            >
              <TagLeftIcon as={BiCode} />
              <TagLabel>Prototype</TagLabel>
            </Tag>
          </WrapItem>
        </Wrap>

        <Heading as="h4" size="sm" minWidth="80px" mt={4}>Category</Heading>
        <Wrap>
          <WrapItem>
            <Tag
              size="sm"
              variant={categoryFilter === "" ? "solid" : "outline"}
              colorScheme="blue"
              cursor="pointer"
              onClick={() => onCategoryFilterChange("")}
            >
              <TagLeftIcon as={FaGlobe} />
              <TagLabel>All</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={categoryFilter === "ai" ? "solid" : "outline"}
              colorScheme="teal"
              cursor="pointer"
              onClick={() => onCategoryFilterChange("ai")}
            >
              <TagLeftIcon as={BiCode} />
              <TagLabel>AI</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={categoryFilter === "web3" ? "solid" : "outline"}
              colorScheme="purple"
              cursor="pointer"
              onClick={() => onCategoryFilterChange("web3")}
            >
              <TagLeftIcon as={BsGlobe2} />
              <TagLabel>Web3</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={categoryFilter === "art" ? "solid" : "outline"}
              colorScheme="pink"
              cursor="pointer"
              onClick={() => onCategoryFilterChange("art")}
            >
              <TagLeftIcon as={RiArtboardLine} />
              <TagLabel>Art</TagLabel>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag
              size="sm"
              variant={categoryFilter === "vc" ? "solid" : "outline"}
              colorScheme="yellow"
              cursor="pointer"
              onClick={() => onCategoryFilterChange("vc")}
            >
              <TagLeftIcon as={AiOutlineVideoCamera} />
              <TagLabel>VC</TagLabel>
            </Tag>
          </WrapItem>
        </Wrap>
      </Stack>

      <Flex direction="column" width={timelineWidth} position="relative">
        <Box position="absolute" top="12px" left="120px" bottom="-160px" width="2px" bg="gray.200" zIndex={-1} />
        {filteredItems.map((item, index) => (
          <Flex key={item.title} mb={8} alignItems="center" position="relative">
            <Text fontSize="lg" fontWeight="bold" ml={-12} mr={4} minWidth="120px" textAlign="right" whiteSpace="nowrap">
              {item.date}
            </Text>
            <Circle size="8px" bg={circleColor} ml={7} mr={14} />
            <Box>
              <Link href={item.url}>
                <Heading as="h3" size="md" mb={2}>
                  {item.title}
                </Heading>
              </Link>
              <Text mb={2}>{item.description}</Text>
              <Wrap>
                {item.tags.map((tag) => (
                  <WrapItem key={tag}>
                    <Tag size="sm" variant="subtle" colorScheme="gray">
                      <TagLeftIcon as={tag === "private" ? FaLock : FaGlobe} />
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};