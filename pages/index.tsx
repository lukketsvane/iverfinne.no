import { Box, VStack, Text } from "@chakra-ui/react";
import { Expandable } from '../components/expandable';
import IndexContent from './about-me.mdx';
import FooterContent from './about-footer.mdx';
import { NextSeo } from 'next-seo';

const Home: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Iver Finne - Home"
        description="Welcome to Iver Finne's personal website. Explore my projects, writings, and thoughts on technology and innovation."
      />
      <VStack spacing={8} align="stretch">
        <Box>
          <IndexContent />
        </Box>
        <Box>
          <FooterContent />
        </Box>
        <Expandable title="Past Work">
          <Text fontSize="0.9em">
            As ABB's Technical Consultant since 2022 and Production Manager at Springbrettet, I've been fusing technical expertise with strategic communication in Norway's business and educational sectors. My past roles as CEO of Coral Solutions AS and Creative Director for the Ygdrasyl Project and Emberlight VR honed my skills in leading innovation in projects, sustainable design, and VR gaming. I've also driven design and production at Dongjin Tableware, leveraging my proficiency in 3D modeling and graphic design to enhance product development and market presence.
          </Text>
        </Expandable>
      </VStack>
    </>
  );
};

export default Home;