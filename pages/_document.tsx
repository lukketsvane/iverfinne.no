// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <body>
        <ColorModeScript initialColorMode="light" />
        <Global styles={css`body {-ms-overflow-style: none; scrollbar-width: none;} body::-webkit-scrollbar {width: 0px; background: transparent;}`} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
