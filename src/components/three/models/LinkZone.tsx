import { FC, useRef } from "react";
import { Mesh, Vector3 } from "three";

import { useTopFieldContext } from "@/contexts/TopFieldContext";

type LinkZoneProps = {
  name: string;
  color: string;
  position?: Vector3;
  size: { height: number; width: number };
};

export const LinkZone: FC<LinkZoneProps> = (props) => {
  const { name, color, position, size } = props;
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
        <planeGeometry args={[size.width, size.height]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
