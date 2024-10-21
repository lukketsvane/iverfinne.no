import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../components/layout";  
import { ReactElement } from "react";
import { DefaultSeo } from "next-seo";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const theme = extendTheme(
  {
    fonts: {
      heading: "Lora, sans-serif",  // Using Google Fonts (make sure the link is in _document.tsx)
      body: "Lora, sans-serif",
    },
  },
  withProse()
);

const getDefaultLayout = (page: ReactElement) => (
  <Layout>
    <Prose>{page}</Prose>
  </Layout>
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const getLayout = Component.getLayout || getDefaultLayout;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        person_profiles: 'identified_only', // Optional, change to 'always' for anonymous profiles
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug();
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
      <PostHogProvider client={posthog}>
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
        {getLayout(<Component {...pageProps} />)}
      </PostHogProvider>
    </ChakraProvider>
  );
}
