import { useState } from 'react';
import { Box, Button, Collapse, Flex, Text } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

interface ExpandableProps {
  title: string;
  children: React.ReactNode;
}

export const Expandable: React.FC<ExpandableProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Flex justifyContent="space-between" alignItems="center" onClick={() => setIsOpen(!isOpen)} cursor="pointer">
        <Text fontWeight="bold">{title}</Text>
        <Button variant="ghost" size="sm">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box pt={4}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};