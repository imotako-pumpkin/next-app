import "../styles/globals.css";

import { Button, ChakraProvider, extendTheme, Stack } from "@chakra-ui/react";
import { Cloud } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <div className="fixed -z-10 h-screen w-full bg-zinc-700">
        <Canvas
          gl={{ alpha: true, antialias: false, depth: false, stencil: false }}
          camera={{ far: 100, fov: 32.5, near: 1, position: [0, 0, 20] }}
        >
          <ambientLight />
          <Cloud
            position={[-4, -2, 0]}
            args={[3, 2]}
            speed={3}
            color={"yellow"}
          />
          <Cloud position={[-4, 2, 0]} args={[3, 2]} speed={3} color={"blue"} />
          <Cloud args={[3, 2]} speed={3} color={"green"} />
          <Cloud position={[4, -2, 0]} args={[3, 2]} speed={3} color={"red"} />
          <Cloud
            position={[4, 2, 0]}
            args={[3, 2]}
            speed={3}
            color={"purple"}
          />
        </Canvas>
      </div>
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
