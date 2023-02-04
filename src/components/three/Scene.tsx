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

// function Sphere() {
//   const { state } = useThreeContext();

//   const { sliderNo } = state;

//   const ref = useRef<Mesh>(null);

//   const [active, setActive] = useState(false);

//   const [zoom, set] = useState(true);

//   useCursor(active);

//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.position.y = Math.sin((state.clock.getElapsedTime() / 2) * 3);
//     }
//     const n = sliderNo * 10;
//     state.camera.position.lerp(new Vector3(10, 0, 0 + n), 0.03);
//     // state.camera.lookAt(0, 0, 0);
//   });

//   return (
//     <mesh
//       ref={ref}
//       receiveShadow
//       castShadow
//       onClick={() => set(!zoom)}
//       onPointerOver={() => setActive(true)}
//       onPointerOut={() => setActive(false)}
//     >
//       <sphereGeometry args={[0.8, 64, 64]} />
//       <meshStandardMaterial
//         color={active ? "hotpink" : "lightblue"}
//         // clearcoat={1}
//         // clearcoatRoughness={0}
//         roughness={0}
//         metalness={0.25}
//       />
//     </mesh>
//   );
// }
