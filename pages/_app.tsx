// pages/_app.tsx
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Prose, withProse } from '@nikolovlazar/chakra-ui-prose';
import Layout from '../components/layout';
import { ReactElement } from 'react';
import { DefaultSeo } from 'next-seo';
import React from 'react';
import { Global } from '@emotion/react';
import { Lora } from '@next/font/google';

const lora = Lora({ subsets: ['latin'], display: 'swap' });

const theme = extendTheme({
  fonts: { heading: lora.style.fontFamily, body: lora.style.fontFamily },
  config: { initialColorMode: 'light', useSystemColorMode: true },
  styles: { 
    global: (props: any) => ({
      body: { 
        overflowY: 'scroll', 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none', 
        '&::-webkit-scrollbar': { display: 'none' }, 
        color: props.colorMode === 'dark' ? 'white' : 'black', 
        bg: props.colorMode === 'dark' ? 'black' : 'white' 
      }
    }) 
  }
}, withProse());

const getDefaultLayout = (page: ReactElement) => (
  <Layout>
    <Prose>{page}</Prose>
  </Layout>
);

type NextPageWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    getLayout?: (page: ReactElement) => ReactElement
  }
}

export default function App({ Component, pageProps }: NextPageWithLayout) {
  const getLayout = Component.getLayout || getDefaultLayout;

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo 
        title='Iver Finne' 
        description="I'm a constant learner and aspiring technical generalist." 
        openGraph={{ 
          title: 'Iver Finne', 
          description: "I'm a constant learner and aspiring technical generalist.", 
          images: [{ url: 'https://iverfinne.no/og-image-dark.jpg', type: 'image/jpeg' }], 
          siteName: 'Iver Finne' 
        }} 
      />
      <Global 
        styles={{ 
          body: { 
            overflowY: 'scroll', 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none', 
            '&::-webkit-scrollbar': { display: 'none' } 
          } 
        }} 
      />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}