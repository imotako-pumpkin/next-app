import { FC, useRef } from "react";
import { Mesh, Vector3 } from "three";

import { useTopFieldContext } from "@/contexts/TopFieldContext";

type LinkZoneProps = {
  name: string;
  color: string;
  position?: Vector3;
};

export const links = [
  { name: "about", color: "red", position: new Vector3(10, 0, 10) },
  { name: "information", color: "white", position: new Vector3(-10, 0, -10) },
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
              payload: new Vector3(x, 1.5, z),
              type: "UPDATE_HUMAN_COORDINATE",
            });
          }
        }}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
