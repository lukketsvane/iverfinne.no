import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../components/layout";
import { ReactElement } from "react";
import { DefaultSeo } from "next-seo";
import posthog from "posthog-js";
import React from "react";
import { useRouter } from "next/router";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

const theme = extendTheme(
  {
    fonts: {
      heading: lora.style.fontFamily,
      body: lora.style.fontFamily,
    },
    styles: {
      global: {
        body: {
          bg: 'white',
        },
      },
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
        _focus: {
          boxShadow: "none !important",
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
  const router = useRouter();
  const getLayout = (Component as any).getLayout || getDefaultLayout;

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY || "", {
        api_host: "https://app.posthog.com",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing();
        },
      });

      const handleRouteChange = () => posthog.capture("$pageview");
      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Iver Finne"
        description="I'm a constant learner and aspiring technical generalist."
        openGraph={{
          title: "Iver Finne",
          description: "I'm a constant learner and aspiring technical generalist.",
          images: [
            {
              url: "/og-image-dark.jpg",
              width: 1200,
              height: 630,
              alt: "Iver Finne",
            },
          ],
          siteName: "Iver Finne",
        }}
        twitter={{
          handle: "@amitoser",
          cardType: "summary_large_image",
        }}
      />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
}