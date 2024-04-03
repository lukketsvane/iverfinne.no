iverfinne.no
├─ components
│  ├─ Bookshelf.tsx
│  ├─ Layout.tsx
│  ├─ Expandable.tsx
│  ├─ PastWork.tsx
│  └─ Timeline.tsx
├─ content
│  ├─ books
│  │  ├─ a-thousand-brains.mdx
│  │  ├─ antkind.mdx
│  │  ├─ children-of-time.mdx
│  │  ├─ empire-of-things.mdx
│  │  ├─ index.json
│  │  └─ three-body-problem.mdx
│  ├─ projects
│  │  ├─ coral.mdx
│  │  ├─ dongjin.mdx
│  │  ├─ external.json
│  │  ├─ index.json
│  │  ├─ storygen.mdx
│  │  └─ ygdrasyl.mdx
│  ├─ timeline
│  │  └─ index.json
│  └─ writing
│     ├─ ai-novel-generation.mdx
│     ├─ big-compute.mdx
│     ├─ external.json
│     ├─ gradient-descent.mdx
│     ├─ index.json
│     ├─ person-of-compute.mdx
│     ├─ post-labour.mdx
│     └─ what-is-gen-art.mdx
├─ lib
│  ├─ books.ts
│  ├─ mdx.ts
│  ├─ projects.ts
│  └─ writing.ts
├─ pages
│  ├─ books
│  │  └─ [[...slug]].tsx
│  ├─ projects
│  │  ├─ [slug].tsx
│  │  └─ index.tsx
│  ├─ writing
│  │  ├─ [slug].tsx
│  │  └─ index.tsx
│  ├─ 404.tsx
│  ├─ _app.tsx
│  ├─ about-footer.tsx
│  ├─ about-me.tsx
│  ├─ _document.tsx
│  └─ index.tsx
├─ public
│  ├─ books
│  │  └─ steal-like-an-artist.png
│  ├─ images
│  │  ├─ coral
│  │  │  ├─ coral_1.gif
│  │  │  ├─ coral_11.png
│  │  │  ├─ coral_2.gif
│  │  │  ├─ coral_5.gif
│  │  │  ├─ coral_6.png
│  │  │  ├─ coral_7.jpeg
│  │  │  ├─ coral_8.png
│  │  │  └─ coral_9.jpeg
│  │  ├─ dongjin
│  │  │  ├─ IMG_1283.jpeg
│  │  │  └─ dongjin-logo.jpg
│  │  ├─ gradient_diffusion
│  │  │  ├─ gradient_1.webp
│  │  │  ├─ gradient_10.webp
│  │  │  ├─ gradient_11.webp
│  │  │  ├─ gradient_12.webp
│  │  │  ├─ gradient_13.webp
│  │  │  ├─ gradient_14.jpg
│  │  │  ├─ gradient_2.webp
│  │  │  ├─ gradient_3.webp
│  │  │  ├─ gradient_4.webp
│  │  │  ├─ gradient_5.webp
│  │  │  ├─ gradient_6.webp
│  │  │  ├─ gradient_7.webp
│  │  │  ├─ gradient_8.webp
│  │  │  └─ gradient_9.webp
│  │  ├─ storygen
│  │  │  ├─ adv_graph.png
│  │  │  ├─ book_flipping.gif
│  │  │  ├─ graph_1.svg
│  │  │  ├─ simplified_graph.jpeg
│  │  │  └─ simplified_graph.svg
│  │  ├─ what-is-generative-art
│  │  │  ├─ IMG_1266.png
│  │  │  ├─ IMG_1270.jpeg
│  │  │  ├─ asphyxia.jpg
│  │  │  ├─ bw_simple_1.png
│  │  │  ├─ bw_simple_2.png
│  │  │  ├─ bw_simple_3.png
│  │  │  ├─ bw_simple_4.png
│  │  │  ├─ charles_sowers_windswept_1.png
│  │  │  ├─ charles_sowers_windswept_2.png
│  │  │  ├─ condensation_cube_1.png
│  │  │  ├─ condensation_cube_2.png
│  │  │  ├─ conway_1.gif
│  │  │  ├─ conway_2.gif
│  │  │  ├─ conway_3.gif
│  │  │  ├─ distribution sketch.png
│  │  │  ├─ flight_patterns.jpg
│  │  │  ├─ func_3.png
│  │  │  ├─ func_4.png
│  │  │  ├─ func_ran.png
│  │  │  ├─ func_spatter.png
│  │  │  ├─ hilma_af_klint_the_five.png
│  │  │  ├─ image.png
│  │  │  ├─ jackson_pollock_alchemy.png
│  │  │  ├─ lava_lamp.png
│  │  │  ├─ magical_contamination_1.png
│  │  │  ├─ magical_contamination_2.png
│  │  │  ├─ max_ernst_forest_and_dove.jpg
│  │  │  ├─ mosaic_virus.jpg
│  │  │  ├─ myriad_tulips.jpg
│  │  │  ├─ paul_emile_borduas_untitled.webp
│  │  │  ├─ reas_rgb_3_1.jpg
│  │  │  ├─ reas_rgb_3_2.jpg
│  │  │  ├─ reas_rgb_3_3.jpg
│  │  │  ├─ snowflake_1.png
│  │  │  ├─ snowflake_2.png
│  │  │  ├─ sol_lewitt_Interactive_wall_drawing.png
│  │  │  ├─ sol_lewitt_drawing_being_made_at_dia_beacon.png
│  │  │  ├─ sol_lewitt_proposal_for_wall_drawing.png


// components/Bookshelf.tsx
import {Box,Icon,HStack,Flex,Heading,Image,Center,useDimensions,useBreakpointValue,} from "@chakra-ui/react";
import React from "react";
import {Book} from "../lib/books";
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import {useRouter} from "next/router";
interface BookshelfProps {books: Book[];}
export function Bookshelf({books}: BookshelfProps) {
  const router = useRouter();
  const [bookIndex, setBookIndex] = React.useState(-1);
  const [scroll, setScroll] = React.useState(-200);
  const bookshelfRef = React.useRef<HTMLDivElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const scrollRightRef = React.useRef<HTMLDivElement>(null);
  const scrollLeftRef = React.useRef<HTMLDivElement>(null);
  const viewportDimensions = useDimensions(viewportRef, true);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [booksInViewport, setBooksInViewport] = React.useState(0);
  const scrollEvents = useBreakpointValue({base: { start: "touchstart", stop: "touchend" },sm: { start: "mouseenter", stop: "mouseleave" },});
  const width = 41.5;
  const height = 220;
  const spineWidth = `${width}px`;
  const coverWidth = `${width * 4}px`;
  const bookWidth = `${width * 5}px`;
  const bookHeight = `${height}px`;
  const minScroll = 0;
  const maxScroll = React.useMemo(() => (width + 12) * (books.length - booksInViewport) + (bookIndex > -1 ? width * 4 : 0) + 5, [bookIndex, books.length, booksInViewport]);
  const boundedScroll = (scrollX: number) => {setScroll(Math.max(minScroll, Math.min(maxScroll, scrollX)));};
  const boundedRelativeScroll = React.useCallback((incrementX: number) => {setScroll((_scroll) => Math.max(minScroll, Math.min(maxScroll, _scroll + incrementX)));}, [maxScroll]);
  React.useEffect(() => {if (router.query.slug && router.query.slug.length > 0 && bookIndex === -1) {const idx = books.findIndex((b) => b.slug.toLowerCase().includes((router.query.slug as string[])[0].toLowerCase()));setBookIndex(idx);}}, []);
  React.useEffect(() => {if (bookIndex === -1) {boundedRelativeScroll(0);} else {boundedScroll((bookIndex - (booksInViewport - 4.5) / 2) * (width + 11));}}, [bookIndex, boundedRelativeScroll]);
  React.useEffect(() => {if (viewportDimensions) {boundedRelativeScroll(0);const numberOfBooks = viewportDimensions.contentBox.width / (width + 11);setBooksInViewport(numberOfBooks);}}, [viewportDimensions, boundedRelativeScroll]);
  React.useEffect(() => {if (!scrollEvents) {return;}const currentScrollEvents = { ...scrollEvents };const currentScrollRightRef = scrollRightRef.current;const currentScrollLeftRef = scrollLeftRef.current;let scrollInterval: NodeJS.Timeout | null = null;const setScrollRightInterval = () => {setIsScrolling(true);scrollInterval = setInterval(() => {boundedRelativeScroll(3);}, 10);};const setScrollLeftInterval = () => {setIsScrolling(true);scrollInterval = setInterval(() => {boundedRelativeScroll(-3);}, 10);};const clearScrollInterval = () => {setIsScrolling(false);if (scrollInterval) {clearInterval(scrollInterval);}};currentScrollRightRef!.addEventListener(currentScrollEvents.start, setScrollRightInterval);currentScrollRightRef!.addEventListener(currentScrollEvents.stop, clearScrollInterval);currentScrollLeftRef!.addEventListener(currentScrollEvents.start, setScrollLeftInterval);currentScrollLeftRef!.addEventListener(currentScrollEvents.stop, clearScrollInterval);return () => {clearScrollInterval();currentScrollRightRef!.removeEventListener(currentScrollEvents.start, setScrollRightInterval);currentScrollRightRef!.removeEventListener(currentScrollEvents.stop, clearScrollInterval);currentScrollLeftRef!.removeEventListener(currentScrollEvents.start, setScrollLeftInterval);currentScrollLeftRef!.removeEventListener(currentScrollEvents.stop, clearScrollInterval);};}, [boundedRelativeScroll]);
  return (
    <>
      <svg style={{position: "absolute",inset: 0,visibility: "hidden",}}><defs><filter id="paper" x="0%" y="0%" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise" /><feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight"><feDistantLight azimuth="45" elevation="35" /></feDiffuseLighting></filter></defs></svg>
      <Box position="relative" ref={bookshelfRef}>
        <Box position="absolute" left={{ base: "-28px", md: "-36px" }} height="100%" display={scroll > minScroll ? "block" : "none"}><Center ref={scrollLeftRef} borderRadius="md" height="100%" width="28px" _hover={{ bg: "gray.100" }} borderRightRadius={{ base: 0, md: undefined }}><Icon as={FaChevronLeft} boxSize={3} /></Center></Box>
        <HStack alignItems="center" gap={1} overflowX="hidden" cursor="grab" ref={viewportRef}>{books.map((book, index) => (<button key={book.title} onClick={() => {if (index === bookIndex) {setBookIndex(-1);router.push(`/books`);} else {setBookIndex(index);router.push(book.slug);}}}
              style={{display: "flex",flexDirection: "row",alignItems: "center",justifyContent: "flex-start",outline: "none",flexShrink: 0,transform: `translateX(-${scroll}px)`,width: bookIndex === index ? bookWidth : spineWidth,perspective: "1000px",WebkitPerspective: "1000px",gap: "0px",transition: isScrolling ? `transform 100ms linear` : `all 500ms ease`,willChange: "auto",}}><Flex alignItems="flex-start" justifyContent="center" width={spineWidth} height={bookHeight} flexShrink={0} transformOrigin="right" backgroundColor={book.spineColor} color={book.textColor} transform={`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${bookIndex === index ? "-60deg" : "0deg"}) rotateZ(0deg) skew(0deg, 0deg)`} transition={"all 500ms ease"} willChange="auto" filter="brightness(0.8) contrast(2)"
              style={{transformStyle: "preserve-3d",}}><span
                style={{pointerEvents: "none",position: "fixed",top: 0,left: 0,zIndex: 50,height: bookHeight,width: spineWidth,opacity: 0.4,filter: "url(#paper)",}} /><Heading mt="12px" as="h2" fontSize="xs" fontFamily={`"DM Sans", sans-serif`} style={{ writingMode: "vertical-rl" }} userSelect="none" textOverflow="ellipsis" whiteSpace="nowrap" overflow="hidden" maxHeight={`${height - 24}px`}>{book.title}</Heading></Flex><Box position="relative" flexShrink={0} overflow="hidden" transformOrigin="left" transform={`translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${bookIndex === index ? "30deg" : "88.8deg"}) rotateZ(0deg) skew(0deg, 0deg)`} transition={"all 500ms ease"} willChange="auto" filter="brightness(0.8) contrast(2)"
              style={{transformStyle: "preserve-3d",}}><span
                style={{pointerEvents: "none",position: "fixed",top: 0,right: 0,zIndex: 50,height: bookHeight,width: coverWidth,opacity: 0.4,filter: "url(#paper)",}} /><span
                style={{pointerEvents: "none",position: "absolute",top: 0,left: 0,zIndex: 50,height: bookHeight,width: coverWidth,background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,}} /><Image src={book.coverImage} alt={book.title} width={coverWidth} height={bookHeight}
                style={{transition: "all 500ms ease",willChange: "auto",}} /></Box></button>))}</HStack>
        <Box position="absolute" right={{ base: "-28px", md: "-36px" }} pl="10px" height="100%" top={0} display={scroll < maxScroll ? "block" : "none"}><Center borderLeftRadius={{ base: 0, md: undefined }} ref={scrollRightRef} height="100%" borderRadius="md" width="28px" _hover={{ bg: "gray.100" }}><Icon as={FaChevronRight} boxSize={3} /></Center></Box>
      </Box>
    </>
  );
}

// components/Expandable.tsx
import { useState } from 'react';
import { Box, Text, Divider, Collapse, useDisclosure, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
interface ExpandableProps {children: React.ReactNode;title: string;}
export const Expandable: React.FC<ExpandableProps> = ({ children, title }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("rgba(255, 255, 255, 1)", "rgba(26, 32, 44, 1)");
  return (
    <Box position="relative" onClick={onToggle} cursor="pointer">
      <Divider borderColor="gray.300" />
      <Heading as="h3" size="md" mt={4} mb={2} fontWeight="bold">
        {title}
      </Heading>
      <Collapse startingHeight={isOpen ? 'auto' : '60px'} in={isOpen}>
        <Box py={4} maxHeight={isOpen ? 'none' : '60px'} overflow="hidden">
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  height="60px"
                  background={colorMode === "light"
                              ? "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))"
                              : `linear-gradient(to bottom, rgba(26, 32, 44, 0), ${bgColor})`} 
                  pointerEvents="none"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <Box overflowY="auto" maxHeight={isOpen ? 'none' : '60px'} pr={4} sx={{
            '&::-webkit-scrollbar': {
              width: '0px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'transparent',
            },
          }}>
            {children}
          </Box>
          <Text mt={4} fontSize="sm" color="gray.500" onClick={onToggle}>
            {isOpen ? 'Read Less' : 'Read More'}
          </Text>
        </Box>
      </Collapse>
    </Box>
  );
};



// components/Layout.tsx
import { Container, VStack, Text, Flex, Box, HStack, Menu, MenuButton, IconButton, MenuList, MenuItem, Icon, MenuGroup, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { FiMenu } from "react-icons/fi";
function Navigation({ link, children, isExternal, }: { link: string; children: string; isExternal?: boolean; }) {
  const router = useRouter();
  const isActive = link === "/" ? router.asPath === link : router.asPath.includes(link);
  const activeColor = useColorModeValue("black", "white");
  const inactiveColor = useColorModeValue("gray.500", "gray.400");
  return (
    <Link href={link} target={isExternal ? "_blank" : "_self"}>
      <Text fontSize="lg" color={isActive ? activeColor : inactiveColor} _hover={{ color: activeColor }}>
        {children}
      </Text>
    </Link>
  );
}
function Layout({ children }: PropsWithChildren) {
  const bgColor = useColorModeValue("white", "gray.800");
  const displayBooksLink = useBreakpointValue({ base: 'none', lg: 'block' });
  return (
    <Container position="relative" mt={{ base: 16, md: 20 }} pb={{ base: 8, md: "10em" }} gap={{ md: 10 }}>
      <Flex position="absolute" right="100%" mr="160px" display={{ base: "none", lg: "flex" }}>
        <VStack position="fixed" align="flex-start" spacing={10}>
          <VStack align="flex-start">
            <Text fontWeight="bold" fontSize="smaller">NAVIGATION</Text>
            <Navigation link="/">Home</Navigation>
            <Navigation link="/projects">Projects</Navigation>
            <Navigation link="/writing">Writing</Navigation>
            <Navigation link="/books">Books</Navigation>
          </VStack>
          <VStack align="flex-start">
            <Text fontWeight="bold" fontSize="smaller">FIND ME ON</Text>
            <Navigation link="https://twitter.com/amitoser" isExternal>Twitter</Navigation>
            <Navigation link="https://github.com/lukketsvane" isExternal>GitHub</Navigation>
          </VStack>
        </VStack>
      </Flex>
      <Container width={{ md: "container.md" }} position="relative">
        <Box width="100%" height={20} position="fixed" top={0} zIndex={100} display={{ base: "none", lg: "block" }} />
        <Flex justify="space-between" position="fixed" top={0} display={{ base: "flex", lg: "none" }} height={12} zIndex={50} left={0} width="100%" align="center" borderBottom="1px solid" borderBottomColor="gray.200" bg={bgColor}>
          <Container px={8}>
            <Flex justify="space-between" width="100%">
              <HStack spacing={8}>
                <Navigation link="/">Home</Navigation>
                <Navigation link="/writing">Writing</Navigation>
                <Box display={displayBooksLink}><Navigation link="/books">Books</Navigation></Box>
                <Navigation link="/projects">Projects</Navigation>
              </HStack>
              <Menu>
                <MenuButton as={IconButton} aria-label="Options" icon={<Icon as={FiMenu} boxSize={4} />} variant="outline" size="sm" />
                <MenuList>
                  <MenuGroup title="NAVIGATION">
                    <VStack align="flex-start" px={4} spacing={3} mb={4}>
                      <Navigation link="/">Home</Navigation>
                      <Navigation link="/writing">Writing</Navigation>
                      <Navigation link="/books">Books</Navigation>
                      <Navigation link="/projects">Projects</Navigation>
                    </VStack>
                  </MenuGroup>
                  <MenuGroup title="FIND ME ON">
                    <VStack align="flex-start" px={4} spacing={3} mb={2}>
                      <Navigation link="https://twitter.com/amitoser" isExternal>Twitter</Navigation>
                      <Navigation link="https://github.com/lukketsvane" isExternal>GitHub</Navigation>
                    </VStack>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Container>
        </Flex>
        {children}
      </Container>
    </Container>
  );
}
export default Layout;


// components/Timeline.tsx
import {Box,Flex,Heading,Text,Link,Tag,TagLabel,TagLeftIcon,Circle,Stack,useBreakpointValue,Wrap,WrapItem,useColorModeValue,} from "@chakra-ui/react";
import {TimelineItem} from "../lib/projects";
import {FaLock,FaGlobe} from "react-icons/fa";
import {BiCode} from "react-icons/bi";
import {AiOutlineVideoCamera} from "react-icons/ai";
import {RiArtboardLine} from "react-icons/ri";
import {BsGlobe2} from "react-icons/bs";
interface TimelineProps {items: TimelineItem[];searchQuery: string;typeFilter: string;categoryFilter: string;onTypeFilterChange: (type: string) => void;onCategoryFilterChange: (category: string) => void;}
export const Timeline: React.FC<TimelineProps> = ({items,searchQuery,typeFilter,categoryFilter,onTypeFilterChange,onCategoryFilterChange}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const timelineWidth = useBreakpointValue({ base: "100%", md: "calc(100% - 150px)" });
  const circleColor = useColorModeValue("black", "white");
  const filteredItems = items.filter((item) => (item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase()) || item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))) && (typeFilter === "" || item.type === typeFilter) && (categoryFilter === "" || item.category === categoryFilter));
  return (
    <Flex direction={isMobile ? "column" : "row"} width="100%" gap={4}>
      <Stack direction="column" spacing={2} width={isMobile ? "100%" : "150px"} mb={isMobile ? 4 : 0}>
        <Heading as="h4" size="s" minWidth="80px">Type</Heading>
        <Wrap>
          <WrapItem><Tag size="sm" variant={typeFilter === "" ? "solid" : "outline"} colorScheme="blue" cursor="pointer" onClick={() => onTypeFilterChange("")}><TagLeftIcon as={FaGlobe} /><TagLabel>All</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={typeFilter === "public" ? "solid" : "outline"} colorScheme="green" cursor="pointer" onClick={() => onTypeFilterChange("public")}><TagLeftIcon as={FaGlobe} /><TagLabel>Public</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={typeFilter === "private" ? "solid" : "outline"} colorScheme="red" cursor="pointer" onClick={() => onTypeFilterChange("private")}><TagLeftIcon as={FaLock} /><TagLabel>Private</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={typeFilter === "prototype" ? "solid" : "outline"} colorScheme="orange" cursor="pointer" onClick={() => onTypeFilterChange("prototype")}><TagLeftIcon as={BiCode} /><TagLabel>Prototype</TagLabel></Tag></WrapItem>
        </Wrap>
        <Heading as="h4" size="s" minWidth="80px">Category</Heading>
        <Wrap>
          <WrapItem><Tag size="sm" variant={categoryFilter === "" ? "solid" : "outline"} colorScheme="blue" cursor="pointer" onClick={() => onCategoryFilterChange("")}><TagLeftIcon as={FaGlobe} /><TagLabel>All</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={categoryFilter === "ai" ? "solid" : "outline"} colorScheme="teal" cursor="pointer" onClick={() => onCategoryFilterChange("ai")}><TagLeftIcon as={BiCode} /><TagLabel>AI</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={categoryFilter === "web3" ? "solid" : "outline"} colorScheme="purple" cursor="pointer" onClick={() => onCategoryFilterChange("web3")}><TagLeftIcon as={BsGlobe2} /><TagLabel>Web3</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={categoryFilter === "art" ? "solid" : "outline"} colorScheme="pink" cursor="pointer" onClick={() => onCategoryFilterChange("art")}><TagLeftIcon as={RiArtboardLine} /><TagLabel>Art</TagLabel></Tag></WrapItem>
          <WrapItem><Tag size="sm" variant={categoryFilter === "vc" ? "solid" : "outline"} colorScheme="yellow" cursor="pointer" onClick={() => onCategoryFilterChange("vc")}><TagLeftIcon as={AiOutlineVideoCamera} /><TagLabel>VC</TagLabel></Tag></WrapItem>
        </Wrap>
      </Stack>
      <Flex direction="column" width={timelineWidth} position="relative">
        <Box position="absolute" top="12px" left="120px" bottom="-160px" width="2px" bg="gray.200" zIndex={-1} />
        {filteredItems.map((item, index) => (
          <Flex key={item.title} mb={8} alignItems="center" position="relative">
            <Text fontSize="lg" fontWeight="bold" ml={-12} mr={4} minWidth="120px" textAlign="right" whiteSpace="nowrap">{item.date}</Text>
            <Circle size="8px" bg={circleColor} ml={7} mr={14} />
            <Box>
              <Link href={item.url}><Heading as="h3" size="md" mb={2}>{item.title}</Heading></Link>
              <Text mb={2}>{item.description}</Text>
              <Wrap>{item.tags.map((tag) => (<WrapItem key={tag}><Tag size="sm" variant="subtle" colorScheme="gray"><TagLeftIcon as={tag === "private" ? FaLock : FaGlobe} /><TagLabel>{tag}</TagLabel></Tag></WrapItem>))}</Wrap>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};


// lib/books.ts
import { getMdxContent, MaybeContent } from "./mdx";
import path from "path";
import fs from "fs";
export interface Book { title: string; author: string; date: string; rating: number; coverImage: string; spineColor: string; textColor: string; slug: string; summary: string; }
export function getAllBooks(): Book[] { return JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "books", "index.json"), "utf8")); }
export function getAllSlugs(): string[] { const data = getAllBooks(); return data.map((item) => item.slug); }
export async function getBook(slug: string): Promise<MaybeContent<Book>> { const book = await getMdxContent<Book>("books", `${slug}.mdx`); if (!book) { return undefined; } return { ...book, }; }


// lib/mdx.ts
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";
export interface Content<TMetadata = { [key: string]: any }> { metadata: TMetadata; source: string; }
export type MaybeContent<TMetadata> = Content<TMetadata> | undefined;
export async function getMdxContent<TMetadata>(...paths: string[]): Promise<MaybeContent<TMetadata>> { const contentPath = path.join(process.cwd(), "content", ...paths); if (!fs.existsSync(contentPath)) { return undefined; } const content = fs.readFileSync(contentPath, "utf8"); const source = await serialize(content, { parseFrontmatter: true, mdxOptions: { development: false }, }); return { metadata: source.frontmatter as TMetadata, source: source.compiledSource, }; }



// lib/projects.ts
import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";
export interface Project { title: string; description: string; image: string; date: string; url: string; source: string; }
export function getAllProjectData(): Project[] { return JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "projects", "index.json"), "utf8")); }
export function getAllSlugs(): string[] { const data = getAllProjectData(); return data.map((item) => item.url); }
export async function getProject(slug: string): Promise<MaybeContent<Project>> { return getMdxContent<Project>("projects", `${slug}.mdx`); }
export interface TimelineItem { date: string; title: string; description: string; tags: string[]; type: "public" | "private" | "prototype"; category: string; url: string; }
export function getTimelineData(): TimelineItem[] { return JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "timeline", "index.json"), "utf8")); }



// lib/writing.ts
import path from "path";
import fs from "fs";
import { getMdxContent, MaybeContent } from "./mdx";
export interface Post { title: string; description: string; image: string; date: string; url: string; external: boolean; source: string; }
export function getAllPostData(): Post[] { return JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "writing", "index.json"), "utf8")); }
export function getAllSlugs(): string[] { const data = getAllPostData(); return data.filter((item) => !item.external).map((item) => item.url); }
export async function getPost(slug: string): Promise<MaybeContent<Post>> { return getMdxContent<Post>("writing", `${slug}.mdx`); }



// pages/books/[[...slug]].tsx
import { Flex, Heading, Image, Stack, VStack, Text, Divider, Link } from "@chakra-ui/react";
import { GetStaticPropsContext, NextPageWithLayout } from "next";
import Layout from "../../components/Layout";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { MDXRemote } from "next-mdx-remote";
import { Book, getAllBooks, getAllSlugs, getBook } from "../../lib/books";
import { Bookshelf } from "../../components/Bookshelf";
import { Content } from "../../lib/mdx";
import { NextSeo } from "next-seo";
interface BooksProps { books: Book[]; book?: Content<Book>; }
const Books: NextPageWithLayout<BooksProps> = ({ books, book }) => {
  if (book) {
    return (
      <>
        <NextSeo title={book.metadata.title} description={`By: ${book.metadata.author} - Read: ${book.metadata.date} - Rating: ${book.metadata.rating}/10`} openGraph={{ title: book.metadata.title, description: `By: ${book.metadata.author} - Read: ${book.metadata.date} - Rating: ${book.metadata.rating}/10`, }} />
        <Stack spacing={3}>
          <Flex direction="row" align="flex-start" gap={6}>
            <VStack align="flex-start" flexGrow={1}><Heading size="xl">{book.metadata.title}</Heading><Text color="gray.400" fontSize="xl">By: {book.metadata.author} - Read: {book.metadata.date} - Rating: {book.metadata.rating}/10</Text></VStack>
          </Flex>
          <Prose><MDXRemote compiledSource={book.source} /></Prose>
        </Stack>
      </>
    );
  }
  return (
    <>
      <NextSeo title="Books | Iver Finne" />
      <Stack spacing={5}>{books.slice().sort((a, b) => b.rating - a.rating).map((book, index) => (
        <Stack key={book.title} scrollMarginTop={20}><Stack>{index > 0 && <Divider mb={3} width="100%" />}
          <Flex direction="row" align="flex-start" gap={6}><Image border="1px solid" borderColor="gray.200" src={book.coverImage} alt={book.title} height={{ base: "100px", sm: "140px", md: "160px" }} />
            <VStack align="flex-start" flexGrow={1}><Link href={book.slug}><Heading size="md">{book.title}</Heading></Link><Text color="#999" size="md">{book.author}</Text><Text color="#666">Read: {book.date} • Rating: {book.rating}/10</Text><Prose><MDXRemote compiledSource={book.summary} /></Prose></VStack>
          </Flex></Stack></Stack>))}
      </Stack>
    </>
  );
};
export default Books;
Books.getLayout = (page: JSX.Element) => (<Layout><Flex direction="column" gap={8}><Bookshelf books={page.props.books} /><Divider />{page}</Flex></Layout>);
export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths: [{ params: { slug: undefined } }, ...paths], fallback: false, };
}
export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (params && params.slug && params.slug.length > 1) { return { redirect: { destination: "/books", }, }; }
  const books = getAllBooks();
  if (!params || !params.slug || params.slug.length === 0) { return { props: { books, }, }; }
  const book = await getBook(params.slug[0] as string);
  if (!book) { return { redirect: { destination: "/books", }, }; }
  return { props: { books, book }, };
}



// pages/projects/[slug].tsx
import { GetStaticPropsContext, NextPageWithLayout } from "next";
import { Heading, Flex, Image, Box } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../../components/Layout";
import { MDXRemote } from "next-mdx-remote";
import { getAllSlugs, getProject, Project } from "../../lib/projects";
import { Content } from "../../lib/mdx";
import { NextSeo } from "next-seo";
interface ProjectProps { project: Content<Project>; }
const ProjectPage: NextPageWithLayout<ProjectProps> = ({ project }) => {
  return (
    <>
      <NextSeo title={project.metadata.title} description={project.metadata.description} openGraph={{ title: project.metadata.title, description: project.metadata.description, images: [{ url: project.metadata.image, alt: project.metadata.title, }], }} />
      <Flex direction="column">
        <Heading as="h1" size="2xl" mb={8}>{project.metadata.title}</Heading>
        <Box mb={8}><Image src={project.metadata.image} alt={project.metadata.title} /></Box>
        <Prose><MDXRemote compiledSource={project.source} /></Prose>
      </Flex>
    </>
  );
};
export default ProjectPage;
ProjectPage.getLayout = (page) => <Layout>{page}</Layout>;
export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths, fallback: false, };
}
export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || !params.slug || typeof params.slug !== "string") { return { redirect: { destination: "/projects" } }; }
  const project = await getProject(params.slug as string);
  if (!project) { return { redirect: { destination: "/projects" } }; }
  return { props: { project } };
}



// pages/projects/index.tsx
import { useState } from "react";
import { Flex, Heading, Input, SimpleGrid, Box, AspectRatio, Image, Text, Link, Stack } from "@chakra-ui/react";
import { getAllProjectData, Project, getTimelineData, TimelineItem } from "../../lib/projects";
import type { NextPageWithLayout } from "next";
import Layout from "../../components/Layout";
import { NextSeo } from "next-seo";
import { Timeline } from "../../components/Timeline";
interface ProjectsProps { projects: Project[]; timeline: TimelineItem[]; }
const Projects: NextPageWithLayout<ProjectsProps> = ({ projects, timeline }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const latestProjects = projects.slice(0, 3);
  return (
    <>
      <NextSeo title="Projects | Iver Finne" />
      <Flex direction="column" align="flex-start" width="100%" gap={3}>
        <Heading as="h1" pt={2} size="xl">build-in-public log</Heading>
        <Text fontSize="0.9em" mb={6}>refuge for my poorly posed conjectures, research still pending.</Text>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} spacing={4} width="100%" mb={6}>
          {latestProjects.map((project) => (
            <Link key={project.title} href={project.url} isExternal>
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: "md" }}>
                <AspectRatio ratio={16 / 9}><Image src={project.image} alt={project.title} objectFit="cover" /></AspectRatio>
                <Box p={4}><Heading as="h3" size="sm" mb={2} noOfLines={1}>{project.title}</Heading><Text fontSize="sm" noOfLines={2}>{project.description}</Text></Box>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
        <Stack direction="column" width="100%" spacing={4} mb={4}><Input placeholder="Type here to search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Timeline items={timeline} searchQuery={searchQuery} typeFilter={typeFilter} categoryFilter={categoryFilter} onTypeFilterChange={(type) => setTypeFilter(type)} onCategoryFilterChange={(category) => setCategoryFilter(category)} />
        </Stack>
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



// pages/writing/[slug].tsx
import { MDXRemote } from "next-mdx-remote";
import { GetStaticPropsContext, NextPageWithLayout } from "next";
import { Heading, Flex } from "@chakra-ui/react";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../../components/Layout";
import { getAllSlugs, getPost, Post as PostMetadata } from "../../lib/writing";
import { Content } from "../../lib/mdx";
import { NextSeo } from "next-seo";
interface PostProps { post: Content<PostMetadata>; }
const Post: NextPageWithLayout<PostProps> = ({ post }) => {
  return (<>
    <NextSeo title={post.metadata.title} description={post.metadata.description} openGraph={{ title: post.metadata.title, description: post.metadata.description, images: [{ url: post.metadata.image || "https://iverfinne.no/og-image-dark.jpg", }], }} />
    <Flex direction="column" gap={2}>
      <Heading size="lg">{post.metadata.title}</Heading>
      <Prose><MDXRemote compiledSource={post.source} /></Prose>
    </Flex>
  </>);
};
export default Post;
Post.getLayout = (page) => <Layout>{page}</Layout>;
export async function getStaticPaths() {
  const paths = getAllSlugs();
  return { paths, fallback: false };
}
export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params || !params.slug || typeof params.slug !== "string") { return { redirect: { destination: "/" } }; }
  const post = await getPost(params.slug as string);
  if (!post) { return { redirect: { destination: "/" } }; }
  return { props: { post } };
}



// pages/writing/index.tsx
import { Heading, Link, Flex, Text, Stack, Divider } from '@chakra-ui/react';
import { getAllPostData, Post } from '../../lib/writing';
import type { NextPageWithLayout } from 'next';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';
interface WritingProps { posts: Post[]; }
const Writing: NextPageWithLayout<WritingProps> = ({ posts }) => {
  return (<>
    <NextSeo title="Writing | Iver Finne" />
    <Flex direction="column" align="flex-start" width="100%" gap={3}>
      <Heading as="h1" pt={2} size="xl" >Recent Blog Posts</Heading>
      <Text fontSize='0.9em' mb={6}>refuge for my poorly posed conjectures, research still pending.</Text>
      <Divider width="100%" mb={4} />
      {posts.map((post) => (<>
        <Stack width="100%" align="flex-start" spacing={1} key={post.title}>
          <Link href={post.url} target={post.external ? "_blank" : "_self"} color="blue.600">
            <Text>{post.title}</Text>
          </Link>
          <Text fontSize="sm" textAlign={"right"} color="gray.500">{post.date}</Text>
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



// pages/_app.tsx
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { DefaultSeo } from "next-seo";
import React from "react";
import { Global } from "@emotion/react"; // Import Global from @emotion/react
import { Lora } from "@next/font/google";

const lora = Lora({ subsets: ["latin"], display: "swap" });

const theme = extendTheme(
  {
    fonts: {
      heading: lora.style.fontFamily,
      body: lora.style.fontFamily,
    },
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
  },
  withProse({
    baseStyle: {
      "h1, h2, h3, h4, h5, h6": {
        mt: 4,
        mb: 4,
      },
      p: {
        my: 3,
      },
      a: {
        color: "blue.500",
        _dark: {
          color: "blue.300",
        },
      },
    },
  })
);

const getDefaultLayout = (page: ReactElement) => (
  <Layout>
    <Prose>{page}</Prose>
  </Layout>
);

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || getDefaultLayout;

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <DefaultSeo
        title="Iver Finne"
        description="I'm a constant learner and aspiring technical generalist."
        openGraph={{
          title: "Iver Finne",
          description: "I'm a constant learner and aspiring technical generalist.",
          images: [
            {
              url: "https://iverfinne.no/og-image-dark.jpg",
              type: "image/jpeg",
            },
          ],
          siteName: "Iver Finne",
        }}
      />
    <Global
      styles={`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        
        /* Ensure the content is still scrollable */
        body {
          overflow-y: scroll;
        }
      `}
    />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}



// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <body>
        <ColorModeScript initialColorMode="light" />
        <Global styles={css`body {-ms-overflow-style: none; scrollbar-width: none;} body::-webkit-scrollbar {width: 0px; background: transparent;}`} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}



// pages/404.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  });
  return null;
}


// pages/about-footer.mdx
Checkout my [projects](/projects) and [writing](/writing).



// pages/about-me.mdx
# Iver Finne
**Some things about me:**

I studied at the University of Bergen (UiB) with a Bachelor's degree in Cognitive Science.
I'm passionate about creating things through design, programming, and entrepreneurship.

I believe in leveraging technology to make a positive impact.
My diverse experiences as a founder, consultant, and designer have shaped my multidisciplinary approach to problem-solving.

**Some things I'm interested in:**

Exploring the intersection of design, engineering, and sustainability for innovative solutions. Collaborating on complex challenges for change.
Leveraging machine learning, computerscience and critical thinking making changes in the physical world.



// pages/index.tsx
import { Expandable } from '../components/Expandable';
import IndexContent from './about-me.mdx';
import FooterContent from './about-footer.mdx';
const Home: React.FC = () => {
  return (
    <div>
      <IndexContent />
      <FooterContent />
      <Expandable title="Past Work">
        <div style={{ fontSize: '0.9em' }}>
          As ABB&apos;s Technical Consultant since 2022 and Production Manager at Springbrettet, I&apos;ve been fusing technical expertise with strategic communication in Norway&apos;s business and educational sectors. My past roles as CEO of Coral Solutions AS and Creative Director for the Ygdrasyl Project and Emberlight VR honed my skills in leading innovation in engineering, sustainable design, and VR gaming. I&apos;ve also driven design and production at Dongjin Tableware, leveraging my proficiency in 3D modeling and graphic design to enhance product development and market presence.
        </div>
      </Expandable>
    </div>
  );
};
export default Home;




// scripts/generate-sitemap.mjs
import fs from "fs";
import path from "path";
function getAllBookSlugs() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "books", "index.json"), "utf8"));
  return data.map((item) => item.slug);
}
function getAllWritingSlugs() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "writing", "index.json"), "utf8"));
  return data.filter((item) => !item.external).map((item) => item.url);
}
function getAllProjectsSlugs() {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "content", "projects", "index.json"), "utf8"));
  return data.filter((item) => !item.external).map((item) => item.url);
}
async function main() {
  const bookSlugs = getAllBookSlugs();
  const writingSlugs = getAllWritingSlugs();
  const projectSlugs = getAllProjectsSlugs();
  const allSlugs = [...bookSlugs, ...writingSlugs, ...projectSlugs];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iverfinne.no</loc>
  </url>
  <url>
    <loc>https://iverfinne.no/writing</loc>
  </url>
  <url>
    <loc>https://iverfinne.no/projects</loc>
  </url>
  <url>
    <loc>https://iverfinne.no/books</loc>
  </url>
  <url>
    <loc>https://iverfinne.no/notes</loc>
  </url>${allSlugs.map((slug) => {
      return `
  <url>
    <loc>${`https://iverfinne.no${slug}`}</loc>
  </url>`;
    }).join("")}
</urlset>`;
  if (fs.existsSync("public/sitemap.xml")) {
    fs.unlinkSync("public/sitemap.xml");
  }
  fs.writeFileSync("public/sitemap.xml", sitemap);
}
main();



// scripts/generate-content.mjs
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import fs from "fs";
async function writing() {
  const metadata = [];
  const basePath = path.join(process.cwd(), "content", "writing");
  const external = JSON.parse(fs.readFileSync(path.join(basePath, "external.json"), "utf8")).map((item) => ({ ...item, external: true }));
  const postPaths = fs.readdirSync(basePath, "utf8");
  const posts = await Promise.all(postPaths.filter((fileName) => fileName.includes(".mdx")).map(async (fileName) => {
    const contentPath = path.join(basePath, fileName);
    const fileContents = fs.readFileSync(contentPath, "utf8");
    const source = await serialize(fileContents, { parseFrontmatter: true, mdxOptions: { development: false }, });
    return { ...source.frontmatter, url: "/" + path.join("writing", fileName.split(".")[0]), external: false, };
  }));
  metadata.push(...posts);
  metadata.push(...external);
  metadata.sort((a, b) => new Date(b.date) - new Date(a.date));
  fs.writeFileSync(path.join(basePath, "index.json"), JSON.stringify(metadata, undefined, 2));
}
async function books() {
  const basePath = path.join(process.cwd(), "content", "books");
  const bookPaths = fs.readdirSync(basePath, "utf8");
  const books = await Promise.all(bookPaths.filter((fileName) => fileName.includes(".mdx")).map(async (fileName) => {
    const contentPath = path.join(basePath, fileName);
    const fileContents = fs.readFileSync(contentPath, "utf8").split("## My Notes")[0];
    const source = await serialize(fileContents, { parseFrontmatter: true, mdxOptions: { development: false }, });
    return { ...source.frontmatter, slug: "/" + path.join("books", fileName.split(".")[0]), summary: source.compiledSource, };
  }));
  books.sort((a, b) => new Date(b.date) - new Date(a.date));
  fs.writeFileSync(path.join(basePath, "index.json"), JSON.stringify(books, undefined, 2));
}
async function projects() {
  const metadata = [];
  const basePath = path.join(process.cwd(), "content", "projects");
  const external = JSON.parse(fs.readFileSync(path.join(basePath, "external.json"), "utf8")).map((item) => ({ ...item, external: true }));
  const postPaths = fs.readdirSync(basePath, "utf8");
  const posts = await Promise.all(postPaths.filter((fileName) => fileName.includes(".mdx")).map(async (fileName) => {
    const contentPath = path.join(basePath, fileName);
    const fileContents = fs.readFileSync(contentPath, "utf8");
    const source = await serialize(fileContents, { parseFrontmatter: true, mdxOptions: { development: false }, });
    return { ...source.frontmatter, url: "/" + path.join("projects", fileName.split(".")[0]), external: false, };
  }));
  metadata.push(...posts);
  metadata.push(...external);
  metadata.sort((a, b) => new Date(b.date) - new Date(a.date));
  fs.writeFileSync(path.join(basePath, "index.json"), JSON.stringify(metadata, undefined, 2));
}
async function main() {
  await writing();
  await books();
  await projects();
}
main();
