import { OrbitControls, Preload, useCursor } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { FC, ReactNode, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";

import { useThreeContext } from "@/contexts/ThreeContext";

export type SceneProps = { children: ReactNode };

export const Scene: FC<SceneProps> = (props) => {
  const { children } = props;

  return (
    <Canvas className="!absolute !h-screen">
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <Sphere />
      <OrbitControls />
    </Canvas>
  );
};

function Sphere() {
  const { state } = useThreeContext();

  const { pageNo } = state;

  const ref = useRef<Mesh>(null);

  const [active, setActive] = useState(false);

  const [zoom, set] = useState(true);

  useCursor(active);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin((state.clock.getElapsedTime() / 2) * 3);
    }
    const n = pageNo * 10;
    state.camera.position.lerp(new Vector3(10, 0, 0 + n), 0.03);
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh
      ref={ref}
      receiveShadow
      castShadow
      onClick={() => set(!zoom)}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
    >
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial
        color={active ? "hotpink" : "lightblue"}
        // clearcoat={1}
        // clearcoatRoughness={0}
        roughness={0}
        metalness={0.25}
      />
    </mesh>
  );
}
