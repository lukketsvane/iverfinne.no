// components/PastWork.tsx

import React, { useState } from "react";
import { Box, Text, Link, Divider, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const PastWork: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textColor = useColorModeValue("gray.700", "gray.300");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box position="relative" overflow="hidden">
      <Divider borderColor={textColor} opacity={0.5} mb={6} />
      <Text fontWeight="bold" fontSize="xl" mb={4}>
        PAST WORK
      </Text>
      <AnimatePresence>
        <motion.div
          key={isExpanded ? "expanded" : "collapsed"}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Text color={textColor} mb={4}>
            Prior to Untapped Capital and subsequent work listed above, Yohei has worked closely with
            startups as a community builder and investor. He started his career in 2009 contributing to the
            growth of the Los Angeles startup community as a community leader in various roles,
            organizing educational events and communities for local startup founders. He started his
            {isExpanded && (
              <>
                <br />
                <br />
                investment career at Techstars in 2014, helping spin up The Disney Accelerator, then as their
                first Director of Pipeline, supporting sourcing of startups across 50+ accelerator programs. He
                then joined Scrum Ventures in 2018 as a venture partner on the investment team and SVP of
                Scrum Studio, their corporate innovation unit, working closely with top global corporations
                such as Nintendo, where he led the engagement as managing director of Nintendo
                Switch+Tech.
              </>
            )}
          </Text>
          <Link
            onClick={toggleExpand}
            textDecoration="underline"
            fontWeight="bold"
            cursor="pointer"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Link>
        </motion.div>
      </AnimatePresence>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={8}
        background="linear-gradient(to top, white, transparent)"
        pointerEvents="none"
      />
    </Box>
  );
};

export default PastWork;