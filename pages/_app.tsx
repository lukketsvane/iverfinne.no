// pages/_app.tsx
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import { DefaultSeo } from "next-seo";
import { Global } from "@emotion/react";
import { Lora } from "@next/font/google";
const lora = Lora({ subsets: ["latin"], display: "swap" });
const theme = extendTheme({
  fonts: {
    heading: lora.style.fontFamily,
    body: lora.style.fontFamily,
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
    },
  },
  sizes: {
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
});
const getDefaultLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || getDefaultLayout;
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo title="Iver Finne" description="I'm a constant learner and aspiring technical generalist." openGraph={{ title: "Iver Finne", description: "I'm a constant learner and aspiring technical generalist.", images: [{ url: "https://iverfinne.no/og-image-dark.jpg", type: "image/jpeg", }], siteName: "Iver Finne", }} />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}
