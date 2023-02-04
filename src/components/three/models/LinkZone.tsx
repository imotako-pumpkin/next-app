import { FC, useRef } from "react";
import { Mesh, Vector3 } from "three";

type LinkZoneProps = {
  color: string;
  position?: Vector3;
  size: { height: number; width: number };
};

export const LinkZone: FC<LinkZoneProps> = (props) => {
  const { color, position, size } = props;
  const ref = useRef<Mesh>(null);
  return (
    <>
      <mesh
        ref={ref}
        rotation={[-0.5 * Math.PI, 0, 0]}
        receiveShadow
        position={position}
      >
        <planeGeometry args={[size.width, size.height]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};
