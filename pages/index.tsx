import { Box, VStack, Text } from "@chakra-ui/react";
import { Expandable } from '../components/expandable';
import IndexContent from './about-me.mdx';
import FooterContent from './about-footer.mdx';
import { NextSeo } from 'next-seo';
import type { GetServerSideProps } from 'next';

type HomeProps = {
  isTraktat: boolean;
};

const Home: React.FC<HomeProps> = ({ isTraktat }) => {
  if (isTraktat) {
    return (
      <iframe
        src="/traktat/scroll.html"
        title="FORMLÆRE"
        onLoad={(event) => {
          const read = event.currentTarget.contentDocument?.querySelector<HTMLElement>('.read');
          if (!read) return;
          const fade = 'linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,.96) 86%, rgba(0,0,0,.84) 93%, rgba(0,0,0,.68) 100%)';
          read.style.setProperty('-webkit-mask-image', fade);
          read.style.setProperty('mask-image', fade);
        }}
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100dvh',
          border: 0,
          margin: 0,
          padding: 0,
          zIndex: 2147483647,
          background: '#fff',
        }}
      />
    );
  }

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ req }) => {
  const host = (req.headers.host || '').split(':')[0].toLowerCase();
  return { props: { isTraktat: host === 'traktat.iverfinne.no' } };
};

export default Home;