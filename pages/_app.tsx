// pages/_app.tsx
import type { AppProps } from "next/app";
import { ChakraProvider, useBreakpointValue, extendTheme } from "@chakra-ui/react";
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { DefaultSeo } from "next-seo";
import React from "react";
import { Global } from "@emotion/react";
import { Lora } from "@next/font/google";
const lora = Lora({ subsets: ["latin"], display: "swap" });
const theme = extendTheme({
  fonts: { heading: lora.style.fontFamily, body: lora.style.fontFamily },
  config: { initialColorMode: "system", useSystemColorMode: true },
  styles: { global: { body: { overflowY: "scroll", scrollbarWidth: "none", msOverflowStyle: "none", "&::-webkit-scrollbar": { display: "none" } } } },
  sizes: { container: { sm: "640px", md: "1080px", xl: "1280px" } }
}, withProse({ baseStyle: { h1: { mt: 4, mb: 4 }, h2: { mt: 4, mb: 4 }, h3: { mt: 4, mb: 4 }, h4: { mt: 4, mb: 4 }, h5: { mt: 4, mb: 4 }, h6: { mt: 4, mb: 4 }, p: { my: 3 }, a: { color: "blue.500", _dark: { color: "blue.300" } } } }));
const getDefaultLayout = (page: ReactElement) => <Layout><Prose>{page}</Prose></Layout>;
export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || getDefaultLayout;
  return <ChakraProvider theme={theme}><DefaultSeo title="Iver Finne" description="I'm a constant learner and aspiring technical generalist." openGraph={{ title: "Iver Finne", description: "I'm a constant learner and aspiring technical generalist.", images: [{ url: "https://iverfinne.no/og-image-dark.jpg", type: "image/jpeg" }], siteName: "Iver Finne" }} /><Global styles={`body { overflow-y: scroll; scrollbar-width: none; -ms-overflow-style: none; } body::-webkit-scrollbar { display: none; }`} />{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}
