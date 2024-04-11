// components/Expandable.tsx
"use client"; 
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
