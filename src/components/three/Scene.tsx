import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, ReactNode } from "react";

export type SceneProps = { children: ReactNode };

export const Scene: FC<SceneProps> = (props) => {
  const { children } = props;

  return (
    <Canvas className="!absolute !h-screen">
      <PerspectiveCamera makeDefault position={[0, 1, 50]} />
      <OrbitControls
        enableRotate={false}
        minPolarAngle={(1 / 3) * Math.PI}
        maxPolarAngle={(1 / 3.5) * Math.PI}
      />
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
    </Canvas>
  );
};
