import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";
import Layout from "../components/layout";
import { DefaultSeo } from "next-seo";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import React, { useEffect, ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";

// Chakra UI theme extension
const theme = extendTheme(
  {
    fonts: {
      heading: "Lora, sans-serif", // Using Google Fonts
      body: "Lora, sans-serif",
    },
  },
  withProse() // Adding better styling for long-form content
);

// Default layout function
const getDefaultLayout = (page: ReactElement) => (
  <Layout>
    <Prose>{page}</Prose>
  </Layout>
);

// ComponentWithLayout type definition
interface ComponentWithLayout extends React.FC {
  getLayout?: (page: ReactElement) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const CustomComponent = Component as ComponentWithLayout;

  // Check if the component has a getLayout method
  const getLayout = CustomComponent.getLayout || getDefaultLayout;

  // Initialize PostHog and track page views
  useEffect(() => {
    if (typeof window !== "undefined") {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
        persistence: "localStorage",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") posthog.debug();
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
        {/* Render the page with the layout */}
        {getLayout(<CustomComponent {...pageProps} />)}
      </PostHogProvider>
    </ChakraProvider>
  );
}
