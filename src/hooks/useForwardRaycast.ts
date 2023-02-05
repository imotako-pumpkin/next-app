import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { Object3D, Raycaster, Vector3 } from "three";

export const useForwardRaycast = (obj: { current: Object3D | null }) => {
  const raycaster = useMemo(() => new Raycaster(), []);
  const pos = useMemo(() => new Vector3(), []);
  const dir = useMemo(() => new Vector3(0, -1, 0), []);
  const { scene } = useThree();

  return () => {
    if (!obj.current) return [];

    const { position } = obj.current;

    raycaster.set(position, dir);

    const intersections = raycaster.intersectObjects(scene.children);

    return intersections;
  };
};
