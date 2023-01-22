import "../styles/globals.css";

import { createTheme, ThemeProvider } from "@mui/material";
import { Cloud } from "@react-three/drei";
import type { AppProps } from "next/app";

import { Layout } from "@/components/layout/Layout";
import { Scene } from "@/components/three/Scene";
import { ThreeProvider } from "@/contexts/ThreeContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ThreeProvider>
        <Scene>
          <Cloud position={[4, -2, 0]} args={[3, 2]} speed={1} color={"red"} />
        </Scene>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        {/* <div className="absolute top-0 left-0 h-full w-full">
        <ChakraProvider theme={theme}>
          <Stack spacing={4} direction="row" align="center">
            <Button
              colorScheme="teal"
              size="sm"
              onClick={() => router.push("/")}
            >
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
      </div> */}{" "}
      </ThreeProvider>
    </>
  );
}

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});
