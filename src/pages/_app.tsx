import "../styles/globals.css";

import { Button, ChakraProvider, extendTheme, Stack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="teal" size="sm" onClick={() => router.push("/")}>
            top
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => router.push("/information")}
          >
            information
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => router.push("/about")}
          >
            about
          </Button>
        </Stack>
        {router.pathname === "/" ? (
          <Component {...pageProps} />
        ) : (
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        )}
      </ChakraProvider>
    </>
  );
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "black",
        color: "white",
      },
      html: {
        height: "100%",
      },
    },
  },
});
