import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, ReactNode } from "react";

export type SceneProps = { children: ReactNode };

export const Scene: FC<SceneProps> = (props) => {
  const { children } = props;

  return (
    <Canvas className="!h-screen">
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  );
};
