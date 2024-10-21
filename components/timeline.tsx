import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Circle,
  Stack,
  useBreakpointValue,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
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

export const Timeline: React.FC<TimelineProps> = ({
  items,
  searchQuery,
  typeFilter,
  categoryFilter,
  onTypeFilterChange,
  onCategoryFilterChange,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const timelineWidth = useBreakpointValue({ base: "100%", md: "calc(100% - 150px)" });
  const circleColor = useColorModeValue("black", "white");

  const filteredItems = items.filter(
    (item) =>
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )) &&
      (typeFilter === "" || item.type === typeFilter) &&
      (categoryFilter === "" || item.category === categoryFilter)
  );

  return (
    <Flex direction={isMobile ? "column" : "row"} width="100%" gap={4}>
      <Stack
        direction="column"
        spacing={2}
        width={isMobile ? "100%" : "150px"}
        mb={isMobile ? 4 : 0}
      >
        <Heading as="h4" size="s" minWidth="80px">
          Type
        </Heading>
        <Wrap>
          {[
            { label: "All", value: "", icon: FaGlobe, color: "blue" },
            { label: "Public", value: "public", icon: FaGlobe, color: "green" },
            { label: "Private", value: "private", icon: FaLock, color: "red" },
            { label: "Prototype", value: "prototype", icon: BiCode, color: "orange" },
          ].map(({ label, value, icon, color }) => (
            <WrapItem key={value}>
              <Tag
                size="sm"
                variant={typeFilter === value ? "solid" : "outline"}
                colorScheme={color}
                cursor="pointer"
                onClick={() => onTypeFilterChange(value)}
              >
                <TagLeftIcon as={icon} />
                <TagLabel>{label}</TagLabel>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
        <Heading as="h4" size="s" minWidth="80px">
          Category
        </Heading>
        <Wrap>
          {[
            { label: "All", value: "", icon: FaGlobe, color: "blue" },
            { label: "AI", value: "ai", icon: BiCode, color: "teal" },
            { label: "Web3", value: "web3", icon: BsGlobe2, color: "purple" },
            { label: "Art", value: "art", icon: RiArtboardLine, color: "pink" },
            { label: "VC", value: "vc", icon: AiOutlineVideoCamera, color: "yellow" },
          ].map(({ label, value, icon, color }) => (
            <WrapItem key={value}>
              <Tag
                size="sm"
                variant={categoryFilter === value ? "solid" : "outline"}
                colorScheme={color}
                cursor="pointer"
                onClick={() => onCategoryFilterChange(value)}
              >
                <TagLeftIcon as={icon} />
                <TagLabel>{label}</TagLabel>
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Stack>

      <Flex direction="column" width={timelineWidth} position="relative">
        <Box
          position="absolute"
          top="12px"
          left="120px"
          bottom="-160px"
          width="2px"
          bg="gray.200"
          zIndex={-1}
        />
        {filteredItems.map((item) => (
          <Flex key={item.title} mb={8} alignItems="center" position="relative">
            <Text
              fontSize="lg"
              fontWeight="bold"
              ml={-12}
              mr={4}
              minWidth="120px"
              textAlign="right"
              whiteSpace="nowrap"
            >
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
