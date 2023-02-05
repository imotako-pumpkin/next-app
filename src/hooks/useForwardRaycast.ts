import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { Raycaster, Vector3 } from "three";

export const useForwardRaycast = (position: Vector3) => {
  const raycaster = useMemo(() => new Raycaster(), []);
  const dir = useMemo(() => new Vector3(0, -1, 0), []);
  const { scene } = useThree();

  return () => {
    raycaster.set(position, dir);

    const intersections = raycaster.intersectObjects(scene.children);

    return intersections;
  };
};
