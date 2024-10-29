import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex, Text, Input, VStack, HStack, Heading, Image, Link } from '@chakra-ui/react';

const SmoothLandingPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const menuItems = ['WORK', 'ENTERTAINMENT', 'ABOUT', 'FEED', 'PODCAST', 'CONTACT', 'SHOP'];

  return (
    <Box height="100vh" overflow="hidden" bg="red.600" color="white">
      <AnimatePresence>
        {!showContent && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#DC2626',
              display: 'flex',
              alignItems: 'flex-start',
              padding: '2rem',
            }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 126 22"
              fill="white"
              style={{ width: '150px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <path d="M126 14.14V7.86h-8.397V6.28H126V0h-15.128v7.86h-1.689V0h-6.708v7.86h-1.689L95.744 0h-6.709v7.86h-1.688V0h-6.709v7.86h-8.397V0H65.51v7.86H45.362V6.28h8.42V0H38.653v7.86h-1.711V0h-6.708v7.86H25.19V0h-6.709v7.86h-6.73V6.28h5.042V0H0v6.28h5.043v1.58H0v6.28h5.043V22h6.708v-7.86h6.731V22h6.709v-7.86h5.043V22h6.708v-7.86h1.711V22h15.129v-6.28h-8.42v-1.58H65.51V22h13.44v-6.28h-6.71v-1.58h8.397V22h6.709v-7.86h1.688V22h6.709v-7.86h1.688l5.043 7.86h6.708v-7.86h1.689V22H126v-6.28h-8.397v-1.58z" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Flex direction="column" height="100vh" p={4}>
              <Flex justify="space-between" align="center" mb={8}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 126 22"
                  fill="white"
                  style={{ width: '150px' }}
                >
                  <path d="M126 14.14V7.86h-8.397V6.28H126V0h-15.128v7.86h-1.689V0h-6.708v7.86h-1.689L95.744 0h-6.709v7.86h-1.688V0h-6.709v7.86h-8.397V0H65.51v7.86H45.362V6.28h8.42V0H38.653v7.86h-1.711V0h-6.708v7.86H25.19V0h-6.709v7.86h-6.73V6.28h5.042V0H0v6.28h5.043v1.58H0v6.28h5.043V22h6.708v-7.86h6.731V22h6.709v-7.86h5.043V22h6.708v-7.86h1.711V22h15.129v-6.28h-8.42v-1.58H65.51V22h13.44v-6.28h-6.71v-1.58h8.397V22h6.709v-7.86h1.688V22h6.709v-7.86h1.688l5.043 7.86h6.708v-7.86h1.689V22H126v-6.28h-8.397v-1.58z" />
                </svg>
                <HStack spacing={4}>
                  <Text fontSize="sm">CLOSED (10-6PM)</Text>
                  <Text fontSize="sm">LONDON, ENGLAND</Text>
                </HStack>
                <Box
                  as="button"
                  onClick={() => setShowMenu(!showMenu)}
                  p={2}
                  borderRadius="md"
                  _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </Box>
              </Flex>

              <AnimatePresence>
                {showMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <VStack align="stretch" spacing={4} mb={8}>
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link href="#" fontSize="2xl" fontWeight="light">
                            {item}
                          </Link>
                        </motion.div>
                      ))}
                    </VStack>
                  </motion.div>
                )}
              </AnimatePresence>

              <Flex flex={1} direction="column" justify="center" align="center">
                <Heading
                  as={motion.h1}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  fontSize="8xl"
                  fontWeight="bold"
                >
                  Let's Talk
                </Heading>
              </Flex>

              <Flex justify="space-between" align="center" mt={8}>
                <Input
                  placeholder="Enter email"
                  variant="flushed"
                  _placeholder={{ color: 'white' }}
                  w="300px"
                />
                <HStack spacing={4}>
                  <Text fontSize="sm">© THE LINE ANIMATION STUDIO 2024</Text>
                  <Link href="#" fontSize="sm">Site Credits</Link>
                  <Link href="#" fontSize="sm">Privacy</Link>
                  <Link href="#" fontSize="sm">Up</Link>
                </HStack>
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default SmoothLandingPage;