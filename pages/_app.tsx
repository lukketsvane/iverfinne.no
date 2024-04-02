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
