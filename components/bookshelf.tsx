import {Box,Icon,HStack,Flex,Heading,Image,Center,useDimensions,useBreakpointValue} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {Book} from "../lib/books";
import {FaChevronLeft,FaChevronRight} from "react-icons/fa";
import {useRouter} from "next/router";

interface BookshelfProps {books: Book[];}

export function Bookshelf({books}: BookshelfProps) {
 const router = useRouter();
 const [bookIndex, setBookIndex] = useState(-1);
 const [scroll, setScroll] = useState(0);
 const [isClient, setIsClient] = useState(false);
 const bookshelfRef = React.useRef<HTMLDivElement>(null);
 const viewportRef = React.useRef<HTMLDivElement>(null);
 const scrollRightRef = React.useRef<HTMLDivElement>(null);
 const scrollLeftRef = React.useRef<HTMLDivElement>(null);
 const viewportDimensions = useDimensions(viewportRef, true);
 const [isScrolling, setIsScrolling] = useState(false);
 const [booksInViewport, setBooksInViewport] = useState(0);
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
 
 useEffect(() => {
   setIsClient(true);
   if (router.query.slug && router.query.slug.length > 0 && bookIndex === -1) {
     const idx = books.findIndex((b) => b.slug.toLowerCase().includes((router.query.slug as string[])[0].toLowerCase()));
     setBookIndex(idx);
   }
 }, [router.query.slug, books, bookIndex]);
 
 useEffect(() => {
   if (isClient) {
     if (bookIndex === -1) {
       boundedRelativeScroll(0);
     } else {
       boundedScroll((bookIndex - (booksInViewport - 4.5) / 2) * (width + 11));
     }
   }
 }, [isClient, bookIndex, boundedRelativeScroll, boundedScroll, booksInViewport, width]);
 
 useEffect(() => {
   if (isClient && viewportDimensions) {
     boundedRelativeScroll(0);
     const numberOfBooks = viewportDimensions.contentBox.width / (width + 11);
     setBooksInViewport(numberOfBooks);
   }
 }, [isClient, viewportDimensions, boundedRelativeScroll, width]);
 
 useEffect(() => {
   if (!isClient || !scrollEvents) return;
   const currentScrollEvents = { ...scrollEvents };
   const currentScrollRightRef = scrollRightRef.current;
   const currentScrollLeftRef = scrollLeftRef.current;
   let scrollInterval: NodeJS.Timeout | null = null;
   const setScrollRightInterval = () => {
     setIsScrolling(true);
     scrollInterval = setInterval(() => {boundedRelativeScroll(3);}, 10);
   };
   const setScrollLeftInterval = () => {
     setIsScrolling(true);
     scrollInterval = setInterval(() => {boundedRelativeScroll(-3);}, 10);
   };
   const clearScrollInterval = () => {
     setIsScrolling(false);
     if (scrollInterval) {clearInterval(scrollInterval);}
   };
   currentScrollRightRef?.addEventListener(currentScrollEvents.start, setScrollRightInterval);
   currentScrollRightRef?.addEventListener(currentScrollEvents.stop, clearScrollInterval);
   currentScrollLeftRef?.addEventListener(currentScrollEvents.start, setScrollLeftInterval);
   currentScrollLeftRef?.addEventListener(currentScrollEvents.stop, clearScrollInterval);
   return () => {
     clearScrollInterval();
     currentScrollRightRef?.removeEventListener(currentScrollEvents.start, setScrollRightInterval);
     currentScrollRightRef?.removeEventListener(currentScrollEvents.stop, clearScrollInterval);
     currentScrollLeftRef?.removeEventListener(currentScrollEvents.start, setScrollLeftInterval);
     currentScrollLeftRef?.removeEventListener(currentScrollEvents.stop, clearScrollInterval);
   };
 }, [isClient, scrollEvents, boundedRelativeScroll]);
 
 if (!isClient) return null;

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