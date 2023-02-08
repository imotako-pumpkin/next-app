import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { Mesh, Vector3 } from "three";
import helvetiker_bold from "three/examples/fonts/helvetiker_bold.typeface.json";

import { useTopFieldContext } from "@/contexts/TopFieldContext";
import { useForwardRaycast } from "@/hooks/useForwardRaycast";

type LinkZoneProps = {
  name: string;
  color: string;
  position?: Vector3;
};

export const links = [
  { name: "about", color: "red", position: new Vector3(10, 0, 10) },
  { name: "information", color: "white", position: new Vector3(-10, 0, -10) },
  { name: "contact", color: "blue", position: new Vector3(-10, 0, 10) },
];

export const LinkZones: FC = () => {
  return (
    <>
      {links.map((link, idx) => {
        return <LinkZone key={idx} {...link} />;
      })}
    </>
  );
};

const LinkZone: FC<LinkZoneProps> = (props) => {
  const { name, color, position } = props;
  const ref = useRef<Mesh>(null);
  const { dispatch, state } = useTopFieldContext();

  const getIntersections = useForwardRaycast(state.humanCoordinate);

  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    const isCross = getIntersections().some((x) => x.object.name === name);

    setHovered(isCross);
  });

  return (
    <>
      <mesh
        name={name}
        ref={ref}
        rotation={[-0.5 * Math.PI, 0, 0]}
        receiveShadow
        position={position}
        onClick={() => {
          if (ref.current) {
            const { x, z } = ref.current.position;
            dispatch({
              payload: new Vector3(x, 0.5, z),
              type: "UPDATE_HUMAN_COORDINATE",
            });
          }
        }}
      >
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={hovered ? "yellow" : color} />
      </mesh>
      <Center position={position} top>
        <Text3D
          font={helvetiker_bold as unknown as string}
          rotation={[
            hovered ? 0 : -0.5 * Math.PI,
            hovered ? (1 / 6) * Math.PI : 0,
            hovered ? 0 : (1 / 6) * Math.PI,
          ]}
        >
          {name}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
};
